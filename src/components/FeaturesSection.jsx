import React from 'react'
import { siteContent } from '../data/content'
import style from './FeaturesSection.module.css'

function FeatureCard({ f }){
  return (
    <div className="card border-light">
      <div className="card-body">
        <div className="d-flex align-items-center gap-3">
          <div className="bg-light rounded flex-shrink-0 d-flex align-items-center justify-content-center w-25 h-100">
            <img className=' rounded-5' src={f.img} alt={f.title} style={{maxWidth:'80%',maxHeight:'80%'}} />
          </div>
          <div>
            <h5 className="card-title">{f.title}</h5>
            <p className="card-text small text-muted">{f.benefit}</p>
            <ul className="list-unstyled small text-muted">
              {f.bullets.map((b,i)=> <li key={i}>• {b}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeaturesSection(){
  return (
    <section id="features" className={`${style.bgSecond} ${style.section} py-5`}>
      <div className="container">
        <h2 className={`${style.brandColor} "mb-3 section-title"`}>Features & Core Components</h2>
        <p className="mb-4 text-light">Core product components and short specs.</p>
        <div className="row g-3 justify-content-around">
          {siteContent.features.map(f => (
            <div key={f.id} className="col col-sm-10 col-md-6">
              <FeatureCard f={f} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
