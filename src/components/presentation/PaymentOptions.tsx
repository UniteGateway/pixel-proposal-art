import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Building2, Users, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

const PaymentOptions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paymentPlans = [
    {
      icon: CreditCard,
      title: "One-Time Payment",
      features: [
        "Special discounted pricing",
        "Priority plot allotment",
        "Premium location selection",
        "Maximum savings option",
      ],
    },
    {
      icon: Building2,
      title: "50% Cash + 50% Loan",
      features: [
        "Hybrid buyer-friendly plan",
        "Bank/NBFC tie-up assistance",
        "Flexible EMI options",
        "Quick loan processing",
      ],
    },
    {
      icon: Users,
      title: "Bulk SFT Sales",
      features: [
        "For large investors",
        "Resale support options",
        "Volume-based pricing",
        "Dedicated relationship manager",
      ],
    },
  ];

  return (
    <section id="payment" className="section-padding bg-cream" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Section 14</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Payment Options
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </motion.div>

        {/* Payment Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {paymentPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`bg-card border-2 rounded-2xl p-8 relative overflow-hidden ${
                index === 1 ? 'border-gold shadow-lg scale-105' : 'border-border'
              }`}
            >
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-gold text-green-dark text-xs font-bold px-4 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <plan.icon className="w-12 h-12 text-gold mb-6" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-6">{plan.title}</h3>
              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">Let's Build Together</h3>
            <p className="opacity-80">Ready to transform Kesineni Northscape into the region's most sought-after address</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold border-b border-gold/30 pb-2">Company</h4>
              <p className="font-semibold mb-1">Unite Green Infra Pvt Ltd</p>
              <p className="text-sm opacity-80 mb-3">Powered by Unite Group Inc., USA</p>
              <p className="text-sm opacity-70">CIN: UXXXXX2024PTCXXXXXX</p>
              <p className="text-sm opacity-70">RERA: PRAXXXXXXXX</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold border-b border-gold/30 pb-2">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold" />
                  <span className="text-sm">contact@unitegreen.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-sm">+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="text-sm">Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold border-b border-gold/30 pb-2">Project Highlights</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-primary-foreground/10 rounded-lg p-3">
                  <div className="text-2xl font-serif font-bold text-gold">430</div>
                  <div className="text-xs opacity-80">Premium Villas</div>
                </div>
                <div className="text-center bg-primary-foreground/10 rounded-lg p-3">
                  <div className="text-2xl font-serif font-bold text-gold">43</div>
                  <div className="text-xs opacity-80">Acres</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              © 2024 Unite Green Infra Pvt Ltd. All rights reserved.
            </p>
            <p className="text-xs opacity-50 text-center md:text-right">
              This proposal is confidential and intended for Kesineni Developers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentOptions;
