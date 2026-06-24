import './Projects.css';

const PROJECTS = [
  {
    title: 'Nexvora Group Website',
    desc: 'Responsive business website demo for a wholesale and e-commerce company.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { label: 'Live Demo', href: '#', primary: true },
      { label: 'GitHub', href: 'https://github.com/AlehSitsko', primary: false },
    ],
  },
  {
    title: 'Call Taking Form — React Demo',
    desc: 'Frontend EMS call intake prototype with guided wizard, quality scoring, and dispatch preview. Deployed via GitHub Pages.',
    tech: ['React', 'Vite', 'JavaScript'],
    links: [
      { label: 'Live Demo', href: 'https://alehsitsko.github.io/Call-Taking-Form-React/', primary: true },
      { label: 'GitHub', href: 'https://github.com/AlehSitsko/Call-Taking-Form-React', primary: false },
    ],
  },
];

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-label">More Projects</div>
        <h2 className="section-title" style={{ marginBottom: 40 }}>Other Work</h2>

        <div className="projects-grid">
          {PROJECTS.map(({ title, desc, tech, links }) => (
            <div key={title} className="card project-card">
              <div className="img-placeholder project-placeholder">
                <span style={{ fontSize: 24 }}>📁</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">{desc}</p>
                <div className="project-tech">
                  {tech.map(t => <span key={t} className="badge badge-neutral">{t}</span>)}
                </div>
                <div className="project-links">
                  {links.map(({ label, href, primary }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn ${primary ? 'btn-primary' : 'btn-outline'}`}
                      style={{ fontSize: 13, padding: '8px 18px' }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
