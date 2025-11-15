
**Use this prompt with a site/code generator (e.g., GitHub Agent, Google AI Studio).**


**Project identity (do not change):**
- Team name: **Nova**  
- Project name: **Lumos**  
- Brand primary color: `#FFB267`  
- Team size: 8  
- Canonical content source: use the PDF **“Assistive Mobility System for the Visually Impaired”** for all copy (features, tech specs, components, roadmap info if needed for internal docs). If any text is missing, synthesize concise, clear copy suitable for a public pitch site.  
- Primary tagline (default): **“Lumos — Illuminate the Path”**

---

## High-level goals
- Produce a **single-page application (SPA)** implemented with **Vite + React (JavaScript)** (no TypeScript).  
- Styling: **Tailwind CSS** configured and used. Use the brand color `#FFB267` for CTAs and accents.  
- All images/logos must be **placeholders** (simple SVG/PNG placeholders) with proper `alt` attributes. The generator must **NOT** attempt to create final images; place `TODO` placeholders.  
- Final output: a ready-to-deploy git repo that can be deployed on **Vercel** with `npm install` → `npm run build` → connect to Vercel.

---

## Required repo & folder structure (exact)

/
├─ README.md
├─ package.json
├─ vite.config.js
├─ index.html
├─ postcss.config.cjs
├─ tailwind.config.cjs
├─ public/
│ ├─ assets/
│ │ ├─ logo-placeholder.svg # placeholder; alt set in markup
│ │ ├─ hero-placeholder.svg
│ │ └─ device-placeholder.png
│ └─ downloads/
│ ├─ Assistive_Mobility_One_Pager.pdf
│ └─ Assistive_Mobility_Presentation.pptx
├─ src/
│ ├─ main.jsx
│ ├─ App.jsx
│ ├─ index.css
│ ├─ components/
│ │ ├─ Header.jsx
│ │ ├─ HeroSection.jsx
│ │ ├─ FeaturesSection.jsx
│ │ ├─ DevicesDiagram.jsx
│ │ ├─ AddonsSection.jsx
│ │ ├─ TechnologySection.jsx
│ │ ├─ TeamSection.jsx
│ │ ├─ ContactSection.jsx
│ │ ├─ DownloadsSection.jsx
│ │ └─ Footer.jsx
│ ├─ lib/
│ │ └─ form.js # contact form handler (Formspree/EmailJS integration)
│ └─ data/
│ └─ content.js # all copy pulled/synthesized from the PDF
└─ .github/workflows/ci.yml



---

## SPA structure & sections (single page navigation)
The site is a **single page** with anchor navigation (smooth scroll). Top nav links scroll to sections:

1. **Hero** (top)  
   - Project name **Lumos**, tagline, short subtitle, two CTAs: *Download One-Pager* and *Request Demo*.  
   - Visual: centered device-placeholder image group (praclets, stick, earphones, glasses, mobile app). Use placeholders + accessible `alt` attributes.

2. **About / Mission**  
   - One-paragraph mission & social impact (from PDF).

3. **Features / Core Components**  
   - 4 cards: **Praclets (bracelets)**, **Smart Stick**, **Mini Earphones**, **Smart Glasses (Pi4)**. Each card: small placeholder SVG icon, 2–3 bullet specs (ToF v1, BLE, haptics, etc.), short one-line benefit.

4. **Devices Diagram (Top-half visual)**  
   - A clean, centered diagram (SVG placeholders) where each device has an arrow to a small description bubble (implement as responsive positioned elements).  
   - Separator banner: **“Add-ons & Possible Features”** centered below diagram.

5. **Add-ons & Possible Features**  
   - Left-aligned list with placeholders for: Smartwatch integration, Home mapping, Fingerprint payment on glasses (note UX caveat), etc.

6. **Technology**  
   - Concise technical specs (ESP32-S3 for bracelets, VL53L1CX ToF v1, Raspberry Pi 5 for glasses + Coral USB suggested, Flutter mobile + C++ module note, .NET + SQL Server on Huawei RDS). Use bullet points and a small tech-stack horizontal strip.

