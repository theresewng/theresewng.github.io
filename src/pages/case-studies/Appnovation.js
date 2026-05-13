import React from "react";
import ProjectHero from "/Users/theresewng/Downloads/theresewng.github.io/src/components/banner.js";
import { projectData } from "/Users/theresewng/Downloads/theresewng.github.io/src/data/projectData.js";

function AppnovationCaseStudy() {
  // Pull the Appnovation data directly from your central config
  const data = projectData.find((p) => p.slug === "appnovation");

  if (!data)
    return <div style={{ color: "white" }}>Project data not found.</div>;

  return (
    <div className="project-page-layout">
      {/* 1. Shared Modular Hero */}
      <ProjectHero
        title={data.title}
        description={data.description}
        bannerImage={data.image}
      />

      <div className="two-column-layout">
        <div className="left-panel">
          <div className="project-detail-section">
            <span className="project-detail-label">TIMELINE</span>
            <p className="project-detail-value">{data.year}</p>
          </div>
          <div className="project-detail-section">
            <span className="project-detail-label">TOOLS USED</span>
            <p className="project-detail-value">{data.tools}</p>
          </div>
        </div>
        <div className="right-panel">
          <p>testing</p>
        </div>
      </div>
    </div>
  );
}

export default AppnovationCaseStudy;
