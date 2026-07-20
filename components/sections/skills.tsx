"use client";

import { motion, type Variants } from "framer-motion";
import { Code, Database, Map, Bot, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { skills, skillCategories } from "@/data/skills";

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

const categoryIconMap: Record<string, React.ReactNode> = {
  code: <Code className="h-5 w-5" />,
  database: <Database className="h-5 w-5" />,
  map: <Map className="h-5 w-5" />,
  bot: <Bot className="h-5 w-5" />,
  users: <Users className="h-5 w-5" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            Technologies and tools I work with, organized by discipline
          </motion.p>

          {/* Category grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((category) => {
              const categorySkills = skills.filter((s) => s.category === category.key);
              return (
                <motion.div
                  key={category.key}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      {categoryIconMap[category.icon]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{category.label}</h3>
                      <p className="text-xs text-muted-foreground">
                        {categorySkills.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {categorySkills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}