7. **Team (Nova)**  
   - 8 member slots with role + 1–2 line bio each. Use placeholder images (alt text). Include contact / LinkedIn link placeholders.

8. **Downloads & Resources**  
   - One-pager PDF and pitch PPTX file download buttons (files placed in `/public/downloads/`).

9. **Contact / Get Involved**  
   - Simple contact form: name, email, role (sponsor/pilot/dev), message. Validate fields, add ARIA labels, show success/error toast.

10. **Footer / Legal**  
    - Links to Privacy & Terms (static modals or anchor sections). Copyright + Team Nova.

---

## UI & branding specifics (exact)
- Primary accent: `#FFB267` for buttons, highlights.  
- Base theme: dark-neutral hero variant (#121212) + light content sections (#ffffff / #f6f6f6) — ensure WCAG contrast.  
- Font: **Inter** (or Poppins) via Google Fonts.  
- CSS variables in `index.css`: `--brand: #FFB267; --bg-dark: #121212; --text-light: #ffffff;`.  
- Buttons: rounded-md, subtle shadow, hover states with slightly darker/lighter brand tints.  
- All images use placeholders and include meaningful `alt` attributes (e.g., `alt="Placeholder: Lumos device mockup - add final image"`).

---

## Accessibility & i18n (must)
- Implement skip nav link, proper landmark roles, semantic headings, and ARIA labels on forms.  
- Add an English / Arabic toggle for text direction (LTR/RTL). Make layout support RTL swap (fonts must support Arabic). Provide `dir` switch and example translations for top-level strings only (placeholder Arabic text okay).  
- Ensure keyboard navigation works for all interactive elements.

---



---

## Behavior, interactions & animations
- Smooth scroll for nav anchors.  
- Subtle entrance animations for sections (AOS or CSS-based, accessible-reduced-motion option).  
- Device diagram should be responsive: on small screens stack vertically; on large screens show center diagram with description bubbles.

---

## Build, CI & deploy (Vercel)
- `package.json` scripts: `dev`, `build`, `preview`, `lint`.  
- Include `.github/workflows/ci.yml` that runs `npm ci`, `npm run lint`, `npm run build` on push to `main`.  
- README must include **one-click Vercel** instructions: link GitHub repo to Vercel, set environment variables in Vercel dashboard, and set build command `npm run build` and output directory `dist` (Vite default). Provide troubleshooting tips (common env var issues).

---

## Minimal tests & code quality
- ESLint + Prettier config.  
- A couple of basic Jest/react-testing-library tests (Header renders, Contact form validation).  
- Provide `npm run lint` and `npm run test`.

---

## README (must contain)
- Project summary and tagline.  
- Local setup: `npm install`, `npm run dev`.  
- Build & deploy steps for Vercel.  
- Env var list and how to configure Formspree/EmailJS.  
- How to replace placeholder images & update alt text.  
- How to enable Arabic (RTL) mode and where to swap strings.  
- How to run tests & CI notes.

---

## Extra rules for the generator (must follow)
1. **Do not** generate final product images for logos or device photos — instead add simple placeholder SVGs in `/public/assets/` with clear alt text and `TODO` in filenames.  
2. All copy must be concise, professional, and derived from the PDF where possible. Avoid long paragraphs on the homepage — use bullets + short sentences.  
3. Keep repo JavaScript-only (no TypeScript).  
4. No blog, no roadmap page, no research/resources page. Only sections defined above.  
5. Ensure accessible and mobile-first layout.

---

## Final deliverables (what I expect to download)
1. A zipped repo / GitHub repo link with full source (Vite + React + Tailwind).  
2. `README.md` with deploy instructions for Vercel and env var list.  
3. All placeholder assets in `/public/assets/` and PDF/PPTX in `/public/downloads/`.  
4. Fully working SPA with sections: Hero, About, Features, Devices Diagram, Add-ons, Technology, Team, Downloads, Contact, Footer.  
5. CI workflow and basic tests.

---

**End of prompt.**
