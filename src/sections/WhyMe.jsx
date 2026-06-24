import { Briefcase, GitBranch, Wrench } from 'lucide-react';
import './WhyMe.css';

const CARDS = [
  {
    icon: Briefcase,
    title: 'Real Operations Background',
    desc: 'Managed EMS dispatch, daily crew scheduling, and real-time workflow issues — not textbook scenarios.',
  },
  {
    icon: GitBranch,
    title: 'Workflow-First Development',
    desc: 'I map the business process before writing a single line. The software follows the workflow, not the other way around.',
  },
  {
    icon: Wrench,
    title: 'Practical Business Tools',
    desc: 'No unnecessary complexity. Every feature is there because someone actually needs it in their daily operations.',
  },
];

export default function WhyMe() {
  return (
    <section className="section section-alt" id="whyme" aria-label="Why work with me">
      <div className="container">
        <div className="whyme-statement">
          <p className="whyme-quote">
            I understand your workflow before I write the code.
          </p>
          <p className="whyme-sub">
            I build tools that solve real workflow problems because I have lived those problems firsthand.
          </p>
        </div>

        <div className="whyme-cards">
          {CARDS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="whyme-card card">
              <div className="whyme-icon" aria-hidden="true">
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <h3 className="whyme-card-title">{title}</h3>
              <p className="whyme-card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
