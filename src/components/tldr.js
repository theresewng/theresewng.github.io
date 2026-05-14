import React from "react";

function TLDR({ role, timeline, toolsUsed, designFocuses }) {
  return (
    <div className="four-column-layout">
      <div>
        <h3 className="project-detail-label">Role</h3>
        <p className="project-body-copy">{role}</p>
      </div>
      <div>
        <h3 className="project-detail-label">Timeline</h3>
        <p className="project-body-copy">{timeline}</p>
      </div>
      <div>
        <h3 className="project-detail-label">Tools Used</h3>
        {Array.isArray(toolsUsed) ? (
          toolsUsed.map((tool, index) => (
            <p key={index} className="project-body-copy" style={{ margin: "4px 0" }}>
              {tool}
            </p>
          ))
        ) : (
          <p className="project-body-copy">{toolsUsed}</p>
        )}
        {/* <p className="project-body-copy">{toolsUsed}</p> */}
      </div>
      <div>
        <h3 className="project-detail-label">Design Focuses</h3>
        {/* 2. Map through the array to output each focus on its own line */}
        {Array.isArray(designFocuses) ? (
          designFocuses.map((focus, index) => (
            <p key={index} className="project-body-copy" style={{ margin: "4px 0" }}>
              {focus}
            </p>
          ))
        ) : (
          <p className="project-body-copy">{designFocuses}</p>
        )}
      </div>
    </div>
  );
}

export default TLDR;