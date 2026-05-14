import React from "react";
import ProjectHero from "../components/banner.js"; 

function CaseStudy({ project, navLinks, children }) {
  // Fallback if data doesn't load properly
  if (!project) return <div style={{ color: "white" }}>Project data not found.</div>;

  return (
    <div className="project-page-layout">
      {/* Automatically handles the header using the passed project data */}
      <ProjectHero title={project.title} bannerImage={project.image} />

      <div className="project-page-container" style={{ paddingTop: "0px" }}>
        <div className="content-wrapper">
          <div className="two-column-layout-case-study">
            
            {/* LEFT PANEL: The automated sticky menu */}
            <div className="case-study-left">
              <div className="vertical-nav-menu">
                {/* Loops through whatever links you provide for this specific project */}
                {navLinks.map((link) => (
                  <a key={link.id} href={`#${link.id}`} className="vertical-nav-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT PANEL: The 'children' prop renders whatever you type inside the wrapper */}
            <div className="case-study-right">
              {children}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;