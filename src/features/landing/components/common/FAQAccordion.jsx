import { useState } from 'react';
import style from './FAQAccordion.module.css';

/**
 * FAQAccordion Component
 * Individual expandable FAQ item with dark mode design
 * - Custom component using React useState for state management
 * - Plus icon (+) that rotates 45deg on expand
 * - Smooth max-height animation for answer reveal
 * - Orange glow on hover and active states
 * - Full keyboard accessibility support (Enter/Space keys)
 * - ARIA attributes for screen readers
 *
 * @param {Object} item - FAQ item with question and answer properties
 * @param {string} item.id - Unique identifier
 * @param {string} item.question - Question text
 * @param {string} item.answer - Answer text
 */
export function FAQAccordion({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer } = item;

  /**
   * Toggle accordion open/closed state
   */
  const handleToggle = () => setIsOpen(!isOpen);

  /**
   * Handle keyboard accessibility
   * Support Enter and Space keys for toggling
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className={`${style.accordionItem} ${isOpen ? style.active : ''}`}
      onClick={handleToggle}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
    >
      {/* Header - Question and Icon */}
      <div className={style.accordionHeader}>
        <span>{question}</span>
        <span className={style.icon}>+</span>
      </div>

      {/* Body - Answer Content */}
      <div className={style.accordionBody}>
        <p className={style.accordionBodyText}>{answer}</p>
      </div>
    </div>
  );
}

export default FAQAccordion;
