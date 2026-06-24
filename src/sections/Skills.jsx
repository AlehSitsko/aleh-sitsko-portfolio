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
    skills: ['SQLite', 'SQL fundamentals', 'PostgreSQL basics'],
  },
  {
    title: 'Tools',
    cls: 'group-tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Cloudflare Pages', 'GitHub Pages', 'Postman'],
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
          {GROUPS.map(({ title, cls, skills }) => (
            <div key={title} className={`skill-group card ${cls}`}>
              <h3 className="skill-group-title">{title}</h3>
              <div className="skill-tags">
                {skills.map(s => (
                  <span key={s} className="badge">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
