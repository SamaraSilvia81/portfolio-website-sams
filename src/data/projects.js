import { colors } from './tokens'

/*
 * ─── CATEGORIES ──────────────────────────
 * scope:  'personal' | 'freelance' | 'academic' | 'fan'
 * domain: 'fullstack' | 'frontend' | 'uxui' | 'edtech' | 'design-system'
 */

export const categories = {
  scope: [
    { id: 'all', label: 'All' },
    { id: 'personal', label: 'Personal' },
    { id: 'freelance', label: 'Freelance / PJ' },
    { id: 'academic', label: 'Academic' },
    { id: 'fan', label: 'Fan Project' },
  ],
  domain: [
    { id: 'all', label: 'All' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'uxui', label: 'UX/UI' },
    { id: 'edtech', label: 'EdTech' },
  ],
}

export const projects = [
  {
    id: '01',
    slug: 'summa-sh',
    name: 'Summa.sh',
    type: 'Academic Research Platform',
    scope: 'personal',
    domain: 'fullstack',
    desc: 'Full-stack platform for researchers — modules for literature review, datasets, and AI-powered abstracts.',
    motivation: 'Born from frustration with managing MSc research across spreadsheets, Notion, and random folders. I needed a single tool that covered the full research lifecycle — from systematic review protocols to dataset management — without the overhead of enterprise software.',
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
    links: {
      github: 'https://github.com/SamaraSilvia81',
    },
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
    scope: 'personal',
    domain: 'edtech',
    desc: 'Project management for educators — group evaluation, devolutivas in LaTeX, Chrome extension for annotations.',
    motivation: 'As a teacher at ETE Cícero Dias, I was grading student projects on paper and manually formatting feedback documents. I needed a system that handled the entire cycle: group formation, evaluation rounds, and professionally formatted feedback — so I built it.',
    longDesc: `Atelier.sh is what happens when a teacher who codes builds the tool they actually need. It manages the entire cycle of project-based learning: from student group formation through evaluation rounds to LaTeX-formatted feedback documents.

Key features include a compensatory bonus ("extra") grading system, a re-evaluation round system (initial/final), drag-and-drop criterion reordering, and a Chrome extension for visual annotation of student work directly in the browser.

The devolutiva system exports evaluation results to LaTeX via GitHub push, creating professionally formatted PDF feedback for each student group. This tool is actively used across multiple classes at ETE Cícero Dias.`,
    tags: ['React', 'Supabase', 'LaTeX', 'Chrome Extension'],
    accent: colors.ember,
    role: 'Solo developer & designer',
    year: '2024–present',
    status: 'Active — used in production',
    links: {
      github: 'https://github.com/SamaraSilvia81',
    },
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
    scope: 'personal',
    domain: 'frontend',
    desc: 'Micro-SaaS for Brazilian academic citations — CrossRef + Open Library API, instant ABNT formatting.',
    motivation: 'Every Brazilian student wastes hours formatting references in ABNT. The existing tools are clunky, ad-ridden, or outdated. I wanted a clean, fast, API-powered tool that does one thing extremely well: enter a DOI or ISBN, get a perfect ABNT reference.',
    longDesc: `Cita.sh solves one specific problem extremely well: formatting bibliographic references in ABNT standards. Brazilian researchers and students spend an unreasonable amount of time manually formatting citations — Cita.sh automates this by pulling metadata from CrossRef and Open Library APIs and outputting correctly formatted ABNT references.

Designed as a micro-SaaS within the .sh ecosystem, it's intentionally lightweight and focused. Enter a DOI, ISBN, or search by title, and get a copy-paste-ready reference in seconds.`,
    tags: ['CrossRef API', 'Open Library API', 'Micro-SaaS'],
    accent: colors.phosphor,
    role: 'Solo developer & designer',
    year: '2025',
    status: 'In development',
    links: {},
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
    scope: 'personal',
    domain: 'fullstack',
    desc: 'Retro-themed score tracker for tabletop games with match history, annotations, and YouTube music player.',
    motivation: 'Game nights with friends needed a better score tracker than scraps of paper. I wanted something with personality — multiple visual themes, match history, and a built-in music player for ambiance. Also a deliberate exercise in building a polished product without a framework.',
    longDesc: `TableTop started as a portfolio project and evolved into a fully-featured game night companion. Built with vanilla HTML/CSS/JS and a Supabase backend, it tracks scores across multiple game sessions with per-player annotations and a complete match history.

The multi-theme retro design system lets players switch visual modes mid-session. An integrated YouTube music player sets the mood. Authentication uses Supabase Google OAuth, and the app deploys on Vercel.

This project is a deliberate exercise in building something polished and complete without a framework — proving that vanilla JS, done well, is more than enough.`,
    tags: ['Vanilla JS', 'Supabase', 'Multi-theme', 'Vercel'],
    accent: colors.ember,
    role: 'Solo developer & designer',
    year: '2025',
    status: 'Complete',
    links: {
      live: 'https://tabletop-gamer.vercel.app/#library',
      github: 'https://github.com/SamaraSilvia81',
    },
    challenges: [
      'Building a multi-theme design system in vanilla CSS without a preprocessor or utility framework',
      'Implementing real-time score syncing across devices with Supabase subscriptions',
      "Designing a YouTube player integration that doesn't hijack the game tracking UX",
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Supabase', 'Google OAuth', 'Vercel'],
  },
  {
    id: '05',
    slug: 'lobby-e',
    name: 'L0bby-E',
    type: 'Student Event Portal',
    scope: 'personal',
    domain: 'edtech',
    desc: 'Event platform with certificate delivery, pixel art avatars, ranking system, and batch student import.',
    motivation: 'ETE Cícero Dias needed a way to manage student events, track attendance, and deliver certificates. The existing process was entirely manual. I built L0bby-E to gamify participation with rankings and pixel art avatars while automating the administrative burden.',
    longDesc: `L0bby-E is a student event management platform built for ETE Cícero Dias. It handles event registration, attendance tracking, certificate generation and email delivery, a student ranking page, and pixel art avatar selection.

The batch student import system allows administrators to onboard entire classes from spreadsheet data. The ranking system gamifies participation, and the pixel art avatars give students a sense of identity within the platform.`,
    tags: ['React', 'Firebase', 'Email API'],
    accent: colors.phosphor,
    role: 'Solo developer & designer',
    year: '2025',
    status: 'Deployed',
    links: {
      live: 'https://l0bby-e.vercel.app',
      github: 'https://github.com/SamaraSilvia81',
    },
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
    scope: 'fan',
    domain: 'frontend',
    desc: 'Saga-gating crew reveal, theme switcher, bounty timeline chart, and shareable deep links.',
    motivation: 'A love letter to One Piece. I wanted to build something that captured the joy of discovering new crew members — so the site reveals them progressively based on saga progression, mirroring the manga\'s own storytelling. Design craft meets fandom.',
    longDesc: `Log Pose is a love letter to One Piece, built as a fan site that reveals crew members progressively based on saga progression. The saga-gating system means new visitors experience the crew reveals in narrative order, mirroring the manga's storytelling.

Features include a theme switcher (each saga has its own color palette), a bounty timeline chart tracking bounty changes across arcs, and shareable deep links that let fans send specific crew states to friends.`,
    tags: ['HTML', 'CSS', 'JavaScript', 'Fan Project'],
    accent: colors.ember,
    role: 'Solo developer & designer',
    year: '2024',
    status: 'Complete',
    links: {
      github: 'https://github.com/SamaraSilvia81',
    },
    challenges: [
      'Designing a saga-gating system that feels like narrative discovery, not content restriction',
      'Building a theme switcher that swaps entire color palettes without FOUC',
      'Creating a bounty timeline chart that handles wildly different scales across 1000+ chapters',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: '07',
    slug: 'spidergwen-website',
    name: 'Spider-Gwen Website',
    type: 'Character Fan Site',
    scope: 'fan',
    domain: 'frontend',
    desc: 'Immersive fan site for Spider-Gwen with animated transitions, comic-inspired layout, and responsive design.',
    motivation: 'Inspired by the visual language of the Spider-Verse movies — the mixed media, the color palettes, the kinetic energy. I wanted to translate that energy into a web experience. Pure frontend craft, no framework, just CSS and animation.',
    longDesc: `An immersive fan site dedicated to Spider-Gwen / Ghost-Spider, built with pure HTML, CSS, and JavaScript. The design draws heavily from the Spider-Verse visual language — bold typography, comic panel layouts, and dynamic color shifts.

The site features animated page transitions, a responsive comic-panel grid, and character-specific color themes. It's a showcase of what's possible with vanilla CSS animations and thoughtful layout design.`,
    tags: ['HTML', 'CSS', 'JavaScript', 'Animation'],
    accent: colors.phosphor,
    role: 'Solo developer & designer',
    year: '2023',
    status: 'Complete',
    links: {
      live: 'https://samarasilvia81.github.io/spidergwen-website/',
      github: 'https://github.com/SamaraSilvia81/spidergwen-website',
    },
    challenges: [
      'Recreating the Spider-Verse mixed-media aesthetic in pure CSS without sacrificing performance',
      'Building fluid page transitions that feel cinematic on both desktop and mobile',
      'Designing a comic-panel responsive grid that adapts without breaking the visual narrative',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
  },
  {
    id: '08',
    slug: 'delicatte',
    name: 'Delicatte Confeitaria',
    type: 'Bakery Landing Page',
    scope: 'freelance',
    domain: 'frontend',
    desc: 'Elegant landing page for an artisan bakery — product showcase, responsive gallery, contact integration.',
    motivation: 'A freelance project for a local confectionery business that needed an online presence. The challenge was translating the warmth and craftsmanship of artisan baking into a digital experience that drives orders.',
    longDesc: `Delicatte Confeitaria is a landing page built for a local artisan bakery. The design focuses on showcasing products with high-quality imagery, warm typography, and a clean layout that makes ordering intuitive.

Features include a responsive product gallery, WhatsApp integration for orders, and a visual identity that reflects the handcrafted nature of the bakery's products.`,
    tags: ['React', 'Vercel', 'Responsive Design'],
    accent: colors.ember,
    role: 'Frontend developer & designer',
    year: '2024',
    status: 'Complete',
    links: {
      live: 'https://delicatte-confeitaria.vercel.app',
      github: 'https://github.com/SamaraSilvia81',
    },
    challenges: [
      'Creating a visual identity that communicates artisanal quality through digital design',
      'Optimizing image-heavy pages for fast loading without sacrificing visual quality',
      'Designing a mobile-first ordering flow integrated with WhatsApp',
    ],
    stack: ['React', 'CSS', 'Vercel'],
  },
  {
    id: '09',
    slug: 'themica',
    name: 'Themica',
    type: 'UI Component Lab',
    scope: 'personal',
    domain: 'frontend',
    desc: 'Experimental UI component laboratory — testing design patterns, interactions, and visual systems.',
    motivation: 'A playground for experimenting with UI patterns, micro-interactions, and design tokens outside the constraints of client projects. Where I test ideas before they become part of production systems.',
    longDesc: `Themica is an experimental UI laboratory where I prototype and test design patterns, component architectures, and visual systems. It's intentionally rough and exploratory — a sandbox for ideas that might eventually land in production projects.

The lab includes experiments with animation libraries, responsive grid systems, color token architectures, and interaction patterns. It's less a product and more a living sketchbook of frontend craft.`,
    tags: ['React', 'UI Lab', 'Design Tokens'],
    accent: colors.phosphor,
    role: 'Solo developer',
    year: '2024',
    status: 'Ongoing experiments',
    links: {
      live: 'https://themica-labs-ui-themica.vercel.app',
      github: 'https://github.com/SamaraSilvia81',
    },
    challenges: [
      'Structuring an experimental space that stays navigable as experiments accumulate',
      'Building a token system flexible enough to support wildly different visual directions',
      'Documenting experiments in a way that future-me can actually learn from them',
    ],
    stack: ['React', 'Vite', 'Design Tokens', 'CSS', 'Vercel'],
  },
  {
    id: '10',
    slug: 'palia-farm',
    name: 'Palia Farm',
    type: 'Game Companion Tool',
    scope: 'fan',
    domain: 'frontend',
    desc: 'Farm planner and resource tracker for the game Palia — crop layouts, seasonal calendars, and optimization.',
    motivation: 'I play Palia and kept losing track of crop rotations and seasonal windows. Instead of using a spreadsheet, I built a dedicated companion tool with visual farm layouts and seasonal planning.',
    longDesc: `Palia Farm is a companion tool for the cozy MMO Palia, focused on farm planning and resource management. It helps players optimize crop layouts, track seasonal availability, and plan their farming rotations visually.

The tool features a grid-based farm planner, seasonal crop calendars, and resource calculators. Built as a fan project that combines my love for cozy games with practical frontend engineering.`,
    tags: ['HTML', 'CSS', 'JavaScript', 'Game Tool'],
    accent: colors.ember,
    role: 'Solo developer & designer',
    year: '2024',
    status: 'Complete',
    links: {
      github: 'https://github.com/SamaraSilvia81/palia-farm',
    },
    challenges: [
      'Designing a grid-based farm layout editor that feels intuitive on both desktop and touch',
      'Building a seasonal calendar system that accounts for overlapping crop cycles',
      'Creating a resource calculator that handles complex crafting dependency chains',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
]

export const services = [
  { id: 'frontend', title: 'Frontend Development', desc: 'React, Vite, vanilla JS — responsive, performant, accessible. From SPA to micro-frontends.' },
  { id: 'uxui', title: 'UX/UI Design', desc: 'Research-driven interfaces from wireframes to high-fidelity. Design systems with real documentation.' },
  { id: 'systems', title: 'Design Systems', desc: 'Scalable component libraries, token systems, pattern documentation. Built to survive team handoffs.' },
  { id: 'edtech', title: 'EdTech Solutions', desc: 'Platforms for teaching, evaluation, grading, and academic management. Built by someone who teaches.' },
]

export const stack = [
  'React', 'Vite', 'TypeScript', 'JavaScript',
  'Next.js', 'Supabase', 'Firebase', 'Redux Toolkit',
  'Tailwind CSS', 'CSS Modules', 'LaTeX',
  'Figma', 'VS Code', 'Git', 'Vercel',
]
