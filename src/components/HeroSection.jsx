import React from 'react'
import { siteContent } from '../data/content'
import style from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section id="hero" className={`${style.heroSection} py-5 text-white`}>
      <div className="container d-flex flex-column w-100 h-100 justify-content-center align-items-center text-center py-5">
        <h1 className={`${style.brandColor} display-5 fw-bold`}>{siteContent.project.name}</h1>
        <p className="lead mt-3">{siteContent.project.tagline}</p>
        <p className="mt-3">{siteContent.project.subtitle}</p>
        {/* <div className="mt-4 d-flex justify-content-center gap-2">
          <a href="/downloads/Assistive_Mobility_One_Pager.pdf" className="btn btn-brand me-2">Download One-Pager</a>
          <a href="#contact" className="btn btn-outline-light">Request Demo</a>
        </div> */}
        {/* <div className="mt-4">
          <img src="/assets/hero-placeholder.svg" alt="Placeholder: Lumos device mockup - add final image" className="img-fluid" style={{maxWidth: '320px'}} />
        </div> */}
      </div>
    </section>
  )
}
