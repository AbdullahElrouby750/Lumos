import { Outlet } from 'react-router-dom';
import ChatWidget from '../../landing/components/chatbot/ChatWidget';

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
      <ChatWidget />
    </div>
  );
}

export default LandingLayout;
