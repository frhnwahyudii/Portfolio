import { Skill } from "@/lib/types";

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5 & CSS3", category: "Frontend", level: 5 },
  { name: "JavaScript", category: "Frontend", level: 4 },
  { name: "Bootstrap", category: "Frontend", level: 4 },
  { name: "Tailwind CSS", category: "Frontend", level: 4 },
  { name: "Responsive Design", category: "Frontend", level: 4 },

  // Backend
  { name: "Laravel Framework", category: "Backend", level: 5 },
  { name: "PHP Development", category: "Backend", level: 5 },
  { name: "C# Programming", category: "Backend", level: 4 },
  { name: "MySQL Database", category: "Backend", level: 4 },
  { name: "Eloquent ORM", category: "Backend", level: 5 },
  { name: "RESTful API Design", category: "Backend", level: 4 },
  { name: "MVC Architecture", category: "Backend", level: 5 },

  // GIS
  { name: "Geographic Information Systems", category: "GIS", level: 4 },
  { name: "Leaflet.js", category: "GIS", level: 4 },
  { name: "Web Mapping", category: "GIS", level: 4 },
  { name: "Data Visualization", category: "GIS", level: 4 },

  // AI/Tools
  { name: "AI for Productivity", category: "AI/Tools", level: 4 },
  { name: "Git & Version Control", category: "AI/Tools", level: 4 },
  { name: "Github Copilot", category: "AI/Tools", level: 3 },
  { name: "Cline", category: "AI/Tools", level: 4 },
   
  // Soft Skills
  { name: "Problem Solving", category: "Soft Skills", level: 5 },
  { name: "Critical Thinking", category: "Soft Skills", level: 5 },
  { name: "Fast Learning", category: "Soft Skills", level: 5 },
  { name: "Team Collaboration", category: "Soft Skills", level: 4 },
  { name: "Project Management", category: "Soft Skills", level: 4 },
  { name: "Communication", category: "Soft Skills", level: 4 },
];

export const skillCategories = [
  { key: "Frontend" as const, label: "Frontend Development", icon: "code" },
  { key: "Backend" as const, label: "Backend Development", icon: "database" },
  { key: "GIS" as const, label: "Geographic Information Systems", icon: "map" },
  { key: "AI/Tools" as const, label: "AI & Productivity Tools", icon: "bot" },
  { key: "Soft Skills" as const, label: "Professional Skills", icon: "users" },
];