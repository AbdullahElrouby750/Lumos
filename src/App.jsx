import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// landing
import { Landing } from './features/landing/pages/Landing';
import { LandingLayout } from './features/landing-layout/components/LandingLayout';

/**
 * App component - sets up routing for the landing page
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LandingLayout />}> 
          <Route path="/" element={<Landing />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
