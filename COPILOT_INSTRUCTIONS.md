# LUMOS WEBSITE REBUILD - GITHUB COPILOT INSTRUCTIONS

## PHASE 0: PROJECT ANALYSIS (START HERE)

Copilot, read and understand:
1. The entire `/src` folder structure
2. Feature-based organization pattern (`/features` folders)
3. Component patterns in `/shared/components`
4. Tailwind CSS configuration in `src/index.css`
5. Routing in `src/App.jsx`

NOTE: For this project, PRIMARY COLOR = ORANGE = `hsla(0, 100%, 58%, 1)` or `#ff4500`

Once done, proceed to Phase 1.

---

## PHASE 1: CREATE FOLDER STRUCTURE

Create these folders under `src/`:

```
src/features/landing/
├── pages/
│   └── Landing.jsx
└── components/
    ├── sections/
    │   ├── NavbarSection.jsx
    │   ├── HeroSection.jsx
    │   ├── FeaturesSection.jsx
    │   ├── ComponentsSection.jsx
    │   ├── PricingSection.jsx
    │   ├── TeamSection.jsx
    │   ├── FAQSection.jsx
    │   ├── CTASection.jsx
    │   └── FooterSection.jsx
    └── common/
        ├── MobileMenu.jsx
        ├── FeatureCard.jsx
        ├── PricingCard.jsx
        ├── TeamMemberCard.jsx
        └── FAQAccordion.jsx

src/features/landing-layout/
└── components/
    └── LandingLayout.jsx

src/shared/hooks/landing-hooks/
└── useMobileMenu.js

src/constants/
└── landing-constants.js
```

---

## PHASE 2: CREATE CONSTANTS FILE

File: `src/constants/landing-constants.js`

Include:
- COLORS object (orange, dark, backgrounds)
- NAV_LINKS array
- FEATURES array (4 items with icon names, titles, descriptions)
- COMPONENTS array (3 products)
- PRICING_PLANS array (3 plans with features)
- TEAM_MEMBERS array (6 people)
- FAQ_DATA array (5-6 questions)

---

## PHASE 3: TAILWIND CONFIG

Update `tailwind.config.js`:
- Add orange theme: primary: '#ff4500'
- Dark colors: dark: '#0a0a0a', darkGray: '#1a1a1a', etc.
- Keep existing configuration, just extend colors

---

## PHASE 4: LAYOUT & LANDING PAGE

### Create LandingLayout.jsx
- Simple wrapper
- Dark background container
- No sidebar
- Renders {children}

### Create Landing.jsx
- Imports all section components
- Renders them in order:
  1. Navbar
  2. Hero
  3. Features
  4. Components
  5. Pricing
  6. Team
  7. FAQ
  8. CTA
  9. Footer

---

## PHASE 5: NAVBAR & HERO

