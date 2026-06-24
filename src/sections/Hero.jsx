import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        {/* Left */}
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="hero-status-dot" />
            Available for opportunities · Philadelphia, PA
          </div>

          <h1 className="hero-title">
            Aleh<br />
            <span className="hero-title-accent">Sitsko</span>
          </h1>

          <p className="hero-role">Operations-Focused Full Stack Developer</p>

          <p className="hero-desc">
            I build practical web tools for operations-heavy businesses: intake forms,
            dashboards, scheduling workflows, employee tracking systems, and internal
            admin platforms.
          </p>

          <p className="hero-support">
            With real EMS dispatch and operations management experience, I understand
            the workflow problems behind the software — not just the code.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>

          <div className="hero-links">
            <a
              href="https://github.com/AlehSitsko"
              target="_blank"
              rel="noreferrer"
              className="hero-social"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/alehsitsko"
              target="_blank"
              rel="noreferrer"
              className="hero-social"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: dashboard mockup */}
        <div className="hero-visual">
          <div className="hero-mockup">
            <div className="mockup-bar">
              <span className="mockup-dot red" />
              <span className="mockup-dot yellow" />
              <span className="mockup-dot green" />
              <span className="mockup-title">EMS Workflow System</span>
            </div>
            <div className="mockup-body">
              <div className="mockup-sidebar">
                {['Dashboard', 'Call Intake', 'Patients', 'Dispatch', 'Crew Planner'].map((item, i) => (
                  <div key={item} className={`mockup-nav-item${i === 0 ? ' active' : ''}`}>{item}</div>
                ))}
              </div>
              <div className="mockup-content">
                <div className="mockup-stats">
                  {[['12', 'Active Calls'], ['8', 'Units Today'], ['47', 'Patients'], ['94', 'Quality']].map(([n, l]) => (
                    <div key={l} className="mockup-stat">
                      <div className="mockup-stat-num">{n}</div>
                      <div className="mockup-stat-label">{l}</div>
                    </div>
                  ))}
                </div>
                <div className="mockup-table-head">
                  <span>Unit</span><span>Status</span><span>Patient</span><span>Route</span>
                </div>
                {[
                  ['M-12', 'En Route', 'R. Torres', 'Cooper Hospital'],
                  ['M-5',  'Available', '—', '—'],
                  ['M-8',  'On Scene', 'E. Voss', 'Jefferson Med'],
                ].map(([u, s, p, r]) => (
                  <div key={u} className="mockup-row">
                    <span className="mockup-unit">{u}</span>
                    <span className={`mockup-status s-${s.toLowerCase().replace(' ','-')}`}>{s}</span>
                    <span>{p}</span>
                    <span className="mockup-muted">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-glow" />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
