import type { SocialLink } from "./types";

export const PERSONAL_INFO = {
  name: "Farhan Wahyudi",
  firstName: "Farhan",
  lastName: "Wahyudi",
  position: "Junior Full-Stack Developer",
  tagline:
    "Building practical web applications with Laravel, PHP, JavaScript, MySQL, and modern web technologies.",
  availability: "Open to Full-Time Opportunities",
  email: "hello@frhnwahyudi.xyz",
  location: "Jambi, Indonesia",
  resumeUrl: "/Resume_FarhanWahyudi.pdf",
  graduation: "June 2026",
  gpa: "3.73",
  university: "Dinamika Bangsa University",
  faculty: "Faculty of Computer Science",
  major: "Information Systems",
};

/**
 * Career-focused social presence. GitHub, LinkedIn and Email are the
 * primary professional CTAs (Instagram is intentionally not included).
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/frhnwahyudii",
    icon: "github",
    handle: "frhnwahyudii",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/frhnwahyudi",
    icon: "linkedin",
    handle: "frhnwahyudi",
  },
  {
    name: "Email",
    url: "mailto:hello@frhnwahyudi.xyz",
    icon: "mail",
    handle: "hello@frhnwahyudi.xyz",
  },
];

export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const SITE_METADATA = {
  title: "Farhan Wahyudi | Junior Full-Stack Developer",
  description:
    "Junior Full-Stack Developer based in Jambi, Indonesia specializing in Laravel, PHP, JavaScript, MySQL, system analysis, GIS, and AI-assisted development.",
  keywords: [
    "Farhan Wahyudi",
    "Junior Full-Stack Developer",
    "Laravel Developer",
    "PHP Developer",
    "Web Developer Indonesia",
    "Jambi Developer",
    "System Analyst",
    "GIS Developer",
  ],
  url: "https://frhnwahyudi.xyz",
  siteName: "Farhan Wahyudi Portfolio",
  locale: "en_US",
  type: "website",
  image: "/images/og-image.png",
};

export const QUICK_FACTS = [
  {
    value: "2+ Years",
    label: "Freelance Development",
    note: "Full-stack · Since Jan 2024",
  },
  {
    value: "5 Months",
    label: "Frontend Developer Intern",
    note: "VINIX7 · Aug – Dec 2025",
  },
  {
    value: "3",
    label: "Featured Projects",
    note: "SkillBridge · GIS · Portfolio",
  },
  {
    value: "Laravel",
    label: "Primary Backend Stack",
    note: "PHP · MySQL · REST APIs",
  },
] as const;
