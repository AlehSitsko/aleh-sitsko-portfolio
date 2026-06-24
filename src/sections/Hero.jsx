import { ArrowRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons';
import EMSPreview from '../components/previews/EMSPreview';
import { LINKS } from '../data/links';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Introduction">
      <div className="container hero-inner">
        {/* Left */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <div className="eyebrow-dot" aria-hidden="true" />
            Aleh Sitsko
          </div>

          <h1 className="hero-h1">
            I build practical web tools for operations-heavy businesses.
          </h1>

          <p className="hero-subtitle">Operations-Focused Full Stack Developer</p>

          <p className="hero-desc">
            Intake forms, dashboards, scheduling workflows, employee tracking systems, and
            internal admin tools — built for businesses that run on real-world operations.
          </p>

          <p className="hero-support">
            With EMS dispatch and operations management experience, I understand the workflow
            problems behind the software, not just the code.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={15} />
            </a>
            <a href={LINKS.email} className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-links">
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer"
              className="hero-link" aria-label="GitHub">
              <GithubIcon size={15} />
              GitHub
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"
              className="hero-link" aria-label="LinkedIn">
              <LinkedinIcon size={15} />
              LinkedIn
            </a>
            <a href={LINKS.resume} className="hero-link" aria-label="Download Resume">
              <Download size={15} />
              Resume
            </a>
          </div>
        </div>

        {/* Right — product preview */}
        <div className="hero-visual">
          <EMSPreview />
        </div>
      </div>
    </section>
  );
}
