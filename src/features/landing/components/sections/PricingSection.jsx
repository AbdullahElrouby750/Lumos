import { PRICING_PLANS } from '../../../../constants/landing-constants';
import PricingCard from '../common/PricingCard';
import { Check } from 'lucide-react';

import { Row, Col, Table, Button } from 'react-bootstrap';

/**
 * PricingSection
 * Pricing plans with:
 * - Title and description
 * - 3 pricing cards (Starter, Premium, Professional)
 * - Premium card highlighted
 * - Feature comparison table
 * - Responsive: 1/2/3 columns
 */
export function PricingSection() {
  // Comparison table data
  const comparisonFeatures = [
    { feature: 'Smart Glasses', starter: true, premium: true, professional: true },
    { feature: 'Cloud Storage', starter: '10GB', premium: '100GB', professional: 'Unlimited' },
    { feature: 'Battery Life', starter: '8 hours', premium: '16 hours', professional: 'All-day+' },
    { feature: 'Customer Support', starter: 'Email', premium: '24/7 Priority', professional: 'Dedicated' },
    { feature: 'API Access', starter: false, premium: true, professional: true },
    { feature: 'Custom Integrations', starter: false, premium: false, professional: true },
  ];

  return (
    <section id="pricing" className="section-padding-large" style={{ backgroundColor: '#121212' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">
            Pricing <span className="text-orange-lumos">Plan</span>
          </h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '36rem' }}>
            Flexible plans for every need. Start free, upgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <Row className="g-4">
          {PRICING_PLANS.map((plan) => (
            <Col key={plan.id} xs={12} md={6} lg={4}>
              <PricingCard plan={plan} />
            </Col>
          ))}
        </Row>

        {/* Comparison Table */}
        <div className="mt-5 pt-5 border-top" style={{ borderColor: '#1f1f1f' }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="h4 text-white">Compare Features</h3>
            <Button variant="link" className="text-orange-lumos fw-semibold p-0">
              View All →
            </Button>
          </div>

          {/* Table - Desktop */}
          <div className="d-none d-lg-block overflow-auto">
            <Table variant="dark" responsive className="w-100">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="text-center">Starter</th>
                  <th className="text-center">Premium</th>
                  <th className="text-center">Professional</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="align-middle">
                    <td className="fw-medium">{row.feature}</td>
                    <td className="text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="text-orange-lumos" />
                        ) : (
                          <span className="text-muted">—</span>
                        )
                      ) : (
                        <span className="text-secondary small">{row.starter}</span>
                      )}
                    </td>
                    <td className="text-center">
                      {typeof row.premium === 'boolean' ? (
                        row.premium ? (
                          <Check className="text-orange-lumos" />
                        ) : (
                          <span className="text-muted">—</span>
                        )
                      ) : (
                        <span className="text-secondary small">{row.premium}</span>
                      )}
                    </td>
                    <td className="text-center">
                      {typeof row.professional === 'boolean' ? (
                        row.professional ? (
                          <Check className="text-orange-lumos" />
                        ) : (
                          <span className="text-muted">—</span>
                        )
                      ) : (
                        <span className="text-secondary small">{row.professional}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          {/* Mobile Comparison */}
          <div className="d-lg-none">
            {comparisonFeatures.map((row, index) => (
              <div key={index} className="card card-dark p-3 mb-3">
                <p className="fw-semibold text-white mb-2">{row.feature}</p>
                <Row className="text-center small">
                  <Col>{typeof row.starter === 'boolean' ? (row.starter ? <Check className="text-orange-lumos" /> : <span className="text-muted">—</span>) : <span className="text-secondary">{row.starter}</span>}</Col>
                  <Col>{typeof row.premium === 'boolean' ? (row.premium ? <Check className="text-orange-lumos" /> : <span className="text-muted">—</span>) : <span className="text-secondary">{row.premium}</span>}</Col>
                  <Col>{typeof row.professional === 'boolean' ? (row.professional ? <Check className="text-orange-lumos" /> : <span className="text-muted">—</span>) : <span className="text-secondary">{row.professional}</span>}</Col>
                </Row>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
