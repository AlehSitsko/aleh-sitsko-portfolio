# Aleh Sitsko — Portfolio

Personal portfolio website for an operations-focused full stack developer.

**Live:** [alehsitsko.dev](https://alehsitsko.dev)

---

## Tech Stack

- React 19 + Vite 8
- JavaScript (no TypeScript)
- CSS Custom Properties (dark/light themes)
- Static site — no backend, no environment variables
- Deployed on **Cloudflare Pages**

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Production Build

```bash
npm run build
npm run preview
```

Output directory: `dist/`

---

## Cloudflare Pages Settings

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Production branch | `main` |
| Custom domain | `alehsitsko.dev` |
| www redirect | `www.alehsitsko.dev` → `alehsitsko.dev` |

No environment variables required. Static site only.

---

## Project Structure

```
src/
  components/
    icons/          # Custom brand SVG icons (GitHub, LinkedIn)
    previews/       # Polished mock UI components (EMS, Nexvora, CallForm)
    Footer.jsx
    Navbar.jsx
  data/
    links.js        # Single source for all external links and project data
  sections/
    Hero.jsx
    About.jsx
    FeaturedProject.jsx
    Projects.jsx
    Skills.jsx
    Certification.jsx
    Experience.jsx
    Services.jsx
    Contact.jsx
  styles/
    tokens.css      # Design tokens (light default, dark override)
    global.css      # Reset, layout, shared components
public/
  favicon.svg
  Aleh_Sitsko_Resume_Web.pdf
```

---

## Themes

- **Light** (default) — clean, business-friendly, recruiter-ready
- **Dark** — modern SaaS/operations dashboard feel
- Theme toggle persists in `localStorage`
- System preference respected only if no saved preference exists

---

## Updating Content

All external links are centralized in `src/data/links.js`:

- `resume` — path to PDF in `public/`
- `certificate` — Coursera certificate URL
- `linkedin` — update when LinkedIn URL is confirmed
- `github`, `email`, `domain` — project and contact links

---

## Replacing Mock UI Previews

The three project preview components are polished placeholders:

- `src/components/previews/EMSPreview.jsx` — EMS dashboard mockup
- `src/components/previews/NexvoraPreview.jsx` — Nexvora website mockup
- `src/components/previews/CallFormPreview.jsx` — Call intake form mockup

Replace with real `<img>` screenshots when available. The component slot in each section card is ready to swap.

---

## Contact

- Email: sitskoaleh@gmail.com
- GitHub: [github.com/AlehSitsko](https://github.com/AlehSitsko)
- Portfolio: [alehsitsko.dev](https://alehsitsko.dev)
