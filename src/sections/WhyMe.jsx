import './WhyMe.css';

const CARDS = [
  {
    icon: '🏥',
    title: 'Real Operations Background',
    desc: 'Years managing EMS dispatch, crew scheduling, and operational workflows — not a simulation. I know how dispatch actually works.',
  },
  {
    icon: '⚙️',
    title: 'Workflow-First Development',
    desc: 'I map the process before touching the keyboard. The software serves the workflow, not the other way around.',
  },
  {
    icon: '🛠️',
    title: 'Practical Business Tools',
    desc: 'No overengineering. I build focused internal tools that your team can actually use — forms, dashboards, schedulers, trackers.',
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="section">
      <div className="container">
        <div className="whyme-statement">
          <blockquote className="whyme-quote">
            "I understand your workflow<br />
            <em>before</em> I write the code."
          </blockquote>
        </div>

        <div className="whyme-cards">
          {CARDS.map(({ icon, title, desc }) => (
            <div key={title} className="card whyme-card">
              <div className="whyme-icon">{icon}</div>
              <h3 className="whyme-title">{title}</h3>
              <p className="whyme-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
