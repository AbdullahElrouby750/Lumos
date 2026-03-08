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
    { feature: 'Mobile App', starter: true, premium: true, professional: true },
    { feature: 'Real-time Voice Guidance', starter: true, premium: true, professional: true },
    { feature: 'Gemini Integration', starter: false, premium: true, professional: true },
    { feature: 'Customer Support', starter: 'Support chat', premium: '24/7 Priority', professional: 'Dedicated' },
    { feature: 'Emergency SOS System', starter: false, premium: true, professional: true },
    { feature: 'Custom Integrations', starter: false, premium: false, professional: true },
    { feature: 'Offline Core Functions', starter: true, premium: true, professional: true },
  ];

  return (
    <section id="pricing" className="section-padding-large bg-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-start mb-5">
          <h2 className="display-4 fw-bold">
            Pricing <span className="text-orange-lumos">Plan</span>
          </h2>
          {/* <p className="text-secondary lead mx-auto" style={{ maxWidth: '36rem' }}>
            Flexible plans for every need. Start free, upgrade anytime.
          </p> */}
        </div>

        {/* Pricing Cards */}
        <Row className="g-4 justify-content-center mt-5">
          {PRICING_PLANS.map((plan) => (
            <Col key={plan.id} xs={10} md={6} lg={4} className=' my-3 my-lg-2
            '>
              <PricingCard plan={plan} />
            </Col>
          ))}
        </Row>

        {/* Comparison Table */}
        <div className="mt-5 pt-5" >
          <div className=" w-100 d-flex flex-column justify-content-between align-items-center mb-4">
            <h3 className="h4 text-white">Compare Features</h3>
            <p className=" text-center text-secondary mx-auto" style={{ maxWidth: '36rem' }}>
              Explore how Lumos hardware and software work together to provide a safer, more independent life.
            </p>
          </div>

          {/* Table - Desktop */}
          <div className="d-none d-lg-block overflow-auto">
            <Table variant="dark" responsive className="w-100">
              <thead>
                <tr className=' border-dark'>
                  <th className=' fs-4 customGray fw-bold  py-4 bg-black'>Feature</th>
                  <th className=" fs-4 customGray fw-bold text-center bg-black py-4">Starter</th>
                  <th className=" fs-4 text-orange-lumos fw-bold text-center bg-black bg-light-orange py-4 ">Premium</th>
                  <th className=" fs-4 customGray fw-bold text-center bg-black py-4">Professional</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="align-middle  thinBorder">
                    <td className="fw-medium bg-black py-4 border-0 fs-4">{row.feature}</td>
                    <td className="text-center bg-black py-4 border-0 fs-4">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="text-orange-lumos" />
                        ) : (
                          <span className="text-light">—</span>
                        )
                      ) : (
                        <span className="text-secondary small">{row.starter}</span>
                      )}
                    </td>
                    <td className="text-center bg-black py-4 border-0 fs-4 bg-light-orange">
                      {typeof row.premium === 'boolean' ? (
                        row.premium ? (
                          <Check className="text-orange-lumos" />
                        ) : (
                          <span className="text-light">—</span>
                        )
                      ) : (
                        <span className="text-secondary small text-orange-lumos">{row.premium}</span>
                      )}
                    </td>
                    <td className="text-center bg-black py-4 border-0 fs-4">
                      {typeof row.professional === 'boolean' ? (
                        row.professional ? (
                          <Check className="text-orange-lumos" />
                        ) : (
                          <span className="text-light">—</span>
                        )
                      ) : (
                        <span className="text-secondary small fw-bold">{row.professional}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          {/* Mobile Comparison */}
          <div className="d-lg-none">
            <div className="card card-dark p-3 mb-3">
              <Row className='text-center small'>
                <Col className="fw-semibold text-light">Starter</Col>
                <Col className="fw-semibold text-orange-lumos">Premium</Col>
                <Col className="fw-semibold text-light">Professional</Col>
              </Row>
            </div>

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
