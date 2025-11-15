# Lumos — Illuminate the Path

This repository is a single-page demo site for the Lumos project (Team Nova). It is built with Vite + React and Tailwind CSS and uses placeholder assets. Replace placeholders and copy with content from the canonical PDF.

Quick start

1. Install dependencies:

```powershell
npm install
```

2. Run dev server:

```powershell
npm run dev
```

3. Build for production:

```powershell
npm run build
```

Vercel deploy

- Connect the GitHub repository to Vercel.
- Set the build command to `npm run build` and the output directory to `dist`.
- Add any environment variables (e.g., `VITE_CONTACT_ENDPOINT`) in the Vercel dashboard.

Where to edit content & placeholders

- All copy: `src/data/content.js` (derived from Assistive Mobility PDF).
- Placeholder images: `public/assets/*` — replace with final images and preserve `alt` text.
- Downloads: `public/downloads/*` — drop real PDF/PPTX here.

RTL / Arabic

- Toggle RTL via the header RTL button. Top-level strings are in `src/data/content.js`.

Tests & lint

- Run lint: `npm run lint` (ESLint config in repo).
- Run unit tests: `npm run test` (uses `vitest` in this template).

CI

See `.github/workflows/ci.yml` which runs `npm ci`, `npm run lint` and `npm run build` on push to `main`.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
