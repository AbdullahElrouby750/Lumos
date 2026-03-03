// import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../../../constants/landing-constants';
import MobileMenu from '../common/MobileMenu';
import useMobileMenu from '../../../../shared/hooks/landing-hooks/useMobileMenu';

// react-bootstrap components
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

/**
 * NavbarSection
 * Fixed header with:
 * - Orange logo ("L") on left
 * - Desktop nav links (hidden on mobile)
 * - Mobile hamburger menu
 * - "Get Started" button
 */
export function NavbarSection() {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  const handleNavClick = (href) => {
    closeMenu();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Fixed Navbar using react-bootstrap */}
      <Navbar expand="lg" fixed="top" className="bg-dark bg-opacity-80 border-bottom">
        <Container className="py-3">
          {/* Logo */}
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <div className="w-10 h-10 bg-orange-lumos rounded-lg d-flex align-items-center justify-content-center">
              <span className="text-white fw-bold fs-4">L</span>
            </div>
            <span className="text-white fw-bold fs-4 ms-2 d-none d-sm-inline">LUMOS</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Navbar.Toggle>

          <Navbar.Collapse id="main-navbar" className="justify-content-end">
            <Nav className="me-3 d-none d-lg-flex">
              {NAV_LINKS.map((link) => (
                <Nav.Link
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-light fw-medium"
                >
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>

            <Button variant="primary" className="d-none d-lg-inline-block">
              Get Started
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Menu (still custom component) */}
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} onNavClick={handleNavClick} />

      {/* Spacer for fixed navbar */}
      <div style={{ height: '4rem' }} />
    </>
  );
}

export default NavbarSection;
