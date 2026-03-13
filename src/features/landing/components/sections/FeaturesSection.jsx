import { FEATURES } from '../../../../constants/landing-constants';
import FeatureCard from '../common/FeatureCard';
import { motion } from 'framer-motion';

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
    <section id="features" className="section-padding-large bg-black">
      {/* <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at top left, rgba(255,69,0,0.05), transparent)',
        opacity: 0.5
      }} /> */}

      <div className="container-custom position-relative" style={{ zIndex: 10 }}>
        {/* Header */}
        <motion.div className="text-center mb-5"
          initial={{ opacity: 0, y: -100 }} // Start off-screen left
          whileInView={{ opacity: 1, y: 0 }}    // End at normal position
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          // viewport={{ once: true }}
        >
          <h2 className="display-5 fw-bold">
            Why <span className="text-orange-lumos">Lumos</span>?
          </h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '36rem' }}>
            Discover the features that make Lumos the leading assistive technology platform
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="row g-4">
          {FEATURES.map((feature, index) => (
            <motion.div key={index} className="col-12 col-md-6 col-lg-3"
              initial={{ opacity: 0, scale: 0.2 }} // Start off-screen left
              whileInView={{ opacity: 1, scale: 1 }}    // End at normal position
              transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}

            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
