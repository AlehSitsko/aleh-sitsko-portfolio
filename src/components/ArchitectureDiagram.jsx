// Theme-aware inline SVG of the EMS Workflow System deployment architecture.
// Uses the site's CSS custom properties, so it recolours automatically in light/dark.
export default function ArchitectureDiagram() {
  return (
    <svg className="arch-svg" viewBox="0 0 820 400" role="img"
         aria-label="EMS Workflow System architecture: production server stack and standalone desktop profile"
         xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .arch-svg { width: 100%; height: auto; display: block; }
        .arch-box { fill: var(--bg-card-soft); stroke: var(--border); stroke-width: 1.5; }
        .arch-box-accent { fill: var(--accent-soft); stroke: var(--border-accent); stroke-width: 1.5; }
        .arch-t  { fill: var(--text-main); font: 700 14px system-ui, sans-serif; }
        .arch-s  { fill: var(--text-muted); font: 500 11px system-ui, sans-serif; }
        .arch-lane { fill: var(--accent); font: 800 11px system-ui, sans-serif; letter-spacing: .8px; }
        .arch-line { stroke: var(--border-accent); stroke-width: 2; fill: none; }
        .arch-cap  { fill: var(--text-muted); font: 500 11px system-ui, sans-serif; }
      `}</style>
      <defs>
        <marker id="arch-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
          <path d="M0,0 L9,4.5 L0,9 Z" fill="var(--accent)" />
        </marker>
      </defs>

      {/* ── Production (server) ─────────────────────────────────────── */}
      <text x="16" y="26" className="arch-lane">PRODUCTION · SERVER</text>

      <line x1="140" y1="86" x2="176" y2="86" className="arch-line" markerEnd="url(#arch-arrow)" />
      <line x1="306" y1="86" x2="346" y2="86" className="arch-line" markerEnd="url(#arch-arrow)" />
      {/* app → data stores */}
      <line x1="500" y1="86" x2="556" y2="70"  className="arch-line" markerEnd="url(#arch-arrow)" />
      <line x1="500" y1="90" x2="556" y2="128" className="arch-line" markerEnd="url(#arch-arrow)" />
      <line x1="500" y1="94" x2="556" y2="186" className="arch-line" markerEnd="url(#arch-arrow)" />

      <g>
        <rect className="arch-box" x="16"  y="56" width="124" height="60" rx="11" />
        <text x="78" y="82"  className="arch-t" textAnchor="middle">Browser</text>
        <text x="78" y="100" className="arch-s" textAnchor="middle">React 19 SPA</text>
      </g>
      <g>
        <rect className="arch-box" x="176" y="56" width="130" height="60" rx="11" />
        <text x="241" y="82"  className="arch-t" textAnchor="middle">Nginx</text>
        <text x="241" y="100" className="arch-s" textAnchor="middle">SPA + /api proxy</text>
      </g>
      <g>
        <rect className="arch-box-accent" x="346" y="52" width="154" height="68" rx="11" />
        <text x="423" y="80"  className="arch-t" textAnchor="middle">Gunicorn × 3</text>
        <text x="423" y="100" className="arch-s" textAnchor="middle">Flask · SQLAlchemy</text>
      </g>

      <g>
        <rect className="arch-box" x="556" y="48"  width="248" height="44" rx="9" />
        <text x="576" y="68"  className="arch-t">PostgreSQL</text>
        <text x="576" y="84"  className="arch-s">tenant-scoped · encrypted PHI</text>
      </g>
      <g>
        <rect className="arch-box" x="556" y="106" width="248" height="44" rx="9" />
        <text x="576" y="126" className="arch-t">Redis</text>
        <text x="576" y="142" className="arch-s">SSE fan-out across workers</text>
      </g>
      <g>
        <rect className="arch-box" x="556" y="164" width="248" height="44" rx="9" />
        <text x="576" y="184" className="arch-t">S3 / MinIO</text>
        <text x="576" y="200" className="arch-s">document object storage</text>
      </g>

      <text x="16" y="150" className="arch-cap">HTTPS terminated by a TLS proxy in front · sessions signed &amp; Secure</text>

      {/* ── Standalone (desktop) ────────────────────────────────────── */}
      <text x="16" y="286" className="arch-lane">STANDALONE · WINDOWS DESKTOP</text>

      <line x1="176" y1="332" x2="212" y2="332" className="arch-line" markerEnd="url(#arch-arrow)" />
      <line x1="372" y1="332" x2="408" y2="332" className="arch-line" markerEnd="url(#arch-arrow)" />

      <g>
        <rect className="arch-box" x="16"  y="304" width="160" height="56" rx="11" />
        <text x="96" y="330" className="arch-t" textAnchor="middle">Electron shell</text>
        <text x="96" y="347" className="arch-s" textAnchor="middle">same SPA + backend</text>
      </g>
      <g>
        <rect className="arch-box-accent" x="212" y="304" width="160" height="56" rx="11" />
        <text x="292" y="330" className="arch-t" textAnchor="middle">Flask · Waitress</text>
        <text x="292" y="347" className="arch-s" textAnchor="middle">bundled (PyInstaller)</text>
      </g>
      <g>
        <rect className="arch-box" x="408" y="304" width="150" height="56" rx="11" />
        <text x="483" y="330" className="arch-t" textAnchor="middle">SQLite · WAL</text>
        <text x="483" y="347" className="arch-s" textAnchor="middle">local, in %APPDATA%</text>
      </g>
      <text x="578" y="336" className="arch-cap">Offline · no server · no Python/Node needed</text>
    </svg>
  );
}
