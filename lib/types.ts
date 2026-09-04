export type ProjectCategory = "Full-Stack" | "Web" | "GIS" | "Desktop";

export interface ProjectStoryStep {
  title: string;
  description: string;
}

export interface ProjectCardItem {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  /** Featured flagship project rendered at the top of the Projects section. */
  featured?: boolean;
  /** Evolution / story steps used by the featured card and case study page. */
  story: ProjectStoryStep[];
  problem: string;
  solution: string;
  myRole: string[];
  highlights: ProjectCardItem[];
  features: string[];
  challenges: ProjectCardItem[];
  decisions: ProjectCardItem[];
  architecture: string[];
  technologies: string[];
  tags: string[];
  thumbnail: string;
  images: string[];
  /** Direct repository URL (never a profile link). */
  github?: string;
  live?: string;
  status: string;
}

export interface Skill {
  name: string;
  category:
    | "Backend"
    | "Frontend"
    | "Database & System Analysis"
    | "AI-Assisted Development"
    | "Tools";
}

export interface Experience {
  company: string;
  role: string;
  type: "Freelance" | "Internship" | "Full-Time";
  period: string;
  summary: string[];
  highlights: string[];
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}