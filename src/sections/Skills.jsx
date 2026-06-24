import './Skills.css';

const GROUPS = [
  {
    title: 'Frontend',
    cls: 'group-frontend',
    skills: ['React', 'JavaScript ES6+', 'Vite', 'Bootstrap', 'Responsive UI', 'React Router'],
  },
  {
    title: 'Backend',
    cls: 'group-backend',
    skills: ['Python', 'Flask', 'Flask Blueprints', 'REST API', 'Flask-CORS', 'SQLAlchemy'],
  },
  {
    title: 'Database',
    cls: 'group-db',
    skills: ['SQLite', 'SQL fundamentals', 'PostgreSQL (planned)'],
  },
  {
    title: 'Tools',
    cls: 'group-tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Cloudflare Pages', 'GitHub Pages'],
  },
  {
    title: 'Domain Knowledge',
    cls: 'group-domain',
    domain: true,
    skills: [
      'EMS dispatch',
      'Operations management',
      'Call intake workflows',
      'Crew scheduling',
      'Employee tracking',
      'Quality control',
    ],
  },
];

export default function Skills() {
  return (
    <section className="section section-alt" id="skills" aria-label="Skills">
      <div className="container">
        <div className="label">
          <span className="label-line" aria-hidden="true" />
          Skills
        </div>
        <h2 className="section-heading" style={{ marginBottom: 32 }}>
          Technical Expertise
        </h2>

        <div className="skills-grid">
          {GROUPS.map(({ title, cls, skills, domain }) => (
            <div key={title} className={`skill-group card ${cls}`}>
              <h3 className={`skill-group-title${domain ? ' domain-title' : ''}`}>{title}</h3>
              <div className="skill-tags">
                {skills.map(s => (
                  <span key={s} className={`badge${domain ? ' badge-domain' : ''}`}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
