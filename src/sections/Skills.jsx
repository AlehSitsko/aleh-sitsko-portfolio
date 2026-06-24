import './Skills.css';

const SKILL_GROUPS = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'Vite', 'Bootstrap', 'CSS', 'HTML'],
  },
  {
    category: 'Backend',
    items: ['Python', 'Flask', 'REST API', 'SQLAlchemy'],
  },
  {
    category: 'Database',
    items: ['SQLite', 'SQL', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Cloudflare Pages', 'VS Code'],
  },
  {
    category: 'Domain Knowledge',
    items: ['EMS Dispatch', 'Operations Mgmt', 'Workflow Design', 'Scheduling', 'Crew Planning', 'Employee Tracking'],
  },
];

export default function Skills() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-label">Skills</div>
        <h2 className="section-title" style={{ marginBottom: 48 }}>Technical & Domain</h2>

        <div className="skills-grid">
          {SKILL_GROUPS.map(({ category, items }) => (
            <div key={category} className="skills-group">
              <div className="skills-category">{category}</div>
              <div className="skills-items">
                {items.map(item => (
                  <span key={item} className={`badge ${category === 'Domain Knowledge' ? 'badge-domain' : ''}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
