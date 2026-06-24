import { Globe, LayoutDashboard, ClipboardList, CalendarClock } from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    icon: Globe,
    title: 'Business Websites',
    desc: 'Clean, responsive websites for local businesses, service companies, contractors, logistics, beauty professionals, and small e-commerce brands.',
  },
  {
    icon: LayoutDashboard,
    title: 'Internal Dashboards',
    desc: 'Simple admin panels and dashboards for managing records, requests, employees, calls, jobs, or daily operations.',
  },
  {
    icon: ClipboardList,
    title: 'Intake & Quote Forms',
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
    <section className="section" id="services" aria-label="Services">
      <div className="container">
        <div className="label">
          <span className="label-line" aria-hidden="true" />
          Services
        </div>

        <div className="services-head">
          <h2 className="section-heading">What I Build</h2>
          <p className="services-avail">Available for selected freelance projects.</p>
        </div>

        <div className="services-grid">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="service-card card">
              <div className="service-icon" aria-hidden="true">
                <Icon size={20} strokeWidth={1.7} />
              </div>
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <p>
            If your business runs on phone calls, spreadsheets, paper forms, or disconnected
            tools, I can help turn that process into a practical web application.
          </p>
        </div>
      </div>
    </section>
  );
}
