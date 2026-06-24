export const LINKS = {
  github:      'https://github.com/AlehSitsko',
  linkedin:    'https://linkedin.com/in/alehsitsko',
  email:       'mailto:sitskoaleh@gmail.com',
  resume:      '#',   // Replace with real PDF URL
  certificate: 'https://coursera.org/share/530a3b57b1ef0f5c30c1c94845a31a96',
  domain:      'https://alehsitsko.dev',
};

export const PROJECTS = [
  {
    id:       'ems',
    featured: true,
    title:    'EMS Workflow System',
    desc:     'Full-stack operational workflow system for EMS-style call intake, patient lookup, employee tracking, crew planning, role-based access, and supervisor analytics.',
    stack:    ['React', 'JavaScript', 'Python', 'Flask', 'SQLAlchemy', 'SQLite', 'Bootstrap', 'REST API'],
    features: [
      'Role-based access control',
      'Guided call intake wizard',
      'Call validation & scoring',
      'Patient lookup & deduplication',
      'Call history with filters',
      'Employee records & certs',
      'Certification expiry alerts',
      'Crew planner & presets',
      'Supervisor analytics',
      'User management',
    ],
    links: {
      github:      'https://github.com/AlehSitsko/ems-workflow-system',
      demo:        null,
      walkthrough: null,
    },
    disclaimer: 'Portfolio prototype. Not intended for production medical use and should not be used with real patient data.',
  },
  {
    id:    'nexvora',
    title: 'Nexvora Group Website',
    desc:  'Responsive business website for a wholesale and e-commerce company. Focused on professional presentation, service sections, contact structure, policy pages, and mobile-friendly layout.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'Vercel'],
    links: {
      demo:   'https://nexvora-group.vercel.app/',
      github: 'https://github.com/AlehSitsko/Nexvora_Group',
    },
  },
  {
    id:    'calltaking',
    title: 'Call Taking Form — React Demo',
    desc:  'Lightweight frontend EMS call intake prototype deployed via GitHub Pages. An early version of the workflow concepts later expanded into the full EMS Workflow System.',
    stack: ['React', 'Vite', 'JavaScript', 'Bootstrap', 'GitHub Pages', 'localStorage'],
    links: {
      demo:   'https://alehsitsko.github.io/Call-Taking-Form-React/',
      github: 'https://github.com/AlehSitsko/Call-Taking-Form-React',
    },
  },
];
