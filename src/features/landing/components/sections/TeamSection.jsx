import { TEAM_MEMBERS } from '../../../../constants/landing-constants';
import TeamMemberCard from '../common/TeamMemberCard';
import style from './HeroSection.module.css';
import { motion } from 'framer-motion';

/**
 * TeamSection
 * Team showcase with:
 * - Title: "The Minds Behind Lumos"
 * - 6 team member cards in grid
 * - Grid: 1/2/3 columns responsive
 */
export function TeamSection() {
  return (
    <section id="team" className={`section-padding-large bg-black position-relative d-flex justify-content-center align-items-center`}>
      <div className={` w-100 d-flex flex-column justify-content-center align-items-center ${style.w85} `}>
        {/* Header */}
        <div className="text-center mb-5">
          <motion.h2 className="display-4 fw-bold"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}>
            The Minds Behind <span className="text-orange-lumos">Lumos</span>
          </motion.h2>
          <motion.p className=" customGray w-75 lead mx-auto"
            initial={{ opacity: 0, x: -500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}>
            A dedicated team of engineers and designers crafting the future of assistive technology to empower the blind community.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="row g-5 h-100 w-100 justify-content-center">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div key={member.id} className={`col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center`}
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1,scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            viewport={{ margin: '100px' }}>
            
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
