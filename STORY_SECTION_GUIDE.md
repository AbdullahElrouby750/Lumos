# Lumos Story Section Component Guide

## Overview
Create a new `StorySection.jsx` component to be inserted after `TeamSection.jsx` in `Landing.jsx`. This section showcases the project story with a split layout: left side with headline and description, right side with mission statement card and metrics.

**Design Reference:** See the provided screenshot showing layout, colors, and spacing.

---

## Component Structure

### File: `StorySection.jsx`
Location: `src/features/landing/pages/sections/StorySection.jsx`

```
StorySection/
├── StorySection.jsx (main component)
├── StorySection.module.css (component-specific styles)
└── (Uses shared utilities from index.css and HeroSection.module.css)
```

---

## Layout & Responsive Behavior

### Desktop (col-lg-6 and above)
- **Left Column (col-lg-6):** Headline, description, badges (ESTABLISHED, LOCATION)
- **Right Column (col-lg-6):** Mission statement card with metrics and play button

### Tablet (col-md-12)
- Stack vertically
- Full width cards

### Mobile (col-12)
- Single column layout
- Full width, adjusted spacing
- Smaller font sizes for headlines

---

## Color Palette
Reference: `index.css` root variables

```css
--brand-color: hsla(25, 100%, 50%, 1);        /* Orange #FF4500 */
--brand-color-hover: hsla(25, 100%, 0%, 1);   /* Dark brown hover state */
Background: hsla(0, 0%, 0%, 1);              /* Pure black #000000 */
Text Primary: #ffffff;                        /* White */
Text Secondary: hsla(218, 11%, 65%, 1);      /* Gray #a5a5a5 - customGray */
Card Background: #121212;                     /* Dark gray */
Card Border: #1f1f1f;                         /* Darker gray */
```

---

## Section Content & Structure

### Header Section (Left Column)

#### Badge: "OUR STORY"
```
- Orange rounded pill badge
- Text: "OUR STORY"
- Style: Small caps, orange text, transparent background with orange border
- Class: Use existing `.glow-orange` or create custom badge styling
```

#### Headline
```
Text: "Architecting the Future of Human Mobility"
- Use <h2> with class `display-5 fw-bold`
- Orange text for "Future" word only: `<span className="text-orange-lumos">Future</span>`
- White text for rest
- Line height: 1.2
- Margin bottom: 2rem (mb-4)
```

#### Description Paragraph
```
Text: "Founded at the intersection of empathy and deep tech, Team Nova is dedicated to breaking barriers for the visually impaired. We don't just build hardware; we craft intelligent companions that help people navigate the world with confidence and dignity."
- Class: `lead text-secondary customGray` (or use custom class for gray)
- Font size: base lead size (1.25rem on desktop, smaller on mobile)
- Line height: 1.6
- Max width: 90% of container
- Margin bottom: 3rem (mb-5)
```

#### Bottom Info Badges
Two side-by-side info badges with:

**Badge 1 - ESTABLISHED**
```
Label: "ESTABLISHED" (small, uppercase, gray)
Value: "2026 // GRAD_PROJ" (white, monospace font if available)
Styling: Flex row, gap between label and value
```

**Badge 2 - LOCATION**
```
Label: "LOCATION" (small, uppercase, gray)
Value: "Alexandria // EGYPT" (white, monospace font if available)
Styling: Flex row, gap between label and value
```

Both badges should:
- Be in a flex container with gap-5 (Bootstrap)
- Use small font for labels
- Use larger font for values
- Margin top: 2rem (mt-4)

---

### Right Column - Mission Card

#### Card Container
```
- Class: `card-dark` (from index.css) OR custom glassmorphism style
- Background: Dark semi-transparent with subtle border
- Border: 1px solid rgba(255,69,0,0.3) - orange tinted
- Padding: 3rem (p-4)
- Border radius: 1rem (rounded-4)
- Min height: match left column content
- Custom styling for glass effect (optional)
```

#### Mission Header
```
Icon: Orange dot (use circle div or ::before pseudo element)
Text: "MISSION STATEMENT."
- Class: Small uppercase text
- Color: text-orange-lumos
- Margin bottom: 1.5rem (mb-3)
- Border bottom: 2px solid rgba(255,69,0,0.5) or orange border
```

