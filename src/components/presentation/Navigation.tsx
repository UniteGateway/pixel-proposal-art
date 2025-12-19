import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Loader2, Mail } from "lucide-react";
import html2pdf from "html2pdf.js";
import { useToast } from "@/hooks/use-toast";
import { DeviceSelector } from "./DevicePreview";
import EmailPresentationModal from "./EmailPresentationModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const { toast } = useToast();

  const sections = [
    { id: "hero", label: "Home" },
    { id: "executive-summary", label: "Summary" },
    { id: "project-overview", label: "Project" },
    { id: "location", label: "Location" },
    { id: "about-unite", label: "About Us" },
    { id: "marketing-strategy", label: "Strategy" },
    { id: "phase-overview", label: "Phases" },
    { id: "payment", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    toast({
      title: "Generating PDF",
      description: "Please wait while we prepare your document...",
    });

    try {
      const element = document.querySelector(".min-h-screen") as HTMLElement | null;
      if (!element) return;

      const opt = {
        margin: 0,
        filename: "Kesineni-Northscape-Proposal.pdf",
        image: { type: "jpeg" as const, quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true,
          logging: false,
          scrollY: -window.scrollY,
        },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" as const },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      };

      await html2pdf().set(opt).from(element).save();

      toast({
        title: "PDF Downloaded",
        description: "Your presentation has been saved successfully.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error generating the PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2"
            >
              <span className={`text-lg md:text-xl font-serif font-bold ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
                KESINENI <span className="text-gold">NORTHSCAPE</span>
              </span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    scrolled ? "text-foreground/80" : "text-primary-foreground/80"
                  }`}
                >
                  {section.label}
                </button>
              ))}
              
              {/* Device Selector */}
              <DeviceSelector scrolled={scrolled} />
              
              {/* Email Presentation Button */}
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  scrolled
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                    : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                }`}
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
              
              {/* PDF Download Button */}
              <button
                onClick={handleDownloadPDF}
                disabled={isGenerating}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  scrolled
                    ? "bg-gold text-green-dark hover:bg-gold-light"
                    : "bg-gold/90 text-green-dark hover:bg-gold"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isGenerating ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                {isGenerating ? "Generating..." : "Download PDF"}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className={`p-2 rounded-full ${scrolled ? "bg-secondary text-secondary-foreground border border-border" : "bg-primary-foreground/10 text-primary-foreground"}`}
              >
                <Mail className="w-5 h-5" />
              </button>
              <button
                onClick={handleDownloadPDF}
                disabled={isGenerating}
                className={`p-2 rounded-full ${scrolled ? "bg-gold text-green-dark" : "bg-gold/90 text-green-dark"}`}
              >
                {isGenerating ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Download className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-md">
              <div className="flex flex-col items-center justify-center h-full gap-6">
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(section.id)}
                    className="text-xl font-serif font-medium text-foreground hover:text-gold transition-colors"
                  >
                    {section.label}
                  </motion.button>
                ))}
                
                {/* Mobile PDF Download */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sections.length * 0.1 }}
                  onClick={handleDownloadPDF}
                  disabled={isGenerating}
                  className="flex items-center gap-2 px-6 py-3 bg-gold text-green-dark rounded-full font-medium mt-4"
                >
                  {isGenerating ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Download className="w-5 h-5" />
                  )}
                  {isGenerating ? "Generating..." : "Download PDF"}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Email Modal */}
      <EmailPresentationModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </>
  );
};

export default Navigation;
