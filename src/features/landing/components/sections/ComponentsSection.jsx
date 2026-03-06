import { COMPONENTS } from '../../../../constants/landing-constants';
import { Check } from 'lucide-react';
import glassesBgImg from '../../../../assets/smartGlassesBGnoShadow.svg';
import glassesIcon from '../../../../assets/glassessIcon.svg';
import caneBgImg from '../../../../assets/caneBGnoShadow.svg';
import caneIcon from '../../../../assets/manWithCaneIcon.svg';
import bandBgImg from '../../../../assets/lumoBandBGnoShadow.svg';
import bandIcon from '../../../../assets/lumoBandIcon.svg';
import style from './HeroSection.module.css';


const productImages = {
  'Smart Glasses': glassesBgImg,
  'Intelligent Cane': caneBgImg,
  'Lumo band': bandBgImg,
};

const productIcons = {
  'Smart Glasses': glassesIcon,
  'Intelligent Cane': caneIcon,
  'Lumo band': bandIcon,
};

/**
 * ComponentsSection
 * Showcase of Lumos products with:
 * - 3 product cards (Smart Glasses, Sensorized Cane, Bracelets)
 * - Featured LUMOS box with features
 * - Grid: 1/2/3 columns responsive
 */
export function ComponentsSection() {
  const keyFeatures = [
    'Real-time visual processing',
    'Obstacle detection',
    'Voice commands',
    'Natural language AI',
  ];

  const smartIntegration = [
    'Cloud synchronization',
    'Multi-device support',
    'Seamless handoff',
    'Smart notifications',
  ];

  return (
    <section id="products" className={`section-padding-large ${style.vh120} bg-black position-relative`}>
      <div className={`container-custom ${style.w90} h-100`}>
        {/* Header */}
        <div className="text-center mb-5">
          <p className="display-3 text-light fw-bold">
            Explore Your <span className="text-orange-lumos fst-italic">Lumos</span> Assistive Gear
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="row g-4 mb-4 h-75">
          {COMPONENTS.map((product) => (
            <div key={product.id} className={`col-12 col-md-6 col-lg-4 h-100 `}>
              <div className={`card card-dark p-4 h-100 h-100 bg-light rounded-5 border border-gray ${product.shadow === 'bottom' ? 'hoverShadowAriseFromBottom' : (product.shadow === 'Right' ? 'hoverShadowSlideFromRight' : 'hoverShadowdowngardeFromTop')}`} style={{ backgroundImage: `url(${productImages[product.name]})`, backgroundSize: ' 130% 130%', backgroundPosition: 'center' }}>
                <div className={` w-100 h-100 d-flex flex-column justify-content-${product.descriptionPosition} py-4`}>

                  <div className=" w-100 d-flex flex-column justify-content-center align-items-start">
                    <div className=' d-flex justify-content-start align-items-center w-100 mb-2'>
                      <img className=' me-2' src={productIcons[product.name]} alt={product.name} />
                      <h3 className="h5 fw-semibold text-white m-0">{product.name}</h3>
                    </div>
                    <p className=" fw-medium small ps-2">{product.description}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

export default ComponentsSection;
