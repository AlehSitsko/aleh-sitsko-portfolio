import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-dot" />
          Aleh Sitsko
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} · alehsitsko.dev
        </div>
        <div className="footer-links">
          <a href="https://github.com/AlehSitsko" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/alehsitsko" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:sitskoaleh@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
