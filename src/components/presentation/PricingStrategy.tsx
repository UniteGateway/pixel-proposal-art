import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, CheckCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PricingStrategy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phases = [
    {
      phase: 1,
      title: "Pre-Launch Pricing",
      subtitle: "Early Bird Advantage",
      villas: 100,
      pricing: [
        { type: "One-Time Payment (OTP)", uniteCutoff: "₹4,500", market: "₹5,500" },
        { type: "50% Cash + 50% Loan", uniteCutoff: "₹5,000", market: "₹6,000" },
      ],
      notes: ["Limited pre-launch inventory", "Strong booking traction", "Price anchoring for next phase"],
    },
    {
      phase: 2,
      title: "Customized Marketing Pricing",
      subtitle: null,
      villas: 100,
      pricing: [
        { type: "One-Time Payment (OTP)", uniteCutoff: "₹5,500", market: "₹6,500" },
        { type: "50% Cash + 50% Loan", uniteCutoff: "₹6,000", market: "₹7,000" },
      ],
      notes: ["Targeted buyer segmentation", "Balanced investor & end-user mix", "Controlled price escalation"],
    },
    {
      phase: 3,
      title: "Strategic Business Pricing",
      subtitle: null,
      villas: 100,
      pricing: [
        { type: "One-Time Payment (OTP)", uniteCutoff: "₹7,000", market: "₹8,000" },
        { type: "50% Cash + 50% Loan", uniteCutoff: "₹7,500", market: "₹8,500" },
      ],
      notes: ["Investor-focused positioning", "Bulk & corporate sales", "International buyer participation"],
    },
    {
      phase: 4,
      title: "Final Stage Pricing",
      subtitle: "Project Maturity Premium",
      villas: 100,
      pricing: [
        { type: "One-Time Payment (OTP)", uniteCutoff: "₹8,000", market: "₹9,000" },
        { type: "50% Cash + 50% Loan", uniteCutoff: "₹8,500", market: "₹9,500" },
      ],
      notes: ["Ready / near-ready advantage", "Last inventory premium", "Faster closure cycle"],
    },
  ];

  return (
    <section id="pricing-strategy" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Section 10</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
            Phase-Wise Pricing Strategy
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Pricing is designed to reward early buyers, ensure controlled appreciation, and maximize realization during project maturity.
            The strategy supports end-users, NRIs, and strategic investors through multiple payment options.
          </p>
        </motion.div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              {/* Phase Header */}
              <div className="bg-gradient-to-r from-primary to-green-dark p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                        {phase.phase}
                      </span>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-primary-foreground">
                          Phase {phase.phase} – {phase.title}
                        </h3>
                        {phase.subtitle && (
                          <p className="text-primary-foreground/80 text-sm">{phase.subtitle}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full">
                    <TrendingUp className="w-4 h-4 text-gold" />
                    <span className="text-primary-foreground font-medium">{phase.villas} Villas</span>
                  </div>
                </div>
              </div>

              {/* Pricing Table */}
              <div className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border">
                      <TableHead className="text-muted-foreground">Payment Type</TableHead>
                      <TableHead className="text-center text-muted-foreground">Unite Cutoff Price (per SFT)</TableHead>
                      <TableHead className="text-center text-muted-foreground">Market Price (per SFT)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {phase.pricing.map((row, i) => (
                      <TableRow key={i} className="border-border">
                        <TableCell className="font-medium text-foreground">{row.type}</TableCell>
                        <TableCell className="text-center">
                          <span className="text-gold font-bold text-lg">{row.uniteCutoff}</span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="text-foreground font-bold text-lg">{row.market}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {/* Key Notes */}
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Key Notes</h4>
                  <div className="flex flex-wrap gap-3">
                    {phase.notes.map((note, i) => (
                      <div key={i} className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingStrategy;
