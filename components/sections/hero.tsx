"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, FolderKanban, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/lib/constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export function HeroSection() {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container mx-auto px-4 text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability status */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {PERSONAL_INFO.availability}
          </span>
        </motion.div>

        {/* Profile photo */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="relative h-24 w-24 md:h-28 md:w-28">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/40 to-primary/10 blur-sm" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/20 shadow-lg">
              <Image
                src="/images/farhan.jpeg"
                alt={`Portrait of ${PERSONAL_INFO.name}`}
                fill
                priority
                sizes="(min-width: 768px) 112px, 96px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base uppercase tracking-[0.35em] text-muted-foreground mb-4"
        >
          {PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName}
        </motion.p>

        {/* Primary positioning — visible without scrolling */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Junior Full-Stack
          <span className="block text-primary">Developer</span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* Additional positioning */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-muted-foreground/70 mb-10 flex items-center justify-center flex-wrap gap-x-2 gap-y-1"
        >
          <span>System Analyst</span>
          <span aria-hidden="true">·</span>
          <span>GIS</span>
          <span aria-hidden="true">·</span>
          <span>AI-assisted Development</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            size="lg"
            onClick={() => handleScroll("#projects")}
            className="gap-2 w-full sm:w-auto px-6"
          >
            <FolderKanban className="h-4 w-4" />
            View Projects
          </Button>
          <a
            href={PERSONAL_INFO.resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button size="lg" variant="outline" className="gap-2 w-full px-6">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </a>
          <Button
            size="lg"
            variant="ghost"
            onClick={() => handleScroll("#contact")}
            className="gap-2 w-full sm:w-auto px-6"
          >
            Let&apos;s Connect
            <Mail className="h-4 w-4" />
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={itemVariants} className="mt-16">
          <button
            onClick={() => handleScroll("#about")}
            className="group inline-flex flex-col items-center gap-1 text-muted-foreground/60 hover:text-foreground transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest group-hover:translate-y-0.5 transition-transform">
              Scroll
            </span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
