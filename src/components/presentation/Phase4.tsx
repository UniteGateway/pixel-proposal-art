import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Home, Award, Users, CheckCircle, Sparkles } from "lucide-react";
import villa8 from "@/assets/villa-8.jpg";

const Phase4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const strategies = [
    { icon: Clock, title: "Urgency Campaigns", desc: "\"Last Villas Available\" messaging" },
    { icon: Home, title: "Ready Advantage", desc: "Near-ready possession benefits" },
    { icon: Award, title: "Clubhouse Showcase", desc: "Lifestyle & amenity tours" },
    { icon: Users, title: "Referral Programs", desc: "Incentivized existing buyer referrals" },
    { icon: Sparkles, title: "Premium Finishing", desc: "Highlight quality & craftsmanship" },
    { icon: CheckCircle, title: "Assisted Closure", desc: "Dedicated relationship managers" },
  ];

  return (
    <section id="phase-4" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Section 13</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-2">
            Phase 4: Final Stage Marketing
          </h2>
          <p className="text-2xl text-gold font-serif">100 Villas</p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Featured Image + Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden mb-12"
        >
          <img 
            src={villa8} 
            alt="Completed luxury villa"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gold via-gold/80 to-transparent flex items-end">
            <div className="p-8 text-center w-full">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-green-dark mb-2">
                "Your Last Chance to Own a Piece of Paradise"
              </h3>
              <p className="text-green-dark/80">Creating FOMO with urgency-driven messaging</p>
            </div>
          </div>
        </motion.div>

        {/* Strategies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-card border border-border p-6 rounded-xl hover:border-gold/30 transition-colors"
            >
              <strategy.icon className="w-10 h-10 text-gold mb-4" />
              <h4 className="font-semibold text-foreground mb-2">{strategy.title}</h4>
              <p className="text-sm text-muted-foreground">{strategy.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-primary/5 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-2">Ready</div>
            <p className="text-muted-foreground text-sm">Move-in ready / Near possession</p>
          </div>
          <div className="bg-gold/10 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-gold mb-2">Premium</div>
            <p className="text-muted-foreground text-sm">Highest appreciation realized</p>
          </div>
          <div className="bg-primary/5 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-2">Community</div>
            <p className="text-muted-foreground text-sm">Thriving neighborhood established</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Phase4;
