import { ArrowRight, BadgeCheck, Code2, Cpu } from 'lucide-react';
import { LINKS } from '../data/links';
import './About.css';

const ROLES = [
  'Full Stack Development',
  'Frontend & Backend Web Applications',
  'Internal Tools & Admin Dashboards',
  'QA Automation / SDET',
  'Workflow & Operations Software',
  'Business Process Automation',
];

export default function About() {
  return (
    <section className="section section-alt" id="about" aria-label="About">
      <div className="container">
        <div className="about-grid">

          {/* Story column */}
          <div className="about-story">
            <div className="label">
              <span className="label-line" aria-hidden="true" />
              My Path into Software
            </div>

            <h2 className="about-heading">
              From operations management<br />to full stack development.
            </h2>

            <div className="about-body">
              <p>
                Before software development, I worked in EMS dispatch and operations management,
                where I coordinated crews, handled scheduling pressure, solved real-time workflow
                issues, and saw how inefficient tools can slow down critical operations.
              </p>
              <p>
                That experience pushed me toward software development. I wanted to build the kind
                of tools I wished I had while working in operations: cleaner intake forms, better
                scheduling workflows, employee tracking, supervisor visibility, and practical dashboards.
              </p>
              <p>
                I completed the IBM Full Stack Software Developer Professional Certificate and built
                full-stack projects using React, JavaScript, Python, Flask, SQLAlchemy, and modern
                deployment workflows. My goal is to bring both technical skills and real operational
                understanding into software development.
              </p>
            </div>

            <blockquote className="about-quote">
              I build tools that solve real workflow problems because I have lived those problems firsthand.
            </blockquote>

            {/* Pillars row */}
            <div className="about-pillars">
              <div className="pillar">
                <Cpu size={15} aria-hidden="true" />
                <span>Operations background</span>
              </div>
              <div className="pillar">
                <Code2 size={15} aria-hidden="true" />
                <span>IBM-certified full stack</span>
              </div>
              <div className="pillar">
                <BadgeCheck size={15} aria-hidden="true" />
                <span>Full-stack projects built</span>
              </div>
            </div>
          </div>

          {/* Open-to-opportunities card */}
          <div className="roles-card card">
            <div className="roles-available">
              <span className="roles-dot" aria-hidden="true" />
              Open to Software Development Opportunities
            </div>

            <p className="roles-desc">
              I'm open to software development opportunities where I can contribute to practical
              web applications, internal tools, workflow systems, QA automation, and
              operations-focused software.
            </p>

            <div className="roles-list">
              {ROLES.map(r => (
                <div key={r} className="role-item">
                  <ArrowRight size={13} className="role-arrow" aria-hidden="true" />
                  {r}
                </div>
              ))}
            </div>

            <div className="roles-actions">
              <a href={LINKS.email} className="btn btn-primary btn-sm">
                Email Me
              </a>
              <a href={LINKS.resume} className="btn btn-outline btn-sm">
                Download Resume
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
