import './NexvoraPreview.css';

export default function NexvoraPreview() {
  return (
    <div className="nex-preview" aria-label="Nexvora Group website preview">
      {/* Browser chrome */}
      <div className="nex-chrome">
        <div className="nex-dots"><span /><span /><span /></div>
        <div className="nex-bar">nexvora-group.vercel.app</div>
      </div>

      {/* Site body */}
      <div className="nex-body">
        {/* Nav */}
        <nav className="nex-nav">
          <div className="nex-logo">
            <div className="logo-block" />
            <span>Nexvora Group</span>
          </div>
          <div className="nex-nav-links">
            <span>About</span><span>Services</span><span>Contact</span>
          </div>
        </nav>

        {/* Hero */}
        <div className="nex-hero">
          <div className="nex-hero-text">
            <div className="nex-label">Wholesale & E-Commerce</div>
            <div className="nex-heading">Premium products.<br />Global supply.</div>
            <div className="nex-btns">
              <div className="nex-btn-primary">Explore Products</div>
              <div className="nex-btn-ghost">Contact Us</div>
            </div>
          </div>
          <div className="nex-hero-visual">
            <div className="nex-card-sm">
              <div className="card-icon-bar" />
              <div className="card-lines">
                <div className="card-line long" />
                <div className="card-line short" />
              </div>
            </div>
            <div className="nex-card-sm offset">
              <div className="card-icon-bar b" />
              <div className="card-lines">
                <div className="card-line long" />
                <div className="card-line short" />
              </div>
            </div>
          </div>
        </div>

        {/* Services row */}
        <div className="nex-services">
          {['Wholesale Supply', 'E-Commerce', 'Logistics'].map(s => (
            <div key={s} className="nex-svc">
              <div className="svc-dot" />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
