import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Shield, Star } from "lucide-react";

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const leaders = [
    {
      name: "Ravi Shekar Reddy",
      title: "Director",
      expertise: ["Real Estate Development", "Strategic Planning", "Business Growth"],
    },
    {
      name: "Dr. Ravi Chandra",
      title: "Director",
      expertise: ["Project Management", "Quality Assurance", "Operations Excellence"],
    },
  ];

  const highlights = [
    { icon: Clock, value: "25+", label: "Years Combined Experience" },
    { icon: Award, value: "100+", label: "Projects Delivered" },
    { icon: Shield, value: "360°", label: "Integrated Solutions" },
    { icon: Star, value: "Global", label: "Investor Network" },
  ];

  return (
    <section id="leadership" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Section 05</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Experience & Leadership
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="text-3xl font-bold text-foreground">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Profiles */}
        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center text-primary-foreground text-2xl font-bold flex-shrink-0">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground">{leader.name}</h3>
                  <p className="text-gold font-medium mb-4">{leader.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center p-8 bg-primary/5 rounded-2xl"
        >
          <p className="text-lg text-foreground font-medium italic">
            "Our leadership combines strategic vision with execution excellence,
            ensuring every project achieves its full potential."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
