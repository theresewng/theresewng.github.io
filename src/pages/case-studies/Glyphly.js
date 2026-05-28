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
      caption:
        "We were inspired by the grid format that Pinterest's homepage presented, offering designers with a variety of different designs, as well as how the user could search for what you want, and the ability to save images.",
    },
    {
      url: imageTwo,
      caption:
        "We liked that Typewolf gave users a description about each font, offer font pairings and similar fonts, and how it looks like.",
    },
    {
      url: imageThree,
      caption:
        "We enjoyed how it showed fonts used in real-life contexts and the ability to filter by what kind of branding you want to do (Book Cover vs Movie Poster, etc.)",
    },
  ];

  return (
    <CaseStudyLayout
      project={{ ...data, image: "/images/glyphlybanner.png" }}
      navLinks={projectNavLinks}
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
        <h3 className="project-detail-label">TLDR</h3>
        <p className="project-body-copy">{data.description}</p>
        <TLDR
          role={data.role}
          timeline={data.year}
          toolsUsed={data.tools}
          designFocuses={data.category}
        />
      </section>
      
      <section id="introduction" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          INTRODUCTION{" "}
        </h3>
        <p className="project-body-copy">
          Created as a final project for my Mobile Computing class, Glyphly is a
          cross-platform React Native app for iOS and Android featuring user
          authentication, data persistence, native functionality, and
          third-party API integration. Created with Summayyah Memon, the idea
          came when we were browsing TypeWolf for a different project and we
          were wondering if there was a similar app on the App Store.
        </p>

        <div 
          className="cs-gallery-item standalone-image-wrapper"
          onClick={() => handleOpenImage(GlyphlyBanner, "Glyphly Typography Mobile App Interface Banner")}
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
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          PART 1: RESEARCH/COMPETITIVE ANALYSIS
        </h3>
        <p className="project-body-copy">
          First, we figured out what we wanted our app to be capable of doing.
          Looking to different sites, such as Pinterest, TypeWolf, FontsInUse,
          we identified overlapping features that we think would be good for our
          app.
        </p>

        <div>
          <Carousel images={images} />
        </div>

        <p className="project-body-copy" style={{ marginTop: "20px" }}>
          We wanted to create an app that was a combination of the three, where
          users could search for fonts, look at font pairings, see how they look
          in real life contexts, and save them to their profile.
        </p>
      </section>

      <section id="artdirection" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          PART 2: ART DIRECTION
        </h3>
        <p className="project-body-copy">
          We then defined an art direction with a light, neutral color palette
          to ensure accessibility and avoid harsh contrast with imagery. We
          chose simple, readable fonts and referenced Material Design UI Kit 3
          to follow mobile best practices.
        </p>

        <div 
          className="cs-gallery-item standalone-image-wrapper"
          onClick={() => handleOpenImage(DesignGuidelines, "Glyphly Comprehensive Art Direction and Design Style Guidelines")}
        >
          <img
            src={DesignGuidelines}
            alt="Our Design Guidelines"
            className="cs-responsive-img"
          />{" "}
        </div>
        <p className="image-caption" style={{ marginTop: "8px" }}>
          <i>Showing how we translated Material 3 guidelines into our final product art direction.</i>
        </p>
      </section>

      <section id="making" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          PART 3: MAKING THE APP
        </h3>

        <p className="project-body-copy">
          After creating key components, we designed our app mockups in Figma,
          creating first a basic UX Map to figure out our user flow.
        </p>
        
        <div 
          className="cs-gallery-item standalone-image-wrapper"
          onClick={() => handleOpenImage(UXMap, "Information Architecture and User Experience Navigation Flow Map")}
        >
          <img
            src={UXMap}
            alt="UX Map and Architecture of the app"
            className="cs-responsive-img"
          />
        </div>
        <p className="image-caption" style={{ marginTop: "8px", marginBottom: "24px" }}>
          <i>Our UX Map and Architecture</i>
        </p>

        <p className="project-body-copy">From here, we converted our designs into code.</p>

        <div 
          className="cs-gallery-item standalone-image-wrapper"
          onClick={() => handleOpenImage(Mockups, "High Fidelity Wireframes and Mobile Application Screen Mockups")}
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
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          REFLECTION
        </h3>
        <p className="project-body-copy">
          This was my first major project working within a mobile space. I
          enjoyed that I got to experience what it was like to work as a Full
          Stack Developer, working on both the front-end and the back-end. It
          gave me and idea of design-development handoffs and putting yourself
          in the developers' shoes when working in consulting roles as a UX
          Designer.
        </p>
        <p className="project-body-copy">
          We were limited by a few technical constraints of creating our app. If
          I was to add onto this project, with the rise in AI, I would like to
          explore if it is possible for AI to identify fonts based on images and
          suggest font pairings based on that.
        </p>
      </section>

      {/* Universal Lightbox Modal Layer */}
      {activeExpandedImage && (
        <div className="cs-lightbox" onClick={() => setActiveExpandedImage(null)}>
          <button className="cs-close-btn" onClick={() => setActiveExpandedImage(null)}>
            &times;
          </button>
          <div className="cs-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeExpandedImage.src} alt={activeExpandedImage.alt} />
            <p className="cs-lightbox-meta">{activeExpandedImage.alt}</p>
          </div>
        </div>
      )}
    </CaseStudyLayout>
  );
}

export default Glyphly;