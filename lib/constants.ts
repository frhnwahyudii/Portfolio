import { SocialLink } from "./types";

export const PERSONAL_INFO = {
  name: "Farhan Wahyudi",
  tagline: "Information Systems Graduate | Building purposeful full-stack solutions with Laravel, modern web tech & AI",
  summary:
    "I build digital solutions that matter. A recent Information Systems graduate (GPA 3.73/4.00) with a passion for full-stack development, geographic information systems, and AI-integrated productivity tools. I transform complex problems into clean, functional applications.",
  email: "hello@frhnwahyudi.xyz",
  phone: "",
  location: "Jambi, Indonesia",
  resumeUrl: "/Resume_FarhanWahyudi.pdf",
  graduation: "June 2026",
  gpa: "3.73",
  university: "Dinamika Bangsa University",
  faculty: "Faculty of Computer Science",
  major: "Information Systems",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/frhnwahyudi",
    icon: "instagram",
    handle: "@frhnwahyudi",
  },
  {
    name: "Email",
    url: "mailto:hello@frhnwahyudi.xyz",
    icon: "mail",
    handle: "hello@frhnwahyudi.xyz",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/frhnwahyudi",
    icon: "linkedin",
    handle: "frhnwahyudi",
  },
  {
    name: "GitHub",
    url: "https://github.com/frhnwahyudii",
    icon: "github",
    handle: "frhnwahyudii",
  },
];

export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const SITE_METADATA = {
  title: "Farhan Wahyudi | Full-Stack Developer & GIS Enthusiast",
  description:
    "Farhan Wahyudi — Information Systems graduate specializing in Laravel, C#, GIS, and AI-integrated solutions. Explore projects, experience, and skills.",
  url: "https://frhnwahyudi.xyz",
  siteName: "Farhan Wahyudi Portfolio",
  locale: "en_US",
  type: "website",
  image: "/images/og-image.png",
};