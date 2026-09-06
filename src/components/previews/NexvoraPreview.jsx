import './NexvoraPreview.css';

export default function NexvoraPreview() {
  return (
    <div className="nex-preview" aria-label="Nexvora Group website preview">
      {/* Browser chrome */}
      <div className="nex-chrome">
        <div className="nex-dots"><span /><span /><span /></div>
        <div className="nex-bar">nexvora-group.vercel.app</div>
      </div>

      {/* Real screenshot of the live site */}
      <img
        className="nex-shot"
        src="/nexvora/home.jpg"
        width="1440"
        height="900"
        loading="lazy"
        alt="Nexvora Group — live homepage: Professional Wholesale & E-Commerce Retail Partner"
      />
    </div>
  );
}
