import { ExternalLink, Check } from 'lucide-react';
import { LINKS } from '../data/links';
import './Certification.css';

const TOPICS = [
  'HTML & CSS', 'JavaScript', 'Git & GitHub', 'React',
  'Node.js & Express', 'Python', 'Flask', 'Django',
  'SQL & PostgreSQL', 'Docker', 'Kubernetes', 'OpenShift',
  'Microservices', 'Serverless', 'CI/CD', 'Full Stack App Dev',
];

export default function Certification() {
  return (
    <section className="section" id="certification" aria-label="Education and certification">
      <div className="container">
        <div className="label">
          <span className="label-line" aria-hidden="true" />
          Education &amp; Certification
        </div>
        <h2 className="section-heading" style={{ marginBottom: 32 }}>
          IBM Full Stack Software Developer
        </h2>

        <div className="cert-card card">
          {/* Left: badge + meta */}
          <div className="cert-left">
            <div className="cert-badge" aria-label="IBM certification badge">
              <div className="cert-badge-inner">
                <div className="cert-ibm-logo">IBM</div>
                <div className="cert-badge-label">Professional Certificate</div>
              </div>
            </div>

            <div className="cert-issuer">
              <div className="cert-issuer-name">Coursera / IBM Skills Network</div>
              <div className="cert-date">Completed: March 2026</div>
              <div className="cert-courses">12 courses</div>
            </div>

            <a
              href={LINKS.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm cert-verify-btn"
              aria-label="View IBM Full Stack certificate on Coursera"
            >
              <ExternalLink size={13} />
              View IBM Certificate
            </a>
          </div>

          {/* Center: description */}
          <div className="cert-center">
            <h3 className="cert-title">IBM Full Stack Software Developer Professional Certificate</h3>
            <p className="cert-desc">
              Completed a professional certificate covering full stack application development,
              cloud-native development, frontend, backend, databases, containers, microservices,
              serverless concepts, CI/CD, and deployment workflows. Includes hands-on projects
              deployed to cloud environments.
            </p>

            <div className="cert-topics">
              {TOPICS.map(t => (
                <span key={t} className="cert-topic">
                  <Check size={11} aria-hidden="true" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
