PRD: Redesigned Personal Portfolio Website for Farhan Wahyudi
1. Product Overview
Product Name: Farhan Wahyudi — Personal PortfolioVersion: 2.0 (Modern Redesign)Target Audience: Recruiters, hiring managers, potential collaborators, freelance clients in web/full-stack development, GIS, and AI-integrated solutions.Goal: Create a professional, high-converting, fast-loading portfolio that showcases technical depth, problem-solving, and personality. Position Farhan as a purposeful, full-stack developer (Laravel/PHP, C#, JS/TS, GIS, AI productivity tools) who delivers real-world impact.Platform/Tech: Next.js 15+ (App Router), TypeScript (strict), Tailwind CSS + shadcn/ui components, Framer Motion for animations (subtle & performant), deployed on Vercel/GitHub Pages.Design Philosophy: Clean, minimal, professional with subtle interactivity. Dark mode first (tech audience). Mobile-first, accessible (WCAG AA), performant (Core Web Vitals > 95). No bloat, no AI-slop visuals.
2. Key Features & Sections
Structure (Single-page with smooth scroll navigation + optional /projects route):
	1	Hero / Header (Above the fold)
	◦	Bold name + tagline (e.g., “Information Systems Graduate | Building purposeful full-stack solutions with Laravel, modern web tech & AI”).
	◦	Short professional summary (2-3 lines).
	◦	CTA buttons: “View Projects”, “Download CV”, “Get in Touch”.
	◦	Subtle animated background (e.g., gentle grid/particles or tech-themed SVG) + profile photo with hover effect.
	◦	Navigation: Sticky top bar (Home, About, Experience, Projects, Skills, Contact) with mobile menu.
	2	About Me
	◦	Bio refined for impact (education, thesis, passion for AI/productivity).
	◦	Key stats: GPA 3.73/4.00, Graduation June 2026, etc.
	◦	Professional photo + short video (optional, 15-30s intro).
	3	Experience
	◦	Internship at Vinix7 (Frontend, team of 3-4, capstone link to Skillbridge Global).
	◦	Highlight outcomes, responsibilities, technologies.
	4	Skills & Expertise
	◦	Categorized (Frontend, Backend, GIS, AI/Tools, Soft Skills).
	◦	Use shadcn badges, progress indicators (subtle), or interactive hover cards.
	5	Featured Projects (Grid + filters: All / Web / GIS / Desktop / Full-Stack)
	◦	4-6 strong projects (Clinic Management, OOP Cashier, GIS Beauty Clinic, Skillbridge Global + 1-2 more if available).
	◦	For each: Thumbnail (high-quality screenshot/GIF), title, short description (problem → solution → impact/tech), stack tags, buttons (Live Demo, GitHub, Case Study).
	◦	Click opens modal or dedicated section with deeper case study (challenges, architecture, learnings, metrics).
	6	Testimonials / Achievements (if available; otherwise optional metrics section).
	7	Contact / Let’s Connect
	◦	Form (shadcn + email integration like Resend/Formspoke).
	◦	Social links (GitHub, LinkedIn, etc.).
	◦	Availability note.
Footer: Copyright, quick links, “Built with Next.js + shadcn/ui”.
Animations & Interactivity (Subtle & Purposeful):
	•	Framer Motion: Page transitions, scroll-triggered reveals (fade-up, stagger children), hover scales/tilts on cards.
	•	Interactive elements: Project filters, skill hover tooltips, smooth scroll, cursor effects (optional minimal), dark/light toggle (persistent).
	•	Loading states, micro-interactions on buttons/CTAs.
	•	Performance rule: Animations must be GPU-accelerated, respect prefers-reduced-motion.
3. UI/UX Requirements
	•	Visual Style: Modern minimal — generous whitespace, sans-serif typography (e.g., Inter + system fonts), consistent spacing (Tailwind/shadcn scale), accent color (professional blue/teal).
	•	Responsive: Perfect on mobile, tablet, desktop.
	•	Accessibility: ARIA labels, keyboard nav, focus states, alt texts, semantic HTML.
	•	Copywriting Guidelines: Benefit-focused, concise, confident but humble. Use active voice. Quantify where possible (e.g., “5-month internship”, “GPA 3.73”). No fluff.
	•	SEO: Meta tags, Open Graph, semantic headings, fast load.
4. Non-Functional Requirements
	•	Performance: Lighthouse scores: Performance 95+, Accessibility 100, Best Practices 100, SEO 90+.
	•	Code Quality: TypeScript strict mode, ESLint/Prettier, component-driven (shadcn), folder structure (app/, components/, lib/, etc.).
	•	Maintainability: Easy to update projects/bio.
	•	Deployment: Vercel (recommended) with preview deploys.
5. Success Metrics
	•	Load time < 1.5s.
	•	Time on site > 45s average.
	•	Positive feedback from recruiters.
	•	Easy updates for new projects.