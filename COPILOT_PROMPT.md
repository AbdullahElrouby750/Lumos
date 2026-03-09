# Story Section Component Implementation Prompt

You are a React/CSS expert developer tasked with implementing a new landing page section for the Lumos assistive technology website.

## Your Task

Create a complete `StorySection` component based on the detailed guide provided. This component should be inserted into the `Landing.jsx` file immediately after the `TeamSection` component.

## What You Need to Deliver

### 1. **StorySection.jsx Component File**
   - Location: `src/features/landing/pages/sections/StorySection.jsx`
   - Must be a functional React component with default export
   - Follow the exact JSX template structure provided in the guide
   - Use all the class names and styling from the CSS module
   - Import the CSS module correctly: `import style from './StorySection.module.css';`

### 2. **StorySection.module.css Stylesheet**
   - Location: `src/features/landing/pages/sections/StorySection.module.css`
   - Must include ALL the CSS classes defined in the guide
   - Must be fully responsive with proper media queries
   - Must use CSS variables from :root (--brand-color, etc.)
   - Must follow the exact styling specifications provided

### 3. **Integration into Landing.jsx**
   - Add the import statement at the top of the file
   - Add the `<StorySection />` component after `<TeamSection />`
   - Ensure proper component hierarchy and spacing

## Critical Requirements

### Design Fidelity
- Match the design screenshot exactly
- Use ONLY the colors specified (orange #FF4500, black, grays)
- Maintain proper spacing and typography
- Orange accent text for the word "Future" in the headline
- All metrics must display with orange values

### Responsiveness
- Desktop (1200px+): Two-column layout (left text, right mission card)
- Tablet (768px-991px): Stacked layout, readable text sizes
- Mobile (<768px): Single column, optimized for touch
- No horizontal scrolling on any device
- All content must be readable at all breakpoints

### Code Quality
- Use Bootstrap 5 utility classes (col-lg-6, g-5, mb-4, etc.)
- Do NOT use Tailwind CSS classes
- Do NOT create inline styles (use CSS module classes instead)
- Do NOT use hardcoded colors (use CSS variables)
- Follow the exact naming conventions from the guide
- Add JSDoc comments explaining component purpose
- Ensure semantic HTML (<section>, <h2>, <p>, <button>)

### Styling Details
- Play button must be circular with orange border
- Play button must have hover effect: scale(1.1) + glow
- Mission card must have subtle glassmorphism effect
- All transitions must be 0.3s ease
- Metric rows must have bottom borders (except last)
- Status badge must appear in bottom right of card
- All text must use proper font weights (600, 700)

### Accessibility
- Use semantic HTML elements
- Add aria-label to the play button
- Ensure color contrast meets WCAG AA
- Use proper heading hierarchy (h2 for main heading)
- Use real buttons, not divs for clickable elements

## Specific Content to Include

### Left Column
```
Badge: "OUR STORY"
Headline: "Architecting the Future of Human Mobility" (with "Future" in orange)
Description: "Founded at the intersection of empathy and deep tech, Team Nova is dedicated to breaking barriers for the visually impaired. We don't just build hardware; we craft intelligent companions that help people navigate the world with confidence and dignity."
Badges:
  - ESTABLISHED: "2026 // GRAD_PROJ"
  - LOCATION: "Alexandria // EGYPT"
```

### Right Column (Mission Card)
```
Header: "MISSION STATEMENT." (with orange dot)
Description: "To illuminate the path for millions through human-centric assistive technology. We believe the future of AI isn't just compute it's empowerment."
Metrics:
  - DETECTION ACCURACY: 99.2%
  - HAPTIC RESPONSE: 0.02ms
  - BATTERY LIFE: OPTIMIZED (12h+)
Play Button: Circular with play icon/triangle
Status Badge: "SYSTEM STATUS: ACTIVE_PROTOTYPE"
```

## DO's ✅

- ✅ Use the CSS module for ALL styling
- ✅ Reuse existing utility classes from index.css and HeroSection.module.css
- ✅ Follow Bootstrap 5 grid system (col-12, col-lg-6, g-5, etc.)
- ✅ Use CSS variables for colors
- ✅ Add proper responsive behavior with media queries
- ✅ Use smooth transitions (0.3s ease)
- ✅ Add hover effects to interactive elements
- ✅ Test on mobile, tablet, and desktop viewports
- ✅ Use semantic HTML elements
- ✅ Add comments explaining the structure

## DON'Ts ❌

- ❌ Do NOT use Tailwind CSS classes
- ❌ Do NOT use inline styles for layout/spacing
- ❌ Do NOT create hardcoded colors (use --brand-color)
- ❌ Do NOT use different naming conventions than provided
- ❌ Do NOT skip responsive design
- ❌ Do NOT add unnecessary dependencies
- ❌ Do NOT modify the component tree structure
- ❌ Do NOT use JavaScript for styling changes
- ❌ Do NOT create images (use text-based design elements)
- ❌ Do NOT deviate from the design specifications

## File Structure

After implementation, your project should have:

```
src/
├── features/
│   └── landing/
│       └── pages/
│           └── sections/
│               ├── StorySection.jsx (NEW)
│               ├── StorySection.module.css (NEW)
│               ├── TeamSection.jsx
│               ├── FeaturesSection.jsx
│               ├── HeroSection.jsx
│               ├── HeroSection.module.css
│               └── FAQSection.jsx
```

## Success Criteria

Your implementation is successful when:

1. ✅ Both files are created with exact naming convention
2. ✅ Component renders without console errors
3. ✅ Design matches screenshot on desktop
4. ✅ Design is properly responsive on tablet and mobile
5. ✅ All hover effects work smoothly
6. ✅ Orange accents (#FF4500) appear in correct places
7. ✅ Spacing and typography match the guide
8. ✅ No layout shifts or overflow issues
9. ✅ Component integrates seamlessly into Landing.jsx
10. ✅ All accessibility requirements met

## Questions to Answer Before Starting

If you're unsure about anything, refer back to the guide. Here are clarifications:

- **Grid Layout**: Use Bootstrap `row` and `col-*` classes
- **Colors**: Use `var(--brand-color)` for orange, `#121212` for dark cards
- **Spacing**: Use Bootstrap classes (mb-4, g-5, p-4) or define in CSS module
- **Fonts**: Use system fonts defined in index.css, optional monospace for values
- **Animations**: Use CSS transitions, no JavaScript animations

## Final Checklist

Before submitting, verify:

- [ ] Both JSX and CSS files created with correct names
- [ ] All content matches the specification exactly
- [ ] Responsive on 375px, 768px, 1024px, and 1440px viewports
- [ ] No console errors or warnings
- [ ] Hover effects work smoothly
- [ ] All colors match (#FF4500 for orange, #121212 for cards)
- [ ] Spacing matches the design
- [ ] Component imports correctly into Landing.jsx
- [ ] No Tailwind classes used
- [ ] Semantic HTML throughout
- [ ] Accessibility features included

---

**Reference**: You have been provided with a detailed guide (`STORY_SECTION_GUIDE.md`) that contains:
- Complete CSS module with all styles
- JSX template structure
- Color palette and sizing
- Responsive design details
- Integration instructions

**Follow the guide precisely and deliver production-ready code.**

Good luck! 🚀
