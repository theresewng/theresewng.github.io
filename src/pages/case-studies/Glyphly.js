import React, { useState } from "react";

import { projectData } from "../../data/projectData";
import CaseStudyLayout from "../../pages/CaseStudy.js";
import TLDR from "../../components/tldr.js";
import Button from "../../components/button.js";
import Carousel from "../../components/carousel.js";

import imageOne from "../../../src/images/Pinterest.png";
import imageTwo from "../../../src/images/Typewolf.png";
import imageThree from "../../../src/images/FontsinUse.png";
import DesignGuidelines from "../../../src/images/DesignGuidelines.png";
import UXMap from "../../../src/images/GlyphlyArchitecture.png";
import Mockups from "../../../src/images/AppSketches.png";
import GlyphlyBanner from "../../../src/images/Glyphlybanner.png";

function Glyphly() {
  const data = projectData.find((p) => p.slug === "glyphly");

  // Track which image asset object { src, alt } is currently blown up full screen
  const [activeExpandedImage, setActiveExpandedImage] = useState(null);

  // Define the specific sidebar links for this project
  const projectNavLinks = [
    { id: "walkthrough", label: "WALKTHROUGH VIDEO  " },
    { id: "tldr", label: "TLDR" },
    { id: "introduction", label: "INTRODUCTION" },
    { id: "research", label: "PART 1: RESEARCH/COMPETITIVE ANALYSIS" },
    { id: "artdirection", label: "PART 2: ART DIRECTION" },
    { id: "making", label: "PART 3: MAKING THE APP" },
    { id: "learnings", label: "REFLECTION" },
  ];

  const handleOpenImage = (src, alt) => {
    setActiveExpandedImage({ src, alt });
  };

  const images = [
    {
      url: imageOne,
      caption: (
        <>
          <a
            href="https://ca.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source: Pinterest
          </a>
          <br />
          Inspired by Pinterest's home feed layout. We adapted its staggered
          grid layout to offer visual variety, alongside taking inspiration from
          their search and collection-saving features.
        </>
      ),
    },
    {
      url: imageTwo,
      caption: (
        <>
          <a
            href="https://typewolf.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source: TypeWolf
          </a>
          <br />
          Inspired by how TypeWolf provides font descriptions, curated font
          pairings, and alternative typeface recommendations.
        </>
      ),
    },
    {
      url: imageThree,
      caption: (
        <>
          <a
            href="https://www.fontsinuse.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source: Fonts in Use
          </a>
          <br />
          Inspired by how Fonts in Use shows how fonts are applied to various
          forms of media (e.g., book covers, movie posters) and implemented
          similar contextual tagging and filtering systems.
        </>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      project={{ ...data, image: "/images/glyphlybanner.png" }}
      navLinks={projectNavLinks}
      lastPath="/work/accessible-navigation"
      lastTitle="Reimagining Accessible Navigation"
      nextPath="/work/modus"
      nextTitle="Modus Coffee Cards"
    >
      <section id="walkthrough" className="case-study-section">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/g0tyK3pwzD8?si=FM4ByjOU2nRlw7AZ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <Button
          text="Final Presentation Deck (Opens in New Tab)"
          showArrow={false}
          onClick={() =>
            window.open(
              "https://www.figma.com/proto/w83HiLegMwb4CK72VIr3Fb/Website?page-id=1615%3A227&node-id=1615-243&p=f&viewport=101%2C616%2C0.11&t=Lf1AsoVOzgz5ocTt-1&scaling=contain&content-scaling=fixed",
              "_blank",
              "noopener,noreferrer",
            )
          }
        />
      </section>

      <section id="tldr" className="case-study-section">
        <h2 className="project-detail-label">tldr</h2>
        <p className="project-body-copy">{data.description}</p>
        <TLDR
          role={data.role}
          timeline={data.year}
          toolsUsed={data.tools}
          designFocuses={data.category}
        />
      </section>

      <section id="introduction" className="case-study-section">
        <h2 className="project-detail-label" style={{ marginBottom: "20px" }}>
          INTRODUCTION{" "}
        </h2>
        <p className="project-body-copy">
          Created as a final capstone for a Mobile Computing course, Glyphly
          addresses a gap in the mobile ecosystem. While web-based typography
          resources like TypeWolf are staple tools for designers on desktop, an
          optimized, native mobile equivalent was missing from the iOS and
          Android App Stores.
        </p>
        <p className="project-body-copy">
          Our goal was to build a cross-platform product featuring user
          authentication, real-time data persistence, and clean native
          performance.
        </p>

        <div
          className="cs-gallery-item standalone-image-wrapper"
          onClick={() =>
            handleOpenImage(
              GlyphlyBanner,
              "Glyphly Typography Mobile App Interface Banner",
            )
          }
        >
          <img
            src={GlyphlyBanner}
            alt="Glyphly Banner"
            className="cs-responsive-img"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      <section id="research" className="case-study-section">
        <h2 className="project-detail-label">
          Part 1: Research and Competitive Analysis
        </h2>
        <p className="project-body-copy">
          We analyzed three leading visual platforms to distill their core value
          propositions into mobile-friendly feature sets:
        </p>

        <div>
          <Carousel images={images} />
        </div>

        <p className="project-body-copy">
          We wanted to create an app that was a combination of the three, where
          users could search for fonts, look at font pairings, see how they look
          in real life contexts, and save them to their profile.
        </p>
      </section>

      <section id="artdirection" className="case-study-section">
        <h2 className="project-detail-label">
          Part 2: Art Direction/Design Systems
        </h2>
        <p className="project-body-copy">
          Designing an app about design requires radical visual restraint. We
          established an intentional art direction focused on content
          prioritization:
        </p>

        <p className="project-body-copy">
          We engineered a light, high-contrast, yet neutral palette adhering
          strictly to accessible color ratios. This ensured that third-party
          font imagery and complex text characters remained legible and free
          from background color bias.
        </p>
        <p className="project-body-copy">
          We also leveraged the Material 3 UI framework to map out native
          component hierarchies, responsive touch targets, and systematic
          spacing behaviors for both iOS and Android viewports.
        </p>

        <div
          className="cs-gallery-item standalone-image-wrapper"
          onClick={() =>
            handleOpenImage(
              DesignGuidelines,
              "Glyphly Comprehensive Art Direction and Design Style Guidelines",
            )
          }
        >
          <img
            src={DesignGuidelines}
            alt="Our Design Guidelines"
            className="cs-responsive-img"
          />{" "}
        </div>
        <p className="image-caption" style={{ marginTop: "8px" }}>
          {/* <i>
            Showing how we translated Material 3 guidelines into our final
            product art direction.
          </i> */}
        </p>
      </section>

      <section id="making" className="case-study-section">
        <h2 className="project-detail-label">
          Part 3: System Architecture & Implementation
        </h2>

        <p className="project-body-copy">
          Transitioning from Figma wireframes to a live deployment in VS Code
          required balancing visual intent with technical performance.
        </p>

        <div className="small-two-column-layout">
          <div>
            <h2>Authentication & Persistence:</h2>
            <p className="project-body-copy">
              Implemented Firebase Auth for secure user onboarding and utilized
              Firestore to allow users to save bespoke font pairings to their
              personal profiles in real time.
            </p>
          </div>
          <div>
            <h2>Creating Components</h2>
            <p className="project-body-copy">
              Translated Material 3 design tokens into modular, reusable React
              Native components, managing cross-platform layout discrepancies
              between iOS and Android styling engines.
            </p>
          </div>
        </div>

        <div
          className="cs-gallery-item standalone-image-wrapper"
          onClick={() =>
            handleOpenImage(
              UXMap,
              "Information Architecture and User Experience Navigation Flow Map",
            )
          }
        >
          <img
            src={UXMap}
            alt="UX Map and Architecture of the app"
            className="cs-responsive-img"
          />
        </div>
        <p
          className="image-caption"
          style={{ marginTop: "8px", marginBottom: "24px" }}
        >
          <i>Our UX Map and Architecture</i>
        </p>

        <p className="project-body-copy">
          From here, we converted our designs into code.
        </p>

        <div
          className="cs-gallery-item standalone-image-wrapper"
          onClick={() =>
            handleOpenImage(
              Mockups,
              "High Fidelity Wireframes and Mobile Application Screen Mockups",
            )
          }
        >
          <img
            src={Mockups}
            alt="Mockups of the app"
            className="cs-responsive-img"
          />
        </div>
        <p className="image-caption" style={{ marginTop: "8px" }}>
          <i>Our Mockups</i>
        </p>
      </section>

      <section id="learnings" className="case-study-section">
        <h2 className="project-detail-label">Reflection</h2>
        <p className="project-body-copy">
          As my first major end-to-end mobile build, this project offered
          invaluable insight into the realities of full-stack product creation.
          Writing the frontend layout patterns and back-end logic myself allowed
          me to rethink how I approach design-to-development handoffs.
        </p>

        <h2>Next Steps</h2>
        <p className="project-body-copy">
          If expanding on Glyphly, the next priority would be integrating
          on-device machine learning. Leveraging computer vision APIs would
          allow users to snapshot a physical font in public, automatically
          identify the typeface, and instantly serve dynamic font-pairing
          recommendations directly on their mobile device.
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

export default Glyphly;
