import React from "react";
import { projectData } from "../../data/projectData";
import CaseStudyLayout from "../../pages/CaseStudy.js";
import TLDR from "../../components/tldr.js";

function AccessibleNavigationCaseStudy() {
  const data = projectData.find((p) => p.slug === "accessible-navigation");

  // Define the specific sidebar links for this project
  const projectNavLinks = [{ id: "tldr", label: "TLDR" }];

  return (
    <CaseStudyLayout project={data} navLinks={projectNavLinks}>
      {/* Everything below this line automatically becomes the 'children' and gets placed in the right panel! */}

      <section id="tldr" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          TLDR
        </h3>
        <p className="project-body-copy">
          Reimagined how navigation would look like if accessibility
          specifically accessibility for users in wheelchairs came first.
        </p>
        <TLDR
          role={data.role}
          timeline={data.year}
          toolsUsed={data.tools}
          designFocuses={data.category}
        />
      </section>
    </CaseStudyLayout>
  );
}

export default AccessibleNavigationCaseStudy;
