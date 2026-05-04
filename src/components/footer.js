import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectData } from "../data/projectData";

function Navigation() {
  return (
    <nav className="nav-container">
      <div className="nav-divider" />

      <div className="nav-content">
        <div className="nav-name">
          <Link to="/" className="nav-link">
            Therese Wong
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/projects" className="nav-link">
            projects
          </Link>

          <Link to="/sandbox" className="nav-link">
            sandbox
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
      <p>Therese Wong © 2026 | Designed & Developed by Therese Wong</p>
    </nav>
  );
}

export default Navigation;
