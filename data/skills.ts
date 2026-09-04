import type { Skill } from "@/lib/types";

/**
 * Skill categories follow the CV structure exactly — no self-ratings,
 * no claims that are not on the CV.
 */
export const skills: Skill[] = [
  // Backend
  { name: "Laravel", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "RESTful APIs", category: "Backend" },
  { name: "Service-Repository Pattern", category: "Backend" },
  { name: "OOP", category: "Backend" },

  // Frontend
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Leaflet.js", category: "Frontend" },

  // Database & System Analysis
  { name: "MySQL", category: "Database & System Analysis" },
  { name: "UML", category: "Database & System Analysis" },
  { name: "ERD", category: "Database & System Analysis" },
  { name: "Flowcharts", category: "Database & System Analysis" },

  // AI-Assisted Development
  { name: "GitHub Copilot", category: "AI-Assisted Development" },
  { name: "DeepSeek API", category: "AI-Assisted Development" },
  { name: "Google Gemini", category: "AI-Assisted Development" },
  { name: "LangGraph", category: "AI-Assisted Development" },
  { name: "Prompt Engineering", category: "AI-Assisted Development" },

  // Tools
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
];

export const skillCategories: {
  key: Skill["category"];
  icon: "code" | "database" | "map" | "bot" | "wrench";
  description: string;
}[] = [
  {
    key: "Backend",
    icon: "database",
    description: "Server-side development with Laravel and PHP",
  },
  {
    key: "Frontend",
    icon: "code",
    description: "Markup, styling and interactive map UIs",
  },
  {
    key: "Database & System Analysis",
    icon: "map",
    description: "Data modeling and system design",
  },
  {
    key: "AI-Assisted Development",
    icon: "bot",
    description: "AI tools integrated into development workflows",
  },
  {
    key: "Tools",
    icon: "wrench",
    description: "Version control and collaboration",
  },
];

/** FR-09 — growth areas the CV lists as "currently learning". */
export const currentlyLearning = [
  "PostgreSQL",
  "Docker",
  "Vue.js",
  "Cloud Concepts",
] as const;
