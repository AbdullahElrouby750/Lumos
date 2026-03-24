import { COMPONENTS } from '../../../../constants/landing-constants';
import { Check } from 'lucide-react';
// import glassesBgImg from '../../../../assets/smartGlassesBGnoShadow.svg';
import glassesBgImgShadow from '../../../../assets/smartGlassesBG.svg';
import glassesIcon from '../../../../assets/glassessIcon.svg';
// import caneBgImg from '../../../../assets/caneBGnoShadow.svg';
import caneBgImgShadow from '../../../../assets/caneBG.svg';
import caneIcon from '../../../../assets/manWithCaneIcon.svg';
// import bandBgImg from '../../../../assets/lumoBandBGnoShadow.svg';
import bandBgImgShadow from '../../../../assets/lumoBandBG.svg';
import bandIcon from '../../../../assets/lumoBandIcon.svg';
import style from './HeroSection.module.css';
import { useResponsiveBackgroundSize } from '../../../../shared/hooks/landing-hooks/useResponsiveBackgroundSize';

import { motion } from 'framer-motion';


const productImages = {
  'Smart Glasses': glassesBgImgShadow,
  'Intelligent Cane': caneBgImgShadow,
  'Lumo band': bandBgImgShadow,
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
  const responsiveBackgroundSize = useResponsiveBackgroundSize();

  return (
    <section id="products" className={`section-padding-large ${style.vh120} bg-black position-relative`}>
      <div className={`container-custom ${style.w90} h-100`}>
        {/* Header */}
        <motion.div className="text-center mb-5"

          initial={{ opacity: 0 }} // Start off-screen left
          whileInView={{ opacity: 1 }}    // End at normal position
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}>
          <p className="display-3 text-light fw-bold">
            Explore Your <span className="text-orange-lumos fst-italic">Lumos</span> Assistive Gear
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="row g-4 mb-4 h-75 overflow-y-scroll d-flex justify-content-center justify-content-lg-around ">
          {COMPONENTS.map((product, index) => (
            <motion.div key={product.id} className={` my-0 col-12 col-md-6 col-lg-4 h-100 mb-4 mb-lg-0`}

              initial={{ opacity: 0, y: -200 }} // Start off-screen left
              whileInView={{ opacity: 1, y: 0 }}    // End at normal position
              transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}>
              <div className={`card card-dark p-4 h-100 h-100 bg-light rounded-5 border border-gray ${product.shadow === 'bottom' ? 'hoverShadowAriseFromBottom' : (product.shadow === 'Right' ? 'hoverShadowSlideFromRight' : 'hoverShadowdowngardeFromTop')}`}
                style={{ backgroundImage: `url(${productImages[product.name]})`, backgroundSize: responsiveBackgroundSize, backgroundPosition: 'center' }}>
                <div className={` w-100 h-100 d-flex flex-column justify-content-${product.descriptionPosition} py-4`}>

                  <div className=" w-100 d-flex flex-column justify-content-center align-items-start mt-5 pt-5">
                    <div className=' d-flex justify-content-start align-items-center w-100 mb-2'>
                      <img className=' me-2 h-100' src={productIcons[product.name]} alt={product.name} loading="lazy" />
                      <h3 className="h5 fw-semibold text-white m-0">{product.name}</h3>
                    </div>
                    <p className=" fw-medium small ps-2">{product.description}</p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}

export default ComponentsSection;
