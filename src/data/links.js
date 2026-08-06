export const LINKS = {
  github:      'https://github.com/AlehSitsko',
  linkedin:    'https://linkedin.com/in/alehsitsko',
  email:       'mailto:sitskoaleh@gmail.com',
  resume:      '/Aleh_Sitsko_Resume_Web.pdf',
  certificate: 'https://www.coursera.org/account/accomplishments/specialization/NMZB7BRO9C6E',
  domain:      'https://alehsitsko.dev',
};

export const PROJECTS = [
  {
    id:       'ems',
    featured: true,
    title:    'EMS Workflow System',
    desc:     'A full-stack EMS/NEMT operations platform: call intake, a live dispatch board, an operational calendar with scheduling and recurring trips, patient and HR records, crew planning, fleet, time & payroll, PTO/leave, tasks, notifications, audit logging, and supervisor analytics. Session-cookie auth with CSRF, role-based access, and active multi-tenant isolation. Ships as a web app (React + Flask, SQLite in dev / PostgreSQL in production) and as a standalone, offline-capable Windows desktop app (Electron).',
    stack:    ['React', 'Flask', 'Python', 'SQLAlchemy', 'PostgreSQL', 'Electron', 'Docker', 'Bootstrap', 'REST API', 'pytest'],
    features: [
      'Live dispatch board',
      'Guided call intake & scheduling',
      'Operational calendar & recurring trips',
      'Crew planning & fleet',
      'Time, payroll, PTO & leave',
      'Role-based access & audit log',
      'CSRF, session auth, tenant isolation',
      'Notifications & web push',
      'Reports & supervisor analytics',
      'Standalone Windows desktop app',
    ],
    links: {
      github:      'https://github.com/AlehSitsko/ems-workflow-system',
      download:    'https://github.com/AlehSitsko/ems-workflow-system/releases/latest/download/EMS-Workflow-System-Setup.exe',
      release:     'https://github.com/AlehSitsko/ems-workflow-system/releases/latest',
      demo:        null,
      walkthrough: null,
    },
    disclaimer: 'Portfolio project. Not intended for production medical use and should not be used with real patient data.',
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
