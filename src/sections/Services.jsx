import { Globe, LayoutDashboard, ClipboardList, CalendarClock } from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    icon: Globe,
    title: 'Business Websites',
    desc: 'Clean, responsive websites for local businesses, service companies, contractors, and small e-commerce brands.',
  },
  {
    icon: LayoutDashboard,
    title: 'Internal Workflow Dashboards',
    desc: 'Simple admin panels and dashboards for managing records, employees, calls, jobs, or daily operations.',
  },
  {
    icon: ClipboardList,
    title: 'Intake & Quote Systems',
    desc: 'Smart forms with validation, pricing logic, customer information, status tracking, and clean data entry.',
  },
  {
    icon: CalendarClock,
    title: 'Scheduling & Dispatch Tools',
    desc: 'Lightweight tools for appointments, dispatch, crews, units, assignments, and daily planning.',
  },
];

export default function Services() {
  return (
    <section className="section section-alt" id="services" aria-label="Freelance services">
      <div className="container">
        <div className="label">
          <span className="label-line" aria-hidden="true" />
          Workflow Tools
        </div>

        <div className="services-head">
          <h2 className="section-heading">Practical Tools for Real Operations</h2>
          <p className="services-sub">For small businesses, operations teams, and internal workflows.</p>
        </div>

        <div className="services-grid">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="service-card card">
              <div className="service-icon" aria-hidden="true">
                <Icon size={18} strokeWidth={1.7} />
              </div>
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="services-note">
          I also take selected freelance projects where my operations background can help
          small businesses improve real workflows.
        </div>
      </div>
    </section>
  );
}
