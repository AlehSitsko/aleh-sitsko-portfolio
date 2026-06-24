import { MapPin, TrendingDown, Globe } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  return (
    <section className="section section-alt" id="experience" aria-label="Work experience">
      <div className="container">
        <div className="label">
          <span className="label-line" aria-hidden="true" />
          Experience
        </div>
        <h2 className="section-heading" style={{ marginBottom: 32 }}>
          Operations Background
        </h2>

        <div className="exp-card card">
          <div className="exp-header">
            <div className="exp-role-block">
              <h3 className="exp-role">Operations Manager / Dispatcher</h3>
              <div className="exp-company">Welcome Ambulance Inc</div>
              <div className="exp-location">
                <MapPin size={13} aria-hidden="true" />
                Southampton, PA
              </div>
            </div>
            <div className="exp-metric">
              <div className="metric-header">
                <TrendingDown size={15} aria-hidden="true" />
                Workforce Hours / Pay Period
              </div>
              <div className="metric-numbers">
                <div className="metric-from">~3,500</div>
                <div className="metric-arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
                <div className="metric-to">~2,400</div>
              </div>
              <div className="metric-label">hours reduced per pay period</div>
            </div>
          </div>

          <p className="exp-desc">
            Coordinated EMS dispatch operations, crew communication, daily scheduling, real-time
            workflow issues, and operational process improvements. This experience became the
            foundation for building practical workflow software focused on call intake, crew
            planning, employee tracking, and supervisor visibility.
          </p>

          <div className="exp-quote">
            <blockquote>
              I build tools that solve real workflow problems because I have lived those problems firsthand.
            </blockquote>
          </div>
        </div>

        <div className="exp-additional card">
          <div className="exp-add-header">
            <Globe size={15} aria-hidden="true" />
            Additional Background
          </div>
          <p className="exp-add-desc">
            Additional background in logistics, dispatch coordination, and business operations
            across Belarus, Poland, and the United States.
          </p>
        </div>
      </div>
    </section>
  );
}
