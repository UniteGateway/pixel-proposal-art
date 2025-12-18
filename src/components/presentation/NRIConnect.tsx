import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Plane, Users, Building2 } from "lucide-react";

const NRIConnect = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const countries = [
    { name: "USA", flag: "🇺🇸", focus: "Primary Market" },
    { name: "UAE", flag: "🇦🇪", focus: "High NRI Concentration" },
    { name: "UK", flag: "🇬🇧", focus: "Growing Demand" },
    { name: "Australia", flag: "🇦🇺", focus: "Investment Focus" },
    { name: "Singapore", flag: "🇸🇬", focus: "Strategic Hub" },
  ];

  const approach = [
    { icon: Globe, title: "Global Roadshows", desc: "Property showcases in major NRI hubs" },
    { icon: Plane, title: "Virtual Tours", desc: "Immersive 3D property experiences" },
    { icon: Users, title: "Partner Network", desc: "NRI-focused real estate agents" },
    { icon: Building2, title: "Investment Packages", desc: "Customized NRI investment plans" },
  ];

  return (
    <section id="nri-connect" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Section 07</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            International Marketing & NRI Connect
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Global outreach powered by Unite Group Inc., USA
          </p>
        </motion.div>

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-gradient-to-br from-primary/5 to-gold/5 rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif text-foreground mb-2">Target Markets</h3>
            <p className="text-muted-foreground text-sm">Reaching NRI investors worldwide</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4 md:p-6 text-center min-w-[120px] hover:border-gold/50 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-2">{country.flag}</div>
                <h4 className="font-semibold text-foreground">{country.name}</h4>
                <p className="text-xs text-gold">{country.focus}</p>
              </motion.div>
            ))}
          </div>

          {/* Connection Lines Visual */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
            <div className="absolute inset-0 border-2 border-dashed border-gold rounded-full animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-4 border border-primary rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          </div>
        </motion.div>

        {/* Approach Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approach.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-card border border-border p-6 rounded-xl text-center hover:border-gold/30 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-4 group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NRIConnect;
