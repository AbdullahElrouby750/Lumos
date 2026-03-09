// import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../../../constants/landing-constants';
import MobileMenu from '../common/MobileMenu';
import useMobileMenu from '../../../../shared/hooks/landing-hooks/useMobileMenu';

// react-bootstrap components
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import lumosBrand from '../../../../assets/lumos.svg'
import style from './NavbarSection.module.css';

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
      <Navbar expand="lg" fixed="top" className="">
        <Container className="py-3 rounded-5 glassmorphism d-flex justify-content-between">
          {/* Logo */}
          <Navbar.Brand href="#" className="d-flex align-items-center" style={{ backgroundImage: `url(${lumosBrand})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '10rem', height: '3rem' }}>
            {/* <div className="w-10 h-10 bg-orange-lumos rounded-lg d-flex align-items-center justify-content-center">
              <span className="text-white fw-bold fs-4">L</span>
            </div>
            <span className="text-white fw-bold fs-4 ms-2 d-none d-sm-inline">LUMOS</span> */}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" onClick={toggleMenu} className=' text-orange-lumos position-absolute end-0 me-4'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Navbar.Toggle>

          <Navbar.Collapse id="main-navbar" className="justify-content-around">
            <Nav className="me-3 d-none d-lg-flex">
              {NAV_LINKS.map((link) => (
                <Nav.Link
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`${style.navLink} fs-4 fw-bold mx-2 rounded border-0`}
                >
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>

          </Navbar.Collapse>
          <a href="#contact-us" className=' text-light '>
            <Button variant="primary" className="d-none d-lg-inline-block">
              Get Started
            </Button>
          </a>
        </Container>
      </Navbar >

      {/* Mobile Menu (still custom component) */}
      < MobileMenu isOpen={isOpen} closeMenu={closeMenu} onNavClick={handleNavClick} />

      {/* Spacer for fixed navbar */}
      < div style={{ height: '4rem' }
      } />
    </>
  );
}

export default NavbarSection;
