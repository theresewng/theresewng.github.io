import React, { useState } from "react";
import { projectData } from "../../data/projectData";
import CaseStudyLayout from "../../pages/CaseStudy.js";
import TLDR from "../../components/tldr.js";
import AppnoSwag from "../../images/appnoswag.png";
import ThankYouCards from "../../images/card.png";

import MTR from "../../images/MTR.png";
import AZ from "../../images/AZ.png";
import InsightEnginer from "../../images/InsightEngine Banner.png";
import Contentful from "../../images/contentful.png";

function AppnovationCaseStudy() {
  const data = projectData.find((p) => p.slug === "appnovation");

  // Track the active image asset object { src, alt } currently blown up full screen
  const [activeExpandedImage, setActiveExpandedImage] = useState(null);

  // Define the specific sidebar links for this project
  const projectNavLinks = [
    { id: "tldr", label: "TLDR" },
    { id: "animationdesign", label: "ANIMATION DESIGN" },
    { id: "brandpromotionaldesign", label: "BRAND & PROMOTIONAL DESIGN" },
    { id: "graphicdesign", label: "GRAPHIC DESIGN" },
    // { id: "webdesign", label: "WEB DESIGN" },
    { id: "reflections", label: "LEARNINGS" },
  ];

  const handleOpenImage = (src, alt) => {
    setActiveExpandedImage({ src, alt });
  };

  return (
    <CaseStudyLayout
      project={{ ...data, image: "/images/appnobanner.png" }}
      navLinks={projectNavLinks}
    >
      <section id="tldr" className="case-study-section">
        <h3 className="project-detail-label">tldr</h3>
        <p className="project-body-copy">
          <p className="project-body-copy">{data.description}</p>
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
          Promotional Reel
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
              I led the creative direction, storyboarding, and motion design for
              a high-fidelity promotional reel showcasing InsightEngine,
              Appnovation's proprietary AI Clinical Insights tool.
            </p>
            <p className="project-body-copy">
              I created storyboards in Figma, highlighting key features, then rebuilt the UI and key components
              using Illustrator and created motion graphics in After Effects.
              The final asset directly equips global teams with a powerful
              storytelling tool for future client acquisitions.
            </p>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/iuI6FcfOU5c?si=dSxM6OO4gYrM8oFP"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section id="brandpromotionaldesign" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          AppnoSwag: Designing a Touchpoint System for Client Experience
        </h3>
        <p className="mini-text">Tools Used: Figma, Adobe Illustrator</p>

        <p className="project-body-copy">
          A collaboration between the Go-To-Market and Marketing teams,
          AppnoSwag is a strategic physical-to-digital touchpoint initiative
          aimed at driving client retention and brand awareness at global
          conferences.{" "}
        </p>

        <p className="project-body-copy">
          I mapped out the end-to-end service delivery pipeline—from initial
          asset ideation and process mapping to procurement, fulfillment
          strategy, and international logistics. This system streamlined how
          Appnovation welcomes new clients and builds long-term partnership
          rapport. In addition, I oversaw the design and ordering of all
          physical items, including branded apparel and thank you cards
        </p>

        <div className="small-two-column-layout" style={{ marginTop: "20px" }}>
          <div
            className="cs-gallery-item"
            onClick={() =>
              handleOpenImage(AppnoSwag, "AppnoSwag Package Delivery Showcase")
            }
          >
            <img
              src={AppnoSwag}
              alt="AppnoSwag"
              className="cs-responsive-img"
            />
            <p className="image-caption">
              An Appno Swag package being sent off to our newest clients in the
              US!
            </p>
          </div>
          <div
            className="cs-gallery-item"
            onClick={() =>
              handleOpenImage(
                ThankYouCards,
                "Appnovation Branded Corporate Thank You Cards",
              )
            }
          >
            <img
              src={ThankYouCards}
              alt="Thank You Cards"
              className="cs-responsive-img"
            />
          </div>
        </div>
      </section>

      <section id="graphicdesign" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          Global Campaign Collateral & Partnership Support{" "}
        </h3>
        <p className="mini-text">Tools Used: Figma</p>
        <p className="project-body-copy">
          Partnered with the Marketing team to design high-visibility digital
          assets, conference materials, and partnership banners for major global
          accounts, including Contentful and the AstraZeneca x NHL campaign. I
          maintained strict adherence to partner brand guidelines while ensuring
          all public-facing assets met modern web accessibility requirements.
        </p>
        <div className="two-column-layout">
          {/* Module 1: MTR */}
          <div className="cs-layout-card">
            <div
              className="cs-gallery-item"
              onClick={() => handleOpenImage(MTR, "MTR Social Media Post")}
            >
              <img
                src={MTR}
                alt="MTR Social Media Post"
                className="cs-responsive-img"
              />
            </div>
            <p className="image-caption" style={{ marginTop: "10px" }}>
              <a
                href="https://www.appnovation.com/our-work/kick-start-digitalization-journey-station-retail"
                target="_blank"
                rel="noopener noreferrer"
              >
                MTR Case Study
              </a>
            </p>
          </div>

          {/* Module 2: AstraZeneca */}
          <div className="cs-layout-card">
            <div
              className="cs-gallery-item"
              onClick={() =>
                handleOpenImage(AZ, "AstraZeneca Social Media Post")
              }
            >
              <img
                src={AZ}
                alt="AZ Social Media Post"
                className="cs-responsive-img"
              />
            </div>
            <p className="image-caption" style={{ marginTop: "10px" }}>
              <a
                href="https://www.appnovation.com/news/get-body-checked-against-cancer-astrazeneca-and-nhl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Body Checked Against Cancer with AstraZeneca and the NHL
              </a>
            </p>
          </div>
        </div>

        <div className="two-column-layout">
          {/* Module 3: Contentful */}
          <div className="cs-layout-card">
            <div
              className="cs-gallery-item"
              onClick={() =>
                handleOpenImage(Contentful, "Contentful Partnership Banner")
              }
            >
              <img
                src={Contentful}
                alt="Contentful Partnership Banner"
                className="cs-responsive-img"
              />
            </div>
            <p className="image-caption" style={{ marginTop: "10px" }}>
              <a
                href="https://www.appnovation.com/partners/contentful"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contentful Partnership Banner
              </a>
            </p>
          </div>

          {/* Module 4: InsightEngine */}
          <div className="cs-layout-card">
            <div
              className="cs-gallery-item"
              onClick={() =>
                handleOpenImage(
                  InsightEnginer,
                  "InsightEngine by Appnovation Graphic",
                )
              }
            >
              <img
                src={InsightEnginer}
                alt="InsightEngine by Appnovation Graphic"
                className="cs-responsive-img"
              />
            </div>
            <p className="image-caption">
              <a
                href="https://www.appnovation.com/services/insightengine-appnovation"
                target="_blank"
                rel="noopener noreferrer"
              >
                InsightEngine by Appnovation
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* <section id="webdesign" className="case-study-section">
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
      </section> */}

      <section id="reflections" className="case-study-section">
        <h3 className="project-detail-label" >
          Reflections
        </h3>

        <h4>The Agency Ecosystem:</h4>
        <p className="project-body-copy">
          I gained deep insight into how Experience Design and Business Strategy
          teams intersect to solve enterprise-level problems. Working in a
          fast-paced consulting environment taught me to balance creative vision
          with real-world stakeholder requirements.
        </p>

        <h4>Bridging Design and Execution:</h4>
        <p className="project-body-copy">
          Collaborating closely with cross-functional product teams matured my
          understanding of UI/UX best practices, system scalability, and the
          vital importance of web accessibility (WCAG compliance) in production
          environments.
        </p>

        <h4>Future Focus:</h4>
        <p className="project-body-copy">
          This experience solidified my passion for digital consulting, proving
          that the best design solutions are born where strategic business goals
          and user-centered interaction design meet.{" "}
        </p>
      </section>

      {/* Universal Lightbox Modal Layer */}
      {activeExpandedImage && (
        <div
          className="cs-lightbox"
          onClick={() => setActiveExpandedImage(null)}
        >
          <button
            className="cs-close-btn"
            onClick={() => setActiveExpandedImage(null)}
          >
            &times;
          </button>
          <div
            className="cs-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activeExpandedImage.src} alt={activeExpandedImage.alt} />
            <p className="cs-lightbox-meta">{activeExpandedImage.alt}</p>
          </div>
        </div>
      )}
    </CaseStudyLayout>
  );
}

export default AppnovationCaseStudy;
