import React from "react";
import { projectData } from "../../data/projectData";
import CaseStudyLayout from "../../pages/CaseStudy.js";
import TLDR from "../../components/tldr.js";
import AppnoSwag from "../../images/appnoswag.png";
import ThankYouCards from "../../images/card.png";

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
    <CaseStudyLayout
      project={{ ...data, image: "/images/appnobanner2.png" }}
      navLinks={projectNavLinks}
    >
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
          PROMOTIONAL REEL
        </h3>
        <p className="mini-text">
          Tools Used: Figma, Adobe Illustrator, Adobe Photoshop, Adobe After
          Effects, Adobe Premiere Pro
        </p>
        <div
          className="small-two-column-layout"
          style={{ alignItems: "start" }}
        >
          <div>
            <p className="project-body-copy">
              One of my biggest achievements was leading the creation of a
              promotional reel for <i>InsightEngine</i>, Appnovation’s AI
              Clinical Insight Tool to be used in future pitch decks. To start,
              I created a storyboard on Figma to get a rough idea of how the
              reel would pan out, then created the complete animation on Adobe
              Illustrator and After Effects.
            </p>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/iuI6FcfOU5c?si=dSxM6OO4gYrM8oFP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            {/* Animation Reel Placeholder */}
          </div>
        </div>
      </section>

      <section id="brandpromotionaldesign" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          APPNOSWAG: EXPANDING APPNOVATION'S BRAND LANGUAGE FOR PROMOTIONAL
          MATERIALS
        </h3>
        <p className="mini-text">Tools Used: Figma, Adobe Illustrator</p>
        <p className="project-body-copy">
          AppnoSwag was an initiative started by the Go To Market and Marketing
          teams as a way to increase brand awareness and further promote
          Appnovation to potential clients at networking events and conferences,
          as well as sending gifts to new and recurring clients as a thank you
          for partnering with Appnovation. I lead the initial ideation of how
          the system would be in place, creating the initial process maps and
          overseeing it from end-to-end, from design, to ordering, packing, and
          mailing it out.
        </p>
        <div className="small-two-column-layout">
          <div>
            <img
              src={AppnoSwag}
              alt="AppnoSwag"
              style={{ width: "100%", height: "auto", marginTop: "20px" }}
            />
            <p className="image-caption">
              An Appno Swag package being sent off to our newest clients in the
              US!
            </p>
          </div>
          <div>
            <img
              src={ThankYouCards}
              alt="Thank You Cards"
              style={{ width: "100%", height: "auto", marginTop: "20px" }}
            />
          </div>
        </div>
      </section>
      
      <section id="graphicdesign" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          GRAPHIC DESIGN
        </h3>
        <p className="mini-text">Tools Used: Figma</p>
        <p className="project-body-copy">
          I worked with the Marketing team on social media posts and promotional
          branding materials to be used at global conferences
        </p>
        <div style={{ height: "300px", background: "#333", marginTop: "20px" }}>
          Graphic Design Placeholder
        </div>
      </section>
      <section id="webdesign" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          WEB DESIGN
        </h3>
        <p className="mini-text">Tools Used: Figma</p>
        <p className="project-body-copy">
          After undergoing a recent brand refresh, Appnovation’s website was not
          aligned with their newest branding guidelines. Working with the
          marketing and development teams, I created new website components that
          met brand guidelines and also made sure they were WCAG2.0 accessible.
          <br></br>
          As part of Appnovation’s website redesign, I refreshed the hero images
          with new case study banners as they were originally stock images.
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
          I got to leave Appnovation with knowledge of how the Experience and
          Strategy teams work together to tackle problems, which will be
          beneficial for me for future classes and even in future career work
          that involve clients and stakeholders. I also gained more first-hand
          knowledge about UI/UX, web accessibility, and cross-team
          collaboration. In addition, I found that I enjoyed the consulting
          environment, which has allowed me to consider pursuing a career at the
          intersection of consulting and experience design.
        </p>
      </section>
    </CaseStudyLayout>
  );
}

export default AppnovationCaseStudy;
