
import glasses from '../assets/glasses.png'
import cane from '../assets/cane.png'
import brcelete from '../assets/brcelete.png'

export const siteContent = {
  project: {
    name: 'Lumos',
    tagline: 'Lumos — Illuminate the Path',
    subtitle: 'Assistive mobility hardware + software suite for people with visual impairments',
  },
  mission:
    'Lumos empowers visually impaired users with intuitive navigation and situational awareness through a set of wearable devices and a mobile app. We focus on safety, accessibility, and affordable assistive technology for daily mobility.',
  features: [
    {
      id: 'bracelets',
      title: 'Praclets (Bracelets)',
      bullets: ['ESP32-S3', 'VL53L1CX ToF sensor', 'Haptic alerts, BLE'],
      benefit: 'Discreet haptic navigation and obstacle warnings.',
      img: brcelete
    },
    {
      id: 'stick',
      title: 'Smart Stick',
      bullets: ['Robust ToF array', 'Long-range detection', 'Rechargeable battery'],
      benefit: 'Extended obstacle detection and path guidance.',
      img: cane
    },
    // {
    //   id: 'earphones',
    //   title: 'Mini Earphones',
    //   bullets: ['Low-latency audio', 'Voice prompts via app', 'Hands-free controls'],
    //   benefit: 'Clear voice cues and alerts.',
    //   img: ''
    // },
    {
      id: 'glasses',
      title: 'Smart Glasses (Pi4)',
      bullets: ['Raspberry Pi 5 suggested', 'Camera-based scene understanding', 'Optional Coral USB for acceleration'],
      benefit: 'Visual scene augmentation and payment prototypes.',
      img: glasses
    },
  ],
  addons: [
    'Smartwatch integration',
    'Home mapping & indoor positioning',
    'Fingerprint payment on glasses (UX caveat)',
  ],
  tech: {
    stack: ['ESP32-S3', 'VL53L1CX', 'Raspberry Pi 5', 'Flutter mobile app', 'C++ modules', '.NET + SQL Server (Huawei RDS)'],
  },
  team: [{
    name: `Abdullah Elrouby `,
    role: 'Leader/Frontend Developer',
  },
  {
    name: `Sara El-Nawam `,
    role: 'Mobile Application Developer',
  },
  {
    name: `Henar Ahmed`,
    role: 'UI UX Designer',
  },
  {
    name: `Habiba Elshobky `,
    role: 'AI/ML Specialist',
  },
  {
    name: `Alaa Saleh`,
    role: 'Backend Developer/Cloud Engineer',
  },
  {
    name: `Mahmoud Salah`,
    role: 'Backend Developer',
  },
  {
    name: `Mahmoud Bakr `,
    role: 'Hardware Engineer',
  },
  {
    name: `Diaa Oraby `,
    role: 'Hardware Engineer',
  }]

  // new Array(8).fill(0).map((_, i) => ({
  //   name: `Member ${i + 1}`,
  //   role: ['PM','HW','SW','ML','UX','DevOps','BD','Research'][i] || 'Member',
  //   bio: 'Placeholder bio. Replace with short role description from team.',
  // }))
  ,
}
