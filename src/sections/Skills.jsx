import './Skills.css';

const GROUPS = [
  {
    title: 'Frontend',
    cls: 'group-frontend',
    skills: ['React', 'JavaScript ES6+', 'HTML5 & CSS3', 'Vite', 'React Router', 'Responsive UI', 'Bootstrap'],
  },
  {
    title: 'Backend',
    cls: 'group-backend',
    skills: ['Python', 'Flask', 'Flask Blueprints', 'REST API', 'SQLAlchemy', 'Server-Sent Events'],
  },
  {
    title: 'Database',
    cls: 'group-db',
    skills: ['PostgreSQL', 'SQLite', 'Alembic migrations', 'SQL'],
  },
  {
    title: 'DevOps & Infra',
    cls: 'group-devops',
    skills: ['Docker', 'Redis', 'Nginx', 'Gunicorn', 'GitHub Actions (CI)', 'Cloudflare', 'Vercel'],
  },
  {
    title: 'Testing & QA',
    cls: 'group-testing',
    skills: ['pytest', 'Vitest', 'Playwright', 'React Testing Library'],
  },
  {
    title: 'Tools',
    cls: 'group-tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Electron', 'Postman'],
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
