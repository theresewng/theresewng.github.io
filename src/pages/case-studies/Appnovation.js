import React from "react";
import { projectData } from "../../data/projectData";
import CaseStudyLayout from "../../pages/CaseStudy.js";
import TLDR from "../../components/tldr.js";

function AppnovationCaseStudy() {
  const data = projectData.find((p) => p.slug === "appnovation");

  // Define the specific sidebar links for this project
  const projectNavLinks = [
    { id: "tldr", label: "TLDR" },
    { id: "animationdesign", label: "ANIMATION DESIGN" },
    { id: "brandpromotionaldesign", label: "BRAND & PROMOTIONAL DESIGN" },
    { id: "graphicdesign", label: "GRAPHIC DESIGN" },
    { id: "webdesign", label: "WEB DESIGN" },
    { id: "learnings", label: "LEARNINGS" },
  ];

  return (
    <CaseStudyLayout project={data} navLinks={projectNavLinks}>
      {/* Everything below this line automatically becomes the 'children' and gets placed in the right panel! */}

      <section id="tldr" className="case-study-section">
        <h3 className="project-detail-label">TLDR</h3>
        <p className="project-body-copy">
          Did a series of graphics, branding, animations and deck designs
          supporting the Marketing, Business Development, Client Services, and
          Partnership Teams
        </p>
        <TLDR
          role={data.role}
          timeline={data.year}
          toolsUsed={data.tools}
          designFocuses={data.category}
        />
      </section>

      <section id="animationdesign" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          ANIMATION DESIGN
        </h3>
        <p className="project-body-copy">
          Details about the animated ad reel and motion design processes go
          here.
        </p>
        <div style={{ height: "300px", background: "#333", marginTop: "20px" }}>
          Animation Reel Placeholder
        </div>
      </section>

      <section id="brandpromotionaldesign" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          BRAND & PROMOTIONAL DESIGN
        </h3>
        <p className="project-body-copy">
          Details about the brand and promotional designs go here.
        </p>
        <div style={{ height: "300px", background: "#333", marginTop: "20px" }}>
          A Placeholder
        </div>
      </section>

      <section id="graphicdesign" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          GRAPHIC DESIGN
        </h3>
        <p className="project-body-copy">
          Details about the graphic designs go here.
        </p>
        <div style={{ height: "300px", background: "#333", marginTop: "20px" }}>
          Graphic Design Placeholder
        </div>
      </section>

      <section id="webdesign" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          WEB DESIGN
        </h3>
        <p className="project-body-copy">
          Details about the web designs go here.
        </p>
        <div style={{ height: "300px", background: "#333", marginTop: "20px" }}>
          Web Design Placeholder
        </div>
      </section>

      <section id="learnings" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          LEARNINGS
        </h3>
        <p className="project-body-copy">
          Final deliverables and reflections on what was learned.
        </p>
      </section>
    </CaseStudyLayout>
  );
}

export default AppnovationCaseStudy;
