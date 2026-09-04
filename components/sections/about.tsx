"use client";

import { motion, type Variants } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  ArrowUpRight,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

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

const facts = [
  {
    icon: GraduationCap,
    label: "Education",
    value: `Bachelor of ${PERSONAL_INFO.major} — ${PERSONAL_INFO.university}`,
  },
  { icon: Award, label: "GPA", value: `${PERSONAL_INFO.gpa} / 4.00` },
  { icon: Calendar, label: "Graduation", value: PERSONAL_INFO.graduation },
  { icon: MapPin, label: "Based in", value: PERSONAL_INFO.location },
];

const focusAreas = [
  "Full-stack web development",
  "System analysis & database design",
  "GIS applications",
  "AI-assisted development",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Content */}
            <motion.div variants={itemVariants} className="lg:w-3/5">
              <h3 className="text-2xl font-bold mb-6">
                Information Systems graduate building practical web
                applications
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m an Information Systems graduate with experience in
                  freelance development and frontend development through the{" "}
                  <strong className="text-foreground">VINIX7</strong>{" "}
                  internship — now looking to grow as a Junior Full-Stack
                  Developer.
                </p>
                <p>
                  I focus on building practical web applications with{" "}
                  <strong className="text-foreground">
                    Laravel, PHP, JavaScript, and MySQL
                  </strong>
                  . My work regularly involves system analysis: breaking a
                  problem down, modeling it with UML, ERDs, and flowcharts, and
                  turning those models into working features and APIs.
                </p>
                <p>
                  What makes my approach different is pairing solid fundamentals
                  with modern workflows. I use AI-assisted development (GitHub
                  Copilot, DeepSeek API + LangGraph, Google Gemini) to move
                  faster without skipping design, and I&apos;m interested in
                  combining software engineering with GIS — because spatial data
                  turns information into decisions.
                </p>
              </div>

              {/* Focus areas */}
              <div className="mt-8">
                <h4 className="font-semibold mb-3">What I do</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {focusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <ArrowUpRight className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Facts card */}
            <motion.div variants={itemVariants} className="lg:w-2/5">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 lg:sticky lg:top-24">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                  Quick Facts
                </h4>
                <ul className="space-y-5">
                  {facts.map((fact) => {
                    const Icon = fact.icon;
                    return (
                      <li key={fact.label} className="flex items-start gap-3">
                        <span className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-left">
                          <span className="block text-xs text-muted-foreground">
                            {fact.label}
                          </span>
                          <span className="block text-sm font-medium text-foreground">
                            {fact.value}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Download my CV
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
