import './CallFormPreview.css';

export default function CallFormPreview() {
  return (
    <div className="cf-preview" aria-label="Call Taking Form demo preview">
      <div className="cf-chrome">
        <div className="cf-dots"><span /><span /><span /></div>
        <div className="cf-bar">alehsitsko.github.io/Call-Taking-Form-React</div>
      </div>

      {/* Real screenshot of the live demo — guided call-intake wizard */}
      <img
        className="cf-shot"
        src="/calltaking/intake.jpg"
        width="1440"
        height="900"
        loading="lazy"
        alt="Call Taking Form — live demo: guided 3-step call-intake wizard with patient search"
      />
    </div>
  );
}
