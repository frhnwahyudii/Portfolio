"use client";

import { motion, type Variants } from "framer-motion";
import { selectedProjects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { FeaturedProject } from "./featured-project";

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30 relative scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            Real projects with real problems — from internship capstone to
            thesis, GIS research, and this very website.
          </motion.p>
        </motion.div>

        {/* Featured project */}
        <FeaturedProject />

        {/* Selected projects */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Selected Projects
            </h3>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Each project has its own case-study page with context, my role,
              and technical decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {selectedProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
