import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { LINKS } from '../data/links';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-dot" aria-hidden="true" />
          <div>
            <div className="footer-name">Aleh Sitsko</div>
            <div className="footer-role">Operations-Focused Full Stack Developer</div>
          </div>
        </div>

        <div className="footer-links">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer"
            className="footer-link" aria-label="GitHub profile">
            <GithubIcon size={15} />
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"
            className="footer-link" aria-label="LinkedIn profile">
            <LinkedinIcon size={15} />
          </a>
          <a href={LINKS.email} className="footer-link" aria-label="Send email">
            <Mail size={15} />
          </a>
        </div>

        <div className="footer-copy">
          <span>{new Date().getFullYear()}</span>
          <span className="footer-sep" aria-hidden="true">·</span>
          <span>alehsitsko.dev</span>
        </div>
      </div>
    </footer>
  );
}
