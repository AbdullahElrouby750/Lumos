import { FAQ_DATA } from '../../../../constants/landing-constants';
import FAQAccordion from '../common/FAQAccordion';

import { Accordion } from 'react-bootstrap';

/**
 * FAQSection
 * List of FAQ items using FAQAccordion
 * - Dark background section
 */
export function FAQSection() {
  return (
    <section id="faq" className="section-padding-large bg-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">
            Frequently Asked <span className="text-orange-lumos">Questions</span>
          </h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '36rem' }}>
            Your most common questions answered about Lumos, technology, and usage
          </p>
        </div>

        {/* Accordions */}
        <Accordion>
          {FAQ_DATA.map((item) => (
            <FAQAccordion key={item.id} item={item} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQSection;
