import React from 'react'
import { siteContent } from '../data/content'

export default function TechnologySection(){
  return (
    <section id="technology" className="py-5 bg-light">
      <div className="container">
        <h3>Technology</h3>
        <p className="text-muted mb-3">Concise technical specs and suggested stack.</p>
        <div className="d-flex flex-wrap gap-2">
          {siteContent.tech.stack.map((t,i)=> (
            <span key={i} className="badge bg-secondary">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
