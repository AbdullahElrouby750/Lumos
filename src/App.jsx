import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import About from './components/About'
import FeaturesSection from './components/FeaturesSection'
import DevicesDiagram from './components/DevicesDiagram'
import AddonsSection from './components/AddonsSection'
import TechnologySection from './components/TechnologySection'
import TeamSection from './components/TeamSection'
import DownloadsSection from './components/DownloadsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App(){
  const [dir, setDir] = useState('ltr')
  useEffect(()=>{ document.documentElement.dir = dir },[dir])

  return (
    <div>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header onToggleDir={() => setDir(d => d === 'ltr' ? 'rtl' : 'ltr')} />
      <main id="main">
        <HeroSection />
        <About />
        <FeaturesSection />
        {/* <DevicesDiagram /> */}
        {/* <AddonsSection /> */}
        {/* <TechnologySection /> */}
        <TeamSection />
        {/* <DownloadsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
