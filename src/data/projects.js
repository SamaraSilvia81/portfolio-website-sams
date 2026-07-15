import { colors } from './tokens'

export const projects = [
  {
    id: '01',
    slug: 'summa-sh',
    name: 'Summa.sh',
    type: 'Academic Research Platform',
    desc: 'Full-stack platform for researchers — modules for literature review, datasets, and AI-powered abstracts.',
    longDesc: `Summa.sh is the academic backbone of the .sh ecosystem. Built for researchers who need more than a spreadsheet and less than an enterprise tool. The platform covers the full research lifecycle across six integrated modules:

**Farol** — Systematic literature review management with search protocol tracking.
**Bancada** — Research workspace for organizing papers, notes, and analysis.
**Acervo** — Personal academic library with tagging and full-text search.
**Pauta** — Research agenda and milestone planning.
**Vitrine** — Public-facing research portfolio for sharing findings.
**Dataset** — Dataset management with metadata, versioning, and export.

The AI integration (Groq) generates structured abstracts from research notes, and the entire auth flow uses Supabase with Google OAuth and Row-Level Security policies across 22 tables.`,
    tags: ['React', 'Supabase', 'Redux Toolkit', 'Groq AI'],
    accent: colors.phosphor,
    role: 'Solo developer & designer',
    year: '2025–present',
    status: 'Active development',
    challenges: [
      'Designing a 22-table relational schema with proper RLS policies for multi-user isolation',
      'Integrating Groq AI for abstract generation without exposing API keys client-side',
      'Building a settings/profile system with avatar upload, LinkedIn/Lattes fields, and hero banner',
    ],
    stack: ['React', 'Vite', 'Redux Toolkit', 'Supabase', 'Groq API', 'Google OAuth'],
  },
  {
    id: '02',
    slug: 'atelier-sh',
    name: 'Atelier.sh',
    type: 'Teaching & Evaluation System',
    desc: 'Project management for educators — group evaluation, devolutivas in LaTeX, Chrome extension for annotations.',
    longDesc: `Atelier.sh is what happens when a teacher who codes builds the tool they actually need. It manages the entire cycle of project-based learning: from student group formation through evaluation rounds to LaTeX-formatted feedback documents.

Key features include a compensatory bonus ("extra") grading system, a re-evaluation round system (initial/final), drag-and-drop criterion reordering, and a Chrome extension for visual annotation of student work directly in the browser.

The devolutiva system exports evaluation results to LaTeX via GitHub push, creating professionally formatted PDF feedback for each student group. This tool is actively used across multiple classes at ETE Cícero Dias.`,
    tags: ['React', 'Supabase', 'LaTeX', 'Chrome Extension'],
    accent: colors.ember,
    role: 'Solo developer & designer',
    year: '2024–present',
    status: 'Active — used in production',
    challenges: [
      'Building a Chrome extension that annotates arbitrary web pages and syncs with the main platform',
      'Generating valid LaTeX documents from dynamic evaluation data and pushing to GitHub',
      'Designing a flexible grading schema that supports compensatory bonuses and re-evaluation rounds',
    ],
    stack: ['React', 'Vite', 'Supabase', 'LaTeX', 'GitHub API', 'Chrome Extensions API'],
  },
  {
    id: '03',
    slug: 'cita-sh',
    name: 'Cita.sh',
    type: 'ABNT Reference Formatter',
    desc: 'Micro-SaaS for Brazilian academic citations — CrossRef + Open Library API, instant ABNT formatting.',
    longDesc: `Cita.sh solves one specific problem extremely well: formatting bibliographic references in ABNT standards. Brazilian researchers and students spend an unreasonable amount of time manually formatting citations — Cita.sh automates this by pulling metadata from CrossRef and Open Library APIs and outputting correctly formatted ABNT references.

Designed as a micro-SaaS within the .sh ecosystem, it's intentionally lightweight and focused. Enter a DOI, ISBN, or search by title, and get a copy-paste-ready reference in seconds.`,
    tags: ['CrossRef API', 'Open Library API', 'Micro-SaaS'],
    accent: colors.phosphor,
    role: 'Solo developer & designer',
    year: '2025',
    status: 'MVP complete',
    challenges: [
      'Mapping diverse API response formats (CrossRef vs Open Library) to a unified ABNT output schema',
      'Handling edge cases in ABNT formatting (multiple authors, missing fields, different publication types)',
      'Designing a search UX that works equally well with DOIs, ISBNs, and free-text queries',
    ],
    stack: ['JavaScript', 'CrossRef API', 'Open Library API', 'CSS'],
  },
  {
    id: '04',
    slug: 'tabletop',
    name: 'TableTop',
    type: 'Game Score Tracker',
    desc: 'Retro-themed score tracker for tabletop games with match history, annotations, and YouTube music player.',
    longDesc: `TableTop started as a portfolio project and evolved into a fully-featured game night companion. Built with vanilla HTML/CSS/JS and a Supabase backend, it tracks scores across multiple game sessions with per-player annotations and a complete match history.

The multi-theme retro design system lets players switch visual modes mid-session. An integrated YouTube music player sets the mood. Authentication uses Supabase Google OAuth, and the app deploys on Vercel.

This project is a deliberate exercise in building something polished and complete without a framework — proving that vanilla JS, done well, is more than enough.`,
    tags: ['Vanilla JS', 'Supabase', 'Multi-theme', 'Vercel'],
    accent: colors.ember,
    role: 'Solo developer & designer',
    year: '2025',
    status: 'v5–v7 iteration',
    challenges: [
      'Building a multi-theme design system in vanilla CSS without a preprocessor or utility framework',
      'Implementing real-time score syncing across devices with Supabase subscriptions',
      'Designing a YouTube player integration that doesn\'t hijack the game tracking UX',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Supabase', 'Google OAuth', 'Vercel'],
  },
  {
    id: '05',
    slug: 'lobby-e',
    name: 'L0bby-E',
    type: 'Student Event Portal',
    desc: 'Event platform with certificate delivery, pixel art avatars, ranking system, and batch student import.',
    longDesc: `L0bby-E is a student event management platform built for ETE Cícero Dias. It handles event registration, attendance tracking, certificate generation and email delivery, a student ranking page, and pixel art avatar selection.

The batch student import system allows administrators to onboard entire classes from spreadsheet data. The ranking system gamifies participation, and the pixel art avatars give students a sense of identity within the platform.`,
    tags: ['React', 'Firebase', 'Email API'],
    accent: colors.phosphor,
    role: 'Solo developer & designer',
    year: '2025',
    status: 'Deployed',
    challenges: [
      'Building a certificate generation system that produces personalized PDFs and delivers via email',
      'Designing a batch import pipeline that validates and deduplicates student records from spreadsheets',
      'Creating a ranking algorithm that fairly rewards participation across different event types',
    ],
    stack: ['React', 'Firebase', 'Email API', 'PDF Generation'],
  },
  {
    id: '06',
    slug: 'log-pose',
    name: 'Log Pose',
    type: 'One Piece Fan Experience',
    desc: 'Saga-gating crew reveal, theme switcher, bounty timeline chart, and shareable deep links.',
    longDesc: `Log Pose is a love letter to One Piece, built as a fan site that reveals crew members progressively based on saga progression. The saga-gating system means new visitors experience the crew reveals in narrative order, mirroring the manga's storytelling.

Features include a theme switcher (each saga has its own color palette), a bounty timeline chart tracking bounty changes across arcs, and shareable deep links that let fans send specific crew states to friends.

This is the project where design craft meets fandom — every interaction is built to spark the same joy the source material does.`,
    tags: ['HTML', 'CSS', 'JavaScript', 'Fan Project'],
    accent: colors.ember,
    role: 'Solo developer & designer',
    year: '2024',
    status: 'Complete',
    challenges: [
      'Designing a saga-gating system that feels like narrative discovery, not content restriction',
      'Building a theme switcher that swaps entire color palettes without FOUC',
      'Creating a bounty timeline chart that handles wildly different scales across 1000+ chapters',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
]

export const services = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    desc: 'React, Vite, vanilla JS — responsive, performant, accessible. From SPA to micro-frontends.',
    longDesc: 'I build interfaces that are fast, accessible, and maintainable. My stack centers on React + Vite for complex applications and vanilla JS when simplicity is the right call. Every project gets semantic HTML, responsive layouts, and keyboard accessibility as baseline, not afterthought.',
  },
  {
    id: 'uxui',
    title: 'UX/UI Design',
    desc: 'Research-driven interfaces from wireframes to high-fidelity. Design systems with real documentation.',
    longDesc: 'Design starts with understanding the problem, not opening Figma. I run lightweight research (user interviews, competitive analysis, journey mapping) before touching pixels. Deliverables range from wireframes and prototypes to polished high-fidelity screens with interaction specs.',
  },
  {
    id: 'systems',
    title: 'Design Systems',
    desc: 'Scalable component libraries, token systems, pattern documentation. Built to survive team handoffs.',
    longDesc: 'A design system is only useful if the team actually uses it. I build token-based systems with clear naming conventions, documented patterns, and components that work across contexts. My MSc research on technical debt in microfrontends directly informs how I think about system boundaries and API contracts.',
  },
  {
    id: 'edtech',
    title: 'EdTech Solutions',
    desc: 'Platforms for teaching, evaluation, grading, and academic management. Built by someone who teaches.',
    longDesc: 'I build education tools because I use them. As an active teacher at ETE Cícero Dias, every EdTech product I ship is tested in a real classroom with real students. This means features like batch student import, LaTeX-formatted feedback, and grading schemas that handle the messiness of actual pedagogy.',
  },
]

export const stack = [
  'React', 'Vite', 'TypeScript', 'JavaScript',
  'Supabase', 'Firebase', 'Redux Toolkit',
  'Tailwind CSS', 'CSS Modules', 'LaTeX',
  'Figma', 'VS Code', 'Git', 'Vercel',
]
