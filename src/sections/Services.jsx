import './Services.css';

const SERVICES = [
  {
    icon: '🌐',
    title: 'Business Websites',
    desc: 'Clean, responsive websites for small businesses and service companies. Mobile-first, SEO-ready.',
  },
  {
    icon: '📊',
    title: 'Internal Dashboards',
    desc: 'Admin panels and operations dashboards with real-time data, filters, and role-based views.',
  },
  {
    icon: '📋',
    title: 'Intake & Quote Forms',
    desc: 'Smart web forms with validation, quality scoring, duplicate detection, and data export.',
  },
  {
    icon: '🗓️',
    title: 'Scheduling & Dispatch Tools',
    desc: 'Crew scheduling, shift planning, and dispatch coordination tools built for actual operations workflows.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="section-label">Services</div>
        <div className="services-header">
          <h2 className="section-title">Available for selected freelance projects.</h2>
          <p className="section-subtitle">
            If your business runs on phone calls, spreadsheets, paper forms, or disconnected
            tools — I can help turn that process into a practical web application.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map(({ icon, title, desc }) => (
            <div key={title} className="card services-card">
              <div className="services-icon">{icon}</div>
              <h3 className="services-title">{title}</h3>
              <p className="services-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
