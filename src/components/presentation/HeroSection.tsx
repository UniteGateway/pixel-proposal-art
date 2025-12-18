import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroVilla from "@/assets/hero-villa.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroVilla}
          alt="Luxury villa at Kesineni Northscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-gold/30 rotate-45" />
        <div className="absolute bottom-32 right-32 w-48 h-48 border border-gold/30 rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-gold/20 -rotate-12" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 border border-gold/40 text-gold text-sm tracking-[0.3em] uppercase mb-6">
            Marketing & Construction Proposal
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary-foreground mb-6 leading-tight"
        >
          KESINENI
          <br />
          <span className="text-gold">NORTHSCAPE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-primary-foreground/80 mb-4 font-light"
        >
          A Premium Gated Villa Community
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-gold/80 mb-12"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="tracking-wider">Dundigal, Hyderabad</span>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-primary-foreground/20"
        >
          <div className="text-center">
            <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-2">Developed By</p>
            <p className="text-primary-foreground font-semibold">Kesineni Infra Developers LLP</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-primary-foreground/20" />
          <div className="text-center">
            <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-2">Marketing Partner</p>
            <p className="text-primary-foreground font-semibold">Unite Green Infra Pvt Ltd</p>
            <p className="text-gold text-xs mt-1">Powered by Unite Group Inc., USA</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#executive-summary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-gold transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
