"use client";

import { motion, type Variants } from "framer-motion";
import { Briefcase, Users, Code, ArrowRight, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30 relative">
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
            Hands-on professional experience gained through internship and collaborative development work.
          </motion.p>

          {/* Timeline card */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-4xl mx-auto"
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            {/* Experience entry */}
            <div className="relative pl-0 md:pl-20 pb-2">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-6 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

              <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Left content */}
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-4">
                      <Briefcase className="h-3 w-3 mr-1" />
                      Internship — Frontend Developer
                    </Badge>

                    <h3 className="text-2xl font-bold mb-1">Vinix7</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Web Dev & UI/UX Division | 5 Months
                    </p>

                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        Worked as a frontend developer in a small team of 3-4 members to engineer
                        practical solutions for real-world problems.
                      </p>
                      <p>
                        Collaborated on frontend web development tasks, translated product needs into
                        clean user interfaces, and supported the delivery of responsive, user-focused
                        applications.
                      </p>
                      <p>
                        The internship also served as the foundation for the capstone project{" "}
                        <strong className="text-foreground">Skillbridge Global</strong>, which was later
                        further developed into a full-stack Laravel application for my undergraduate
                        thesis.
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      <Badge variant="outline">Frontend Development</Badge>
                      <Badge variant="outline">UI/UX Design</Badge>
                      <Badge variant="outline">Team Collaboration</Badge>
                      <Badge variant="outline">Responsive Design</Badge>
                    </div>
                  </div>

                  {/* Right metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:w-[340px] lg:flex-shrink-0">
                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold">3-4</div>
                      <div className="text-xs text-muted-foreground mt-1">Team Members</div>
                    </div>
                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center">
                      <Code className="h-5 w-5 mx-auto mb-2 text-primary" />
                      <div className="text-lg font-bold">UI/UX</div>
                      <div className="text-xs text-muted-foreground mt-1">Web Dev Focus</div>
                    </div>
                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center">
                      <Layers className="h-5 w-5 mx-auto mb-2 text-primary" />
                      <div className="text-lg font-bold">Full-Stack</div>
                      <div className="text-xs text-muted-foreground mt-1">Thesis Evolution</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              See the projects born from this experience
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}