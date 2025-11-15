import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-dark text-light py-4 pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-2 mb-md-0">© {new Date().getFullYear()} Team Nova — Lumos. All rights reserved.</div>
          <div className="col-md-6 text-md-end">
            <a className="text-light text-decoration-none me-3" href="#">Privacy</a>
            <a className="text-light text-decoration-none" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
