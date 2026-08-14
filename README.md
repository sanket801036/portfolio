# Sanket Kolhe — Portfolio

Personal site for Sanket Kolhe, Python full-stack & AI engineer.

**Live:** https://sanket801036.github.io/portfolio/

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 3.4
- Framer Motion
- Lucide icons

## Design

Editorial layout — serif display type (Instrument Serif), monospace metadata
labels (JetBrains Mono), Inter for body copy, hairline rules instead of cards,
and a single rust accent. Light and dark themes share one set of CSS custom
properties defined in `src/index.css`; the toggle writes to `localStorage` and
an inline script in `index.html` applies it before first paint.

## Content

All copy lives in `src/data/portfolio.ts` — profile, stats, `now`, focus areas,
skills, experience, projects, `openSource`, education and certifications. Edit
that file to update the site; no component changes needed.

Two of those need upkeep:

- `now` is the "what I'm on right now" strip under the hero. Bump `updated`
  whenever you change it. If it stops being true, delete the section rather than
  leaving a stale one.
- `openSource` lists public-repo contributions. Describe each one exactly as it
  happened — a reader is one click from the issue.

To show the résumé link in the hero, drop a `resume.pdf` into `public/` and set
`profile.resumeUrl` to `"resume.pdf"`.

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages.

---

[GitHub](https://github.com/sanket801036) · [LinkedIn](https://www.linkedin.com/in/sanket-kolhe)
