import React from 'react'

export default function DevicesDiagram(){
  return (
    <section id="devices" className="py-5">
      <div className="container text-center">
        <h2 className="mb-3 section-title">Devices Diagram</h2>
        <p className="text-muted mb-4">Top-half visual overview (placeholders)</p>
        <div className="row align-items-center justify-content-center g-4 mb-4">
          <div className="col-md-4">
            <img src="/assets/device-placeholder.png" alt="Placeholder: device group diagram" className="img-fluid" />
          </div>
          <div className="col-md-6 text-start">
            <div className="mb-3"><strong>Praclets</strong> — wrist-worn haptics + ToF sensors.</div>
            <div className="mb-3"><strong>Smart Stick</strong> — long-range obstacle detection.</div>
            <div className="mb-3"><strong>Smart Glasses</strong> — camera + compute unit for scene understanding.</div>
          </div>
        </div>
        <div className="py-3">
          <h5>Add-ons & Possible Features</h5>
        </div>
      </div>
    </section>
  )
}
