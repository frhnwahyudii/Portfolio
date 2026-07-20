"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, FolderKanban, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/lib/constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
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
      {/* Subtle animated background grid */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container mx-auto px-4 text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile photo */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative inline-block">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl mx-auto">
              <img
                src="/images/farhan.jpeg"
                alt="Farhan Wahyudi"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-background" />
          </div>
        </motion.div>

        {/* Name & Tagline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          Farhan{" "}
          <span className="text-primary">Wahyudi</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          {PERSONAL_INFO.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => handleScroll("#projects")}
            className="gap-2 w-full sm:w-auto"
          >
            <FolderKanban className="h-4 w-4" />
            View Projects
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => handleScroll("#contact")}
            className="gap-2 w-full sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Get In Touch
          </Button>
          <a
            href={PERSONAL_INFO.resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 w-full sm:w-auto"
          >
            <Button size="lg" variant="outline" className="gap-2 w-full">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <button
            onClick={() => handleScroll("#about")}
            className="text-muted-foreground/50 hover:text-foreground transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}