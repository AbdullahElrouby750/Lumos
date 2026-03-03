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
  const { name, initials, role, bio } = member;

  return (
    <div className="text-center">
      {/* Avatar */}
      <div className="mb-3 d-flex justify-content-center">
        <div className="rounded-circle d-flex align-items-center justify-content-center border" style={{
          width: '6rem',
          height: '6rem',
          background: 'linear-gradient(135deg, rgba(255,69,0,0.3), rgba(255,69,0,0.1))',
          borderColor: 'rgba(255,69,0,0.5)',
          transition: 'all 0.3s'
        }}>
          <span className="fs-3 fw-bold text-orange-lumos">{initials}</span>
        </div>
      </div>

      {/* Info */}
      <h3 className="h6 fw-semibold text-white mb-1">{name}</h3>
      <p className="text-orange-lumos fw-medium mb-3">{role}</p>
      <p className="text-secondary small px-2">{bio}</p>

      {/* Social Links (optional) */}
      <div className="mt-3 d-flex justify-content-center gap-2" style={{ opacity: 0, transition: 'opacity 0.3s' }}>
        {/* Placeholder for social icons */}
        <button className="btn btn-sm rounded-circle" style={{ width: '2rem', height: '2rem', backgroundColor: '#1f1f1f' }} />
        <button className="btn btn-sm rounded-circle" style={{ width: '2rem', height: '2rem', backgroundColor: '#1f1f1f' }} />
      </div>
    </div>
  );
}

export default TeamMemberCard;
