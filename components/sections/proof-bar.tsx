"use client";

import { motion, type Variants } from "framer-motion";
import { QUICK_FACTS } from "@/lib/constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/**
 * FR-02 — Proof Bar: builds credibility before the recruiter scrolls on.
 * Numbers are defensible from the CV (Jan 2024 freelance start, VINIX7 intern
 * Aug–Dec 2025, three featured projects on the CV).
 */
export function ProofBar() {
  return (
    <section
      aria-label="Quick facts"
      className="border-y border-border bg-muted/30"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-wrap justify-center gap-y-10 py-10 lg:py-12">
          {QUICK_FACTS.map((fact) => (
            <motion.div
              key={fact.label}
              variants={itemVariants}
              className="w-1/2 lg:w-auto text-center lg:px-10"
            >
              <div className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
                {fact.value}
              </div>
              <div className="text-sm font-medium text-foreground/90 mb-1">
                {fact.label}
              </div>
              <div className="text-xs text-muted-foreground">{fact.note}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}