import { Check } from 'lucide-react';
import { motion } from 'framer-motion'

/**
 * PricingCard
 * Individual pricing card
 * - Plan name, price, description
 * - Features list with Check icons
 * - CTA button
 * - Premium card is highlighted/scaled
 */
export function PricingCard({ plan, index = 1 }) {
  const { name, price, period, description, features, highlighted, cta } = plan;

  return (
    <motion.div className={`card card-dark position-relative h-100 ${highlighted ? 'border-2 border-orange-lumos shadow-lg' : ''}`}
      style={highlighted ? { transform: 'scale(1.05)' } : {}}
      initial={{ opacity: 0 }} // Start off-screen left
      whileInView={{ opacity: 1 }}    // End at normal position
      transition={{ duration: 0.5, delay: index * 0.3, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Highlighted Badge */}
      {highlighted && (
        <span className="badge bg-orange-lumos text-dark position-absolute" style={{ top: '-0.5rem', right: '-0.5rem' }}>
          POPULAR
        </span>
      )}

      <div className="card-body d-flex flex-column">
        {/* Plan Header */}
        <div>

          <div className="mb-3">
            <h3 className="h4 text-white mb-1 fw-bolder">{name}</h3>
            <p className="text-secondary small mb-0">{description}</p>
          </div>

          {/* Pricing */}
          <div className="mb-3">
            <p className="display-5 text-white mb-0 fw-bold">{price}</p>
            <p className="text-secondary small">{period}</p>
          </div>

          {/* CTA Button */}
          <button
            className={`btn ${highlighted ? 'btn-primary' : 'btn-secondary'} mt-auto w-100`}
          >
            {cta}
          </button>
        </div>

        {/* Divider */}
        <hr className="bg-secondary my-3" />

        {/* Features List */}
        <ul className="list-unstyled mb-0">
          {features.map((feature, index) => (
            <li key={index} className="d-flex align-items-start mb-2 text-secondary small">
              <Check className="text-orange-lumos me-2" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default PricingCard;
