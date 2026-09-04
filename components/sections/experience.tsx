"use client";

import { motion, type Variants } from "framer-motion";
import { Briefcase, CheckCircle2, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30 relative scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            Freelance work alongside a frontend internship — both reflected on
            the latest CV.
          </motion.p>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((experience) => (
              <motion.article
                key={`${experience.company}-${experience.period}`}
                variants={itemVariants}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      <Briefcase className="h-3 w-3" />
                      {experience.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                      <Clock className="h-3 w-3" />
                      {experience.period}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-1">
                  {experience.role}
                </h3>
                <p className="text-primary font-medium mb-6">
                  {experience.company}
                </p>

                <div className="space-y-3 text-muted-foreground leading-relaxed mb-6">
                  {experience.summary.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <h4 className="font-semibold text-sm mb-3">Highlights</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {experience.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
