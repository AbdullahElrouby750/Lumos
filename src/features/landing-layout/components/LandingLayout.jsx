import { Outlet } from 'react-router-dom';

/**
 * LandingLayout
 * Main layout wrapper for the landing page
 * - Dark background container
 * - No sidebar
 * - Renders children/outlet
 */
export function LandingLayout() {
  return (
    <div className="bg-black min-vh-100 text-white">
      <Outlet />
    </div>
  );
}

export default LandingLayout;
