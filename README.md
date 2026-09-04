# Farhan Wahyudi — Personal Portfolio

A career-focused portfolio website for **Farhan Wahyudi, Junior Full-Stack Developer**. The site answers the five questions a recruiter has within seconds — who he is, what role he wants, his core skills, proof of ability (featured/selected projects), and how to contact him.

Built and maintained as an engineering project: centralized content data, typed components, static case-study pages, and an AI-assisted development workflow.

## ✨ Highlights

- **Recruiter-first landing page** — Hero → Proof Bar → About → Experience → Featured Project → Selected Projects → Skills → Currently Learning → Contact.
- **Dedicated project case studies** at `/projects/[slug]` (SkillBridge Global, GIS Beauty Clinic Mapping, Personal Portfolio) with overview, story, problem/solution, my role, features, architecture, tech stack, screenshots, challenges, and technical decisions.
- **SEO ready** — metadata, Open Graph image, JSON-LD `Person` schema, `robots.txt`, and sitemap.
- **Dark/light theme** toggle (default dark) via `next-themes`.
- **Fully responsive** and accessible-friendly (semantic headings, aria labels, keyboard focus states).
- **Direct "Live Demo" links** on deployed projects (e.g., GIS Beauty Clinic).

## 🧰 Tech Stack

| Area        | Technology                                                              |
| ----------- | ----------------------------------------------------------------------- |
| Framework   | Next.js (App Router, static generation) · React 19 · TypeScript         |
| Styling     | Tailwind CSS v4 · shadcn/ui (Base UI) · `tw-animate-css`                 |
| Motion      | framer-motion                                                           |
| Theme       | next-themes                                                             |
| Icons       | lucide-react (brand icons as inline SVG)                                |
| Deployment  | Vercel (`vercel.json`: Next.js framework, clean URLs)                   |

## 📁 Project Structure

```
app/
  page.tsx              → landing page sections
  projects/[slug]/      → project case-study pages
  layout.tsx            → metadata, JSON-LD, fonts, theme, nav/footer
  robots.ts · sitemap.ts
components/
  sections/             → hero, proof-bar, about, experience, projects,
                         featured-project, project-card, skills,
                         currently-learning, contact
  layout/               → navbar, footer
  ui/                   → button, badge, card, social-icon, etc.
  theme/                → theme provider & toggle
data/
  projects.ts           → project data (case studies, links, screenshots)
  skills.ts             → skill categories + currently learning
  experience.ts         → work history
lib/
  constants.ts          → personal info, socials, nav, metadata, quick facts
  types.ts              → shared TypeScript types
  image-size.ts         → reads PNG/JPEG dimensions for full-bleed screenshots
public/
  images/               → project screenshots, profile photo, og-image.png
  Resume_FarhanWahyudi.pdf
```

## 🚀 Getting Started

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve production build
npm run lint       # ESLint
```

## ✏️ Editing Content

Content is centralized — no need to touch components for day-to-day updates:

| What to edit          | File                                  |
| --------------------- | ------------------------------------- |
| Personal info / links | `lib/constants.ts`                     |
| Projects & case study | `data/projects.ts`                     |
| Skills / learning     | `data/skills.ts`                       |
| Experience            | `data/experience.ts`                   |
| Project screenshots   | replace files in `public/images/` and update paths in `data/projects.ts` |
| CV / resume           | replace `public/Resume_FarhanWahyudi.pdf` |
| OG image (1200×630)   | `public/images/og-image.png`           |

> **Source of truth:** all professional claims on this site (roles, dates, projects, skills) are synced with the latest CV. Don't add claims that aren't on the CV.

## 🔍 SEO Notes

- Change the site URL/domain in `lib/constants.ts` (`SITE_METADATA.url`) and in JSON-LD in `app/layout.tsx`.
- The sitemap uses a fixed `lastModified` date — bump it when you publish significant content changes.
- Google Search Console verification code can be added in `app/layout.tsx` (`metadata.verification.google`).

## 📄 License

All content is © Farhan Wahyudi. This is a personal portfolio — not open source.

