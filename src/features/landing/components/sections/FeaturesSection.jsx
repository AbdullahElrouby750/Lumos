import { FEATURES } from '../../../../constants/landing-constants';
import FeatureCard from '../common/FeatureCard';

/**
 * FeaturesSection
 * Features grid with:
 * - Title: "Why Lumos?" (Lumos in orange)
 * - Subtitle
 * - 4 feature cards
 * - Grid: 1 col mobile, 2 cols tablet, 4 cols desktop
 */
export function FeaturesSection() {
  return (
    <section id="features" className="section-padding-large" style={{ backgroundColor: '#121212' }}>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at top left, rgba(255,69,0,0.05), transparent)',
        opacity: 0.5
      }} />

      <div className="container-custom position-relative" style={{ zIndex: 10 }}>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">
            Why <span className="text-orange-lumos">Lumos</span>?
          </h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '36rem' }}>
            Discover the features that make Lumos the leading assistive technology platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {FEATURES.map((feature, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
