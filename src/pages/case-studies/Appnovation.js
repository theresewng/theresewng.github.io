import React from "react";
// Fixing the banner import path to use relative mapping rather than absolute disk paths
import ProjectHero from "/Users/theresewng/Downloads/theresewng.github.io/src/components/banner.js"; 
import { projectData } from "/Users/theresewng/Downloads/theresewng.github.io/src/data/projectData.js";

function AppnovationCaseStudy() {
  const data = projectData.find((p) => p.slug === "appnovation");

  if (!data)
    return <div style={{ color: "white" }}>Project data not found.</div>;

  return (
    <div className="project-page-layout">
      {/* 1. Shared Modular Hero - Full Bleed at the top */}
      <ProjectHero title={data.title} bannerImage={data.image} />

      {/* 2. Content Wrappers added here to match AboutMe layout alignment */}
      <div className="homepage-container" style={{ paddingTop: "0px" }}>
        <div className="content-wrapper">
          
          <div className="two-column-layout" style={{ marginTop: "109px" }}>
            {/* Left Panel */}
            <div className="left-panel">
              <span className="project-detail-label">ROLE</span>
              <p className="project-detail-value">UX Designer</p>
              
              <span className="project-detail-label">TIMELINE</span>
              <p className="project-detail-value">{data.year}</p>
              
              <span className="project-detail-label">TOOLS USED</span>
              <p className="project-detail-value">{data.tools}</p>
              
              <span className="project-detail-label">DESIGN FOCUSES</span>
              {/* Cleaned up the broken nested double-p tags here */}
              <p className="project-detail-value">{data.category}</p>
            </div>
            
            {/* Right Panel */}
            <div className="right-panel">
              <div className="project-detail-divider"></div>
              <p className="project-body-copy">body copy goes here</p>
              <p className="project-body-copy">body copy goes here</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AppnovationCaseStudy;