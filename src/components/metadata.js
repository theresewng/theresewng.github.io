import React from "react";

function MetaData({ role, timeline, tools, focuses }) {
  return (
    <div className="project-meta-grid">
      {role && (
        <div className="meta-item">
          <span className="meta-label">ROLE</span>
          <p className="meta-value">{role}</p>
        </div>
      )}
      {timeline && (
        <div className="meta-item">
          <span className="meta-label">TIMELINE</span>
          <p className="meta-value">{timeline}</p>
        </div>
      )}
      {tools && (
        <div className="meta-item">
          <span className="meta-label">TOOLS</span>
          <p className="meta-value">{tools.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default MetaData;