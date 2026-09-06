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
    tagline:  'A production-grade, multi-tenant EMS/NEMT operations platform — built from real dispatch experience, with field-level encryption, multi-worker realtime, and 1,400+ automated tests.',
    desc:     'A full-stack EMS/NEMT operations platform: call intake, a live dispatch board, an operational calendar with scheduling and recurring trips, patient and HR records, crew planning, fleet, time & payroll, PTO/leave, tasks, notifications, audit logging, and supervisor analytics. Built with defence-in-depth: session-cookie auth with CSRF, role-based access, runtime multi-tenant isolation, and AES-256-GCM field-level encryption at rest with per-organization envelope keys. Ships as a containerized web app (React + Flask on PostgreSQL / Redis / Nginx) and as a standalone, offline-capable Windows desktop app (Electron + SQLite).',
    stack:    ['React 19', 'Flask', 'Python', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Electron', 'Docker', 'Nginx', 'REST API', 'pytest', 'Playwright'],
    // Engineering-depth highlights (shown as stat chips) — what a technical reviewer looks for.
    stats: [
      { v: '1,400+',        k: 'automated tests' },
      { v: 'AES-256-GCM',   k: 'field encryption at rest' },
      { v: 'Redis + SSE',   k: 'multi-worker realtime' },
      { v: 'Multi-tenant',  k: 'runtime org isolation' },
      { v: '31',            k: 'Flask blueprints' },
      { v: '200+',          k: 'REST endpoints' },
    ],
    // "How it's built" — architecture / engineering decisions (deep-dive).
    built: [
      'Runtime tenant isolation: every query is org-scoped and every write org-stamped from the trusted session — cross-org access resolves to 404.',
      'Field-level encryption at rest (AES-256-GCM) with per-org envelope keys, AAD binding (ciphertext can’t move across org/row/field), and blind-index columns for exact-match search without decryption.',
      'Fail-closed key handling: production refuses to start without a valid master key; envelope rotation re-wraps org keys without re-encrypting data; a stolen DB dump is useless without the key.',
      'Realtime behind a broker abstraction: an in-memory bus for single-process, a Redis Pub/Sub broker that fans Server-Sent Events across Gunicorn workers — with a fail-closed guard against an unsafe multi-worker config.',
      'Invite-only onboarding, per-device session revocation, password policy/history, and one-time organization recovery codes.',
      'S3-compatible object storage for documents (local files for standalone), tenant-scoped keys, streamed downloads.',
      'CI boots the entire production stack (PostgreSQL · Redis · Gunicorn×3 · Nginx · MinIO) and smoke-tests migrations, multi-worker realtime, and an S3 document round-trip on every push.',
    ],
    features: [
      'Live dispatch board',
      'Guided call intake & scheduling',
      'Operational calendar & recurring trips',
      'Crew planning & fleet',
      'Time, payroll, PTO & leave',
      'Role-based access & audit log',
      'Encryption at rest & tenant isolation',
      'Notifications & web push',
      'Reports & supervisor analytics',
      'Standalone Windows desktop app',
    ],
    links: {
      github:      'https://github.com/AlehSitsko/ems-workflow-system',
      download:    'https://github.com/AlehSitsko/ems-workflow-system/releases/latest/download/EMS-Workflow-System-Setup.exe',
      release:     'https://github.com/AlehSitsko/ems-workflow-system/releases/latest',
      caseStudy:   '#/ems',
      demo:        null,
      walkthrough: null,
    },
    disclaimer: 'Portfolio project. Not intended for production medical use and should not be used with real patient data.',
  },
  {
    id:    'nexvora',
    title: 'Nexvora Group Website',
    desc:  'Client project for Nexvora Group, a Pennsylvania-based wholesale & e-commerce company. A responsive multi-page React/Vite site (Home, About, MAP Policy, Contact) built around B2B, supplier-focused positioning — including a dedicated MAP & brand-protection page, per-page SEO and Open Graph metadata, a validated partnership contact form, and all editable content centralized in a single config file. Deployed on Vercel.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'SEO / OG', 'Vercel'],
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
