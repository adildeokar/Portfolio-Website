# Adil Deokar, portfolio

The source of [adildeokar.com](https://www.adildeokar.com): a one-page portfolio built with Next.js 14
(App Router, static export) and plain CSS. No UI or animation libraries.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out
```

Vercel builds on every push to `main` and serves `./out` (see `vercel.json`).

## Where things live

| Path | What |
| --- | --- |
| `content/resume.ts` | Every fact on the site, taken from `Resumes/Adil_Deokar_Resume_OCT.pdf`. Edit this when the résumé changes. |
| `public/resume/Adil_Deokar_Resume.pdf` | The downloadable résumé. Replace the file to update it. |
| `public/images/world/` | Openly licensed pictures from Wikimedia Commons; `credits.json` feeds the credit line in the footer. |
| `app/globals.css` | All styling: tokens at the top, then one block per section. |
| `components/` | One file per section: `Hero`, `Work`, `Record` (roles and stack), `Wins`, `Life`, `Contact`, `Footer`. |

## Design

Art direction "The name as a monument": the name runs across the screen and its letters turn light
where they cross the portrait. Palette "Frost and slate", one typeface (General Sans, from Fontshare).
The **Hiring for** control in the Work section brings forward the projects and roles that match the
chosen focus, and keeps the choice in the URL (`?for=ai`, `web`, `edge`, `data`) so a filtered view can
be shared. All motion stops under `prefers-reduced-motion`, and the moving name has a pause button.

## Updating content

- **A new role or project:** add an entry to `roles` or `projects` in `content/resume.ts`. A project
  needs a picture in `public/images/world/` and its `focus` tags.
- **A new picture:** add its credit to `public/images/world/credits.json` so it appears in the footer.
