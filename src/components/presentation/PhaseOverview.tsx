import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, CheckCircle } from "lucide-react";

const PhaseOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phases = [
    {
      phase: 1,
      title: "Pre-Launch",
      villas: 100,
      status: "Launch Phase",
      highlights: ["Early-bird pricing", "HNI & NRI focus", "Price anchor"],
    },
    {
      phase: 2,
      title: "Customized Marketing",
      villas: 100,
      status: "Growth Phase",
      highlights: ["Persona targeting", "Digital domination", "Channel activation"],
    },
    {
      phase: 3,
      title: "Strategic Business",
      villas: 100,
      status: "Acceleration Phase",
      highlights: ["Price escalation", "Corporate sales", "International push"],
    },
    {
      phase: 4,
      title: "Final Stage",
      villas: 100,
      status: "Closure Phase",
      highlights: ["Urgency marketing", "Ready advantage", "Referral programs"],
    },
  ];

  return (
    <section id="phase-overview" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Section 09</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Phase-Wise Sales Strategy
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strategic 4-phase approach for 430 villas across the project lifecycle
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-border">
            <motion.div
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-primary via-gold to-primary"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="relative"
              >
                {/* Phase Number */}
                <div className="flex justify-center mb-6">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-green-dark flex items-center justify-center text-primary-foreground font-bold text-xl border-4 border-background">
                    {phase.phase}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-card border border-border rounded-xl p-6 hover:border-gold/30 hover:shadow-lg transition-all">
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs rounded-full mb-2">
                      {phase.status}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-foreground">{phase.title}</h3>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <Home className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{phase.villas} Villas</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {phase.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Total Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 bg-gradient-to-r from-primary to-green-dark rounded-2xl p-8 text-center text-primary-foreground"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div>
              <div className="text-4xl font-bold text-gold">430</div>
              <div className="text-sm opacity-80">Total Villas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold">4</div>
              <div className="text-sm opacity-80">Strategic Phases</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold">100%</div>
              <div className="text-sm opacity-80">Sales Target</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhaseOverview;
