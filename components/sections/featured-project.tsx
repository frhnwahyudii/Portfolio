"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SocialIcon } from "@/components/ui/social-icon";
import { featuredProject } from "@/data/projects";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function FeaturedProject() {
  if (!featuredProject) return null;

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-card border border-border rounded-2xl overflow-hidden lg:grid lg:grid-cols-2"
      >
        {/* Visual */}
        <div className="relative aspect-[16/10] lg:aspect-auto">
          <Image
            src={featuredProject.thumbnail}
            alt={`${featuredProject.title} dashboard preview`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
          <Badge
            variant="secondary"
            className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm"
          >
            {featuredProject.category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 flex flex-col">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-primary mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Featured Project
          </span>

          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            {featuredProject.title}
          </h3>
          <p className="text-primary font-medium mb-4">
            {featuredProject.subtitle}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {featuredProject.shortDescription}
          </p>

          {/* Highlights */}
          <ul className="space-y-3 mb-8">
            {featuredProject.highlights.map((highlight) => (
              <li key={highlight.title} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {highlight.title}.
                  </span>{" "}
                  {highlight.description}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mt-auto">
            <Link href={`/projects/${featuredProject.id}`}>
              <Button className="gap-2">
                View Case Study
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
            {featuredProject.github && (
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${featuredProject.title} repository on GitHub`}
              >
                <Button variant="outline" className="gap-2">
                  <SocialIcon icon="github" className="size-4" />
                  View GitHub
                </Button>
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Story / evolution */}
      <motion.ol
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8"
      >
        {featuredProject.story.map((step, index) => (
          <li
            key={step.title}
            className="bg-card border border-border rounded-xl p-5"
          >
            <div className="text-2xl font-bold text-primary/30 mb-2">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h4 className="font-semibold text-sm mb-1.5">{step.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </li>
        ))}
      </motion.ol>
    </div>
  );
}
