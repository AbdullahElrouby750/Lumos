
import lumosBrand from '../../../../assets/lumos.svg'
/**
 * FooterSection
 * - 4 columns: Brand, Products, Company, Legal
 * - Bottom legal line + social icons
 */
import { FOOTER_LINKS, SOCIAL_LINKS } from '../../../../constants/landing-constants';
import { Github, Linkedin, Twitter } from 'lucide-react';

const iconMap = {
  Github,
  Linkedin,
  Twitter,
};

export function FooterSection() {
  return (
    <footer className="bg-dark-cardDark text-secondary">
      <div className="container-custom py-5">
        <div className="row gy-4">
          {/* Brand */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="mb-3 d-flex align-items-center gap-2">
              <div className="d-flex align-items-center justify-content-center"  style={{ backgroundImage: `url(${lumosBrand})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '10rem', height: '3rem' }}>
              </div>
            </div>
            <p className="small">
              Empowering individuals through intelligent assistive technology and thoughtful design.
            </p>
          </div>

          {/* Product Links */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="text-white fw-semibold mb-3">Product</h5>
            <ul className="list-unstyled small mb-0">
              {FOOTER_LINKS.product.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-secondary text-decoration-none hover-text-orange">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="text-white fw-semibold mb-3">Company</h5>
            <ul className="list-unstyled small mb-0">
              {FOOTER_LINKS.company.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-secondary text-decoration-none hover-text-orange">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="text-white fw-semibold mb-3">Legal</h5>
            <ul className="list-unstyled small mb-0">
              {FOOTER_LINKS.legal.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-secondary text-decoration-none hover-text-orange">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 pt-3 border-top d-flex flex-column flex-sm-row justify-content-between align-items-center small">
          <p className="mb-2 mb-sm-0">© 2026 Lumos. All rights reserved.</p>
          <div className="d-flex gap-3">
            {SOCIAL_LINKS.map((social, idx) => {
              const Icon = iconMap[social.icon] || Github;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-decoration-none hover-text-orange"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
