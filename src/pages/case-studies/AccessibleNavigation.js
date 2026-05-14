import React from "react";
import { projectData } from '../../data/projectData';
import CaseStudyLayout from "../../pages/CaseStudy.js";
import TLDR from "../../components/tldr.js";

function AccessibleNavigationCaseStudy() {
  const data = projectData.find((p) => p.slug === "accessible-navigation");

  // Define the specific sidebar links for this project
  const projectNavLinks = [
    { id: "tldr", label: "TLDR" },
  ];

  return (
    <CaseStudyLayout project={data} navLinks={projectNavLinks}>
      
      {/* Everything below this line automatically becomes the 'children' and gets placed in the right panel! */}
      
      <section id="tldr" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>Overview</h3>
        <p className="project-body-copy">
          This is the introductory text explaining the core problem and goals of the Accessible Navigation project.
        </p>
      </section>

      <section id="animationdesign" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>Animation Design</h3>
        <p className="project-body-copy">Details about the animated ad reel and motion design processes go here.</p>
        <div style={{ height: "300px", background: "#333", marginTop: "20px" }}>
          Animation Reel Placeholder
        </div>
      </section>

      <section id="learnings" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>Learnings</h3>
        <p className="project-body-copy">Final deliverables and reflections on what was learned.</p>
      </section>

    </CaseStudyLayout>
  );
}

export default AccessibleNavigationCaseStudy;