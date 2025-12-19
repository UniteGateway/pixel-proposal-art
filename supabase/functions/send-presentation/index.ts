import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  recipientEmail: string;
  recipientName: string;
  senderName: string;
  message?: string;
}

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Simple email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // max emails per window
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT) {
    return false;
  }
  
  record.count++;
  return true;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";
    
    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      console.log("Rate limit exceeded for IP:", clientIp);
      return new Response(
        JSON.stringify({ success: false, error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const body = await req.json();
    const { recipientEmail, recipientName, senderName, message }: EmailRequest = body;

    // Server-side input validation
    if (!recipientEmail || !recipientName || !senderName) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!isValidEmail(recipientEmail)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate input lengths
    if (recipientName.length > 100 || senderName.length > 100) {
      return new Response(
        JSON.stringify({ success: false, error: "Name too long (max 100 characters)" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (message && message.length > 500) {
      return new Response(
        JSON.stringify({ success: false, error: "Message too long (max 500 characters)" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize all user inputs for HTML context
    const safeRecipientName = escapeHtml(recipientName.trim());
    const safeSenderName = escapeHtml(senderName.trim());
    const safeMessage = message ? escapeHtml(message.trim()) : '';

    console.log("Sending presentation email to:", recipientEmail);

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Kesineni Northscape <onboarding@resend.dev>",
        to: [recipientEmail],
        subject: "Kesineni Northscape - Premium Villa Project Presentation",
        html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Georgia, 'Times New Roman', serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #1a3c34; padding: 40px 40px 30px; text-align: center;">
                      <h1 style="color: #d4af37; margin: 0; font-size: 28px; font-weight: bold; letter-spacing: 1px;">KESINENI NORTHSCAPE</h1>
                      <p style="color: #ffffff; margin: 10px 0 0; font-size: 14px; opacity: 0.9;">Premium Villa Living in Hyderabad</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                        Dear ${safeRecipientName},
                      </p>
                      <p style="color: #555; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
                        ${safeSenderName} has shared the exclusive Kesineni Northscape presentation with you. This premium villa project offers an exceptional opportunity to own a luxury home in one of Hyderabad's most sought-after locations.
                      </p>
                      ${safeMessage ? `
                      <div style="background-color: #f8f8f8; border-left: 4px solid #d4af37; padding: 15px 20px; margin: 25px 0;">
                        <p style="color: #666; font-size: 14px; font-style: italic; margin: 0;">"${safeMessage}"</p>
                        <p style="color: #888; font-size: 12px; margin: 10px 0 0;">— ${safeSenderName}</p>
                      </div>
                      ` : ''}
                      
                      <!-- Key Features -->
                      <h3 style="color: #1a3c34; font-size: 18px; margin: 30px 0 15px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Project Highlights</h3>
                      <ul style="color: #555; font-size: 14px; line-height: 1.8; padding-left: 20px; margin: 0 0 25px;">
                        <li>Premium 4 BHK Villas starting from ₹3.5 Cr</li>
                        <li>Prime location near Kompally, North Hyderabad</li>
                        <li>World-class amenities &amp; green living</li>
                        <li>RERA approved project</li>
                        <li>Flexible payment plans available</li>
                      </ul>
                      
                      <!-- CTA -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="padding: 20px 0;">
                            <a href="https://kesineni-northscape.lovable.app" style="display: inline-block; background-color: #d4af37; color: #1a3c34; text-decoration: none; padding: 14px 35px; font-size: 15px; font-weight: bold; border-radius: 4px; letter-spacing: 0.5px;">VIEW PRESENTATION</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #1a3c34; padding: 25px 40px; text-align: center;">
                      <p style="color: #d4af37; margin: 0 0 5px; font-size: 14px; font-weight: bold;">Kesineni Northscape</p>
                      <p style="color: #ffffff; margin: 0; font-size: 12px; opacity: 0.8;">A Unite Green Developers Project</p>
                      <p style="color: #888; margin: 15px 0 0; font-size: 11px;">© 2024 All Rights Reserved</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error("Resend API error:", errorData);
      throw new Error(errorData.message || "Failed to send email");
    }

    const data = await emailResponse.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
