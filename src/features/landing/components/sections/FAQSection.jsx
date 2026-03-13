import { FAQ_DATA } from '../../../../constants/landing-constants';
import FAQAccordion from '../common/FAQAccordion';
import { motion } from 'framer-motion'

/**
 * FAQSection
 * Frequently Asked Questions section with custom accordion design
 * - Dark background with modern dark-mode styling
 * - Custom accordion items with plus/minus icons
 * - Responsive layout
 */
export function FAQSection() {
  return (
    <section id="faq" className="section-padding-large bg-black">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div className="text-center mb-5"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}>
          <h2 className="display-5 fw-bold">
            Frequently Asked <span className="text-orange-lumos">Questions</span>
          </h2>
          <p
            className="text-secondary lead mx-auto"
            style={{
              maxWidth: '100%',
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Understanding how Lumos empowers independence through technology
          </p>
        </motion.div>

        {/* FAQ Items Container */}
        <div>
          {FAQ_DATA.map((item, index) => (
            <FAQAccordion key={item.id} item={item} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
