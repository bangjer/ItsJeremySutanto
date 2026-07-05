# Jeremy Sutanto — Finance & Business Portfolio

Personal finance and business portfolio landing page: a black-and-white editorial one-pager
with a subtle navy accent, built to be recruiter-friendly and easy to scan.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- `next/font`: Inter (body), Inter Tight (display), IBM Plex Mono (labels)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customising

| What | Where |
| --- | --- |
| All text content (roles, projects, skills, links…) | `lib/data.ts` |
| Contact email & LinkedIn URL | `site` object in `lib/data.ts` |
| CV file | Replace `public/Jeremy-Sutanto-CV.pdf` (or change `site.cvPath`) |
| Certificate proof files | `public/certificates/` — linked from `certifications` in `lib/data.ts` |
| Portrait photo | Replace `public/portrait.jpg` (3:4 portrait works best) |
| Colors & design tokens | `:root` variables in `app/globals.css` |
| Fonts | `app/layout.tsx` |
| Section order | `app/page.tsx` |

## Structure

```
app/
  layout.tsx        # Fonts, metadata, skip link
  page.tsx          # Section order
  globals.css       # Design tokens, smooth scroll, reveal animation
components/         # One component per section
lib/data.ts         # All site content
public/             # CV PDF (and later, your portrait)
```
