import { ArrowLeft, ExternalLink, Check, Target, UserCog, Lightbulb, Monitor, Database } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';
import { PROJECTS } from '../data/links';
// Reuse the shared case-study styling from the EMS page.
import './EmsCaseStudy.css';

const nex = PROJECTS.find(p => p.id === 'nexvora');

const STATS = [
  { v: '4',        k: 'pages · Home / About / MAP / Contact' },
  { v: 'MAP',      k: 'dedicated brand-protection page' },
  { v: 'SEO + OG', k: 'per-page metadata' },
  { v: '1 file',   k: 'config-driven content (siteConfig.js)' },
];

const GOAL = [
  'Present Nexvora Group as a reliable, long-term wholesale retail partner.',
  'Communicate MAP compliance and brand-protection standards clearly.',
  'Provide a professional contact point for supplier inquiries.',
  'Avoid all consumer e-commerce language and visuals — read as serious B2B.',
  'Be ready to deploy under the company’s custom domain when approved.',
];

const ROLE = [
  'Requirements gathering and business-positioning review.',
  'Content structure, page hierarchy, and B2B copy direction.',
  'Frontend development (React + Vite) with a responsive corporate UI.',
  'Validated partnership contact form (preview-ready for Formspree / Netlify / EmailJS).',
  'Per-page SEO and Open Graph metadata; SVG icon system.',
  'Configuration architecture — one siteConfig.js for every editable detail.',
  'Demo deployment on Vercel, plus README and case-study documentation.',
];

const FEATURES = [
  'Responsive corporate layout — dark navy skyline hero, clean white content sections, green accent.',
  'Supplier-focused B2B messaging throughout — no product cards or consumer visuals.',
  'Dedicated MAP & brand-protection page for supplier relations.',
  'Partnership contact form with validation, ready to wire to a real endpoint.',
  'Per-page SEO titles/descriptions and Open Graph tags for professional link previews.',
  'All company details, navigation, and integrations centralized in a single config file.',
];

const SHOTS = [
  ['/nexvora/home.jpg',       'Home — Wholesale & E-Commerce Partner'],
  ['/nexvora/map-policy.jpg', 'MAP & Brand Protection Policy'],
  ['/nexvora/about.jpg',      'About — Company & Principles'],
  ['/nexvora/contact.jpg',    'Partnership Contact Form'],
];

function Home() { window.location.hash = ''; window.scrollTo(0, 0); }

export default function NexvoraCaseStudy() {
  return (
    <div className="ems-case">
      <div className="container">
        <a href="#/" className="ems-back" onClick={Home}>
          <ArrowLeft size={15} /> Back to portfolio
        </a>

        {/* Hero */}
        <div className="label"><span className="label-line" aria-hidden="true" /> Case Study — Client Project</div>
        <h1 className="ems-title">{nex.title}</h1>
        <p className="ems-tagline">
          A professional B2B website that positions a Pennsylvania-based wholesale &amp; e-commerce
          company as a credible, MAP-compliant supplier partner — built as a real client project.
        </p>

        <div className="ems-cta">
          <a href={nex.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            <ExternalLink size={14} /> Live Demo
          </a>
          <a href={nex.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
            <GithubIcon size={14} /> View Code
          </a>
        </div>

        {/* Stat band */}
        <div className="ems-stats">
          {STATS.map(s => (
            <div key={s.k} className="ems-stat card">
              <div className="ems-stat-v">{s.v}</div>
              <div className="ems-stat-k">{s.k}</div>
            </div>
          ))}
        </div>

        {/* Client & problem */}
        <section className="ems-block">
          <h2 className="ems-h2">The client &amp; the problem</h2>
          <p className="ems-p">
            Nexvora Group is a Pennsylvania-based e-commerce retail company focused on wholesale
            purchasing and long-term supplier relationships. They were about to approach brands,
            manufacturers, and authorized distributors to open wholesale accounts — but had no web
            presence to support that outreach. Without a site, a supplier rep reviewing an account
            request had no way to verify the company’s professionalism, its approach to MAP
            compliance, or its brand-protection standards. The core challenge was positioning: the
            site had to read as a serious B2B business, not a consumer store, a marketplace seller,
            or a startup landing page.
          </p>
        </section>

        {/* Goal */}
        <section className="ems-block">
          <h2 className="ems-h2"><Target size={18} /> The goal</h2>
          <ul className="ems-list">
            {GOAL.map(x => <li key={x}><Check className="ems-ck" size={15} /> {x}</li>)}
          </ul>
        </section>

        {/* Role */}
        <section className="ems-block">
          <h2 className="ems-h2"><UserCog size={18} /> My role</h2>
          <ul className="ems-list">
            {ROLE.map(x => <li key={x}><Check className="ems-ck" size={15} /> {x}</li>)}
          </ul>
        </section>

        {/* Solution */}
        <section className="ems-block">
          <h2 className="ems-h2"><Lightbulb size={18} /> The solution</h2>
          <p className="ems-p">
            A responsive multi-page React/Vite site — Home, About, MAP Policy, and Contact — built in a
            corporate visual style: a dark navy hero over a city-skyline backdrop, clean white content
            sections, professional typography, a green accent, and SVG line icons throughout. No emoji,
            no product cards, no consumer-facing visuals. A dedicated MAP Policy page speaks directly to
            supplier relations, showing the company respects pricing policies and authorized-distribution
            requirements. The contact form is fully built with validation (preview-only, ready to connect
            to Formspree, Netlify Forms, or EmailJS), and every editable detail — company name, email,
            WhatsApp, analytics ID, SEO — lives in one <code>siteConfig.js</code> the client can update
            without touching component code.
          </p>
        </section>

        {/* Features */}
        <section className="ems-block">
          <h2 className="ems-h2"><Check size={18} /> Key features</h2>
          <ul className="ems-list">
            {FEATURES.map(x => <li key={x}><Check className="ems-ck" size={15} /> {x}</li>)}
          </ul>
        </section>

        {/* Screenshots */}
        <section className="ems-block">
          <h2 className="ems-h2"><Monitor size={18} /> The site</h2>
          <div className="ems-shots">
            {SHOTS.map(([src, label]) => (
              <figure key={src} className="ems-shot card">
                <img src={src} loading="lazy" alt={`Nexvora Group — ${label}`} />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
          <figure className="ems-shot card" style={{ maxWidth: 300, margin: '16px auto 0' }}>
            <img src="/nexvora/mobile.jpg" loading="lazy" alt="Nexvora Group — responsive mobile layout" />
            <figcaption>Responsive mobile layout</figcaption>
          </figure>
        </section>

        {/* Stack */}
        <section className="ems-block">
          <h2 className="ems-h2"><Database size={18} /> Built with</h2>
          <div className="ems-stack">{nex.stack.map(s => <span key={s} className="badge">{s}</span>)}</div>
        </section>

        <div className="ems-disclaimer">
          Client preview demo deployed on Vercel; the production domain is connected when the client is ready.
        </div>

        <div className="ems-cta ems-cta-bottom">
          <a href={nex.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            <ExternalLink size={14} /> Live Demo
          </a>
          <a href={nex.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
            <GithubIcon size={14} /> View Code
          </a>
          <a href="#/" onClick={Home} className="btn btn-ghost btn-sm">
            <ArrowLeft size={14} /> Back to portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
