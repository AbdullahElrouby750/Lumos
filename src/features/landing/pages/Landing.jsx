import NavbarSection from '../components/sections/NavbarSection';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ComponentsSection from '../components/sections/ComponentsSection';
import PricingSection from '../components/sections/PricingSection';
import TeamSection from '../components/sections/TeamSection';
import StorySection from '../components/sections/StorySection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import FooterSection from '../components/sections/FooterSection';
import LomoSection from '../components/sections/LomoSection';

/**
 * Landing Page
 * Renders all sections of the Lumos landing page in order:
 * 1. Navbar
 * 2. Hero
 * 3. Features
 * 4. Components Showcase
 * 5. Lomo
 * 6. Pricing
 * 7. Team
 * 8. About
 * 9. FAQ
 * 10. CTA
 * 11. Footer
 */
export function Landing() {
  return (
    <div className=" w-100 d-flex flex-column justify-content-center">
      <NavbarSection />
      <HeroSection />
      <FeaturesSection />
      <ComponentsSection />
      <LomoSection />
      <PricingSection />
      <TeamSection />
      <StorySection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}

export default Landing;
