"use client";

import { motion, type Variants } from "framer-motion";
import { Mail, MapPin, ExternalLink, Globe } from "lucide-react";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

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

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: <ExternalLink className="h-4 w-4" />,
  github: <Globe className="h-4 w-4" />,
  mail: <Mail className="h-4 w-4" />,
};

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            I'm always interested in discussing new opportunities, innovative projects,
            and potential collaborations. Feel free to reach out.
          </motion.p>

          <div className="max-w-4xl mx-auto">
            {/* Contact info */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-sm font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold mb-4">Social Links</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-primary/50 transition-colors text-sm text-muted-foreground hover:text-foreground bg-card"
                  >
                    {socialIcons[link.icon] || (
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    )}
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-center text-sm text-muted-foreground italic"
            >
              Currently open to freelance projects, full-time opportunities, and collaborations.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}