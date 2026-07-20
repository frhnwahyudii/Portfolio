"use client";

import { useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { ProjectDetailModal } from "./project-detail-modal";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div variants={headerVariants} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <motion.p
            variants={headerVariants}
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Explore my portfolio of innovative projects demonstrating technical skills
            and problem-solving abilities
          </motion.p>

          {/* Filter bar */}
          <motion.div
            variants={headerVariants}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            {projectCategories.map((category) => {
              const count =
                category === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === category).length;
              return (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className="transition-all relative"
                >
                  {category}
                  <span className="ml-1.5 text-xs opacity-60">({count})</span>
                </Button>
              );
            })}
          </motion.div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={setSelectedProject}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground py-12"
            >
              No projects found in this category.
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}