#### Mission Description
```
Text: "To illuminate the path for millions through human-centric assistive technology. We believe the future of AI isn't just compute it's empowerment."
- Class: Lead or larger paragraph text
- Color: text-secondary or white
- Line height: 1.6
- Margin bottom: 2.5rem (mb-4)
```

#### Metrics Grid
Three rows, each with label and value:

```
Row 1:
  Label: "DETECTION ACCURACY" (gray, small)
  Value: "99.2%" (orange, larger, bold)

Row 2:
  Label: "HAPTIC RESPONSE" (gray, small)
  Value: "0.02ms" (orange, larger, bold)

Row 3:
  Label: "BATTERY LIFE" (gray, small)
  Value: "OPTIMIZED (12h+)" (orange, larger, bold)
```

Each metric row:
- Display: flex, justify-content: space-between
- Padding: 1rem 0
- Border bottom: 1px solid rgba(255,255,255,0.1) (except last row)
- Class: `.metric-row` (create in module CSS)

#### Play Button/CTA
```
- Circular button with play icon
- Border: 1px solid var(--brand-color)
- Background: transparent OR very dark transparent
- Icon: Play triangle (can use SVG or icon library)
- Size: 3rem x 3rem (w-3, h-3 or custom)
- Color: text-orange-lumos
- Hover: Add glow effect, scale up slightly
- Centered in card
- Margin top: 2rem
```

#### Bottom Status Badge
```
Position: Bottom right of card
Background: Dark with orange accent
Text: "SYSTEM STATUS"
Value: "ACTIVE_PROTOTYPE"
Style: Small badge with icon/indicator
```

---

## CSS Module Classes to Create

### `StorySection.module.css`

```css
/* Section height and width utilities */
.sectionContainer {
  /* Use existing vh100 or similar from HeroSection.module.css */
}

.contentWrapper {
  /* Container width and centering */
  width: 85%;
  max-width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  /* Or use existing w85 class */
}

.leftColumn {
  /* Left side layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 2rem; /* Desktop only */
}

.rightColumn {
  /* Right side with mission card */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 2rem; /* Desktop only */
}

.storyBadge {
  /* "OUR STORY" badge */
  display: inline-block;
  width: fit-content;
  padding: 0.5rem 1.25rem;
  border: 2px solid var(--brand-color);
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--brand-color);
  text-transform: uppercase;
  background-color: transparent;
  margin-bottom: 1.5rem;
}

.headline {
  /* "Architecting the Future..." headline */
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 2rem;
  color: #ffffff;
  /* Responsive: reduce to 2rem on tablet, 1.5rem on mobile */
}

.description {
  /* Main description paragraph */
  font-size: 1rem;
  line-height: 1.6;
  color: var(--customGray, hsla(218, 11%, 65%, 1));
  margin-bottom: 3rem;
  max-width: 90%;
}

.infoBadges {
  /* Container for ESTABLISHED and LOCATION */
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.infoBadge {
  /* Individual badge wrapper */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.infoBadgeLabel {
  /* "ESTABLISHED", "LOCATION" labels */
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: hsla(218, 11%, 65%, 1);
}

.infoBadgeValue {
  /* "2026 // GRAD_PROJ", "Alexandria // EGYPT" values */
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  font-family: 'Courier New', monospace; /* Optional monospace */
  letter-spacing: 0.05em;
}

.missionCard {
  /* Main mission statement card */
  background-color: #121212;
  border: 1px solid rgba(255, 69, 0, 0.3);
  border-radius: 1rem;
  padding: 2.5rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.03);
}

.missionHeader {
  /* "MISSION STATEMENT." header */
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--brand-color);
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(255, 69, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.missionDot {
  /* Orange dot before "MISSION STATEMENT" */
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--brand-color);
}

.missionText {
  /* Mission description paragraph */
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  margin-bottom: 2.5rem;
  color: hsla(218, 11%, 65%, 1);
}

.metricsContainer {
  /* Metrics grid wrapper */
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 2rem;
}

.metricRow {
  /* Individual metric row (DETECTION ACCURACY, HAPTIC RESPONSE, etc.) */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.metricRow:last-child {
  border-bottom: none;
}

.metricLabel {
  /* Metric label text */
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: hsla(218, 11%, 65%, 1);
}

.metricValue {
  /* Metric value (99.2%, 0.02ms, etc.) */
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--brand-color);
  font-family: 'Courier New', monospace; /* Optional */
}

.playButton {
  /* Circular play button */
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 2px solid var(--brand-color);
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
  margin-top: 1.5rem;
  color: var(--brand-color);
  font-size: 1.5rem;
}

.playButton:hover {
  background-color: rgba(255, 69, 0, 0.1);
  box-shadow: 0 0 15px rgba(255, 69, 0, 0.5);
  transform: scale(1.1);
}

.statusBadge {
  /* "SYSTEM STATUS ACTIVE_PROTOTYPE" badge */
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: rgba(255, 69, 0, 0.1);
  border: 1px solid var(--brand-color);
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--brand-color);
  align-self: flex-end;
  margin-top: 1rem;
}

.statusIcon {
  /* Icon indicator in status badge */
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: var(--brand-color);
}

/* Responsive Design */

@media (max-width: 992px) {
  .leftColumn,
  .rightColumn {
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 2rem;
  }

  .headline {
    font-size: 2.25rem;
  }

  .description {
    max-width: 100%;
  }

  .missionCard {
    min-height: auto;
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .headline {
    font-size: 1.75rem;
  }

  .infoBadges {
    gap: 1.5rem;
    flex-direction: column;
  }

  .missionCard {
    padding: 1.5rem;
  }

  .metricRow {
    padding: 1rem 0;
  }

  .playButton {
    width: 3.5rem;
    height: 3.5rem;
  }
}

@media (max-width: 576px) {
  .headline {
    font-size: 1.5rem;
  }

  .description {
    font-size: 0.95rem;
  }

  .infoBadges {
    gap: 1rem;
  }

  .missionCard {
    padding: 1.25rem;
  }

  .statusBadge {
    font-size: 0.65rem;
    padding: 0.5rem 0.75rem;
  }
}
```

