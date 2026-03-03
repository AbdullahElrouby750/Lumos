import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { Accordion } from 'react-bootstrap';

/**
 * FAQAccordion
 * Expandable FAQ item
 * - Question always visible
 * - Click to expand/collapse answer
 * - Smooth animation
 * - Chevron icon rotates
 * - Orange accent on active
 */
export function FAQAccordion({ item }) {
  const { question, answer } = item;
  // We'll let parent Accordion handle state, so just render an Accordion.Item
  return (
    <Accordion.Item eventKey={item.id.toString()} className="card-dark border-0 mb-2">
      <Accordion.Header className="text-white fw-semibold">{question}</Accordion.Header>
      <Accordion.Body className="text-secondary">
        {answer}
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default FAQAccordion;
