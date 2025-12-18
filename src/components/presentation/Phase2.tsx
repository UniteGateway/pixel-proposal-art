import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Monitor, Megaphone, UserCheck, Smartphone, MapPin } from "lucide-react";

const Phase2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const channels = [
    { icon: Monitor, title: "Digital Campaigns", desc: "Google, Meta, LinkedIn ads" },
    { icon: Megaphone, title: "Outdoor Media", desc: "Hoardings, airport branding" },
    { icon: Smartphone, title: "Social Media", desc: "Influencer & content marketing" },
    { icon: MapPin, title: "On-Ground Events", desc: "Property expos & launches" },
  ];

  const personas = [
    { type: "End-Users", focus: "Lifestyle messaging, family-centric" },
    { type: "Investors", focus: "ROI & appreciation potential" },
    { type: "NRIs", focus: "Hassle-free ownership, rental yield" },
  ];

  return (
    <section id="phase-2" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Section 11</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-2">
            Phase 2: Customized Marketing
          </h2>
          <p className="text-2xl text-gold font-serif">100 Villas</p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Buyer Personas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-gold" />
              <h3 className="text-2xl font-serif text-foreground">Buyer-Persona Targeting</h3>
            </div>
            <div className="space-y-4">
              {personas.map((persona, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-card border border-border p-5 rounded-xl hover:border-gold/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{persona.type}</h4>
                      <p className="text-sm text-muted-foreground">{persona.focus}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Marketing Channels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Megaphone className="w-6 h-6 text-gold" />
              <h3 className="text-2xl font-serif text-foreground">Digital + Outdoor Domination</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {channels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="bg-card border border-border p-5 rounded-xl text-center hover:border-gold/30 transition-colors"
                >
                  <channel.icon className="w-10 h-10 text-gold mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground text-sm">{channel.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{channel.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Conversion Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-gold/10 to-primary/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl font-serif text-foreground mb-4">Conversion-Focused Messaging</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every campaign is designed with clear CTAs, urgency triggers, and value propositions 
            tailored to each buyer segment's decision drivers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Phase2;