---

## Component JSX Structure

### StorySection.jsx Template

```jsx
import style from './StorySection.module.css';

/**
 * StorySection
 * Story/About section with:
 * - Left: Headline, description, info badges
 * - Right: Mission statement card with metrics
 * - Responsive: 2 cols desktop, 1 col mobile
 */
export function StorySection() {
  return (
    <section 
      id="story" 
      className="section-padding-large bg-black position-relative d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div className={style.contentWrapper}>
        <div className="row g-5 align-items-start">
          {/* LEFT COLUMN */}
          <div className="col-12 col-lg-6">
            <div className={style.leftColumn}>
              {/* Badge */}
              <div className={style.storyBadge}>
                Our Story
              </div>

              {/* Headline */}
              <h2 className={style.headline}>
                Architecting the <span className="text-orange-lumos">Future</span> of Human Mobility
              </h2>

              {/* Description */}
              <p className={style.description}>
                Founded at the intersection of empathy and deep tech, Team Nova is dedicated to breaking barriers for the visually impaired. We don't just build hardware; we craft intelligent companions that help people navigate the world with confidence and dignity.
              </p>

              {/* Info Badges */}
              <div className={style.infoBadges}>
                <div className={style.infoBadge}>
                  <span className={style.infoBadgeLabel}>Established</span>
                  <span className={style.infoBadgeValue}>2026 // GRAD_PROJ</span>
                </div>
                <div className={style.infoBadge}>
                  <span className={style.infoBadgeLabel}>Location</span>
                  <span className={style.infoBadgeValue}>Alexandria // EGYPT</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-12 col-lg-6">
            <div className={style.missionCard}>
              {/* Mission Header */}
              <div className={style.missionHeader}>
                <span className={style.missionDot} />
                Mission Statement.
              </div>

              {/* Mission Text */}
              <p className={style.missionText}>
                To illuminate the path for millions through human-centric assistive technology. We believe the future of AI isn't just compute it's empowerment.
              </p>

              {/* Metrics */}
              <div className={style.metricsContainer}>
                <div className={style.metricRow}>
                  <span className={style.metricLabel}>Detection Accuracy</span>
                  <span className={style.metricValue}>99.2%</span>
                </div>
                <div className={style.metricRow}>
                  <span className={style.metricLabel}>Haptic Response</span>
                  <span className={style.metricValue}>0.02ms</span>
                </div>
                <div className={style.metricRow}>
                  <span className={style.metricLabel}>Battery Life</span>
                  <span className={style.metricValue}>OPTIMIZED (12h+)</span>
                </div>
              </div>

              {/* Play Button */}
              <button 
                className={style.playButton}
                aria-label="Watch demo"
              >
                ▶
              </button>

              {/* Status Badge */}
              <div className={style.statusBadge}>
                <span className={style.statusIcon} />
                System Status: ACTIVE_PROTOTYPE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
```

