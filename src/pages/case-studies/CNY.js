import React from "react";
import { projectData } from "../../data/projectData";
import CaseStudyLayout from "../../pages/CaseStudy.js";
import TLDR from "../../components/tldr.js";

function CNYCaseStudy() {
  const data = projectData.find((p) => p.slug === "cny");

  // Define the specific sidebar links for this project
  const projectNavLinks = [{ id: "tldr", label: "TLDR" }];

  return (
    <CaseStudyLayout project={data} navLinks={projectNavLinks}>
      {/* Everything below this line automatically becomes the 'children' and gets placed in the right panel! */}

      <section id="tldr" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          TLDR
        </h3>
        <p className="project-body-copy">{data.description}</p>
        <p className="mini-text" style={{ marginTop: "20px" }}>
          (Please note that this is just a hypothetical project. As a TD Bank
          customer, I used their app as a reference to create this project and I
          was not hired by TD Bank to work on this project. Additionally, in
          order to protect the security of my accounts, I have not included any
          dollar amounts on purpose)
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

export default CNYCaseStudy;
