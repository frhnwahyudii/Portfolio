PRD — Personal Portfolio Website

Product: Farhan Wahyudi — Personal Portfolio
Version: 1.0
Status: Redesign / Improvement
Primary Goal: Career-focused portfolio for Full-Stack Developer opportunities

1. Product Vision

Membangun personal portfolio yang memposisikan Farhan sebagai:

Junior Full-Stack Developer & System Analyst
yang membangun practical web applications menggunakan Laravel, PHP, JavaScript, MySQL, serta modern web technologies, dengan GIS dan AI-assisted development sebagai differentiator.

Website harus menjawab 5 pertanyaan recruiter secepat mungkin:

Siapa Farhan?
Dia mencari role apa?
Apa skill utamanya?
Apa bukti kemampuannya?
Bagaimana cara menghubunginya?
2. Source of Truth

Seluruh informasi profesional harus disinkronkan dengan CV terbaru.

CV terbaru mencantumkan:

Bachelor of Information Systems
GPA 3.73/4.00
Freelance — Full-stack Developer & System Analyst
VINIX7 — Frontend Developer Intern
Personal Portfolio Webpage
SkillBridge Global
GIS Beauty Clinic Mapping
Laravel, PHP, RESTful API, Service-Repository Pattern, OOP
HTML5, CSS3, JavaScript, Leaflet.js
MySQL, UML, ERD, Flowcharts
GitHub Copilot, DeepSeek API, Google Gemini, LangGraph
PostgreSQL, Docker, Vue.js, Cloud Concept sebagai currently learning

Rule penting: website tidak boleh menambahkan teknologi, job title, tanggal, achievement, atau angka yang tidak ada di CV/source project.

3. Target Users
Primary User

Recruiter / HR

Kebutuhan:

mengetahui role kandidat
melihat experience
melihat tech stack
menemukan CV
menemukan GitHub/LinkedIn
menghubungi kandidat
Secondary User

Technical Recruiter / Hiring Manager / Developer

Kebutuhan:

melihat kualitas project
memahami architecture
melihat code/repository
mengetahui technical decision
memahami kemampuan problem solving
4. Business / Career Goals
Primary Goal

Meningkatkan kemungkinan recruiter:

Landing → memahami profile → melihat project → membuka CV/GitHub → contact

Secondary Goals
Membangun professional credibility
Menunjukkan kemampuan full-stack
Menunjukkan pengalaman real project
Menunjukkan kemampuan system analysis
Menjadikan SkillBridge sebagai flagship project
Menjadikan GIS sebagai differentiator
Menunjukkan AI sebagai development advantage, bukan sebagai identitas utama
5. Positioning
Primary Position

Junior Full-Stack Developer

Secondary Position

System Analyst

Technical Core

Laravel · PHP · JavaScript · MySQL

Supporting Technologies

REST API · Service-Repository Pattern · HTML · CSS · Leaflet.js · GitHub

Differentiators

GIS · AI-assisted Development · LangGraph · DeepSeek API

6. Information Architecture

Struktur website yang direkomendasikan:

HOME
│
├── Hero
│
├── Proof / Quick Facts
│
├── About
│
├── Experience
│
├── Featured Project
│   └── SkillBridge Global
│
├── Selected Projects
│   ├── GIS Beauty Clinic Mapping
│   └── Personal Portfolio
│
├── Technical Skills
│
├── Currently Learning
│
└── Contact

Navigation:

Home
About
Experience
Projects
Skills
Contact
7. Functional Requirements
FR-01 — Hero Section
Objective

Dalam 5–10 detik recruiter harus memahami positioning Farhan.

Content

Headline:

Junior Full-Stack Developer

Supporting text:

Building practical web applications with Laravel, PHP, JavaScript, MySQL, and modern web technologies.

Additional positioning:

System Analyst · GIS · AI-assisted Development

CTA

Primary:

View Projects

Secondary:

Download CV

Third:

Let's Connect

Status

Tambahkan:

Open to Full-Time Opportunities

Acceptance Criteria
Role terlihat tanpa scroll
CTA menuju Projects bekerja
CV dapat di-download
Contact dapat diakses
Tidak menggunakan headline “Information Systems Graduate” sebagai positioning utama
8. FR-02 — Proof Bar

Tujuannya memberikan credibility sebelum recruiter membaca seluruh halaman.

Contoh:

3+ Years
Freelance Development

5 Months
Frontend Developer Intern

3
Featured Projects

Laravel
Primary Backend Stack