---

## Integration into Landing.jsx

Add this import at the top:
```jsx
import { StorySection } from '../sections/StorySection';
```

Add this component in the route/page after `<TeamSection />`:
```jsx
<Landing>
  {/* ... other sections ... */}
  <TeamSection />
  <StorySection />  {/* INSERT HERE */}
  {/* ... other sections ... */}
</Landing>
```

---

## Key Design Details & Best Practices

### Typography
- Use Bootstrap classes: `display-5 fw-bold`, `lead`, `fw-600`, `fw-700`
- Custom `customGray` class for secondary text: `hsla(218, 11%, 65%, 1)`
- Monospace font for values (optional but recommended): `'Courier New', monospace`
- Line height: 1.2 for headings, 1.6 for body text

### Colors
- Primary text: `#ffffff` (white)
- Secondary text: `hsla(218, 11%, 65%, 1)` or `.customGray` class
- Orange accent: `var(--brand-color)` = `hsla(25, 100%, 50%, 1)` = `#FF4500`
- Card background: `#121212`
- Borders: Use orange with 0.3 opacity for subtle glow effect

### Spacing
- Large gaps (between columns): `g-5` (Bootstrap)
- Margins: `mb-3`, `mb-4`, `mb-5`, `mt-4`
- Padding in card: `2.5rem` (desktop), `2rem` (tablet), `1.25rem` (mobile)

### Hover Effects
- Apply to buttons and interactive elements
- Use `transition: all 0.3s ease`
- Include scale transform and glow effect
- Example: `.playButton:hover { transform: scale(1.1); box-shadow: 0 0 15px rgba(255, 69, 0, 0.5); }`

### Responsive Breakpoints
- **Desktop (lg)**: col-lg-6 for two-column layout, full spacing
- **Tablet (md)**: col-12, reduced padding, adjusted font sizes
- **Mobile (sm)**: col-12, minimal padding, scaled down fonts
- Use Bootstrap utility classes: `d-none d-lg-block` if needed

### Accessibility
- Use semantic HTML: `<section>`, `<h2>`, `<p>`, `<button>`
- Add `aria-label` to buttons
- Ensure color contrast meets WCAG AA standards
- Use real buttons for interactive elements, not divs

### Visual Polish
- Subtle glassmorphism effect on card (optional blur + transparency)
- Orange glow on hover states
- Smooth transitions (0.3s ease)
- Consistent border styling with orange tint
- Align items properly using flexbox

---

## Testing Checklist

- [ ] Desktop layout (1200px+): Two columns properly aligned
- [ ] Tablet layout (768px-991px): Stacked vertically, readable
- [ ] Mobile layout (<768px): Single column, touch-friendly
- [ ] All text readable and properly sized
- [ ] Hover effects work on buttons and interactive elements
- [ ] Orange highlights (#FF4500) consistent throughout
- [ ] Spacing and padding correct on all breakpoints
- [ ] No overflow issues on mobile
- [ ] All metrics display correctly
- [ ] Play button accessible and responsive
- [ ] Status badge visible and styled correctly

---

## Notes for Copilot

1. **Reuse existing utilities** from `index.css` and `HeroSection.module.css` (w85, vh100, customGray, text-orange-lumos, card-dark, etc.)
2. **Follow Bootstrap 5** conventions for grid and spacing (col-lg-6, g-5, mb-4, etc.)
3. **Mobile-first approach**: Define mobile styles first, then use media queries for larger screens
4. **Use CSS variables** from :root for colors (--brand-color, --brand-color-hover)
5. **Accessibility matters**: Use semantic HTML and proper ARIA labels
6. **Test on actual devices**: Don't just rely on browser DevTools
7. **Performance**: Use CSS variables and transitions efficiently, no heavy animations
8. **Consistency**: Match the style of TeamSection, FeatureCard, and HeroSection

---

## Reference Files to Use

- `index.css` - Global styles, color variables, utilities
- `HeroSection.module.css` - Width/height utilities (w85, w90, vh100, etc.)
- `App.jsx` - Router structure
- `TeamSection.jsx` - Similar layout structure and patterns
- Screenshot provided - Design reference for layout, spacing, and styling

Good luck! 🚀
