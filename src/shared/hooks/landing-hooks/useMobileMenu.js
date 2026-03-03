import { useState } from 'react';

/**
 * useMobileMenu
 * Custom hook for managing mobile menu state
 * Returns: { isOpen, toggleMenu, closeMenu }
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return { isOpen, toggleMenu, closeMenu };
}

export default useMobileMenu;