Catatan: gunakan angka hanya jika benar-benar defensible dari CV.

Freelance tercatat sejak Januari 2024 dan VINIX7 berlangsung Agustus–Desember 2025.

9. FR-03 — About Section
Objective

Menjelaskan:

background
technical identity
career direction
working approach
Required Content
Information Systems graduate with experience in freelance development
and frontend development through VINIX7.

Focused on building practical web applications using Laravel, PHP,
JavaScript, and MySQL, with experience in system analysis,
database design, UML, and API development.

Interested in combining software engineering with GIS and
AI-assisted development workflows.
Acceptance Criteria
Maksimal ±150–180 words
Tidak generic
Tidak terlalu banyak soft-skill claims
Tidak mengulang hero
10. FR-04 — Experience Section

Ini wajib diperbaiki, karena website sekarang hanya terlalu menonjolkan VINIX7 sementara CV terbaru memiliki dua experience utama.

Experience #1
Freelance

Full-stack Developer & System Analyst

Jan 2024 — Present

Highlight:

Full-stack web development
System analysis
Database design
UML / ERD / flowcharts
AI-assisted development

CV juga mencantumkan penggunaan GitHub Copilot, DeepSeek API + LangGraph, dan Google Gemini dalam development workflow.

Experience #2
VINIX7

Frontend Developer Intern

Aug 2025 — Dec 2025

Highlight:

Figma → HTML/CSS/JavaScript
Frontend development
UI/UX collaboration
Team-based development
SkillBridge Global capstone

CV menyebut pengalaman internship ini berlangsung Agustus–Desember 2025 dan melibatkan tim 3–4 orang.

11. FR-05 — Featured Project
#1 SkillBridge Global

Ini harus menjadi flagship project.

Kenapa?

Karena project ini memiliki story yang kuat:

Internship Capstone
       ↓
Frontend Contribution
       ↓
Independently Expanded
       ↓
Full-stack Application
       ↓
Thesis / Continued Development

CV menyebut SkillBridge menggunakan Laravel/MySQL dan telah direfactor dari Fat Controllers menuju Service-Repository Pattern, serta sedang dipersiapkan untuk production dengan Docker, Laravel Cloud, dan Vue.js.

Project Page harus memiliki:
Overview
Problem
Solution
My Role
Features
Architecture
Tech Stack
Challenges
Technical Decisions
Screenshots
Repository
Live Demo
CTA
View Case Study
View GitHub
Live Demo

Kalau repository belum public:

Request Project Details

Jangan arahkan tombol GitHub ke profile GitHub. Link harus menuju repository project langsung kalau memang tersedia.

12. FR-06 — Selected Projects

Setelah SkillBridge:

Project #2 — GIS Beauty Clinic Mapping

Positioning:

Web-based GIS application for mapping beauty clinics in Jambi City.

Tech:

Laravel
PHP
MySQL
Leaflet.js
Bootstrap

CV menekankan penggunaan Laravel + Leaflet.js dan secure user-generated content melalui admin approval workflow.

Project ini penting karena memberikan differentiation dari portfolio web developer biasa.

Project #3 — Personal Portfolio Webpage

Ini jangan dianggap sekadar “website portfolio”.

Jadikan sebagai engineering project.

Tech:

Next.js
TypeScript
Shadcn UI
DeepSeek API
LangGraph

CV menyebut website awalnya menggunakan HTML/CSS/JS kemudian dimodernisasi menggunakan Next.js, TypeScript, dan Shadcn UI, termasuk self-made agent menggunakan DeepSeek APIs dan LangGraph.

Story:
Legacy / Initial Version
        ↓
Redesign
        ↓
Next.js + TypeScript
        ↓
Shadcn UI
        ↓
AI-assisted Development Workflow
13. FR-07 — Other Projects

Project lama seperti:

Clinic Management System
OOP Cashier Application

jangan menjadi featured project.

Ada dua opsi:

Option A — Recommended

Hapus dari primary portfolio.

Option B

Masukkan:

Other Projects

dengan tampilan lebih kecil.

Tujuannya agar recruiter fokus ke 3 project yang ada di CV terbaru.

14. FR-08 — Skills Section

Current website menggunakan rating:

HTML 5/5
Laravel 5/5
PHP 5/5
...
Remove.

Self-rating tidak memberikan bukti objektif.

Ganti menjadi:

Backend
Laravel
PHP
RESTful APIs
Service-Repository Pattern
OOP
Frontend
HTML5
CSS3
JavaScript
Leaflet.js
Database & System Analysis
MySQL
UML
ERD
Flowcharts
AI-Assisted Development
GitHub Copilot
DeepSeek API
Google Gemini
LangGraph
Prompt Engineering
Tools
Git
GitHub

Struktur ini mengikuti kategori skill pada CV terbaru.

15. FR-09 — Currently Learning

Buat section kecil:

Currently Learning
PostgreSQL
Docker
Vue.js
Cloud Concepts

Ini bagus karena menunjukkan growth tanpa berpura-pura sudah expert.

16. FR-10 — Contact Section

Current CTA:

Let's Connect

Ubah menjadi career-focused.

Headline

Have an opportunity?

Description

I'm currently open to full-time opportunities, freelance projects, and collaborations.

Primary CTA
Email Me
Secondary
LinkedIn
GitHub
Download CV

Email yang digunakan CV terbaru:

hello@frhnwahyudi.xyz

17. FR-11 — CV Download

Ini penting banget.

Current project memiliki:

/public/Resume_FarhanWahyudi.pdf

File ini harus diganti dengan CV terbaru.

Flow:

Download CV
      ↓
latest CV PDF

Jangan sampai website menampilkan CV versi lama sementara recruiter mengakses CV berbeda dari yang ada di website.

18. FR-12 — SEO
Metadata

Current:

Farhan Wahyudi | Full-Stack Developer & GIS Enthusiast

Recommended:

Farhan Wahyudi | Junior Full-Stack Developer

Description:

Junior Full-Stack Developer based in Jambi, Indonesia specializing in Laravel, PHP, JavaScript, MySQL, system analysis, GIS, and AI-assisted development.

Keywords

Fokus:

Farhan Wahyudi
Junior Full-Stack Developer
Laravel Developer
PHP Developer
Web Developer Indonesia
Jambi Developer
System Analyst
GIS Developer

Jangan terlalu banyak keyword stuffing.

19. FR-13 — Open Graph

Current code mengarah ke:

/images/og-image.png

tetapi file tersebut tidak ditemukan dalam source ZIP.

Required

Buat:

/public/images/og-image.png

Preview ketika URL dibagikan:

┌──────────────────────────────┐
│                              │
│       FARHAN WAHYUDI         │
│                              │
│ Junior Full-Stack Developer  │
│                              │
│ Laravel · PHP · JavaScript   │
│                              │
└──────────────────────────────┘
20. FR-14 — Structured Data

Update JSON-LD.

Current:

jobTitle:
Information Systems Graduate

Recommended:

jobTitle:
Junior Full-Stack Developer

Tambahkan informasi profesional yang memang tersedia:

name
url
email
jobTitle
sameAs
knowsAbout
21. FR-15 — Social Links

Prioritas:

GitHub
LinkedIn
Email

Instagram tidak perlu menjadi primary professional CTA.

Selain itu, icon mapping sekarang perlu diperbaiki:

LinkedIn → LinkedIn icon
GitHub → GitHub icon
Email → Mail icon

Jangan gunakan generic Globe atau ExternalLink kalau ada icon yang sesuai.

22. FR-16 — Project Detail Pages

Current architecture menggunakan modal.

Modal bagus untuk browsing, tetapi kurang bagus untuk:

SEO
sharing
recruiter navigation
deep linking
Google indexing
Recommended route
/projects/skillbridge-global
/projects/gis-beauty-clinic
/projects/personal-portfolio

Setiap project menjadi case study yang bisa dibuka langsung.

23. FR-17 — Responsive Design

Website wajib optimal untuk:

Desktop
1440px
1280px
1024px
Tablet
768px
Mobile
390px
375px

Prioritas:

navbar
hero
project cards
project screenshots
CTA
contact
typography
24. FR-18 — Performance

Gunakan:

next/image

untuk image portfolio.

Current component masih menggunakan:

<img>

Migrasikan image yang relevan ke next/image.

Juga:

compress images
lazy-load project images
jangan load asset yang tidak digunakan
hapus duplicate assets

Current source memiliki duplicate image assets di:

/assets/images
/public/images

Review dan hapus yang tidak digunakan.

25. FR-19 — Sitemap & Robots

Current website sudah memiliki:

sitemap.ts

Pertahankan.

Tetapi lastModified jangan selalu menggunakan:

new Date()

karena membuat crawler seolah-olah website selalu berubah.

Gunakan tanggal update aktual.

Tambahkan:

app/robots.ts
26. Non-Functional Requirements
NFR-01 — Performance

