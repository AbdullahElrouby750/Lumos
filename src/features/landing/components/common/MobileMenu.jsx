import { NAV_LINKS } from '../../../../constants/landing-constants';

/**
 * MobileMenu
 * Mobile navigation menu
 * - Slides in from top when open
 * - Shows same links as desktop nav
 * - Closes on link click
 */
import { Offcanvas, Button } from 'react-bootstrap';

export function MobileMenu({ isOpen, onNavClick, closeMenu }) {
  return (
    <Offcanvas show={isOpen} onHide={closeMenu} placement="top" className="bg-dark text-light h-75">
      <Offcanvas.Header closeButton closeVariant="white">
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-4 d-flex flex-column justify-content-start align-items-center">
        {NAV_LINKS.map((link) => (
          <Button
            key={link.href}
            variant="link"
            className=" text-orange-lumos text-center text-decoration-none mb-2 border-orange-lumos w-50 hover-shadow"
            onClick={() => onNavClick(link.href)}
          >
            {link.label}
          </Button>
        ))}
        <a href="#contact-us" className=' text-light w-50'>
          <Button variant="primary" className="w-100 mt-3">
            Get Started
          </Button>
        </a>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default MobileMenu;
