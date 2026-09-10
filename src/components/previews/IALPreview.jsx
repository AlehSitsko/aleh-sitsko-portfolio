import './IALPreview.css';

export default function IALPreview() {
  return (
    <div className="ial-preview" aria-label="Infinite Auto Leasing PA website preview">
      {/* Browser chrome */}
      <div className="ial-chrome">
        <div className="ial-dots"><span /><span /><span /></div>
        <div className="ial-bar">infinite-auto-leasing-pa.sitskoaleh.workers.dev</div>
      </div>

      {/* Real screenshot of the live site */}
      <img
        className="ial-shot"
        src="/ial/home.jpg"
        width="1440"
        height="900"
        loading="lazy"
        alt="Infinite Auto Leasing PA — live homepage: Your next car. A different way there."
      />
    </div>
  );
}
