import './CallFormPreview.css';

export default function CallFormPreview() {
  return (
    <div className="cf-preview" aria-label="Call Taking Form interface preview">
      <div className="cf-chrome">
        <div className="cf-dots"><span /><span /><span /></div>
        <div className="cf-bar">Call Taking Form — EMS Intake</div>
      </div>

      <div className="cf-body">
        {/* Header */}
        <div className="cf-header">
          <div className="cf-title">New Call</div>
          <div className="cf-score-badge">
            <span className="score-icon" aria-hidden="true">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
            </span>
            Score: 88
          </div>
        </div>

        {/* Form fields */}
        <div className="cf-form">
          <div className="cf-row">
            <div className="cf-field">
              <label>Patient Name</label>
              <div className="field-input filled">Dorothy Chang</div>
            </div>
            <div className="cf-field">
              <label>Date of Birth</label>
              <div className="field-input filled">04/17/1962</div>
            </div>
          </div>

          <div className="cf-row">
            <div className="cf-field full">
              <label>Pickup Address</label>
              <div className="field-input filled">2100 Tyson Ave, Philadelphia PA</div>
            </div>
          </div>

          <div className="cf-row">
            <div className="cf-field full">
              <label>Destination / Hospital</label>
              <div className="field-input filled">Jefferson University Hospital</div>
            </div>
          </div>

          <div className="cf-row">
            <div className="cf-field">
              <label>Service Level</label>
              <div className="field-select">
                <span className="select-badge als">ALS</span>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </div>
            <div className="cf-field">
              <label>Unit Assigned</label>
              <div className="field-select">
                <span>M-12</span>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </div>
          </div>

          {/* Validation row */}
          <div className="cf-validation">
            <div className="val-item pass">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              Patient verified
            </div>
            <div className="val-item pass">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              No duplicates
            </div>
            <div className="val-item pass">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              Addresses valid
            </div>
            <div className="val-item warn">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="13"/><circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/></svg>
              Notes recommended
            </div>
          </div>

          {/* Submit */}
          <div className="cf-submit">
            <div className="cf-btn-primary">Submit Call</div>
          </div>
        </div>
      </div>
    </div>
  );
}
