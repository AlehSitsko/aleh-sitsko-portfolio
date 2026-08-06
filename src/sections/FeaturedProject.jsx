import { Check, AlertCircle, Download, FileText } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';
import EMSPreview from '../components/previews/EMSPreview';
import { PROJECTS } from '../data/links';
import './FeaturedProject.css';

const ems = PROJECTS.find(p => p.id === 'ems');

// Real screenshots shown under the featured card (files in public/ems/).
const SHOTS = [
  ['/ems/dispatch-board.png', 'Dispatch Board'],
  ['/ems/calendar.png',       'Operational Calendar'],
  ['/ems/reports.png',        'Reports & Analytics'],
];

export default function FeaturedProject() {
  return (
    <section className="section" id="projects" aria-label="Featured project">
      <div className="container">
        <div className="label">
          <span className="label-line" aria-hidden="true" />
          Featured Project
        </div>

        <div className="featured-card card">
          {/* Top area */}
          <div className="featured-top">
            {/* Info column */}
            <div className="featured-info">
              <div className="featured-heading-row">
                <h2 className="featured-title">{ems.title}</h2>
                <span className="badge badge-accent">Full Stack</span>
                <span className="badge">Web + Windows Desktop</span>
              </div>

              <p className="featured-desc">{ems.desc}</p>

              {/* Stack */}
              <div className="featured-stack">
                {ems.stack.map(s => (
                  <span key={s} className="badge">{s}</span>
                ))}
              </div>

              {/* Features grid */}
              <div className="featured-features">
                {ems.features.map(f => (
                  <div key={f} className="feature-item">
                    <Check size={13} className="feature-check" aria-hidden="true" />
                    {f}
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="featured-links">
                {ems.links.download && (
                  <a href={ems.links.download} target="_blank" rel="noopener noreferrer"
                    className="btn btn-primary btn-sm">
                    <Download size={14} /> Download for Windows
                  </a>
                )}
                <a href={ems.links.github} target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline btn-sm">
                  <GithubIcon size={14} /> View Code
                </a>
                {ems.links.release && (
                  <a href={ems.links.release} target="_blank" rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm">
                    <FileText size={14} /> Release notes
                  </a>
                )}
              </div>
              <div className="featured-download-note">
                Free Windows installer · offline · no account needed. The build is
                unsigned, so SmartScreen may warn — choose “More info → Run anyway”.
              </div>

              {/* Disclaimer */}
              <div className="featured-disclaimer">
                <AlertCircle size={12} aria-hidden="true" />
                {ems.disclaimer}
              </div>
            </div>

            {/* Preview column */}
            <div className="featured-preview">
              <EMSPreview />
            </div>
          </div>

          {/* Real media: a live walkthrough GIF + screenshots of the app */}
          <div className="featured-media">
            <div className="media-caption">Live walkthrough &amp; screenshots</div>
            <img className="media-gif" src="/ems/workflow.gif" loading="lazy"
              alt="EMS Workflow System — dispatcher walkthrough (login, dispatch board, calendar)" />
            <div className="media-shots">
              {SHOTS.map(([src, label]) => (
                <figure key={src} className="media-shot">
                  <img src={src} loading="lazy" alt={`EMS Workflow System — ${label}`} />
                  <figcaption>{label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
