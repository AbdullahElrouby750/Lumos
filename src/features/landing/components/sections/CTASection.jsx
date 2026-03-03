/**
 * CTASection
 * Final call-to-action
 * - Title: "Let's Illuminate the Future"
 * - Subtitle
 * - 2 buttons: Start Your Journey + Contact Sales
 * - Email signup box
 * - Gradient background
 */
export function CTASection() {
  return (
    <section className="section-padding-large" style={{
      background: 'linear-gradient(135deg, rgba(255,69,0,0.2), #121212)'
    }}>
      <div className="container-custom">
        <div className="mx-auto text-center" style={{ maxWidth: '40rem' }}>
          <h2 className="display-5 fw-bold">
            Let's <span className="text-orange-lumos">Illuminate</span> the Future
          </h2>
          <p className="text-secondary lead mb-4">
            Join us on the journey to make assistive technology smarter, safer, and more accessible for everyone.
          </p>

          {/* Buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            <button className="btn btn-primary">Start Your Journey</button>
            <button className="btn btn-secondary">Contact Sales</button>
          </div>

          {/* Email Signup */}
          <div className="mt-4">
            <form className="row g-2 justify-content-center">
              <div className="col-12 col-sm-8">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control bg-dark-borderDark text-light"
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary w-100">Join</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
