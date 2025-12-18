import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Globe, Users, BarChart3, Megaphone, Handshake } from "lucide-react";

const MarketingStrategy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const strategies = [
    { icon: Target, title: "Brand Positioning", desc: "Premium market placement & identity", angle: 0 },
    { icon: Globe, title: "Digital-First", desc: "Lead generation & digital campaigns", angle: 60 },
    { icon: Users, title: "Channel Partners", desc: "Extensive broker network activation", angle: 120 },
    { icon: BarChart3, title: "CRM & Funnel", desc: "Systematic lead management", angle: 180 },
    { icon: Megaphone, title: "ATL & BTL", desc: "Integrated media campaigns", angle: 240 },
    { icon: Handshake, title: "Sales Acceleration", desc: "Conversion optimization", angle: 300 },
  ];

  return (
    <section id="marketing-strategy" className="section-padding bg-cream" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Section 06</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Marketing Strategy Framework
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive 360° approach to maximize reach and conversions
          </p>
        </motion.div>

        {/* 360° Strategy Diagram */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square"
          >
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-green-dark flex items-center justify-center z-10">
              <div className="text-center text-primary-foreground">
                <div className="text-2xl md:text-3xl font-bold">360°</div>
                <div className="text-xs md:text-sm">Strategy</div>
              </div>
            </div>

            {/* Outer Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-dashed border-gold/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-gold/20 rounded-full" />

            {/* Strategy Points */}
            {strategies.map((strategy, index) => {
              const angle = (strategy.angle - 90) * (Math.PI / 180);
              const radius = 42;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="absolute w-24 md:w-32 text-center"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-card border-2 border-gold flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <strategy.icon className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                  </div>
                  <h4 className="text-xs md:text-sm font-semibold text-foreground">{strategy.title}</h4>
                  <p className="text-[10px] md:text-xs text-muted-foreground hidden md:block">{strategy.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Strategy Details Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {strategies.slice(0, 3).map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="bg-card border border-border p-6 rounded-xl hover:border-gold/30 transition-colors"
            >
              <strategy.icon className="w-10 h-10 text-gold mb-4" />
              <h4 className="font-semibold text-foreground mb-2">{strategy.title}</h4>
              <p className="text-sm text-muted-foreground">{strategy.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingStrategy;
