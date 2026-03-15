import style from './LomoSection.module.css';
import lomoBg from '../../../../assets/lomoBg.svg';
import lomoVoiceShape from '../../../../assets/lomoVoiceShape.svg';
import { motion } from 'framer-motion';

/**
 * LomoSection
 * Voice Assistant showcase with:
 * - Left: Content (tagline, headlines, descriptions)
 * - Right: Voice visual (waveform, listening text)
 * - Responsive: 55/45 desktop, stacked tablet/mobile
 */
function LomoSection() {
  return (
    <section
      id='lomo'
      className={`bg-black position-relative d-flex justify-content-center align-items-start ${style.lomoSection}`}
    >
      <div
        className={`d-flex overflow-hidden ${style.lomoCard}`}
        style={{ backgroundImage: `url(${lomoBg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
      >
        {/* LEFT COLUMN - CONTENT */}
        <motion.div className={`d-flex flex-column justify-content-center align-items-start ${style.lomoLeftColumn}`}
          initial={{ opacity: 0, x: -200 }} // Start off-screen left
          whileInView={{ opacity: 1, x: 0 }}    // End at normal position
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}>

          {/* Tagline */}
          <p className={`text-orange-lumos text-start ${style.lomoTagline}`}>
            POWERED BY ADVANCED AI
          </p>

          {/* Headlines */}
          <h2 className={`text-white text-start ${style.lomoHeadline}`}>
            LUMO - YOUR INTELLIGENT
          </h2>
          <h2 className={`text-orange-lumos text-start ${style.lomoHeadlineOrange}`}>
            Voice Companion
          </h2>

          {/* Description 1 - OPTIMIZED */}
          <p className={`text-white fw-normal text-start ${style.lomoDescription}`}>
            Lumo is your intelligent voice assistant designed to bring clarity,
            independence, and reassurance. More than just a voice, it's a constant
            presence—listening, guiding, and responding with calm, reliable support.
          </p>

          {/* Description 2 - OPTIMIZED */}
          <p className={`text-white fw-normal text-start ${style.lomoDescription}`}>
            Powered by advanced AI, Lumo understands natural speech and communicates
            clearly. It offers guidance and manages connected tools—quietly working in
            the background to keep you informed and supported.
          </p>
        </motion.div>

        {/* RIGHT COLUMN - VOICE VISUAL */}
        <motion.div
          className={`d-flex flex-column justify-content-center align-items-center ${style.lomoRightColumn}`}
          style={{ backgroundImage: `url(${lomoBg})` }}
          initial={{ opacity: 0, x: 200 }} // Start off-screen left
          whileInView={{ opacity: 1, x: 0 }}    // End at normal position
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Voice Icon */}
          <div className={style.lomoVoiceIconWrapper}>
            <img
              className='w-100'
              src={lomoVoiceShape}
              alt="Lomo Voice Shape"
            />
          </div>

          {/* Listening Text */}
          <p className={`text-orange-lumos text-center ${style.lomoListeningText}`}>
            lUMO IS LISTNING . . . . . .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default LomoSection;