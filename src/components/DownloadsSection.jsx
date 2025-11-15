import React from 'react'

export default function DownloadsSection(){
  return (
    <section id="downloads" className="py-5">
      <div className="container text-center">
        <h3 className="mb-4">Downloads & Resources</h3>
        <div className="d-flex justify-content-center gap-2">
          <a href="/downloads/Assistive_Mobility_One_Pager.pdf" className="btn btn-brand">One-Pager (PDF)</a>
          <a href="/downloads/Assistive_Mobility_Presentation.pptx" className="btn btn-outline-secondary">Pitch Deck (PPTX)</a>
        </div>
      </div>
    </section>
  )
}
