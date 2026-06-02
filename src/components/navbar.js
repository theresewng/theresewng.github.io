import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectData } from "../data/projectData";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="nav-name">
          <Link to="/" className="nav-link">
            Therese Wong
          </Link>
        </div>

        <div className="nav-links">
          {/* Dropdown Link Trigger Group */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {/* Kept cleanly on one line to ensure no layout wrapping shifts */}
            <div className="nav-link">{`work ${isOpen ? "▴" : "▾"}`}</div>

            {isOpen && (
              <ul className="dropdown-menu">
                {projectData.map((project) => (
                  <li key={project.slug}>
                    <Link to={project.path} className="dropdown-link-item">
                      {project.title} <span>▸</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

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
      <div className="nav-divider" />
    </nav>
  );
}

export default Navigation;
