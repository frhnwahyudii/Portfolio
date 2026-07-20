"use client";

import { motion, type Variants } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

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

const skills = [
  "Laravel Framework",
  "PHP Development",
  "C# Programming",
  "JavaScript",
  "MySQL Database",
  "GIS Mapping",
  "AI Integrated for Productivity",
  "Full-Stack Development",
];

const professionalSkills = [
  "Problem Solving",
  "Critical Thinking",
  "Fast Learning",
  "Team Collaboration",
  "Project Management",
  "Communication",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Photo */}
            <motion.div variants={itemVariants} className="lg:w-2/5">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-border">
                  <img
                    src="/images/farhan.jpeg"
                    alt="Portrait of Farhan Wahyudi"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/20 -z-10" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="lg:w-3/5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <GraduationCap className="h-4 w-4" />
                {PERSONAL_INFO.major}
              </div>

              <h3 className="text-2xl font-bold mb-6">
                Building Digital Solutions with Purpose
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a graduate of {PERSONAL_INFO.university}, Faculty of Computer Science, majoring in{" "}
                {PERSONAL_INFO.major}. I completed my undergraduate thesis with a GPA of{" "}
                <strong>{PERSONAL_INFO.gpa}/4.00</strong> and graduated in{" "}
                {PERSONAL_INFO.graduation}. I have a strong commitment to building a career in the IT
                industry and continuously learning new technologies, trends, and development practices.
                I also integrate artificial intelligence technologies into my work for greater efficiency
                and improved problem solving.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center">
                  <Award className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{PERSONAL_INFO.gpa}</div>
                  <div className="text-xs text-muted-foreground mt-1">Final GPA</div>
                </div>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center">
                  <Calendar className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <div className="text-lg font-bold text-foreground">{PERSONAL_INFO.graduation}</div>
                  <div className="text-xs text-muted-foreground mt-1">Graduation</div>
                </div>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center">
                  <GraduationCap className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-bold text-foreground">S.Kom</div>
                  <div className="text-xs text-muted-foreground mt-1">Degree</div>
                </div>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center">
                  <MapPin className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-bold text-foreground">{PERSONAL_INFO.location}</div>
                  <div className="text-xs text-muted-foreground mt-1">Location</div>
                </div>
              </div>

              {/* Technical Expertise */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Technical Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Professional Skills */}
              <div>
                <h4 className="font-semibold mb-3">Professional Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {professionalSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}