import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "skillbridge-global",
    title: "Skillbridge Global",
    shortDescription:
      "A job posting platform connecting Indonesian freelancers with international companies. Evolved from an internship frontend project into a full-stack Laravel thesis application.",
    fullDescription:
      "Skillbridge Global started as a frontend-focused capstone project during my 5-month internship at Vinix7 in the Web Dev & UI/UX division. Working in a small team of 3-4, I helped translate product needs into clean, responsive interfaces. After the internship, I independently expanded it into a full-stack Laravel application with authentication, wallet management, company dashboards, and admin controls — serving as my undergraduate thesis.",
    category: "Full-Stack",
    tags: ["Laravel", "PHP", "Frontend", "Full-Stack", "MySQL", "Capstone"],
    thumbnail: "/images/dashboard-user.png",
    images: [
      "/images/dashboard-user.png",
      "/images/temukanproyek-user.png",
      "/images/deskripsiproyek-user.png",
      "/images/wallet-user.png",
      "/images/kelolaproyek-perusahaan.png",
      "/images/wallet-admin.png",
    ],
    highlights: [
      {
        title: "Freelancer Connection",
        description:
          "Designed to connect Indonesian freelancers with international employers through a structured platform.",
      },
      {
        title: "Frontend Focus",
        description:
          "Built with a strong UI/UX foundation during internship collaboration with a small development team.",
      },
      {
        title: "Thesis Expansion",
        description:
          "Expanded into a full-stack Laravel implementation supporting my final thesis completion.",
      },
    ],
    technologies: [
      "Laravel Framework",
      "PHP 7.4+",
      "MySQL Database",
      "HTML5 & CSS3",
      "JavaScript",
      "Responsive UI Design",
      "Authentication System",
      "Wallet & Payment Flow",
    ],
    architecture: [
      "MVC Architecture",
      "RESTful API Design",
      "Database Migration & Seeding",
      "Role-Based Access Control",
      "Session Management",
    ],
    links: {
      github: "https://github.com/frhnwahyudii",
    },
  },
  {
    id: "clinic-management",
    title: "Clinic Management System",
    shortDescription:
      "Comprehensive clinic management system built with Laravel, featuring patient registration, doctor management, and secure CRUD operations with authentication.",
    fullDescription:
      "A full-featured clinic registration and management system developed using the Laravel Framework. The application streamlines patient registration, doctor data management, and clinic administration with a user-friendly interface. It implements secure authentication, role-based access, and complete CRUD functionality for all entities.",
    category: "Web",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "MVC"],
    thumbnail: "/images/regislaravel.png",
    images: ["/images/regislaravel.png", "/images/datapasien.png"],
    highlights: [
      {
        title: "Patient Registration",
        description:
          "Intuitive patient registration system with data validation and user-friendly forms.",
      },
      {
        title: "Doctor Management",
        description:
          "Doctor data management with complete CRUD features and scheduling system.",
      },
      {
        title: "Authentication System",
        description:
          "Secure authentication system with role-based access control.",
      },
    ],
    technologies: [
      "Laravel 8 Framework",
      "PHP 7.4+",
      "MySQL Database",
      "Bootstrap 5 UI Framework",
      "Eloquent ORM",
      "Blade Templating Engine",
    ],
    architecture: [
      "MVC (Model-View-Controller)",
      "RESTful API Design",
      "Database Migration & Seeding",
      "Form Validation & Security",
      "Session Management",
    ],
  },
  {
    id: "oop-cashier",
    title: "OOP Cashier Application",
    shortDescription:
      "Desktop cashier application implementing Object-Oriented Programming in C# with transaction processing, automatic calculations, and receipt generation.",
    fullDescription:
      "A desktop cashier application developed as a practical implementation of Object-Oriented Programming concepts using C# and .NET Framework. The application demonstrates encapsulation, inheritance, polymorphism, and abstraction in a real-world business context. Features include transaction processing, automatic price calculations, product inventory management, and receipt generation.",
    category: "Desktop",
    tags: ["C#", "OOP", "Windows Forms", ".NET", "Desktop"],
    thumbnail: "/images/cindex.png",
    images: ["/images/cindex.png", "/images/c.png"],
    highlights: [
      {
        title: "Transaction Processing",
        description:
          "Sales transaction input system with automatic calculations and data validation.",
      },
      {
        title: "OOP Implementation",
        description:
          "Complete implementation of OOP concepts: encapsulation, inheritance, polymorphism, and abstraction.",
      },
      {
        title: "Receipt Generation",
        description:
          "Automatic receipt generation with neat format and complete transaction information.",
      },
    ],
    technologies: [
      "C# Programming Language",
      ".NET Framework 4.7+",
      "Windows Forms",
      "Visual Studio IDE",
      "Object-Oriented Design Patterns",
    ],
    architecture: [
      "Encapsulation — Data Protection",
      "Inheritance — Code Reusability",
      "Polymorphism — Method Overriding",
      "Abstraction — Interface Design",
      "SOLID Principles Implementation",
    ],
  },
  {
    id: "gis-beauty-clinic",
    title: "GIS Beauty Clinic Mapping",
    shortDescription:
      "Geographic Information System for mapping beauty clinics in Jambi City with interactive maps, spatial data analysis, and comprehensive clinic database.",
    fullDescription:
      "A geographic information system developed to map the distribution of beauty clinics in Jambi City. The application provides interactive visualization of clinic locations using Leaflet.js, detailed clinic information, spatial data analysis, and comprehensive search/filter functionality. Built with PHP and MySQL for the backend with a responsive frontend interface.",
    category: "GIS",
    tags: ["GIS", "Leaflet.js", "PHP", "MySQL", "Web Mapping"],
    thumbnail: "/images/dashboard.png",
    images: [
      "/images/landingpage.png",
      "/images/petasebaran.png",
      "/images/dataklinik.png",
      "/images/dashboard.png",
    ],
    highlights: [
      {
        title: "Interactive Maps",
        description:
          "Interactive map visualization with beauty clinic location markers in Jambi City.",
      },
      {
        title: "Data Management",
        description:
          "Clinic data management system with complete address, contact, and service information.",
      },
      {
        title: "Search & Filter",
        description:
          "Clinic search based on location, service type, and other criteria.",
      },
    ],
    technologies: [
      "HTML5, CSS3, JavaScript",
      "Leaflet.js for Interactive Maps",
      "PHP & MySQL for Backend",
      "Bootstrap for Responsive Design",
      "OpenStreetMap & Geographic APIs",
    ],
    architecture: [
      "Geographic Information System (GIS)",
      "Beauty Clinic Mapping in Jambi City",
      "Interactive Web-based Application",
      "Spatial Data Management",
      "Data Visualization & Analytics",
    ],
  },
];

export const projectCategories = ["All", "Web", "GIS", "Desktop", "Full-Stack"] as const;