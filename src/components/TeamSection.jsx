import React from 'react'
import { siteContent } from '../data/content'
import style from './FeaturesSection.module.css'

export default function TeamSection(){
  return (
    <section id="team" className="py-5 bg-dark w-100 h-auto">
      <div className="container">
        <h3 className={`${style.brandColor} mb-4`}>Team Nova</h3>
        <div className="row w-100 d-flex flex-wrap align-items-start justify-content-around" style={{height:'200vh'}}>
          {siteContent.team.map((m,i)=> (
            <div key={i} className="col-sm-4 col-md-4 d-flex justify-content-center h-25 mb-4 mb-md-0 rounded-2">
              <div className=" w-75 h-100 border-0 rounded-2">
                <div style={{height:'200px',background:'#e9ecef'}} className=" h-50 d-flex align-items-center justify-content-center text-muted rounded-top-2">IMG</div>
                <div className={`${style.bgSecond} h-50 rounded-2 py-3 px-2`}>
                  <h5 className={` ${style.brandColor} `}>{m.name}</h5>
                  <p className="small text-light">{m.role}</p>
                  {/* <p className="card-text text-muted" style={{fontSize:'0.85rem'}}>{m.bio}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