### NavbarSection.jsx
- Fixed header, backdrop blur
- Orange logo ("L" icon) on left
- Desktop nav links (hidden on mobile)
- Mobile hamburger menu
- "Get Started" button (orange)
- Responsive: show nav on lg+, hide on md-
- Smooth scroll to anchors (#features, #components, etc.)

### MobileMenu.jsx
- Controlled by useMobileMenu hook
- Shows on mobile when open
- Same links as desktop nav
- Closes on link click

### useMobileMenu.js
- useState(false) for isOpen
- toggleMenu() function
- Returns { isOpen, toggleMenu }

### HeroSection.jsx
- Grid: 2 cols desktop, 1 col mobile
- Left: Headline "See Beyond\nlimits" (limits in orange)
- Description paragraph
- 2 buttons: "Explore Now" (filled orange) + "Watch Demo" (outline)
- 3 stats: "250+ Users Tested", "98% Accuracy", "Top 50 Huawei"
- Right: Image placeholder box
- Responsive padding, text sizes

---

## PHASE 6: FEATURES SECTION

### FeaturesSection.jsx
- Title: "Why Lumos?" (Lumos in orange)
- Subtitle
- 4 feature cards in grid
- Grid: 1 col mobile, 2 cols tablet, 4 cols desktop
- Data from FEATURES constant

### FeatureCard.jsx
- Circular icon background (orange tint)
- Title
- Description
- Hover: scale up, shadow, border glow
- Smooth transitions

---

## PHASE 7: COMPONENTS SHOWCASE

### ComponentsSection.jsx
- Title: "Explore Your Lumos Assistive Gear"
- 3 product cards: Smart Glasses, Sensorized Cane, Bracelets
- Grid: 1/2/3 columns responsive
- Featured box: "LUMOS - YOUR INTELLIGENT ASSISTANT"
  - Main description
  - 2 cols: "Key Features" + "Smart Integration"
  - Bullet points with ✓ marks

---

## PHASE 8: PRICING

### PricingSection.jsx
- Title: "Pricing Plan"
- 3 pricing cards (Starter, Premium, Professional)
- Premium card is highlighted/scaled
- Feature comparison table below
- Responsive: 1/2/3 columns

### PricingCard.jsx
- Plan name
- Price ("/one-time" or "Contact")
- Description
- Features list with Check icons
- CTA button (orange for highlighted, outline for others)

---

## PHASE 9: TEAM SECTION

### TeamSection.jsx
- Title: "The Minds Behind Lumos"
- 6 team member cards
- Grid: 1/2/3 columns responsive

### TeamMemberCard.jsx
- Avatar circle with 2-letter initials
- Name
- Role (in orange)
- Short bio
- Hover effects

---

## PHASE 10: FAQ SECTION

### FAQSection.jsx
- Title: "Frequently Asked Questions"
- 5-6 FAQ items using FAQAccordion
- Dark background section

### FAQAccordion.jsx
- useState(false) for isExpanded
- Question always visible
- Click to expand/collapse answer
- Smooth animation
- Chevron icon rotates
- Orange accent on active

---

## PHASE 11: CTA & FOOTER

### CTASection.jsx
- Title: "Let's Illuminate the Future"
- Subtitle
- 2 buttons: "Start Your Journey" (filled) + "Contact Sales" (outline)
- Email signup box: input + "Join" button
- Centered, gradient background

### FooterSection.jsx
- 4-column layout (desktop), 1 column (mobile)
- Col 1: Brand logo + description
- Col 2: Product links
- Col 3: Company links
- Col 4: Legal links
- Bottom: Copyright + social icons (GitHub, LinkedIn, Twitter)

---

## PHASE 12: UPDATE ROUTING

In `src/App.jsx`:
- Add route: `<Route path="/" element={<Landing />} />`
- OR: `<Route path="/landing" element={<Landing />} />`
- Update App structure to use Landing page

---

## PHASE 13: RESPONSIVE DESIGN CHECKLIST

Test on:
- **Mobile (640px)**: Single column, hamburger menu, 44px+ buttons
- **Tablet (768px)**: 2-column layouts
- **Desktop (1024px+)**: Full layouts, hover effects

Ensure:
- [ ] No horizontal scrolling
- [ ] All text readable
- [ ] Images scale properly
- [ ] Buttons are touch-friendly
- [ ] Navigation collapses properly

---

## PHASE 14: COLOR & STYLING

### Lumos Colors:
- Primary Orange: #ff4500 or hsla(0, 100%, 58%, 1)
- Dark BG: #0a0a0a
- Gray Dark: #1a1a1a, #2a2a2a
- Text: white on dark

### Text Hierarchy:
- H1: 48-64px, bold, orange
- H2: 32-40px, bold
- H3: 24px, semibold
- Body: 16-18px
- Caption: 12-14px

### Spacing:
- Sections: `py-20` padding
- Container: `max-w-7xl mx-auto`
- Cards: `rounded-xl`, shadows

---

## PHASE 15: ANIMATIONS & POLISH

- All interactive: `transition-all duration-300`
- Hover effects on buttons, cards
- Smooth section scroll (CSS)
- Smooth mobile menu open/close

---

## IMPLEMENTATION ORDER (STRICT)

1. Phase 0 - Analysis
2. Phase 1 - Folders
3. Phase 2 - Constants
4. Phase 3 - Tailwind
5. Phase 4 - Layout
6. Phase 5 - Navbar/Hero
7. Phase 6 - Features
8. Phase 7 - Components
9. Phase 8 - Pricing
10. Phase 9 - Team
11. Phase 10 - FAQ
12. Phase 11 - CTA/Footer
13. Phase 12 - Routing
14. Phase 13 - Responsive testing
15. Phase 14 - Polish
16. Phase 15 - Final testing

---

## KEY RULES

✅ One file per component
✅ Use constants - NO hardcoding
✅ Tailwind only - NO CSS files
✅ Mobile-first responsive
✅ DRY principle - reuse components
✅ Clean code with comments
✅ Accessibility: semantic HTML, alt text
✅ Orange color everywhere for Lumos theme

---

## COMPLETION SIGNAL

When done, reply: **"✅ Lumos website is ready for testing"**

Then we can deploy to Vercel!