export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "Web" | "GIS" | "Desktop" | "Full-Stack";
  tags: string[];
  thumbnail: string;
  images: string[];
  highlights: { title: string; description: string }[];
  technologies: string[];
  architecture?: string[];
  links?: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "GIS" | "AI/Tools" | "Soft Skills";
  level?: number; // 1-5 for optional progress display
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  highlights?: { label: string; value: string }[];
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}