import React from 'react'
import { siteContent } from '../data/content'

export default function AddonsSection(){
  return (
    <section id="addons" className="py-4">
      <div className="container">
        <h3>Add-ons & Possible Features</h3>
        <ul className="list-group list-group-flush mt-3">
          {siteContent.addons.map((a,i)=> <li key={i} className="list-group-item">{a}</li>)}
        </ul>
      </div>
    </section>
  )
}
