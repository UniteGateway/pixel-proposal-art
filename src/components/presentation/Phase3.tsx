import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Building2, Plane, DollarSign, Users, BarChart3 } from "lucide-react";

const Phase3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const strategies = [
    { icon: TrendingUp, title: "Price Escalation", desc: "Strategic price increases based on absorption" },
    { icon: Building2, title: "Bulk & Corporate", desc: "Special packages for corporate buyers" },
    { icon: Plane, title: "International Roadshows", desc: "USA, UAE, UK, Singapore events" },
    { icon: DollarSign, title: "Higher Realization", desc: "Premium pricing for prime plots" },
    { icon: Users, title: "Investor Focus", desc: "Portfolio investor targeting" },
    { icon: BarChart3, title: "Data-Driven", desc: "Analytics-based campaign optimization" },
  ];

  return (
    <section id="phase-3" className="section-padding bg-cream" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Section 12</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-2">
            Phase 3: Strategic Business Plans
          </h2>
          <p className="text-2xl text-gold font-serif">100 Villas</p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Strategy Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 bg-gradient-to-br from-primary to-green-dark rounded-2xl p-8 text-primary-foreground"
          >
            <TrendingUp className="w-12 h-12 text-gold mb-6" />
            <h3 className="text-2xl font-serif mb-4">Value Maximization</h3>
            <p className="opacity-90 mb-6">
              This phase focuses on extracting maximum value through strategic pricing 
              and targeting high-value buyer segments.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-sm">15-20% price appreciation target</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-sm">Corporate & bulk sale focus</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-sm">International investor roadshows</span>
              </div>
            </div>
          </motion.div>

          {/* Strategy Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-card border border-border p-5 rounded-xl hover:border-gold/30 transition-colors text-center"
              >
                <strategy.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-semibold text-foreground text-sm">{strategy.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{strategy.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* International Roadshow Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-card border border-border rounded-2xl p-8"
        >
          <h3 className="text-xl font-serif text-foreground mb-6 text-center">International Roadshow Calendar</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["🇺🇸 New York", "🇺🇸 Bay Area", "🇦🇪 Dubai", "🇬🇧 London", "🇸🇬 Singapore"].map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="px-6 py-3 bg-secondary rounded-full text-sm font-medium text-foreground"
              >
                {city}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Phase3;
