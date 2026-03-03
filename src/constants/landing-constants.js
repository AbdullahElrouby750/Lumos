// Lumos Website Constants
// Primary color: #ff4500 (Orange)

export const COLORS = {
  primary: '#ff4500',
  primaryOrange: 'hsla(0, 100%, 58%, 1)',
  dark: '#0a0a0a',
  darkGray: '#1a1a1a',
  mediumGray: '#2a2a2a',
  lightGray: '#404040',
  white: '#ffffff',
  textPrimary: '#ffffff',
  textSecondary: '#b0b0b0',
};

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Products', href: '#products' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
];

export const FEATURES = [
  {
    icon: 'Zap',
    title: 'Real-Time Processing',
    description: 'Advanced AI processes visual and sensor data in milliseconds for instant feedback.',
  },
  {
    icon: 'Brain',
    title: 'Intelligent Learning',
    description: 'Machine learning adapts to user preferences and environmental patterns.',
  },
  {
    icon: 'Shield',
    title: 'Privacy First',
    description: 'End-to-end encryption ensures your data stays secure and private.',
  },
  {
    icon: 'Zap',
    title: 'Long Battery Life',
    description: 'Ultra-efficient processing keeps your device running all day long.',
  },
];

export const COMPONENTS = [
  {
    id: 1,
    name: 'Smart Glasses',
    description: 'Advanced augmented reality glasses with real-time visual processing',
    icon: 'Glasses',
  },
  {
    id: 2,
    name: 'Sensorized Cane',
    description: 'Intelligent mobility aid with obstacle detection and navigation',
    icon: 'Navigation',
  },
  {
    id: 3,
    name: 'Smart Bracelets',
    description: 'Wearable sensors for health monitoring and gesture control',
    icon: 'Watch',
  },
];

export const PRICING_PLANS = [
  {
    id: 1,
    name: 'Starter Plan',
    price: '$49',
    period: '/one-time',
    description: 'Perfect for getting started',
    features: [
      'Basic AI assistance',
      '8-hour battery life',
      'Email support',
      'Standard accessories',
      'Community access',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    id: 2,
    name: 'Premium Plan',
    price: '$129',
    period: '/one-time',
    description: 'Most popular choice',
    features: [
      'Advanced AI features',
      '16-hour battery life',
      'Priority support 24/7',
      'Premium accessories',
      'Community + training',
      'Custom presets',
      'Beta features access',
    ],
    highlighted: true,
    cta: 'Choose Premium',
  },
  {
    id: 3,
    name: 'Professional Support',
    price: 'Contact',
    period: 'for enterprise',
    description: 'Tailored for organizations',
    features: [
      'Full AI suite',
      'Unlimited features',
      'Dedicated support',
      'Custom development',
      'Team training',
      'Integration services',
      'SLA guarantee',
    ],
    highlighted: false,
    cta: 'Contact Sales',
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Amelia Ross',
    initials: 'AR',
    role: 'Founder & CEO',
    bio: 'Visionary technologist passionate about assistive AI',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    initials: 'MC',
    role: 'CTO',
    bio: 'ML expert with 12+ years in computer vision',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    initials: 'SJ',
    role: 'Product Lead',
    bio: 'User-centered design strategist',
  },
  {
    id: 4,
    name: 'David Kim',
    initials: 'DK',
    role: 'Hardware Engineer',
    bio: 'IoT and embedded systems specialist',
  },
  {
    id: 5,
    name: 'Elena Rodriguez',
    initials: 'ER',
    role: 'UX Designer',
    bio: 'Accessibility-first design advocate',
  },
  {
    id: 6,
    name: 'James Wilson',
    initials: 'JW',
    role: 'Operations',
    bio: 'Project management and partnerships',
  },
];

export const FAQ_DATA = [
  {
    id: 1,
    question: 'How does Lumos use artificial intelligence?',
    answer:
      'Lumos leverages advanced machine learning algorithms to process visual and sensor data in real-time. Our AI learns from user interactions to provide personalized assistance and improve accuracy over time.',
  },
  {
    id: 2,
    question: 'Is the system easy to use for beginners?',
    answer:
      'Yes! Lumos is designed with accessibility in mind. Our intuitive interface and guided setup process make it easy for anyone to get started, regardless of technical experience.',
  },
  {
    id: 3,
    question: 'What kind of technical support is available?',
    answer:
      'We offer multiple support channels including email, live chat, phone support, and comprehensive documentation. Premium plan holders receive 24/7 priority support.',
  },
  {
    id: 4,
    question: 'Does Lumos work without an internet connection?',
    answer:
      'Yes! Core features work offline. Advanced cloud features require internet connectivity. Your data is always encrypted and processed securely.',
  },
  {
    id: 5,
    question: 'Can the system integrate with other devices?',
    answer:
      'Absolutely. Lumos supports integration with popular assisted living apps, smart home systems, and accessibility tools through standard APIs and protocols.',
  },
  {
    id: 6,
    question: 'What is your refund policy?',
    answer:
      'We offer a 30-day money-back guarantee if you\'re not completely satisfied. No questions asked. We stand behind the quality of our products.',
  },
];

export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Team', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};

export const SOCIAL_LINKS = [
  { label: 'GitHub', icon: 'Github', url: 'https://github.com' },
  { label: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com' },
  { label: 'Twitter', icon: 'Twitter', url: 'https://twitter.com' },
];
