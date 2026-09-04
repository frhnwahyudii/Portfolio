"use client";

import { motion, type Variants } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { currentlyLearning } from "@/data/skills";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/**
 * FR-09 — growth signals without pretending to be an expert yet.
 */
export function CurrentlyLearningSection() {
  return (
    <section
      aria-label="Currently learning"
      className="pb-24 md:pb-32 -mt-6 md:-mt-8"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
        >
          <div className="flex items-center gap-3 shrink-0">
            <span className="p-2.5 rounded-lg bg-primary/10 text-primary">
              <BookOpen className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold">Currently Learning</h3>
              <p className="text-xs text-muted-foreground">
                Expanding the stack beyond my core
              </p>
            </div>
          </div>

          <ul className="flex flex-wrap gap-2 md:ml-auto">
            {currentlyLearning.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background text-sm font-medium"
              >
                <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
