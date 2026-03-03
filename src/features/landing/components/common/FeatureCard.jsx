import {
  Zap,
  Brain,
  Shield,
  Lock,
  Smartphone,
  BarChart,
  Settings,
  Wifi,
} from 'lucide-react';

const iconMap = {
  Zap,
  Brain,
  Shield,
  Lock,
  Smartphone,
  BarChart,
  Settings,
  Wifi,
};

/**
 * FeatureCard
 * Card component for individual features
 * - Circular icon background (orange tint)
 * - Title
 * - Description
 * - Hover: scale up, shadow, border glow
 */
export function FeatureCard({ icon, title, description }) {
  const IconComponent = iconMap[icon] || Zap;

  return (
    <div className="card card-dark p-4 h-100 hover-shadow" style={{ transition: 'transform 0.3s' }}>
      {/* Icon Circle */}
      <div className="d-flex align-items-center justify-content-center mb-3 rounded-circle" style={{
        width: '4rem',
        height: '4rem',
        backgroundColor: 'rgba(255,69,0,0.1)',
        border: '1px solid rgba(255,69,0,0.3)'
      }}>
        <IconComponent className="text-orange-lumos" size={24} />
      </div>

      {/* Content */}
      <h3 className="h5 fw-semibold text-white mb-2">{title}</h3>
      <p className="text-secondary small">{description}</p>
    </div>
  );
}

export default FeatureCard;
