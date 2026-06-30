# Adil Deokar — Portfolio

A production-grade, highly animated personal portfolio for **Adil Deokar** — AI Developer · Software Developer · AI Product Manager.

Built to be **content-driven and modular**: all resume content lives in typed data files under [`/content`](./content), so updating the site means editing data, not components.

---

## Tech stack

| Concern        | Choice                                                            |
| -------------- | ----------------------------------------------------------------- |
| Framework      | Next.js 14 (App Router) + TypeScript, **static export** (`output: 'export'`) |
| Styling        | Tailwind CSS with a token-based light/dark theme                  |
| Animation      | Framer Motion + a custom canvas particle network + Lenis smooth scroll |
| Theme          | `next-themes` (class strategy, no flash)                          |
| Icons          | `lucide-react`                                                    |

> **A note on the stack:** the brief suggested GSAP + React Three Fiber. I used **Framer Motion** for all sequenced/scroll animation and a **hand-rolled `<canvas>` particle network** for the hero's "AI agent" visual instead. This keeps the bundle light, the static export bullet-proof, and reduced-motion fallbacks trivial — while delivering the same (or better) "wow". Everything else follows the brief. Swapping in GSAP/R3F later is isolated to the hero/visual components.

---

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build / static export (outputs to `./out`):

```bash
npm run build
```

---

## Project structure

```
app/                 # routes: / (home), /projects, /about + SEO (sitemap, robots, og, icon)
components/
  layout/            # Navbar, Footer, ThemeToggle, SmoothScroll, CustomCursor
  ui/                # reusable primitives (buttons, cards, counters, reveal, etc.)
  sections/          # home-page sections (Hero, About, Skills, Experience, ...)
  projects/          # ProjectCard, ProjectModal, ProjectsExplorer (filtering)
  visual/            # ParticleNetwork canvas
content/             # ⭐ ALL editable data lives here (typed)
lib/                 # utils (cn, asset path helper)
public/              # images, resume PDF, static assets
```

---

## How to update content

Everything is typed (see [`content/types.ts`](./content/types.ts)).

### Add / edit a project

1. Open [`content/projects.ts`](./content/projects.ts).
2. Copy an existing object, give it a unique `slug`, and edit the fields.
3. Drop screenshots into `public/images/projects/<slug>/` and reference them in `images`.
   Until the files exist, a styled **"image coming soon"** placeholder renders automatically — the layout never looks broken.

The Projects page, category filters, and detail modal all update themselves.

### Add an experience / certification / education entry

- Experience → [`content/experience.ts`](./content/experience.ts)
- Awards & certifications → [`content/certifications.ts`](./content/certifications.ts)
- Education → [`content/education.ts`](./content/education.ts)
- Skills → [`content/skills.ts`](./content/skills.ts)
- Interests / hobbies / stats → [`content/interests.ts`](./content/interests.ts)
- Personal info & social links → [`content/site.ts`](./content/site.ts)

### Swap the resume PDF

Replace **`public/resume/Adil_Deokar_Resume.pdf`** with your file, keeping the same name (or update `resumePath` in `content/site.ts`). The download buttons in the Nav, Hero, and Footer pick it up automatically.

> The Rake Optima project links to `public/projects/Rake-Optima-Presentation-SIH-2025.pdf` — drop that PDF in to enable the link.

### Swap the profile photo

Replace **`public/images/profile.jpg`** with a **square, high-resolution** photo (same filename). The hero and about page already reserve a square frame, so a square image fits perfectly.

### Customize theme colors / fonts

- **Colors:** edit the HSL design tokens in [`app/globals.css`](./app/globals.css) (`:root` for light, `.dark` for dark).
- **Fonts:** edit the `next/font` imports in [`app/layout.tsx`](./app/layout.tsx).

---

## Deployment

### Vercel (recommended)

1. Push to GitHub and import the repo on [vercel.com](https://vercel.com).
2. Zero config needed — `vercel.json` sets the framework, build command, and `out` output dir.
3. Leave `NEXT_PUBLIC_BASE_PATH` **unset** (root domain).

### GitHub Pages

A workflow is included at [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main`. The workflow builds with `NEXT_PUBLIC_BASE_PATH=/<repo-name>` (required so assets resolve on `username.github.io/<repo-name>`) and deploys `out/`.

> **User/org page or custom domain?** Set `NEXT_PUBLIC_BASE_PATH` to `""` in the workflow `env` block.

---

## Accessibility & performance

- Semantic HTML, keyboard-navigable nav & modal, themed focus states.
- `prefers-reduced-motion` honored across every animation (cursor, particles, smooth scroll, reveals).
- Responsive from 360px up. Images are lazy-loaded with graceful placeholders.
- SEO: Open Graph / Twitter meta tags, `sitemap.xml`, `robots.txt`, SVG favicon. To add a social preview image, drop a `1200×630` `public/og.png` and add it under `openGraph.images` in `app/layout.tsx`.
