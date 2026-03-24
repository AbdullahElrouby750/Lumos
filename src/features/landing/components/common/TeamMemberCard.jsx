import rouby from '../../../../assets/rouby.PNG';
import habiba from '../../../../assets/habiba.PNG';
import henar from '../../../../assets/henar.PNG';
import diaa from '../../../../assets/diaa.PNG';
import alaa from '../../../../assets/alaa.PNG';
import salah from '../../../../assets/salah.PNG';
import sara from '../../../../assets/sara.PNG';
import bakr from '../../../../assets/bakr.PNG';
import { SocialIcon } from 'react-social-icons';

/**
 * TeamMemberCard
 * Team member card with:
 * - Avatar circle with 2-letter initials
 * - Name
 * - Role (in orange)
 * - Bio
 * - Hover effects
 */
export function TeamMemberCard({ member }) {
  const { id, name, initials, role, link1, link2 } = member;
  const imgMap = {
    1: rouby,
    2: habiba,
    3: henar,
    4: diaa,
    5: alaa,
    6: salah,
    7: sara,
    8: bakr,
  };


  return (
    <div className=" card card-dark text-center py-4 border-1 border-dark-borderDark w-100" style={{ minWidth: '284px', maxWidth: '300px', height: '446.5px', fontSize: '1.5rem', backgroundColor: '#080808' }}>
      <div className=" w-100 px-2 py-1 h-75 rounded" >
        {imgMap[id] ? (
          <div className=" w-100 h-100 d-flex justify-content-center align-items-center rounded-2 overflow-hidden ">
            <img
              src={imgMap[id]} alt={name}
              className='rounded-2 overflow-hidden'
              style={{ objectFit: 'cover', objectPosition: 'center', width: '80%', height: '100%' }}
              loading="lazy" />
          </div>
        ) : (
          <div className=" rounded-circle w-100 h-100 d-flex justify-content-center align-items-center bg-orange-lumos">
            <span className=" text-white fw-bold" style={{ fontSize: '2.7rem' }}>{initials}</span>
          </div>
        )}
      </div>
      <div className=" w-100 h-25 text-start ps-3 pt-1">
        <h3 className="h5 fw-semibold text-white mb-1">{name}</h3>
        <p className="text-orange-lumos fw-medium small mb-2">{role}</p>
        {link1 && <div className="mt-3 d-flex justify-content-start gap-2">
          {/* Placeholder for social icons */}
          <SocialIcon url={link1.url} className=' rounded' style={{ width: '2rem', height: '2rem' }} />
          {link2 && <SocialIcon url={link2.url} className=' rounded' style={{ width: '2rem', height: '2rem' }} />}
        </div>}
      </div>

    </div>
  );
}

export default TeamMemberCard;
