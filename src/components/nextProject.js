import React from "react";
import { Link } from "react-router-dom";

function nextProject({ lastPath, lastTitle, nextPath, nextTitle }) {
  return (
    <div className="two-column-layout pagination-layout">
      {/* 1. Only render the Last Project column if lastPath actually exists */}
      {lastPath ? (
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
      ) : (
        /* 2. Empty placeholder div keeps the "Next Project" on the right side when grid splits 50/50 */
        <div className="last-project-placeholder-desktop" />
      )}

      {/* Next Project Column */}
      {nextPath && (
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
      )}
    </div>
  );
}

export default nextProject;