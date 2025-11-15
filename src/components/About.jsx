import React from 'react'
import sideImg from '../assets/bgAside.png'
import style from './HeroSection.module.css'

export default function About() {
    return (
        <section id="about" className="d-flex align-items-center bg-dark py-sm-5 py-md-0" style={{ minHeight: '100vh' }}>
            <div className="container-fluid">
                <div className="row align-items-center g-4">
                    {/* Left side - Logo */}
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img
                            src={sideImg}
                            alt="Placeholder: sideImg"
                            className="img-fluid rounded-4"
                            style={{ maxWidth: '90%', maxHeight: '80vh' }}
                        />
                    </div>

                    {/* Right side - Content */}
                    <div className="col-md-6 d-flex flex-column justify-content-start align-items-stretch">
                        <h1 className={`${style.brandColor} mb-4`}>About Lumos</h1>
                        <p className="lead text-light">
                            Lumos is a modular, AI-powered wearable system that helps people with visual impairments move with confidence and independence. Combining discreet sensorized bracelets, a smart cane, noise-canceling earphones, and AI-enabled smart glasses with a friendly mobile app, Lumos turns real-time sensing into timely audio and haptic guidance — designed for safety, dignity, and everyday life.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
