import { TEAM_MEMBERS } from '../../../../constants/landing-constants';
import TeamMemberCard from '../common/TeamMemberCard';

/**
 * TeamSection
 * Team showcase with:
 * - Title: "The Minds Behind Lumos"
 * - 6 team member cards in grid
 * - Grid: 1/2/3 columns responsive
 */
export function TeamSection() {
  return (
    <section id="team" className="section-padding-large">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">
            The Minds Behind <span className="text-orange-lumos">Lumos</span>
          </h2>
          <p className=" customGray w-75  lead mx-auto" >
            A dedicated team of engineers and designers crafting the future of assistive technology to empower the blind community.
          </p>
        </div>

        {/* Team Grid */}
        <div className="row g-4">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="col-12 col-md-6 col-lg-4">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
