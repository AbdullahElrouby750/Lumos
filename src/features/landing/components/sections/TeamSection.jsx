import { TEAM_MEMBERS } from '../../../../constants/landing-constants';
import TeamMemberCard from '../common/TeamMemberCard';
import style from './HeroSection.module.css';

/**
 * TeamSection
 * Team showcase with:
 * - Title: "The Minds Behind Lumos"
 * - 6 team member cards in grid
 * - Grid: 1/2/3 columns responsive
 */
export function TeamSection() {
  return (
    <section id="team"  className={`section-padding-large bg-black position-relative d-flex justify-content-center align-items-center`}>
      <div className={` w-100 d-flex flex-column justify-content-center align-items-center ${style.w85} `}>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">
            The Minds Behind <span className="text-orange-lumos">Lumos</span>
          </h2>
          <p className=" customGray w-75 lead mx-auto" >
            A dedicated team of engineers and designers crafting the future of assistive technology to empower the blind community.
          </p>
        </div>

        {/* Team Grid */}
        <div className="row g-5 h-100 w-100 justify-content-center">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className={`col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center`}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
