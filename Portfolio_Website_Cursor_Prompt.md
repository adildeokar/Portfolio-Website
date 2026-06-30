# Master Prompt for Cursor (Claude Opus) - Adil Deokar Portfolio Website

Copy everything below into Cursor as your initial instruction to the agent. It's written so the model can work with minimal follow-up clarification.

---

## ROLE & OBJECTIVE

You are a senior frontend engineer and UI/UX designer. Build a **production-grade, highly animated, modular personal portfolio website** for Adil Deokar - an AI Developer / Software Developer / AI Product Manager. The site must look like it was made by a top-tier design studio (think Linear, Vercel, Stripe, Framer's own site, or a Awwwards "site of the day" portfolio) - NOT a generic Bootstrap template. It needs to be content-rich (this is also a working resume/portfolio that recruiters will judge), fast, accessible, and easy for me to update with new projects over time.

The site will be deployed for free on **Vercel** (preferred) or **GitHub Pages**, so it must be a fully static-exportable build with zero paid services, zero backend, and no server-side secrets required to run.

---

## TECH STACK (use exactly this, don't substitute without telling me why)

- **Framework:** Next.js 14+ (App Router) with TypeScript, configured for static export (`output: 'export'`) so it works on both Vercel and GitHub Pages.
- **Styling:** Tailwind CSS (with a custom design token theme - see Theme section below).
- **Animation:**
  - Framer Motion for component-level transitions, page transitions, scroll-triggered reveals, hover micro-interactions.
  - GSAP + ScrollTrigger for more advanced scroll-driven sequences (e.g., hero parallax, pinned sections, staggered text reveals) - only where Framer Motion isn't enough.
  - Lenis (or `studio-freight/lenis`) for buttery smooth scrolling.
- **3D/visual flair (optional but encouraged for the hero):** React Three Fiber + drei for a subtle interactive 3D element (e.g., an abstract animated node/network graphic reflecting "AI agents" theme) - must be lightweight and lazy-loaded, with a static fallback for low-power devices/reduced-motion users.
- **Icons:** lucide-react.
- **Content data:** All personal/resume content lives in structured TypeScript data files (`/content/*.ts`), NOT hardcoded inside components. This is critical for "modular and easy to update."
- **Theme toggle:** `next-themes` for dark/light mode with no flash-of-wrong-theme on load.
- **Forms (if a contact form is included):** Use a static-friendly approach - either a `mailto:` link styled as a button, or Formspree/Web3Forms (free tier, client-side only, no backend needed) - since GitHub Pages/static export can't run API routes.
- **Deployment configs:** Include both a `vercel.json` (or zero-config Vercel setup) AND a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys to GitHub Pages, plus correct `basePath`/`assetPrefix` handling for project-page GitHub Pages URLs (e.g., `username.github.io/repo-name`).

---

## DESIGN DIRECTION / THEME

Avoid generic "developer portfolio" clichés (no default shadcn card grids with zero personality, no stock Unsplash hero photo, no Bootstrap navbar). Specific direction:

- **Visual identity:** A modern, technical, slightly futuristic aesthetic that reflects "AI / agentic systems / builder." Think dark, high-contrast, glassmorphism + subtle gradient mesh backgrounds, monospace accents for technical details (like a terminal/IDE feel) mixed with a clean humanist sans-serif for readability.
- **Typography:** Pair one distinctive display/heading font (e.g., a geometric or grotesk font like "Space Grotesk," "Clash Display," or "General Sans") with a clean body font (e.g., "Inter" or "Geist"). Use a monospace font (e.g., "JetBrains Mono" or "Geist Mono") for labels, tags, code-like UI bits (skill chips, dates, tech stack pills).
- **Color system:** Build a token-based palette (CSS variables / Tailwind theme extension) with distinct light and dark variants - not just inverted black/white. Suggest an accent color drawn from something like electric indigo/violet or cyan, used sparingly for CTAs, links, glow effects, and active states. Both themes need to feel intentional and equally polished - dark mode is not just "a black background slapped on light mode."
- **Motion philosophy:** Purposeful, not gratuitous. Every animation should communicate hierarchy, guide attention, or give feedback (hover states, cursor-aware effects, magnetic buttons). Respect `prefers-reduced-motion` everywhere - provide a reduced/no-motion fallback for every animated component.
- **Texture/depth:** Use subtle grain/noise overlays, soft glow/blur accents behind key elements, animated gradient blobs, and grid/dot background patterns to avoid flatness - but keep it performant (CSS/SVG-based, not heavy images).

Before writing code, generate 2–3 distinct visual directions (e.g., "Terminal/Dev Console," "Soft Glassmorphism," "Bold Editorial Grid") as a short written concept each, pick the strongest one matching the above brief, and proceed - don't ask me to choose unless genuinely ambiguous.

---

## SITE STRUCTURE / PAGES

This is a **multi-page** site (App Router routes), not a single long scroll, but the Home page should itself be rich and scrollable with multiple sections, since it's the main landing experience.

### 1. `/` - Home (the main page)
Sections, in order, each with its own scroll-triggered entrance animation:
1. **Hero** - Name, title ("AI Developer | Software Developer | AI Product Manager"), a punchy one-line tagline, animated background (3D or gradient/particle), primary CTAs: **"View Projects"** and a prominent **"Download Resume"** button (distinct styling, see Resume Download section below). Include subtle scroll-down indicator.
2. **About / Intro** - Short bio adapted from his own words (builder at heart, systems nerd by habit; 3x Hackathon Winner; led HayyAI as a live AI SaaS; open-source maintainer; community-driven engineering ethos). Animate text reveal word-by-word or line-by-line on scroll.
3. **Quick Stats / Highlights strip** - Animated counters or chip row: "3x Hackathon Winner," "10+ IBM Certifications," "5+ AWS Certifications," "Lead Dev @ DevKnight," etc. - use count-up animation on scroll into view.
4. **Skills** - Grouped by category (AI/ML, Languages, Cloud & DevOps, Frontend & Design) as interactive animated tag/pill clusters or a hoverable skill cloud - not a boring progress-bar list.
5. **Experience timeline** - Vertical animated timeline (line draws in on scroll) covering all 4 internships in reverse-chronological order, each as an expandable/hover card with role, company, dates, and bullet achievements.
6. **Featured Projects preview** - 3–4 standout project cards (Krew, Clause AI, SIH Rake Optima, AI Crowd Flow System) with hover-interactive cards (tilt/parallax on mouse move, image/visual reveal), each linking to `/projects` or a project detail modal/page. Include a "See all projects →" link to the full Projects page.
7. **Certifications & Achievements** - A clearly distinct, visually rich section (not just a wall of text) - see dedicated section below for full requirements.
8. **Education** - Compact animated cards for MIT ADT University and Bishop's School with key highlights (CGPA, leadership roles, captaincies).
9. **Contact / CTA footer section** - Social links (LinkedIn, GitHub), email, phone, a friendly closing CTA, and the resume download button again.

### 2. `/projects` - Projects page
- Full grid/list of ALL projects (see Project data below), built so that **adding a new project later is a one-line addition to a data file** - no component editing required.
- Each project entry supports: title, short description, full description (bullet points), tech stack tags, an array of image URLs (with clear placeholder handling - see Images section), links (GitHub repo, live demo, PDF/presentation if applicable), category/tag (e.g., "AI Agents," "Hackathon," "Edge AI," "Full-Stack"), and date/timeframe.
- Include filterable/sortable UI: filter by tag/category, with animated grid re-layout (e.g., using Framer Motion's `layout` prop or `AnimatePresence`) when filters change.
- Each project card opens into a detail view (modal or `/projects/[slug]` dynamic route generated via `generateStaticParams` for static export compatibility) showing the full bullet breakdown, all images in a lightbox/carousel, and links.

### 3. `/about` (or fold into Home + expand) - "Hobbies/Interests" page
Per your request for a page "showcasing my projects [and] my hobbies" - implement this as a dedicated `/about` page (or `/hobbies`) that includes:
- A more personal, expanded bio.
- An **Interests/Hobbies section** with fun, distinct visual treatment per interest (icon + short flavor text) for: Basketball, Chess, Event Management, Offroading Trails, Mountain Biking, Rifle Shooting. Give this section personality - small illustrations, playful hover animations, maybe a horizontal scroll-snap row of interest cards.
- Personal achievements tied to interests (e.g., National Level Basketball - Maharashtra, State Rifle Shooter - Pune, 3x Best Basketball Player Award, multiple sport team captaincies) - present these as a lighter, more human counterpoint to the technical achievements.

### Navigation
- Sticky/floating nav bar with smooth-scroll for in-page sections on Home, and route links for Projects/About. Active-section highlighting as user scrolls. Mobile: animated slide-in/hamburger menu.
- Theme toggle (sun/moon animated icon swap) and the resume download button both live in the nav, always visible.

---

## RESUME DOWNLOAD

- Add a `/public/resume/Adil_Deokar_Resume.pdf` (I will supply the actual file - for now use a placeholder PDF and a clear `TODO: replace with real resume PDF` comment + a short README note on exactly where to drop it).
- The download button must be a true file download (`<a href="/resume/Adil_Deokar_Resume.pdf" download>`), styled distinctly from other CTAs (e.g., outlined with an animated download icon that bounces/slides on hover), and present in: Hero, Nav bar, and Footer.

---

## CERTIFICATIONS & ACHIEVEMENTS SECTION (must be clearly distinct, per explicit request)

Don't just bullet-list ~20 certifications - group and visualize them:
- **Awards & Professional Titles** (top tier, badge/trophy styled): Smart India Hackathon (SIH) 2024 Winner, IEEE INNOVATEX 2026 Winner, Innovation2k25 (College of Engineering Phaltan) Winner, We Pitch 2nd Runner-Up (MIT ADTU Pune).
- **Top Certifications (highlighted/featured chips)**: IBM Certified AI Product Manager, Google Cloud Generative AI Leader, AWS Certified Data Engineer (Exam Prep DEA-C01).
- **Full certification library**, grouped by issuer in expandable accordions or tabbed panels:
  - **IBM (10):** Product Management: Foundations & Stakeholder Collaboration; Initial Product Strategy & Plan; Product Management: An Introduction; Building AI-Powered Products; Supercharge Your PM Career with Gen AI; Generative AI: Foundation Models & Platforms; Generative AI: Introduction & Applications; Generative AI: Prompt Engineering Basics; Introduction to Artificial Intelligence; Python for Data Science, AI & Development.
  - **AWS (5):** Application Integration & Networking; Data Analytics; Databases; Security, Governance & Compliance; Storage.
  - **Google Cloud (4):** Gen AI: Unlock Foundational Concepts; Gen AI: Navigate the Landscape; Gen AI: Beyond the Chatbot; Gen AI Apps: Transform Your Work.
  - **Other (1):** University of Pennsylvania - Computational Thinking for Problem Solving.
- Use logos/brand-colored accents for IBM/AWS/Google Cloud groupings (simple monochrome/svg icons, not copyrighted logo images, to avoid licensing issues - use text badges with brand-adjacent colors instead, or generic certificate icons).
- Animate each card/accordion with a subtle stagger-in on scroll and a satisfying expand/collapse transition.

---

## CONTENT DATA (use this as the structured source of truth - put into `/content/` data files)

### Personal info
- Name: Adil Deokar
- Title: AI Developer | Software Developer | AI Product Manager
- Location: Pune, India
- Email: deokaradil@gmail.com
- Phone: +91 7028690073
- Website: adildeokar.com
- LinkedIn: https://in.linkedin.com/in/adil-deokar-62b561283
- GitHub: https://github.com/adildeokar

### Bio (use/adapt, don't invent new claims)
"Builder at heart, systems nerd by habit. A 3x Hackathon Winner building AI that actually ships - Lead Developer at DevKnight, and the mind behind Krew, a Multi-Agent AI Organization that won a national hackathon out of 700+ teams. Maintains open-source, production-ready ML utilities on GitHub with clean, well-documented code. Comfortable across Java, Python, C++, and C#, with end-to-end builds on AWS and Azure, an IBM AI Product Manager foundation, and a bias for measurable impact. Community-driven engineering isn't a buzzword here - it's the job."

### Skills (group exactly like this)
- **AI / ML:** Agentic AI Development, Generative AI, LLM & Prompt Engineering, MLOps, Deep Learning, Edge Computing & Optimization
- **Languages:** Python, C++, Java, C#, JavaScript
- **Cloud & DevOps:** AWS, Azure (App Service, Static Web Apps, Postgres), CI/CD with GitHub Actions & Docker, Post-Production Deployment
- **Frontend & Design:** React / Next.js, Three.js, UI/UX, Framer, Adobe Apps, WordPress

### Experience (reverse chronological)
1. **Software Development and AI Intern - Monkstack Solutions LLP** (Feb 2026 – Jun 2026): Built full-stack Next.js/React applications and a Three.js app for an onboarded client; integrated Azure Postgres backend; orchestrated full deployments on Azure App Service and Static Web Apps with CI/CD via GitHub Actions and Docker.
2. **Software Developer - DKC DevKnight Technologies Pvt Ltd** (Oct 2025 – Feb 2026): Architected scalable AI systems and intelligent automation frameworks, ensuring seamless design-to-tech integration; led development of AI agents, backend infrastructure, and performance optimization.
3. **Lead Tech & AI - Hayy Media Pvt Ltd** (Oct 2024 – Oct 2025): Led end-to-end development and launch of HayyAI as a live SaaS product, owning architecture, model integration, and production rollout; built CI/CD pipelines with logging, metrics, and error monitoring enabling weekly releases without regressions; designed user-first UX flows; coordinated cross-functional delivery.
4. **SDE Intern - SoftTech Engineers Ltd.** (Jun 2024 – Aug 2024): Enhanced live software products; added file export features; built a password-protected PDF viewer saving client time.

### Projects (full list - structure as an array of objects)
1. **Krew - Multi-Agent AI Organization** - National Hackathon Winner, 700+ teams. Manager-led team of specialized AI agents that collaborate, critique, and hand off tasks; enforced collaboration with defined roles/goals/backstories, tracing and guardrails to reduce hallucinations; production-ready orchestration layer with parallel/sequential pipelines, tool integrations, observability.
2. **Clause AI - Legal Multi-Agentic System** - AI-driven contract analysis platform detecting risk, bias, and ambiguity; contextual intelligence layer adapting drafting/review to a company's voice and risk profile; simulation and benchmarking to stress-test clauses against industry patterns.
3. **SIH 2025 - Rake Optima** - 90–95% wagon utilization, ~30% logistics cost reduction. Cloud-native optimization engine using demand forecasting, material-to-rake matching, multi-objective optimization for end-to-end rake plans with disruption-aware re-optimization; unified route planning, loading sequencing, dispatch scheduling into real-time decision support. (Note: has an associated presentation PDF - link it.)
4. **AI Crowd Flow Analytical System - Jetson Orin** - Edge AI system on NVIDIA Jetson Orin for real-time crowd counting, flow analytics, congestion alerts across multi-camera streams; privacy-preserving deployments with density heatmaps, occupancy thresholds, operational dashboards.
5. **Image Upscaling NCNN using Jetson Orin** - Deployed NCNN-based super-resolution models on Jetson Orin with Vulkan-accelerated inference for real-time image upscaling; optimized pipelines with INT8/FP16 paths and tiling/batch strategies.
6. **FedMed - Federated Learning for Healthcare Time Series** - End-to-end distributed ML platform with centralized, distributed, and federated training workflows (Python + React); real-time WebSocket-based monitoring dashboards; confusion matrix, throughput/latency, and model comparison analytics.
7. **Anti-Proxy Attendance System** - SIH 2024 Winner. Open-source Raspberry Pi–based biometric attendance system with R307 fingerprint verification; faculty-controlled sessions with authenticated start/stop and PIN-secured closure; UART-based Python integration using Adafruit libraries for commodity-hardware reproducibility.
8. **Ride-Sharing Intelligence System** - Real-time ride-sharing analytics dashboard (Streamlit, MongoDB, Plotly) monitoring rides, drivers, revenue, surge zones, live geo-mapped trips; simulation, demand–supply insights, driver performance views, one-click database seeding.

For each project's `images` field, use clearly-named placeholder paths (e.g., `/images/projects/krew/cover.png`, `/images/projects/krew/screenshot-1.png`) with a styled "image coming soon" placeholder component as the fallback, so the layout already looks complete and I can drop in real screenshots later without touching code.

### Awards, certifications, education, interests
Use exactly the data already broken out in the "Certifications & Achievements" and "Hobbies/Interests" sections above plus:
- **Education:**
  - MIT Art, Design & Technology University, Pune - B.Tech (ongoing), Jun 2023–Present, CGPA 8.75 (expected), Management Lead at Ideate, TEDx MITADT Team, Tech Team CodeChef.
  - Bishop's School, Pune - Jun 2013–May 2021, Grade 92%, SAT 1350, House Captain, 3�- Best Basketball Player Award, School Team Captain (Basketball, Badminton, Volleyball & Cricket).
  - Rajiv Gandhi Jr College - Jun 2021–May 2023, Grade 71.33%, SAT 94th percentile, National Level Basketball (Maharashtra), State Rifle Shooter (Pune).

---

## MODULARITY & MAINTAINABILITY REQUIREMENTS (important - I will keep updating this)

- All resume/portfolio content (personal info, skills, experience, projects, certifications, education, interests) must live in typed data files under `/content/` (e.g., `content/projects.ts`, `content/experience.ts`, `content/skills.ts`, `content/certifications.ts`), each exporting a typed array/object with a clear TypeScript `interface`/`type`.
- Components must be **purely presentational**, importing from `/content/`, never containing hardcoded resume text inline.
- Adding a new project = adding one object to `content/projects.ts` and dropping images into `/public/images/projects/<slug>/`. Document this exact workflow in the README.
- Use a clean component folder structure: `/components/ui` (generic, reusable - buttons, cards, badges, section-wrapper, animated-counter, etc.), `/components/sections` (Hero, About, Skills, Experience, Projects, Certifications, Education, Contact), `/components/layout` (Navbar, Footer, ThemeToggle).
- Strong typing throughout; no `any`.
- Include a clear `README.md` covering: how to run locally, how to add a project/certification/experience entry, how to swap the resume PDF, how to deploy to Vercel, how to deploy to GitHub Pages (including the `basePath` step), and how to customize theme colors/fonts.

---

## ACCESSIBILITY, PERFORMANCE & QUALITY BAR

- Lighthouse scores: aim for 90+ on Performance, Accessibility, Best Practices, SEO.
- Semantic HTML, proper heading hierarchy, alt text on all images (driven by content data fields), keyboard-navigable nav and modals, visible focus states styled to match the theme (not just removed).
- `prefers-reduced-motion` fallback for every major animation.
- Responsive from 360px mobile up through large desktop - test the timeline, project grid, and certifications accordion specifically at mobile widths since they're the most layout-complex sections.
- Add proper `<meta>` tags / Open Graph tags for link-sharing (LinkedIn/Twitter preview card) using the bio and a generated OG image.
- Add a `favicon`, `sitemap.xml`, and `robots.txt`.

---

## DELIVERY INSTRUCTIONS FOR THE AGENT

1. Scaffold the Next.js + TypeScript + Tailwind project with static export configured.
2. Build the design token theme (colors, fonts, spacing) first, in `tailwind.config.ts` and a `globals.css`, for both light and dark mode.
3. Build `/content/` data files fully populated with the data above before building components.
4. Build shared layout (Navbar with theme toggle + resume download, Footer) and reusable `/components/ui` primitives.
5. Build Home page sections top to bottom, each as its own component, with scroll-triggered animation wired in per section.
6. Build `/projects` page with filtering + detail view (modal or dynamic route).
7. Build `/about` (hobbies) page.
8. Wire up the resume PDF download with a placeholder file + a clearly marked TODO.
9. Add deployment configs for both Vercel and GitHub Pages, plus the README.
10. Do a pass for responsive design, accessibility, and reduced-motion fallbacks.
11. Run a build to confirm the static export succeeds with no errors before finishing.

If anything in this brief is ambiguous, make the most design-forward, professional choice rather than the safest/most generic one - the explicit goal is a "wow" portfolio, not a template.
