import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Plane, GraduationCap, Building, Car, TrendingUp, Shield } from "lucide-react";

const LocationAdvantage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const connectivity = [
    { icon: Plane, title: "Airport", distance: "15 mins", desc: "RGIA International Airport" },
    { icon: GraduationCap, title: "IT Hub", distance: "25 mins", desc: "Financial District" },
    { icon: Building, title: "Tech Parks", distance: "20 mins", desc: "Multiple IT corridors" },
    { icon: Car, title: "ORR Access", distance: "5 mins", desc: "Outer Ring Road" },
  ];

  const growthFactors = [
    { title: "Aerospace Hub", desc: "GMR Aviation, TATA Boeing nearby" },
    { title: "IT Expansion", desc: "Major tech companies setting up operations" },
    { title: "Infrastructure", desc: "Metro expansion & road widening projects" },
    { title: "Educational Hub", desc: "Premium schools & universities" },
  ];

  return (
    <section id="location" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Section 03</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Location & Market Advantage
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dundigal: Hyderabad's next premium growth corridor
          </p>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-primary/5 rounded-2xl overflow-hidden mb-12 aspect-video flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-gold/10" />
          <div className="relative text-center p-8">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
              <div className="w-4 h-4 rounded-full bg-gold animate-pulse" />
            </div>
            <h3 className="text-2xl font-serif text-foreground mb-2">Dundigal, Hyderabad</h3>
            <p className="text-muted-foreground">Strategic North Hyderabad Location</p>
          </div>
          {/* Connection Lines */}
          <div className="absolute top-1/4 left-1/4 w-px h-20 bg-gold/30 rotate-45" />
          <div className="absolute top-1/3 right-1/4 w-px h-16 bg-gold/30 -rotate-45" />
          <div className="absolute bottom-1/4 left-1/3 w-px h-24 bg-gold/30 rotate-12" />
        </motion.div>

        {/* Connectivity Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {connectivity.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-card p-5 rounded-xl border border-border hover:border-gold/30 transition-colors text-center"
            >
              <item.icon className="w-8 h-8 text-gold mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{item.distance}</div>
              <div className="text-sm font-medium text-foreground mb-1">{item.title}</div>
              <div className="text-xs text-muted-foreground">{item.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Growth Factors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-primary to-green-dark p-8 md:p-12 rounded-2xl text-primary-foreground"
        >
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-gold" />
            <h3 className="text-2xl font-serif">Growth Corridor Drivers</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthFactors.map((factor, index) => (
              <div key={index} className="border-l-2 border-gold pl-4">
                <h4 className="font-semibold mb-1">{factor.title}</h4>
                <p className="text-sm text-primary-foreground/70">{factor.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationAdvantage;
