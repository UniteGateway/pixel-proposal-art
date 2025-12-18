import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Star, Users, TrendingUp, Gift, Lock } from "lucide-react";
import villaPool from "@/assets/villa-pool.jpg";

const Phase1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const strategies = [
    { icon: Gift, title: "Pre-Launch Offers", desc: "Exclusive pricing for early adopters" },
    { icon: Star, title: "Early-Bird Benefits", desc: "Premium plot selection priority" },
    { icon: Users, title: "HNI & NRI Exclusivity", desc: "Private previews for select buyers" },
    { icon: Lock, title: "Controlled Inventory", desc: "Limited release for value creation" },
    { icon: TrendingUp, title: "Price Anchor", desc: "Establishing market baseline" },
    { icon: Rocket, title: "Buzz Creation", desc: "Market awareness campaigns" },
  ];

  return (
    <section id="phase-1" className="section-padding bg-cream" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Section 10</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-2">
            Phase 1: Pre-Launch
          </h2>
          <p className="text-2xl text-gold font-serif">100 Villas</p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={villaPool} 
                alt="Luxury villa with pool"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-gradient-to-br from-primary to-green-dark rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-serif mb-4">Objective</h3>
              <p className="text-lg opacity-90 mb-6">
                Create buzz, establish price anchors, and generate initial momentum 
                with exclusive pre-launch offerings.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-primary-foreground/10 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-green-dark font-bold">1</div>
                  <span>Soft launch to HNI database</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary-foreground/10 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-green-dark font-bold">2</div>
                  <span>NRI exclusive preview events</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary-foreground/10 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-green-dark font-bold">3</div>
                  <span>Channel partner activation</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-card border border-border p-4 rounded-xl hover:border-gold/30 transition-colors"
              >
                <strategy.icon className="w-8 h-8 text-gold mb-2" />
                <h4 className="font-semibold text-foreground text-sm">{strategy.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{strategy.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Phase1;
