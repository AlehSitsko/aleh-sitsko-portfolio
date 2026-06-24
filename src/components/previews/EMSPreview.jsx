import './EMSPreview.css';

const STATUS = {
  'En Route':   { cls: 'status-en-route',   label: 'En Route'   },
  'On Scene':   { cls: 'status-on-scene',   label: 'On Scene'   },
  'Available':  { cls: 'status-available',  label: 'Available'  },
  'Transport':  { cls: 'status-transport',  label: 'Transport'  },
};

const UNITS = [
  { unit: 'M-12', type: 'ALS', status: 'En Route',  patient: 'R. Torres',   dest: 'Cooper Hospital' },
  { unit: 'M-5',  type: 'BLS', status: 'On Scene',  patient: 'E. Voss',     dest: 'Jefferson Med'   },
  { unit: 'M-8',  type: 'ALS', status: 'Transport', patient: 'H. Park',     dest: 'Aria Health'     },
  { unit: 'M-3',  type: 'BLS', status: 'Available', patient: '—',           dest: '—'               },
];

const STATS = [
  { val: '12', lbl: 'Active Calls' },
  { val: '8',  lbl: 'Units On Duty' },
  { val: '47', lbl: 'Patients' },
  { val: '94', lbl: 'Quality Avg' },
];

const NAV_ITEMS = ['Dashboard', 'Call Intake', 'Patients', 'Dispatch', 'Crew Planner', 'Analytics'];

export default function EMSPreview() {
  return (
    <div className="ems-preview" aria-label="EMS Workflow System interface preview">
      {/* Window chrome */}
      <div className="ems-chrome">
        <div className="chrome-dots">
          <span /><span /><span />
        </div>
        <div className="chrome-title">EMS Workflow System</div>
        <div className="chrome-tag">DASHBOARD</div>
      </div>

      {/* App body */}
      <div className="ems-body">
        {/* Sidebar */}
        <aside className="ems-sidebar">
          <div className="sidebar-brand">
            <div className="brand-icon" />
            <span>EMS</span>
          </div>
          {NAV_ITEMS.map((item, i) => (
            <div key={item} className={`sidebar-item${i === 0 ? ' active' : ''}`}>
              <div className="item-dot" />
              {item}
            </div>
          ))}
        </aside>

        {/* Main */}
        <main className="ems-main">
          {/* Stats row */}
          <div className="ems-stats">
            {STATS.map(({ val, lbl }) => (
              <div key={lbl} className="stat-card">
                <div className="stat-val">{val}</div>
                <div className="stat-lbl">{lbl}</div>
              </div>
            ))}
          </div>

          {/* Dispatch table */}
          <div className="ems-table-wrap">
            <div className="table-header">
              <span>Unit</span>
              <span>Type</span>
              <span>Status</span>
              <span>Patient</span>
              <span>Destination</span>
            </div>
            {UNITS.map(({ unit, type, status, patient, dest }) => (
              <div key={unit} className="table-row">
                <span className="td-unit">{unit}</span>
                <span className={`td-type type-${type.toLowerCase()}`}>{type}</span>
                <span className={`td-status ${STATUS[status].cls}`}>{STATUS[status].label}</span>
                <span className="td-patient">{patient}</span>
                <span className="td-dest">{dest}</span>
              </div>
            ))}
          </div>

          {/* Mini chart row */}
          <div className="ems-bottom">
            <div className="mini-chart">
              <div className="chart-label">Calls / 7 Days</div>
              <div className="chart-bars">
                {[5,8,6,12,9,11,8].map((h, i) => (
                  <div key={i} className="chart-bar" style={{ height: `${h * 5}px` }} />
                ))}
              </div>
            </div>
            <div className="intake-mini">
              <div className="chart-label">Call Intake</div>
              <div className="intake-field"><span>Patient</span><div className="field-val">Dorothy Chang</div></div>
              <div className="intake-field"><span>Service Level</span><div className="field-val field-badge">ALS</div></div>
              <div className="intake-field"><span>Quality Score</span><div className="field-val score-val">88</div></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
