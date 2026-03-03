import { COMPONENTS } from '../../../../constants/landing-constants';
import { Check } from 'lucide-react';

/**
 * ComponentsSection
 * Showcase of Lumos products with:
 * - 3 product cards (Smart Glasses, Sensorized Cane, Bracelets)
 * - Featured LUMOS box with features
 * - Grid: 1/2/3 columns responsive
 */
export function ComponentsSection() {
  const keyFeatures = [
    'Real-time visual processing',
    'Obstacle detection',
    'Voice commands',
    'Natural language AI',
  ];

  const smartIntegration = [
    'Cloud synchronization',
    'Multi-device support',
    'Seamless handoff',
    'Smart notifications',
  ];

  return (
    <section id="products" className="section-padding-large">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">
            Explore Your <span className="text-orange-lumos">Lumos</span> Assistive Gear
          </h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '36rem' }}>
            Complete ecosystem of connected devices designed to assist and empower
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="row g-4 mb-4">
          {COMPONENTS.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4">
              <div className="card card-dark p-4 h-100 hover-shadow">
                {/* Product Icon */}
                <div className="mb-3 d-flex align-items-center justify-content-center rounded-3" style={{
                  width: '5rem',
                  height: '5rem',
                  backgroundColor: 'rgba(255,69,0,0.1)',
                  border: '1px solid rgba(255,69,0,0.3)'
                }}>
                  <svg
                    className="text-orange-lumos" width="2.5rem" height="2.5rem" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                {/* Product Info */}
                <h3 className="h5 fw-semibold text-white mb-2">{product.name}</h3>
                <p className="text-secondary small">{product.description}</p>

                {/* Learn More Link */}
                <button className="btn btn-link text-orange-lumos fw-semibold mt-3 p-0 d-flex align-items-center gap-1">
                  Learn More
                  <svg className="" width="1rem" height="1rem" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Box: LUMOS Intelligent Assistant */}
        <div className="card card-dark p-4 p-lg-5 mb-4" style={{
          background: 'linear-gradient(135deg, rgba(255,69,0,0.2), #121212)',
          border: '2px solid rgba(255,69,0,0.5)'
        }}>
          {/* Badge */}
          <span className="badge bg-orange-lumos text-dark mb-3">FEATURED</span>

          <h3 className="h4 text-white mb-3">
            LUMOS - YOUR <span className="text-orange-lumos">INTELLIGENT</span> ASSISTANT
          </h3>

          <p className="text-secondary mb-4">
            The heart of the Lumos ecosystem. Advanced AI processing combines real-time visual analysis with intuitive
            voice interaction, creating a seamless assistive experience that adapts to your lifestyle.
          </p>

          {/* Two Column Features */}
          <div className="row g-3">
            {/* Key Features */}
            <div className="col-12 col-md-6">
              <h4 className="h6 fw-semibold text-white mb-2 d-flex align-items-center gap-2">
                <span className="d-block" style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#ff4500', borderRadius: '50%' }} />
                Key Features
              </h4>
              <ul className="list-unstyled mb-0">
                {keyFeatures.map((feature, index) => (
                  <li key={index} className="d-flex align-items-start mb-2 text-secondary small">
                    <Check className="text-orange-lumos me-2" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Smart Integration */}
            <div className="col-12 col-md-6">
              <h4 className="h6 fw-semibold text-white mb-2 d-flex align-items-center gap-2">
                <span className="d-block" style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#ff4500', borderRadius: '50%' }} />
                Smart Integration
              </h4>
              <ul className="list-unstyled mb-0">
                {smartIntegration.map((feature, index) => (
                  <li key={index} className="d-flex align-items-start mb-2 text-secondary small">
                    <Check className="text-orange-lumos me-2" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentsSection;
