import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, BarChart3, Target, TrendingUp, FileText, Award } from "lucide-react";

const BrandingStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { icon: Palette, title: "Brand Identity", desc: "Logo, colors, typography & visual language" },
    { icon: FileText, title: "Collateral Design", desc: "Brochures, presentations & marketing materials" },
    { icon: Target, title: "Market Positioning", desc: "Competitive analysis & unique value proposition" },
    { icon: BarChart3, title: "Pricing Strategy", desc: "Market-aligned pricing & phase-wise escalation" },
    { icon: TrendingUp, title: "Absorption Planning", desc: "Phase-wise sales velocity targets" },
    { icon: Award, title: "Premium Positioning", desc: "Luxury lifestyle communication" },
  ];

  return (
    <section id="branding" className="section-padding bg-cream" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Section 08</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Branding, Planning & Market Study
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif text-foreground mb-6">
              Building a <span className="text-gold">Premium Brand</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We will create a distinctive brand identity for Kesineni Northscape that resonates 
              with discerning buyers. Our approach combines market insights with creative excellence 
              to position the project as the premier choice in North Hyderabad.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gold" />
                <span className="text-foreground">Competitor benchmarking & gap analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gold" />
                <span className="text-foreground">Target audience profiling & segmentation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gold" />
                <span className="text-foreground">Value proposition development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gold" />
                <span className="text-foreground">Media mix optimization</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">Market Study Insights</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                <span className="text-sm text-foreground">Villa Demand Index</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-gold rounded-full" />
                  </div>
                  <span className="text-gold font-bold text-sm">85%</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                <span className="text-sm text-foreground">NRI Interest Level</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-[78%] h-full bg-primary rounded-full" />
                  </div>
                  <span className="text-primary font-bold text-sm">78%</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                <span className="text-sm text-foreground">Price Appreciation Potential</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-[92%] h-full bg-gold rounded-full" />
                  </div>
                  <span className="text-gold font-bold text-sm">92%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-card border border-border p-6 rounded-xl hover:border-gold/30 transition-colors"
            >
              <service.icon className="w-10 h-10 text-gold mb-4" />
              <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingStudy;
