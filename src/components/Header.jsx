import React from 'react'
import logo from '../assets/logo-03.png'
import style from './Header.module.css'
export default function Header({ onToggleDir }) {
  return (
    <nav className={`${style.header} navbar navbar-expand-lg navbar-dark fixed-top`} role="navigation">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#hero">
          <img src={logo} alt="Placeholder: Lumos logo" height="70" className=" w-75" />
          {/* <span className="fw-semibold">Lumos</span> */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample" aria-controls="navbarsExample" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item"><a className={`${style.links} nav-link`} href="#about">About</a></li>
            <li className="nav-item"><a className={`${style.links} nav-link`} href="#features">Features</a></li>
            {/* <li className="nav-item"><a className={`${style.links} nav-link`} href="#devices">Contact</a></li> */}
            <li className="nav-item"><a className={`${style.links} nav-link`} href="#team">Team</a></li>
            <li className="nav-item"><a className={`${style.links} nav-link`} href="#contact">Contact</a></li>
            {/* <li className="nav-item"><a className="btn btn-brand text-dark ms-2" href="#downloads">Downloads</a></li> */}
            {/* <li className="nav-item"><button onClick={onToggleDir} className="btn btn-outline-light btn-sm ms-2">RTL</button></li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
