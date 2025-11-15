import React, { useState } from 'react'
import { sendContactForm } from '../lib/form'
import style from './FeaturesSection.module.css'

export default function ContactSection(){
  const [form, setForm] = useState({ name:'', email:'', role:'', message:'' })
  const [status, setStatus] = useState(null)

  function update(e){
    setForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  async function submit(e){
    e.preventDefault()
    if(!form.name || !form.email){
      setStatus({ok:false, message:'Please fill name and email'})
      return
    }
    setStatus({ok:null, message:'Sending...'})
    const res = await sendContactForm(form)
    setStatus(res.ok ? {ok:true, message:'Thanks — we will contact you.'} : {ok:false, message:res.message || 'Error'})
  }

  return (
    <section id="contact" className={`${style.bgSecond} py-5`}>
      <div className="container" style={{maxWidth:'600px'}}>
        <h3 className={`${style.brandColor} mb-4`}>Contact</h3>
        <form onSubmit={submit} className="row g-3 text-light">
          <div className="col-12">
            <label htmlFor="name" className="form-label">Name</label>
            <input placeholder='Enter Your Name...' id="name" type="text" name="name" value={form.name} onChange={update} className="form-control" aria-label="Name" />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input placeholder='ex: user@user.com' id="email" type="email" name="email" value={form.email} onChange={update} className="form-control" aria-label="Email" />
          </div>
          <div className="col-12">
            <label htmlFor="role" className="form-label">Role</label>
            <select id="role" name="role" value={form.role} onChange={update} className="form-select" aria-label="Role">
              <option value="">Select role</option>
              <option value="sponsor">Sponsor</option>
              <option value="pilot">Pilot</option>
              <option value="dev">Developer</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea placeholder='leave a message :)' id="message" name="message" value={form.message} onChange={update} className="form-control" rows="4" aria-label="Message" />
          </div>
          <div className="col-12 d-flex align-items-center gap-3">
            <button type="submit" className="btn btn-brand">Send</button>
            {status && (
              <div className={status.ok ? 'text-success' : 'text-danger'}>{status.message}</div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
