import React from "react";
import { projectData } from "../../data/projectData";
import CaseStudyLayout from "../../pages/CaseStudy.js";
import TLDR from "../../components/tldr.js";
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
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
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

        <div>
          <img
            src={GlyphlyBanner}
            alt="Glyphly Banner"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
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

        <div style={{}}>
          {/* inspo placeholder put a slideshow here */}
          <Carousel images={images} />
        </div>
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

        <div>
          <img
            src={DesignGuidelines}
            alt="Our Design Guidelines"
            style={{ width: "100%", height: "auto" }}
          />{" "}
          (show how we used material 3 to translate into our art direction){" "}
        </div>
      </section>

      <section id="making" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          PART 3: MAKING THE APP
        </h3>
        <div>
          <img
            src={UXMap}
            alt="UX Map and Architecture of the app"
            style={{ width: "100%", height: "auto", marginTop: "20px" }}
          />
          <p className="image-caption">
            <i>Our UX Map and Architecture</i>
          </p>
        </div>

        <div>
          <img
            src={Mockups}
            alt="Mockups of the app"
            style={{ width: "100%", height: "auto", marginTop: "20px" }}
          />
          <p className="image-caption">
            <i>Our Mockups</i>
          </p>
        </div>
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
          <br />​Right now, Glyphly is still a proof of concept, but I hope
          that one day I can launch it in the app store.
        </p>
      </section>
    </CaseStudyLayout>
  );
}

export default Glyphly;
