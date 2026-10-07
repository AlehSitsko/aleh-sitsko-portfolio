import './AlenaPreview.css';

export default function AlenaPreview() {
  return (
    <div className="alena-preview" aria-label="Alena’s Beauty Lab website preview">
      {/* Browser chrome */}
      <div className="alena-chrome">
        <div className="alena-dots"><span /><span /><span /></div>
        <div className="alena-bar">alenasbeautylab.com</div>
      </div>

      {/* Real screenshot of the live site */}
      <img
        className="alena-shot"
        src="/alena/home.jpg"
        width="1440"
        height="900"
        loading="lazy"
        alt="Alena’s Beauty Lab — live homepage: Creating your best version."
      />
    </div>
  );
}
