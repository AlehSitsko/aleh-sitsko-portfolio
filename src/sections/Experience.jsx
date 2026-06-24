import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-label">Experience</div>
        <h2 className="section-title" style={{ marginBottom: 48 }}>Operations Background</h2>

        <div className="exp-card card">
          <div className="exp-header">
            <div>
              <div className="exp-role">Operations Manager / Dispatcher</div>
              <div className="exp-company">Welcome Ambulance Inc</div>
            </div>
            <span className="badge">Primary Experience</span>
          </div>

          <p className="exp-desc">
            Coordinated EMS dispatch operations, scheduling, crew communication,
            workflow improvements, and operational problem solving.
          </p>

          <div className="exp-metric">
            <div className="exp-metric-num">−31%</div>
            <div className="exp-metric-label">
              Helped reduce scheduled workforce hours from ~3,500 to ~2,400 per pay period
              through improved scheduling workflows and resource planning.
            </div>
          </div>

          <p className="exp-context">
            Additional background in logistics, dispatch coordination, and business
            operations across Belarus, Poland, and the United States.
          </p>
        </div>

        <div className="exp-note">
          This operational experience is what drives my software approach — I build tools
          that solve real workflow problems because I've lived those problems firsthand.
        </div>
      </div>
    </section>
  );
}
