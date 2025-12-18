import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Handshake, Award } from "lucide-react";

const ExecutiveSummary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Target, text: "Strategic Market Positioning" },
    { icon: TrendingUp, text: "Sales Acceleration Framework" },
    { icon: Handshake, text: "End-to-End Execution Support" },
    { icon: Award, text: "Premium Brand Development" },
  ];

  return (
    <section id="executive-summary" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Section 01</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Executive Summary
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif text-foreground mb-6">
              Transforming Vision into Reality
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kesineni Northscape represents a landmark opportunity in Hyderabad's premium villa segment. 
              Spanning <strong className="text-foreground">33 acres</strong> with <strong className="text-foreground">430 meticulously planned villas</strong>, 
              this project embodies luxury living at its finest.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unite Green Infra Pvt Ltd presents this comprehensive proposal to partner with 
              Kesineni Developers in accelerating sales through strategic marketing, international 
              outreach, and execution excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach combines deep market insights, global NRI connections through 
              Unite Group Inc., USA, and a phase-wise strategy designed to maximize 
              value realization at every stage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-card border border-border p-6 rounded-lg hover:border-gold/50 transition-colors group"
              >
                <item.icon className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
