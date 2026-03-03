/**
 * HeroSection
 * Hero banner with:
 * - Headline: "See Beyond Limits" (limits in orange)
 * - Description
 * - 2 CTAs: Explore Now + Watch Demo
 * - 3 Stats
 * - Image placeholder
 */
export function HeroSection() {
  return (
    <section id="hero" className="section-padding-large position-relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'radial-gradient(circle at top left, rgba(255,69,0,0.1), transparent)',
        opacity: 0.4
      }} />

      <div className="container-custom position-relative" style={{ zIndex: 10 }}>
        <div className="row align-items-center gx-5 gy-4">
          {/* Left: Content */}
          <div className="col-12 col-lg-6">
            <div className="mb-4">
              <h1 className="display-4 fw-bold">
                See Beyond<br />
                <span className="text-orange-lumos">Limits</span>
              </h1>
            </div>

            <p className="lead text-secondary mb-4" style={{ maxWidth: '24rem' }}>
              Experience the future of assistive technology. Lumos combines cutting-edge AI with intuitive design to
              help you navigate the world with confidence and independence.
            </p>

            {/* Stats */}
            <div className="row text-center mb-4">
              <div className="col">
                <p className="h2 text-orange-lumos fw-bold">250+</p>
                <p className="small text-muted">Users Tested</p>
              </div>
              <div className="col">
                <p className="h2 text-orange-lumos fw-bold">98%</p>
                <p className="small text-muted">Accuracy</p>
              </div>
              <div className="col">
                <p className="h2 text-orange-lumos fw-bold">Top 50</p>
                <p className="small text-muted">Huawei</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-primary">Explore Now</button>
              <button className="btn btn-secondary">Watch Demo</button>
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div className="col-12 col-lg-6 d-none d-lg-flex justify-content-center">
            <div className="position-relative" style={{ width: '100%', paddingTop: '100%' }}>
              {/* Gradient box with border */}
              <div className="position-absolute top-0 start-0 w-100 h-100 rounded-3 border glow-orange" style={{
                background: 'linear-gradient(135deg, rgba(255,69,0,0.2), #121212)',
                borderColor: 'rgba(255,69,0,0.3)'
              }} />

              {/* Icon or placeholder content */}
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <div className="bg-orange-lumos bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center border" style={{
                    width: '6rem',
                    height: '6rem',
                    borderColor: 'rgba(255,69,0,0.3)'
                  }}>
                    <svg
                      className="text-orange-lumos" width="3rem" height="3rem" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-secondary fw-medium mt-2">Smart Glasses</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="d-lg-none mt-4">
          <div className="position-relative" style={{ width: '100%', paddingTop: '56.25%' }}>
            <div className="position-absolute top-0 start-0 w-100 h-100 rounded-3 border glow-orange" style={{
              background: 'linear-gradient(135deg, rgba(255,69,0,0.2), #121212)',
              borderColor: 'rgba(255,69,0,0.3)'
            }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <div className="bg-orange-lumos bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center border" style={{
                  width: '5rem',
                  height: '5rem',
                  borderColor: 'rgba(255,69,0,0.3)'
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
                <p className="text-secondary fw-medium small mt-2">Smart Glasses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  );
}

export default HeroSection;
