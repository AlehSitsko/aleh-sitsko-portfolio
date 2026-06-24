import './FeaturedProject.css';

const TECH = ['React', 'JavaScript', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'Bootstrap'];

const FEATURES = [
  'Role-based access control',
  'Call intake + validation',
  'Quality scoring',
  'Patient lookup',
  'Duplicate prevention',
  'Employee management',
  'Certification tracking',
  'Crew planner',
  'Supervisor analytics',
  'User management',
];

const SCREENSHOTS = [
  { label: 'Dashboard', key: 'dashboard' },
  { label: 'Call Intake', key: 'intake' },
  { label: 'Dispatch Board', key: 'dispatch' },
  { label: 'Crew Planner', key: 'crew' },
];

export default function FeaturedProject() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-label">Featured Project</div>
        <div className="featured-header">
          <div>
            <h2 className="section-title">EMS Workflow System</h2>
            <p className="section-subtitle">
              Full-stack operational workflow system for EMS-style call intake, patient lookup,
              employee tracking, crew planning, role-based access, and supervisor analytics.
            </p>
          </div>
          <div className="featured-links">
            <a
              href="https://github.com/AlehSitsko/ems-workflow-system"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://alehsitsko.github.io/Call-Taking-Form-React/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="featured-body">
          {/* Left: screenshot area */}
          <div className="featured-visual">
            <div className="img-placeholder featured-placeholder">
              <span style={{ fontSize: 32 }}>🖥️</span>
              <span>Screenshots coming soon</span>
              <div className="featured-thumb-row">
                {SCREENSHOTS.map(({ label, key }) => (
                  <div key={key} className="featured-thumb">
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: details */}
          <div className="featured-details">
            <div className="featured-tech">
              {TECH.map(t => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>

            <div className="featured-features">
              <div className="featured-features-title">Features</div>
              <ul className="featured-feature-list">
                {FEATURES.map(f => (
                  <li key={f} className="featured-feature-item">
                    <span className="feature-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="featured-disclaimer">
              Portfolio prototype. Not intended for production medical use
              and should not be used with real patient data.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
