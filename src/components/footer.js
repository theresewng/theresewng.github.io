import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav className="footer-container">
      <div className="nav-divider" />
      <div className="footer-content">
        <div>
          <p className="copyright">Therese Wong © 2026</p>
          <p className="microcopy">Designed & Developed by Therese Wong</p>
        </div>

        <div className="footer-links">
          <Link to="/" className="nav-link">
            home
          </Link>
          {/* <Link to="/work" className="nav-link">
            work
          </Link> */}

          {/* <Link to="/sandbox" className="nav-link">
            sandbox
          </Link> */}

          <Link to="/about" className="nav-link">
            about
          </Link>
          <a
            href="https://www.linkedin.com/in/therese-wong/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            linkedin
          </a>
          <a
            href="https://drive.google.com/file/d/1fqY3R1R9hylYPJdCtde2oJIa6vCYofoJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            resume
          </a>
          <a href="mailto:theresewong03@gmail.com" className="nav-link">
            email
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
