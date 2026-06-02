import React from "react";
import { Link } from "react-router-dom";

function ProjectPagination({ lastPath, lastTitle, nextPath, nextTitle }) {
  return (
    <div className="two-column-layout">
      <div>
        <div className="last-project-section">
          <hr className="pc-divider" />
          <div className="next-project-container">
            <span className="mini-text">Last Project</span>
            <Link to={lastPath} className="next-project-link">
              <h3 className="next-project-title">{lastTitle}</h3>
              <span className="next-project-arrow" style={{ display: "inline-block", transform: "scaleX(-1)" }}>→</span>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="next-project-section">
          <hr className="pc-divider" />
          <div className="next-project-container">
            <span className="mini-text">Next Project</span>
            <Link to={nextPath} className="next-project-link">
              <h3 className="next-project-title">{nextTitle}</h3>
              <span className="next-project-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPagination;