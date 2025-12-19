import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Home, Users, Building2, Ruler } from "lucide-react";
import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import villa4 from "@/assets/villa-4.jpg";
import clubhouse from "@/assets/clubhouse.png";
import streetView from "@/assets/street-view.png";
import villaWest from "@/assets/villa-west.png";
import villaEast from "@/assets/villa-east.png";

const ProjectOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Ruler, value: "33", unit: "Acres", label: "Total Land Area", image: villa1 },
    { icon: Home, value: "430", unit: "Villas", label: "Total Units", image: villa2 },
    { icon: Building2, value: "Premium", unit: "Gated", label: "Project Type", image: villa3 },
    { icon: Users, value: "HNI/NRI", unit: "Focus", label: "Target Buyers", image: villa4 },
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
              className="bg-card rounded-xl border border-border text-center group hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={stat.image} 
                  alt={stat.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-card/60" />
              </div>
              <div className="p-6 -mt-6 relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border mb-3 group-hover:border-gold/50 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-gold font-semibold text-sm mb-1">{stat.unit}</div>
                <div className="text-muted-foreground text-xs">{stat.label}</div>
              </div>
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

        {/* Villa Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-serif text-foreground text-center mb-8">Villa Model Designs</h3>
          
          {/* Clubhouse Feature */}
          <div className="relative rounded-2xl overflow-hidden mb-6 group">
            <img 
              src={clubhouse} 
              alt="The Heart of Northscape - Clubhouse" 
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 max-w-md">
              <h4 className="text-2xl font-serif text-primary-foreground mb-2">The Heart of Northscape</h4>
              <p className="text-primary-foreground/80 text-sm">Premier clubhouse - a dynamic hub for relaxation and social connection</p>
            </div>
          </div>

          {/* Villa Types Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden group">
              <img 
                src={villaEast} 
                alt="East Facing Villa" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card/90 to-transparent p-4">
                <span className="bg-gold/90 text-card px-3 py-1 text-xs font-semibold rounded">East Facing</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <img 
                src={villaWest} 
                alt="West Facing Villa" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card/90 to-transparent p-4">
                <span className="bg-gold/90 text-card px-3 py-1 text-xs font-semibold rounded">West Facing</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <img 
                src={streetView} 
                alt="Street View" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card/90 to-transparent p-4">
                <span className="bg-gold/90 text-card px-3 py-1 text-xs font-semibold rounded">Street View</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectOverview;
