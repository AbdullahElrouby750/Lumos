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
    <Offcanvas show={isOpen} onHide={closeMenu} placement="top" className="bg-dark text-light">
      <Offcanvas.Header closeButton closeVariant="white">
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-4">
        {NAV_LINKS.map((link) => (
          <Button
            key={link.href}
            variant="link"
            className="text-light text-start w-100"
            onClick={() => onNavClick(link.href)}
          >
            {link.label}
          </Button>
        ))}
        <Button variant="primary" className="w-100 mt-3">
          Get Started
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default MobileMenu;
