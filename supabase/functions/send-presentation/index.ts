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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { recipientEmail, recipientName, senderName, message }: EmailRequest = await req.json();

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
                        Dear ${recipientName},
                      </p>
                      <p style="color: #555; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
                        ${senderName} has shared the exclusive Kesineni Northscape presentation with you. This premium villa project offers an exceptional opportunity to own a luxury home in one of Hyderabad's most sought-after locations.
                      </p>
                      ${message ? `
                      <div style="background-color: #f8f8f8; border-left: 4px solid #d4af37; padding: 15px 20px; margin: 25px 0;">
                        <p style="color: #666; font-size: 14px; font-style: italic; margin: 0;">"${message}"</p>
                        <p style="color: #888; font-size: 12px; margin: 10px 0 0;">— ${senderName}</p>
                      </div>
                      ` : ''}
                      
                      <!-- Key Features -->
                      <h3 style="color: #1a3c34; font-size: 18px; margin: 30px 0 15px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Project Highlights</h3>
                      <ul style="color: #555; font-size: 14px; line-height: 1.8; padding-left: 20px; margin: 0 0 25px;">
                        <li>Premium 4 BHK Villas starting from ₹3.5 Cr</li>
                        <li>Prime location near Kompally, North Hyderabad</li>
                        <li>World-class amenities & green living</li>
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
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
