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

        {/* Contact Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-primary to-green-dark rounded-2xl p-8 md:p-12 text-primary-foreground"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">Let's Build Together</h3>
            <p className="opacity-80">Ready to transform Kesineni Northscape into the region's most sought-after address</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gold">Unite Green Infra Pvt Ltd</h4>
              <p className="text-sm opacity-80 mb-4">Powered by Unite Group Inc., USA</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <span>contact@unitegreen.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="inline-block">
                <div className="text-5xl md:text-6xl font-serif font-bold text-gold mb-2">430</div>
                <div className="text-sm opacity-80">Villas Awaiting Success</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 Unite Green Infra Pvt Ltd. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            This proposal is confidential and intended for Kesineni Developers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentOptions;
