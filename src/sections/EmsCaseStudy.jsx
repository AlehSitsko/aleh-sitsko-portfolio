import { ArrowLeft, Download, FileText, Check, Shield, Zap, Layers, Database, TestTube2, Monitor } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import { PROJECTS } from '../data/links';
import './EmsCaseStudy.css';

const ems = PROJECTS.find(p => p.id === 'ems');

const SHOTS = [
  ['/ems/dashboard.png',      'Supervisor Dashboard'],
  ['/ems/dispatch-board.png', 'Live Dispatch Board'],
  ['/ems/calendar.png',       'Operational Calendar'],
  ['/ems/reports.png',        'Reports & Analytics'],
];

const SECURITY = [
  'AES-256-GCM field-level encryption at rest with per-organization envelope keys — the master key wraps a per-org data key; a stolen database dump is useless without it.',
  'AAD binding: every ciphertext is tied to its org, row and field, so a value can never be silently relocated across organizations, records or columns.',
  'Blind-index columns (keyed HMAC) enable exact-match search on encrypted fields — member ID, DOB — without ever decrypting the column.',
  'Fail-closed key handling: production refuses to start without a valid master key; a wrong key reads as “unavailable”, never overwriting ciphertext.',
  'Envelope key rotation re-wraps each org key under a new master version without re-encrypting the data; interrupted rotation is resumable and idempotent.',
  'Runtime tenant isolation: every query is org-scoped and every write org-stamped from the trusted session — a cross-org id resolves to 404.',
];

const REALTIME = [
  'A broker abstraction with one interface (subscribe / publish): an in-memory bus for a single process, a Redis Pub/Sub broker for production.',
  'Redis fans Server-Sent Events to every Gunicorn worker, so a dispatcher’s live board updates no matter which worker handled the write.',
  'A fail-closed startup guard refuses to boot more than one worker without Redis — the one configuration that would silently drop events.',
  'Resilient by design: a slow client drops events instead of blocking publishers; a Redis outage degrades gracefully instead of hanging requests.',
];

const QA = [
  '1,400+ automated tests — backend pytest, frontend Vitest, and Playwright browser scenarios (roles, dispatch, realtime, responsive).',
  'CI boots the entire production stack — PostgreSQL · Redis · Gunicorn×3 · Nginx · MinIO — and smoke-tests migrations, multi-worker realtime and an S3 document round-trip on every push.',
  'Adversarial security suite: cross-tenant access, org_id tampering, ciphertext relocation, key rotation and blind-index scoping all proven to fail closed.',
  'Alembic migrations run against real PostgreSQL in CI (not just SQLite), catching database-portability issues before deploy.',
];

function Home() { window.location.hash = ''; window.scrollTo(0, 0); }

export default function EmsCaseStudy() {
  return (
    <div className="ems-case">
      <div className="container">
        <a href="#/" className="ems-back" onClick={Home}>
          <ArrowLeft size={15} /> Back to portfolio
        </a>

        {/* Hero */}
        <div className="label"><span className="label-line" aria-hidden="true" /> Case Study — Flagship Project</div>
        <h1 className="ems-title">{ems.title}</h1>
        <p className="ems-tagline">{ems.tagline}</p>

        <div className="ems-cta">
          <a href={ems.links.download} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            <Download size={14} /> Download for Windows
          </a>
          <a href={ems.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
            <GithubIcon size={14} /> View Code
          </a>
          <a href={ems.links.release} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
            <FileText size={14} /> Release notes
          </a>
        </div>

        {/* Stat band */}
        <div className="ems-stats">
          {ems.stats.map(s => (
            <div key={s.k} className="ems-stat card">
              <div className="ems-stat-v">{s.v}</div>
              <div className="ems-stat-k">{s.k}</div>
            </div>
          ))}
        </div>

        {/* Why */}
        <section className="ems-block">
          <h2 className="ems-h2">Why I built it</h2>
          <p className="ems-p">
            I spent three years as an EMS operations manager and dispatcher, coordinating BLS/ALS/NEMT
            transport — crews, vehicles, facilities and time-sensitive route changes. The recurring
            operational problems I lived with became the requirements, permissions, workflows and
            validation rules of this platform. It is engineered like production software, not a demo:
            secure by default, multi-tenant, and verified by an adversarial test suite.
          </p>
        </section>

        {/* Architecture */}
        <section className="ems-block">
          <h2 className="ems-h2"><Layers size={18} /> Architecture</h2>
          <p className="ems-p">
            One codebase, two deployment profiles. On the server it runs containerized behind Nginx
            with multiple Gunicorn workers on PostgreSQL, Redis and S3-compatible storage. As a desktop
            app it bundles the same Flask backend (Waitress) over local SQLite — fully offline, no server,
            no Python or Node required.
          </p>
          <div className="ems-diagram card"><ArchitectureDiagram /></div>
        </section>

        {/* Security */}
        <section className="ems-block">
          <h2 className="ems-h2"><Shield size={18} /> Security &amp; data protection</h2>
          <ul className="ems-list">
            {SECURITY.map(x => <li key={x}><Lock /> {x}</li>)}
          </ul>
        </section>

        {/* Realtime */}
        <section className="ems-block">
          <h2 className="ems-h2"><Zap size={18} /> Multi-worker realtime</h2>
          <ul className="ems-list">
            {REALTIME.map(x => <li key={x}><Check className="ems-ck" size={15} /> {x}</li>)}
          </ul>
        </section>

        {/* QA */}
        <section className="ems-block">
          <h2 className="ems-h2"><TestTube2 size={18} /> Engineering &amp; QA</h2>
          <ul className="ems-list">
            {QA.map(x => <li key={x}><Check className="ems-ck" size={15} /> {x}</li>)}
          </ul>
        </section>

        {/* Screenshots */}
        <section className="ems-block">
          <h2 className="ems-h2"><Monitor size={18} /> The application</h2>
          <img className="ems-gif" src="/ems/workflow.gif" loading="lazy"
               alt="EMS Workflow System — dispatcher walkthrough" />
          <div className="ems-shots">
            {SHOTS.map(([src, label]) => (
              <figure key={src} className="ems-shot card">
                <img src={src} loading="lazy" alt={`EMS Workflow System — ${label}`} />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="ems-block">
          <h2 className="ems-h2"><Database size={18} /> Built with</h2>
          <div className="ems-stack">{ems.stack.map(s => <span key={s} className="badge">{s}</span>)}</div>
        </section>

        <div className="ems-disclaimer">{ems.disclaimer}</div>

        <div className="ems-cta ems-cta-bottom">
          <a href={ems.links.download} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            <Download size={14} /> Download for Windows
          </a>
          <a href={ems.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
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

// Small inline lock glyph so the security list has its own accent mark.
function Lock() {
  return (
    <svg className="ems-lock" width="15" height="15" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
