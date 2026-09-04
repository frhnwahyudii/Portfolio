"use client";

import { motion, type Variants } from "framer-motion";
import { Mail, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/ui/social-icon";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";

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

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 relative scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Have an opportunity?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              I&apos;m currently open to full-time opportunities, freelance
              projects, and collaborations.
            </p>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4 mb-12"
          >
            <a href={`mailto:${PERSONAL_INFO.email}`}>
              <Button size="lg" className="gap-2 px-8 h-12">
                <Mail className="h-4 w-4" />
                Email Me
              </Button>
            </a>
            <p className="text-sm text-muted-foreground">
              {PERSONAL_INFO.email}
            </p>
          </motion.div>

          {/* Secondary CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.name} — ${link.handle}`}
              >
                <Button variant="outline" className="gap-2">
                  <SocialIcon icon={link.icon} className="size-4" />
                  {link.name}
                </Button>
              </a>
            ))}
            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </a>
          </motion.div>

          {/* Meta */}
          <motion.p
            variants={itemVariants}
            className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1.5"
          >
            <MapPin className="h-4 w-4" />
            {PERSONAL_INFO.location} · Available worldwide (remote)
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
