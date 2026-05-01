import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Navigation() {
//   const navigate = useNavigate();

  return (
    <nav className="nav-container">
      <div className="nav-content">
        {/* Name */}
        <div className="nav-name">
          <Link to="/" className="nav-link">
            Therese Wong
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/projects" className="nav-link">
            projects
          </Link>
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
          <span className="nav-link">resume</span>
          <span className="nav-link">email</span>
        </div>
      </div>

      {/* Divider Line */}
      <div className="nav-divider" />
    </nav>
  );
}

export default Navigation;
