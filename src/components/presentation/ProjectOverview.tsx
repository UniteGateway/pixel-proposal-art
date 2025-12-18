import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Home, Users, Building2, Ruler } from "lucide-react";

const ProjectOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Ruler, value: "33", unit: "Acres", label: "Total Land Area" },
    { icon: Home, value: "430", unit: "Villas", label: "Total Units" },
    { icon: Building2, value: "Premium", unit: "Gated", label: "Project Type" },
    { icon: Users, value: "HNI/NRI", unit: "Focus", label: "Target Buyers" },
  ];

  const strengths = [
    "Strategic location in high-growth corridor",
    "World-class amenities and infrastructure",
    "Proven developer with strong track record",
    "Flexible plot and villa configurations",
    "Premium clubhouse and community facilities",
    "Sustainable and eco-friendly design principles",
  ];

  return (
    <section id="project-overview" className="section-padding bg-cream" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Section 02</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Project Overview
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border text-center group hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-gold/20 transition-colors">
                <stat.icon className="w-7 h-7 text-primary group-hover:text-gold transition-colors" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-gold font-semibold text-sm mb-1">{stat.unit}</div>
              <div className="text-muted-foreground text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-card p-8 md:p-12 rounded-2xl border border-border"
        >
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-6 h-6 text-gold" />
            <h3 className="text-2xl font-serif text-foreground">Project Strengths</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">{strength}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectOverview;
