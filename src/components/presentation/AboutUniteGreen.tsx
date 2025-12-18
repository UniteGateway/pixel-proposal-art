import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Briefcase, Globe, Hammer, LineChart, Users } from "lucide-react";

const AboutUniteGreen = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { icon: Building2, title: "Real Estate Development", desc: "End-to-end project development" },
    { icon: Hammer, title: "Construction Excellence", desc: "Quality-driven execution" },
    { icon: LineChart, title: "Strategic Consulting", desc: "Market insights & planning" },
    { icon: Users, title: "Sales & Marketing", desc: "360° marketing solutions" },
    { icon: Globe, title: "Global Outreach", desc: "International investor connect" },
    { icon: Briefcase, title: "Project Management", desc: "Seamless delivery systems" },
  ];

  return (
    <section id="about-unite" className="section-padding bg-cream" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Section 04</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            About Unite Green Infra
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-2 bg-gold/10 text-gold text-sm font-medium rounded-full mb-6">
              Powered by Unite Group Inc., USA
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
              Your Trusted Partner for<br />
              <span className="text-gold">Real Estate Excellence</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unite Green Infra Pvt Ltd is a full-service real estate solutions company offering 
              comprehensive services from project conceptualization to successful sales closure. 
              With deep expertise across development, construction, consulting, and marketing, 
              we bring unmatched value to every engagement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our global presence through Unite Group Inc., USA enables us to connect premium 
              Indian real estate with discerning NRI investors across North America, Europe, 
              Middle East, and Asia Pacific regions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-2xl p-8 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <service.icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{service.title}</h4>
                      <p className="text-xs text-muted-foreground">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gold/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUniteGreen;
