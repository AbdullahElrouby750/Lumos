import style from './HeroSection.module.css';
import bgImg from '../../../../assets/herobg.svg';
import bgImgNoShadow from '../../../../assets/herobgNoShadow.svg';
import Agent_AI_Avatar from '../../../../assets/Agent_AI_Avatar.svg';
import { motion } from 'framer-motion';
/**
 * HeroSection
 * Hero banner with:
 * - Headline: "See Beyond Limits" (limits in orange)
 * - Description
 * - 2 CTAs: Explore Now + Watch Demo
 * - 3 Stats
 * - Image placeholder
 */
export function HeroSection() {
  return (
    <section id="hero" className={`section-padding-large position-relative overflow-hidden p-0 ${style.sectionHeightDesktop} d-flex justify-content-center align-items-center`}>
      {/* Gradient background effect */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black " />

      <img src={bgImg} alt="" className={` d-none d-md-block position-absolute ${style.bgStyle}`} loading="lazy" />
      <img src={bgImgNoShadow} alt="" className={` d-md-none position-absolute ${style.bgStyle}`} loading="lazy" />
      <div className={`container-custom position-relative z-10 ${style.w90} h-100`}>
        <div className="row align-items-center gx-5 gy-4 h-100">
          {/* Left: Content */}
          <motion.div className={`col-12 col-lg-6 d-flex flex-column justify-content-between ${style.leftColumnContainer}`}>
            <div>

              <div className="mb-4 pt-5 ps-md-5">
                <motion.p className={` text-light fw-bolder pb-0 mb-0 ${style.headlineDesktop}`}
                  initial={{ opacity: 0, x: -500 }} // Start off-screen left
                  animate={{ opacity: 1, x: 0 }}    // End at normal position
                  transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                >
                  See Beyond<br />
                  <span className={`text-orange-lumos pt-0 mt-0 ${style.limitsWord}`}>Limits</span>
                </motion.p>
              </div>

              <motion.p className={`lead text-light mb-4 d-lg-none ${style.heroDescription}`}
                initial={{ opacity: 0, x: -500 }} // Start off-screen left
                animate={{ opacity: 1, x: 0 }}    // End at normal position
                transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}>
                Lumos is an intelligent accessibility system designed to support blind and low-vision users with greater independence, awareness, and comfort. It connects seamlessly, offering real-time guidance, voice interaction, and smart assistance whenever needed.
              </motion.p>
            </div>

            {/* Stats */}


            {/* CTA Buttons */}
            <motion.div className={`d-flex flex-wrap gap-3 mb-5 align-self-center ${style.buttonContainer}`}
              initial={{ opacity: 0, x: -500 }} // Start off-screen left
              animate={{ opacity: 1, x: 0 }}    // End at normal position
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}>
              <button className="btn btn-secondary ">Explore products</button>
              <button className="btn btn-primary ">View pricing plan</button>
            </motion.div>
          </motion.div>

          {/* Right: Image Placeholder */}
          <div className={`col-12 col-lg-6 d-flex flex-column ${style.rightColumnContainer}`}>
            <div className={`w-100 d-flex align-items-center justify-content-end position-relative ${style.cardsWrapper}`}>
              <motion.div className={`mb-2 mb-xl-0 position-relative rounded-4 glassmorphism d-flex flex-column align-items-center justify-content-around py-2 px-3 ${style.smartAssistantCard}`}
                initial={{ opacity: 0, x: 500 }} // Start off-screen left
                animate={{ opacity: 1, x: 0 }}    // End at normal position
                transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}>

                <div className=' w-100 d-flex justify-content-around align-items-center'>
                  <div className=' d-flex justify-content-center border border-orange-lumos rounded-circle overflow-hidden'>
                    <img src={Agent_AI_Avatar} alt="Agent AI" srcset="" loading="lazy" />
                  </div>
                  <div className=' d-flex  flex-column justify-content-center align-items-start w-75'>
                    <p className=' text-light fw-medium small mb-0'>Smart Assistant</p>
                    <p className=' text-orange-lumos mb-0'>Your Personal Vision Assistant</p>
                  </div>
                </div>

                <div className=' w-100 d-flex flex-column align-items-center justify-content-around'>
                  <div className={` ${style.w90} d-flex justify-content-between align-items-center border-bottom border-dark mb-3`}>
                    <p className={style.customGray}>Object recognition</p>
                    <p className=' text-light fw-medium'>99% accurate</p>
                  </div>

                  <div className={` ${style.w90} d-flex justify-content-between align-items-center border-bottom border-dark`}>
                    <p className={style.customGray}>Response time</p>
                    <p className=' text-light fw-medium'> {'<'} 200ms</p>
                  </div>

                </div>

                <div className=' w-100 px-4'>
                  <button className=' w-100 mb-2 h-100 btn btn-primary'>
                    Try Voice Demo
                  </button>
                </div>
              </motion.div>
            </div>
            <motion.div className={`${style.statsWrapper}`}
              initial={{ opacity: 0, x: 500 }} // Start off-screen left
              animate={{ opacity: 1, x: 0 }}    // End at normal position
              transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
            >
              <div className={`pt-1 ${style.statCard} glassmorphism rounded-3 border border-dark d-flex flex-column align-items-center justify-content-center mx-md-1 mx-xl-0`}>
                <p className="h2 text-orange-lumos fw-bold">360°</p>
                <p className={`small ${style.customGray}`}>Obstacle Detection</p>
              </div>
              <div className={`pt-1 ${style.statCard} glassmorphism rounded-3 border border-dark d-flex flex-column align-items-center justify-content-center mx-md-1 mx-xl-0`}>
                <p className="h2 text-orange-lumos fw-bold">24/7</p>
                <p className={`small ${style.customGray}`}>Smart Assistance</p>
              </div>
              <div className={`pt-1 ${style.statCard} glassmorphism rounded-3 border border-dark d-flex flex-column align-items-center justify-content-center mt-2 mt-xl-0`}>
                <p className="h2 text-orange-lumos fw-bold">100%</p>
                <p className={`small ${style.customGray}`}> Safety Confidence</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>);
}

export default HeroSection;
