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
          {/* Dropdown Wrapper */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Link to="/projects" className="nav-link">
              projects {isOpen ? "▴" : "▾"}
            </Link>

            {isOpen && (
              <ul className="dropdown-menu">
                {projectData.map((project) => (
                  <li key={project.slug}>
                    <Link to={`/project/${project.slug}`}>{project.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link to="/about" className="nav-link">
            about
          </Link>
          <a
            href="https://linkedin.com/..."
            target="_blank"
            className="nav-link"
          >
            linkedin
          </a>
          <span className="nav-link">resume</span>
          <span className="nav-link">email</span>
        </div>
      </div>
      <div className="nav-divider" />
    </nav>
  );
}

export default Navigation;
