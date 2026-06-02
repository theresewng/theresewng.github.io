import React, { useState } from "react";
import { projectData } from "../../data/projectData";
import CaseStudyLayout from "../../pages/CaseStudy.js";
import TLDR from "../../components/tldr.js";
import nextProject from "../../components/nextProject.js";

import ImageOne from "../../images/Tabloid1.png";
import ImageTwo from "../../images/Tabloid2.png";
import ImageThree from "../../images/Tabloid3.png";
import ImageFour from "../../images/Tabloid4.png";
import UGRS from "../../images/UGRS_Poster.png";

function AccessibleNavigationCaseStudy() {
  const data = projectData.find((p) => p.slug === "accessible-navigation");

  // Track which image asset object { src, alt } is currently blown up full screen
  const [activeExpandedImage, setActiveExpandedImage] = useState(null);

  const projectNavLinks = [
    { id: "tldr", label: "TLDR" },
    { id: "posters", label: "SHOWCASE POSTERS" },
    { id: "ugrs", label: "UGRS POSTER" },
  ];

  const handleOpenImage = (src, alt) => {
    setActiveExpandedImage({ src, alt });
  };

  return (
    <CaseStudyLayout
      project={{ ...data, image: "/images/AccessibilityBanner.png" }}
      navLinks={projectNavLinks}
      /* Paste these 4 lines right here: */
      lastPath="/work/appnovation"
      lastTitle="Appnovation Technologies"
      nextPath="/work/glyphly"
      nextTitle="Glyphly Mobile App"
    >
      <section id="tldr" className="case-study-section">
        <h3 className="project-detail-label">tldr</h3>

        <p className="project-body-copy">{data.description}</p>
        <TLDR
          role={data.role}
          timeline={data.year}
          toolsUsed={data.tools}
          designFocuses={data.category}
        />

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SlZhtItDP1E?si=5GdQmtaUKEKOy72b"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <p className="project-body-copy" style={{ marginTop: "20px" }}>
          Case study coming soon! In the meantime, you can view our final
          posters below.
        </p>
      </section>
      {/* Showcase Posters Section */}
      <section id="posters" className="case-study-section">
        <div className="four-column-layout">
          <div
            className="cs-gallery-item"
            onClick={() => handleOpenImage(ImageOne, "Showcase Poster 1")}
          >
            <img
              src={ImageOne}
              alt="Showcase Poster 1"
              className="cs-responsive-img"
            />
          </div>
          <div
            className="cs-gallery-item"
            onClick={() => handleOpenImage(ImageTwo, "Showcase Poster 2")}
          >
            <img
              src={ImageTwo}
              alt="Showcase Poster 2"
              className="cs-responsive-img"
            />
          </div>
          <div
            className="cs-gallery-item"
            onClick={() => handleOpenImage(ImageThree, "Showcase Poster 3")}
          >
            <img
              src={ImageThree}
              alt="Showcase Poster 3"
              className="cs-responsive-img"
            />
          </div>
          <div
            className="cs-gallery-item"
            onClick={() => handleOpenImage(ImageFour, "Showcase Poster 4")}
          >
            <img
              src={ImageFour}
              alt="Showcase Poster 4"
              className="cs-responsive-img"
            />
          </div>
        </div>
      </section>
      {/* UGRS Poster Section */}
      <section id="ugrs" className="case-study-section">
        <div
          className="cs-gallery-item standalone-poster-wrapper"
          onClick={() => handleOpenImage(UGRS, "UGRS Poster")}
        >
          <img src={UGRS} alt="UGRS Poster" className="cs-responsive-img" />
        </div>
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

export default AccessibleNavigationCaseStudy;
