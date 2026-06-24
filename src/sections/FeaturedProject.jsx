import { Check, AlertCircle, Video } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';
import EMSPreview from '../components/previews/EMSPreview';
import { PROJECTS } from '../data/links';
import './FeaturedProject.css';

const ems = PROJECTS.find(p => p.id === 'ems');

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
                <a href={ems.links.github} target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline btn-sm">
                  <GithubIcon size={14} /> View Code
                </a>
                {ems.links.walkthrough ? (
                  <a href={ems.links.walkthrough} target="_blank" rel="noopener noreferrer"
                    className="btn btn-outline btn-sm">
                    <Video size={14} /> Video Walkthrough
                  </a>
                ) : (
                  <span className="btn btn-ghost btn-sm walkthrough-soon">
                    <Video size={14} /> Walkthrough Coming Soon
                  </span>
                )}
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
        </div>
      </div>
    </section>
  );
}