Target:

fast initial load
optimized images
minimal unnecessary JavaScript
NFR-02 — Accessibility

Minimal:

semantic HTML
alt text
keyboard navigation
sufficient contrast
accessible buttons
proper heading hierarchy
NFR-03 — SEO
metadata
Open Graph
sitemap
robots
JSON-LD
semantic structure
project pages
NFR-04 — Maintainability

Project data harus centralized.

Contoh:

data/
├── projects.ts
├── skills.ts
└── constants.ts

Sehingga update portfolio tidak membutuhkan editing banyak component.

27. Recommended User Flow
Recruiter
   │
   ▼
Landing Page
   │
   ├── "Who is he?"
   │
   ▼
Hero
   │
   ├── Junior Full-Stack Developer
   ├── Open to Full-Time
   └── View Projects
   │
   ▼
Proof Bar
   │
   ▼
Experience
   │
   ├── Freelance
   └── VINIX7
   │
   ▼
SkillBridge
   │
   ▼
Case Study
   │
   ├── Architecture
   ├── Tech Stack
   └── GitHub
   │
   ▼
Other Projects
   │
   ├── GIS
   └── Portfolio
   │
   ▼
Skills
   │
   ▼
Contact
   │
   ├── Email
   ├── LinkedIn
   ├── GitHub
   └── CV
28. Content Priority

Kalau kita kasih ranking:

Content	Priority
Junior Full-Stack positioning	🔴 P0
Experience Freelance	🔴 P0
Experience VINIX7	🔴 P0
SkillBridge case study	🔴 P0
CV terbaru	🔴 P0
Contact CTA	🔴 P0
GIS project	🟠 P1
Personal Portfolio project	🟠 P1
Skills restructuring	🟠 P1
OG Image	🟠 P1
SEO metadata	🟠 P1
Dedicated project pages	🟠 P1
Currently Learning	🟡 P2
Other Projects	🟡 P2
Animation refinement	🟢 P3
29. MVP

Kalau kita mau jangan kebanyakan ngulik dulu, MVP-nya cuma:

Sprint 1
[ ] Hero redesign
[ ] Add Open to Work
[ ] Add Freelance experience
[ ] Fix VINIX7 dates/title
[ ] SkillBridge featured
[ ] GIS project
[ ] Personal Portfolio project
[ ] Remove old projects from primary section
[ ] Replace skill ratings
[ ] Update CV PDF
[ ] Fix contact CTA
Sprint 2
[ ] Project detail pages
[ ] SEO metadata
[ ] OG image
[ ] JSON-LD
[ ] robots.ts
[ ] sitemap improvement
[ ] next/image
[ ] asset cleanup
Sprint 3
[ ] Performance optimization
[ ] Accessibility audit
[ ] Mobile polish
[ ] Recruiter UX testing
30. Definition of Done

Website dianggap selesai kalau recruiter yang baru pertama kali membuka website bisa menjawab dalam ≤15 detik:

“Oh, ini Farhan. Junior Full-Stack Developer, fokus Laravel/PHP, punya pengalaman freelance + internship, dan punya project nyata.”

Kemudian dalam ≤60 detik:

“SkillBridge ini cukup menarik. Dia bukan cuma bikin UI, tapi pernah mengerjakan full-stack, architecture/refactoring, database, dan system analysis.”

Dan akhirnya:

“CV-nya ada. GitHub ada. Email ada. Bisa gue hubungi.”

31. Target Final Website

Secara positioning, website akhirnya harus terasa seperti:

                 FARHAN WAHYUDI

          JUNIOR FULL-STACK DEVELOPER

 Building practical web applications with Laravel, PHP,
 JavaScript, MySQL and modern web technologies.

       [ View Projects ]   [ Download CV ]

             ● Open to Full-Time Opportunities


  ─────────────────────────────────────────────

  EXPERIENCE
  Freelance Developer & System Analyst
  VINIX7 — Frontend Developer Intern

  ─────────────────────────────────────────────

  FEATURED WORK

  SkillBridge Global
  Full-stack Laravel / MySQL application

  ─────────────────────────────────────────────

  SELECTED PROJECTS

  GIS Beauty Clinic Mapping
  Personal Portfolio

  ─────────────────────────────────────────────

  TECHNICAL SKILLS

  Backend · Frontend · Database · AI-assisted Development

  ─────────────────────────────────────────────

             HAVE AN OPPORTUNITY?

          [ Email Me ] [ LinkedIn ]