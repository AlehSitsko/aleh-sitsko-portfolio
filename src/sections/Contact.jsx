import { Mail, Download, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons';
import { LINKS } from '../data/links';
import './Contact.css';

export default function Contact() {
  return (
    <section className="section" id="contact" aria-label="Contact">
      <div className="container">
        <div className="contact-card card">
          <div className="contact-left">
            <div className="label">
              <span className="label-line" aria-hidden="true" />
              Let's Talk
            </div>
            <h2 className="contact-heading">Let's build something practical.</h2>
            <p className="contact-desc">
              I'm available for junior/associate software development opportunities,
              internal tools projects, and selected freelance work for small businesses.
            </p>

            <div className="contact-buttons">
              <a href={LINKS.email} className="btn btn-primary">
                <Mail size={15} />
                Email Me
              </a>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer"
                className="btn btn-outline">
                <GithubIcon size={15} />
                GitHub
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                className="btn btn-outline">
                <LinkedinIcon size={15} />
                LinkedIn
              </a>
              <a href={LINKS.resume} className="btn btn-outline">
                <Download size={15} />
                Download Resume
              </a>
              <a href={LINKS.certificate} target="_blank" rel="noopener noreferrer"
                className="btn btn-outline">
                <ExternalLink size={15} />
                View Certificate
              </a>
            </div>

            <p className="contact-refs">
              References and recommendations available upon request.
            </p>
          </div>

          <div className="contact-right">
            <div className="contact-detail">
              <div className="contact-detail-label">Email</div>
              <a href={LINKS.email} className="contact-detail-value">
                sitskoaleh@gmail.com
              </a>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-label">GitHub</div>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer"
                className="contact-detail-value">
                github.com/AlehSitsko
              </a>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-label">Location</div>
              <div className="contact-detail-value contact-detail-plain">
                Philadelphia area, PA
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-label">Status</div>
              <div className="contact-status">
                <span className="status-dot" aria-hidden="true" />
                Open to opportunities
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-label">Certification</div>
              <a href={LINKS.certificate} target="_blank" rel="noopener noreferrer"
                className="contact-detail-value">
                IBM Full Stack Developer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
