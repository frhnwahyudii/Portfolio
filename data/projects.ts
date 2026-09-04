import type { Project } from "@/lib/types";

/**
 * Centralized project data — synced with the latest CV.
 * Only the three projects that appear on the CV are part of the primary
 * portfolio. Older projects (clinic, cashier) were removed from the
 * primary section per the PRD (FR-07, Option A).
 */
export const projects: Project[] = [
  {
    id: "skillbridge-global",
    title: "SkillBridge Global",
    subtitle:
      "Full-stack Laravel / MySQL platform connecting Indonesian freelancers with international companies.",
    category: "Full-Stack",
    shortDescription:
      "A job-posting and freelance-management platform that grew from my VINIX7 internship capstone into a full-stack Laravel application and undergraduate thesis.",
    fullDescription:
      "SkillBridge Global started as a frontend capstone during my 5-month internship at VINIX7 (Web Dev & UI/UX division), where a small team of 3–4 people translated product needs into clean, responsive interfaces. After the internship I independently expanded it into a full-stack Laravel application with authentication, role-based dashboards, wallet and payment flows, and admin controls — and it became the subject of my undergraduate thesis. The codebase has since been refactored from fat controllers toward a Service-Repository Pattern and is being prepared for production with Docker, Laravel Cloud, and a Vue.js frontend.",
    featured: true,
    story: [
      {
        title: "Internship Capstone",
        description:
          "Started at VINIX7 as a capstone project in the Web Dev & UI/UX division.",
      },
      {
        title: "Frontend Contribution",
        description:
          "Worked in a team of 3–4 to translate product needs into clean, responsive interfaces.",
      },
      {
        title: "Independently Expanded",
        description:
          "After the internship, expanded the concept into a complete full-stack application on my own.",
      },
      {
        title: "Full-stack Application",
        description:
          "Authentication, wallet management, company and admin dashboards, and role-based flows.",
      },
      {
        title: "Thesis / Continued Development",
        description:
          "Served as my undergraduate thesis; refactored to Service-Repository Pattern and prepared for production (Docker, Laravel Cloud, Vue.js).",
      },
    ],
    problem:
      "Cross-border freelance work is fragmented. Companies struggle to find and manage reliable Indonesian talent, while freelancers — especially outside the big cities — have few structured ways to discover international projects, track payments, and build trust.",
    solution:
      "SkillBridge Global gives both sides one platform: companies post and manage projects, freelancers discover and apply for opportunities, and a built-in wallet handles payments. Role-based accounts (freelancer, company, admin) keep each workflow secure and clearly separated.",
    myRole: [
      "Frontend contribution during the VINIX7 internship (team of 3–4): translated requirements and designs into responsive interfaces.",
      "Independently designed and built the full-stack Laravel application — authentication, dashboards, wallet and admin flows.",
      "Refactored the codebase from fat controllers to a Service-Repository Pattern and wrote database migrations and seeds.",
      "Preparing the application for production: Docker, Laravel Cloud, and a Vue.js frontend.",
    ],
    highlights: [
      {
        title: "Internship → Thesis",
        description:
          "A single project that evolved from an internship capstone into my full-stack undergraduate thesis.",
      },
      {
        title: "Service-Repository Refactor",
        description:
          "Moved from fat controllers to a cleaner, more testable Service-Repository architecture.",
      },
      {
        title: "Production Path",
        description:
          "Actively prepared for deployment with Docker, Laravel Cloud, and Vue.js.",
      },
    ],
    features: [
      "Role-based authentication (freelancer, company, admin)",
      "Job posting and project discovery flows",
      "Wallet and payment flow for project transactions",
      "Company dashboard to manage projects and applications",
      "Admin dashboard for platform control",
      "Responsive, user-focused interface",
    ],
    challenges: [
      {
        title: "Fat controllers",
        description:
          "Business logic accumulated in controllers as features grew, making the codebase hard to maintain.",
      },
      {
        title: "Role separation",
        description:
          "Three distinct user roles with different dashboards required a clear access-control model.",
      },
    ],
    decisions: [
      {
        title: "Service-Repository Pattern",
        description:
          "Refactored business logic into service and repository layers to keep controllers thin and code reusable.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Designed permission-aware routes and dashboards so freelancers, companies, and admins only see what is relevant to them.",
      },
      {
        title: "Laravel + MySQL",
        description:
          "Chose the stack I use daily for practical applications: Laravel with Eloquent and MySQL.",
      },
    ],
    architecture: [
      "MVC architecture",
      "Service-Repository Pattern",
      "Role-Based Access Control",
      "Database migrations & seeding",
      "Authentication & session management",
    ],
    technologies: [
      "Laravel Framework",
      "PHP",
      "MySQL",
      "Eloquent ORM",
      "RESTful APIs",
      "Blade",
      "HTML5 & CSS3",
      "JavaScript",
    ],
    tags: ["Laravel", "PHP", "MySQL", "Full-Stack", "Service-Repository Pattern"],
    thumbnail: "/images/dashboard-user.png",
    images: [
      "/images/dashboard-user.png",
      "/images/temukanproyek-user.png",
      "/images/deskripsiproyek-user.png",
      "/images/wallet-user.png",
      "/images/kelolaproyek-perusahaan.png",
      "/images/wallet-admin.png",
    ],
    github: "https://github.com/frhnwahyudii/skillbridge",
    status: "Public repository",
  },

  {
    id: "gis-beauty-clinic",
    title: "GIS Beauty Clinic Mapping",
    subtitle: "Web-based GIS application for mapping beauty clinics in Jambi City.",
    category: "GIS",
    shortDescription:
      "An interactive Laravel + Leaflet.js web application that maps beauty clinics in Jambi City, with an admin approval workflow that keeps user-generated content secure.",
    fullDescription:
      "A web-based Geographic Information System built with Laravel and Leaflet.js as a university research project (pre-thesis). The application maps the distribution of beauty clinics across Jambi City on an interactive map, backed by a structured MySQL database. Visitors can explore clinic locations, services, and details, while an admin workflow reviews user-generated content before it becomes public — keeping the data accurate and secure.",
    story: [
      {
        title: "Problem Framing",
        description:
          "Information about beauty clinics in Jambi City was scattered, with no spatial view of where services actually are.",
      },
      {
        title: "Research Project",
        description:
          "Developed as a pre-thesis research project that combines GIS theory with practical web development.",
      },
      {
        title: "System Design",
        description:
          "Modeled the clinic database with ERDs and flowcharts, including the data flow behind the map and the approval workflow.",
      },
      {
        title: "Build",
        description:
          "Implemented a Laravel backend, MySQL schema, an interactive Leaflet.js map, and a responsive Bootstrap frontend.",
      },
      {
        title: "Secure User Content",
        description:
          "User-submitted clinic data only goes public after admin approval, protecting the dataset from spam and errors.",
      },
    ],
    problem:
      "Beauty clinic information in Jambi City is scattered across directories and social media, making it hard for customers to compare options and for stakeholders to understand the actual distribution of services across the city.",
    solution:
      "An interactive map that presents clinic locations spatially and makes the underlying data structured and searchable. A complete admin dashboard manages the clinic database, and an approval workflow keeps user-generated content secure.",
    myRole: [
      "Full-stack development with Laravel and MySQL.",
      "Spatial data design — mapping clinic locations with Leaflet.js.",
      "System design: ERD and flowcharts for the clinic database and approval workflow.",
      "Frontend development with Bootstrap for a responsive interface.",
    ],
    highlights: [
      {
        title: "Interactive Mapping",
        description:
          "Clinic distribution visualized on an interactive Leaflet.js map.",
      },
      {
        title: "Admin Approval Workflow",
        description:
          "User-generated content is secured through a moderation flow before going public.",
      },
      {
        title: "GIS Differentiator",
        description:
          "Shows practical application of spatial data concepts — rare among web developer portfolios.",
      },
    ],
    features: [
      "Interactive Leaflet.js map with clinic markers",
      "Structured clinic database with full details",
      "Search and filter across clinic data",
      "Admin dashboard for data management",
      "Admin approval workflow for user submissions",
      "Responsive Bootstrap interface",
    ],
    challenges: [
      {
        title: "Spatial accuracy",
        description:
          "Clinic coordinates had to be accurate and render consistently on the map layer.",
      },
      {
        title: "Content trust",
        description:
          "Open submissions risk spam and incorrect data without a moderation layer.",
      },
    ],
    decisions: [
      {
        title: "Laravel + Leaflet.js",
        description:
          "Kept a Laravel/PHP/MySQL backend and chose Leaflet.js for lightweight interactive maps.",
      },
      {
        title: "Admin approval workflow",
        description:
          "User-generated entries stay pending until an admin reviews and publishes them.",
      },
    ],
    architecture: [
      "MVC architecture",
      "Interactive web mapping (Leaflet.js)",
      "Spatial data stored in MySQL",
      "Admin approval workflow",
      "Responsive frontend",
    ],
    technologies: [
      "Laravel Framework",
      "PHP",
      "MySQL",
      "Leaflet.js",
      "Bootstrap",
      "HTML5 & CSS3",
      "JavaScript",
    ],
    tags: ["Laravel", "Leaflet.js", "GIS", "MySQL", "Bootstrap"],
    thumbnail: "/images/landingpage2.png",
    images: [
      "/images/landingpage2.png",
      "/images/petasebaran2.png",
      "/images/halamanpetasebaran.png",
      "/images/dataklinik2.png",
      "/images/halamantambahklinik.png",
      "/images/dashboard2.png",
    ],
    github: "https://github.com/frhnwahyudii/beautyclinic-gis",
    live: "https://beautyclinics.frhnwahyudi.xyz",
    status: "Live · Public repository",
  },

  {
    id: "personal-portfolio",
    title: "Personal Portfolio Webpage",
    subtitle:
      "This website — a Next.js engineering project built with an AI-assisted development workflow.",
    category: "Web",
    shortDescription:
      "The site you are looking at: rebuilt from a static HTML/CSS/JS page into a modern Next.js + TypeScript application with Shadcn UI, data-driven sections, and project case studies.",
    fullDescription:
      "This portfolio started as a static HTML/CSS/JavaScript page. To make it genuinely useful for a job search, I rebuilt it as an engineering project on Next.js, TypeScript, and Tailwind CSS with Shadcn UI components. The site itself is treated as a product: a recruiter-first information architecture, centralized content data, static project case studies, and structured SEO metadata. The build process is powered by an AI-assisted development workflow using DeepSeek APIs, LangGraph, and GitHub Copilot.",
    story: [
      {
        title: "Legacy / Initial Version",
        description:
          "A static HTML/CSS/JavaScript page with content that did not reflect the current CV.",
      },
      {
        title: "Redesign",
        description:
          "Defined a new information architecture from a PRD: clear positioning, proof, experience, and case studies.",
      },
      {
        title: "Next.js + TypeScript",
        description:
          "Rebuilt as a fast, statically generated Next.js application with typed data and components.",
      },
      {
        title: "Shadcn UI",
        description:
          "Used Shadcn UI and Tailwind CSS for a consistent, accessible component system.",
      },
      {
        title: "AI-assisted Workflow",
        description:
          "DeepSeek APIs and LangGraph are used to assist development and refactoring.",
      },
    ],
    problem:
      "The original page could not answer a recruiter's first five questions quickly — who I am, what role I want, what I can do, proof of ability, and how to contact me — and it contained outdated claims.",
    solution:
      "A purpose-built portfolio with recruiter-first information architecture: the role is visible in the hero without scrolling, proof and experience follow immediately, flagship and selected projects are presented as case studies, skills mirror the CV, and every contact CTA is one click away.",
    myRole: [
      "Designed the information architecture and wrote all content (PRD-driven).",
      "Implemented the Next.js + TypeScript application.",
      "Built reusable UI components with Shadcn UI and Tailwind CSS.",
      "Created case-study pages, SEO metadata, and structured data.",
      "Ran an AI-assisted development workflow (DeepSeek API, LangGraph, GitHub Copilot).",
    ],
    highlights: [
      {
        title: "Recruiter-first UX",
        description:
          "Hero answers 'who is he and what role?' in under 10 seconds.",
      },
      {
        title: "Engineering Project",
        description:
          "Centralized data, typed components, and static case-study pages.",
      },
      {
        title: "AI-assisted Build",
        description:
          "DeepSeek APIs and LangGraph used throughout the development workflow.",
      },
    ],
    features: [
      "Clear junior full-stack positioning with open-to-work status",
      "Proof bar and experience straight after the hero",
      "Featured and selected project case studies",
      "Skills grouped exactly like the CV",
      "SEO metadata, Open Graph, sitemap, and structured data",
      "Centralized content data for easy updates",
    ],
    challenges: [
      {
        title: "Outdated content",
        description:
          "The old page claimed technologies and positions that were not on the CV.",
      },
      {
        title: "Recruiter attention",
        description:
          "Key answers were buried below the fold and inside modals.",
      },
    ],
    decisions: [
      {
        title: "PRD-first content",
        description:
          "Every section is sourced from the CV; nothing is invented or inflated.",
      },
      {
        title: "Case-study pages over modals",
        description:
          "Dedicated /projects/[slug] routes improve SEO, sharing, and deep linking.",
      },
    ],
    architecture: [
      "App Router with static generation",
      "Server components with targeted client islands",
      "Centralized data layer (data/, lib/)",
      "Design-system components (Shadcn UI)",
      "AI-assisted development workflow",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "DeepSeek API",
      "LangGraph",
    ],
    tags: ["Next.js", "TypeScript", "Shadcn UI", "DeepSeek API", "LangGraph"],
    thumbnail: "/images/profil.png",
    images: [],
    github: "https://github.com/frhnwahyudii/Portfolio",
    status: "Public repository",
  },
];

export const featuredProject = projects.find((p) => p.featured);
export const selectedProjects = projects.filter((p) => !p.featured);

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

