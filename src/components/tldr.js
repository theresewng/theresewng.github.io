import React from "react";

function TLDR({ role, timeline, toolsUsed, designFocuses }) {
  return (
    <div className="four-column-layout">
      <div>
        <h3>Role</h3>
        <p>{role}</p>
      </div>
      <div>
        <h3>Timeline</h3>
        <p>{timeline}</p>
      </div>
      <div>
        <h3>Tools Used</h3>
        <p>{toolsUsed}</p>
      </div>
      <div>
        <h3>Design Focuses</h3>
        <p>{designFocuses}</p>
      </div>
    </div>
  );
}

export default TLDR;
