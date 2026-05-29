import React, { useState } from "react";
import Button from "../../components/button.js";

import { projectData } from "../../data/projectData";
import CaseStudyLayout from "../../pages/CaseStudy.js";
import TLDR from "../../components/tldr.js";
import Carousel from "../../components/carousel.js";

import imageOne from "../../../src/images/IMG_One.png";
import imageTwo from "../../../src/images/IMG_Two.png";
import imageThree from "../../../src/images/IMG_Three.png";
import CustomerJourneyMap from "../../../src/images/customer journey.png";
import PrecedentOne from "../../../src/images/PrecedentOne.png";
import PrecedentTwo from "../../../src/images/PrecedentTwo.png";
import PrecedentThree from "../../../src/images/PrecedentThree.png";
import AffinityDiagram from "../../../src/images/affinitydiagram.png";
import CustomerData from "../../../src/images/customerdata.png";

import cardBreakdown from "../../../src/images/breakdown.png";
import cards from "../../../src/images/cards.png";

function Modus() {
  const data = projectData.find((p) => p.slug === "modus");

  // Track the active image asset object { src, alt } currently blown up full screen
  const [activeExpandedImage, setActiveExpandedImage] = useState(null);

  const projectNavLinks = [
    { id: "tldr", label: "TLDR" },
    { id: "introduction", label: "INTRODUCTION" },
    { id: "research", label: "PART 1: UNDERSTANDING THE CUSTOMER" },
    { id: "ideation", label: "PART 2: IDEATION" },
    { id: "finaldesign", label: "PART 3: FINAL DESIGN" },
    { id: "learnings", label: "LEARNINGS" },
  ];

  const handleOpenImage = (src, alt) => {
    setActiveExpandedImage({ src, alt });
  };

  const imagePrecedents = [
    {
      url: PrecedentOne,
      caption: (
        <>
          <a
            href="https://laurelgeddes.com/starbucks-reserve-coffee"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source: Laurel Geddes
          </a>
          <br />
          Made by Starbucks Reserve, they act as takeaway cards for coffee
          lovers to highlight the stories behind each coffee origin using
          expressive illustration and custom type and highlighting distinctive
          tasting notes.
        </>
      ),
    },
    {
      url: PrecedentTwo,
      caption: (
        <>
          <a
            href="https://www.lenez.com/coffret/vin/grand-modele-54/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source: Le Nez du Vin
          </a>
          <br />
          Le Nez du Vin's book explains wine aromas and their classification in
          a playing card format to summarise the real link between aromas and
          wines and scent bottles of every wine note
        </>
      ),
    },
    {
      url: PrecedentThree,
      caption: (
        <>
          <a
            href="https://standartmag.com/products/standart-playing-cards"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source: Standart Coffee Magazine
          </a>
          <br />
          The playfulness of the text is a phrase about specialty coffee, made
          to test your coffee knowledge and enhance your understanding of coffee
          jargon, while making the art direction not too coffee-focused.
        </>
      ),
    },
  ];

  return (
    <CaseStudyLayout
      project={{ ...data, image: "/images/modusbanner.png" }}
      navLinks={projectNavLinks}
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

        <div className="three-image-layout" style={{ marginTop: "20px" }}>
          <div
            className="cs-gallery-item"
            onClick={() =>
              handleOpenImage(
                imageOne,
                "Modus Coffee Cards Display Line Location",
              )
            }
          >
            <img
              src={imageOne}
              alt="Potential location of Modus Coffee Cards, which is by the display people line up."
              className="case-study-image"
            />
          </div>

          <div
            className="cs-gallery-item"
            onClick={() =>
              handleOpenImage(imageTwo, "User holding Modus Coffee Cards")
            }
          >
            <img
              src={imageTwo}
              alt="User holding Modus Coffee Cards"
              className="case-study-image"
            />
          </div>

          <div
            className="cs-gallery-item"
            onClick={() =>
              handleOpenImage(imageThree, "Modus Coffee Cards Seating Location")
            }
          >
            <img
              src={imageThree}
              alt="Another location for Modus Coffee Cards, where the customers sit"
              className="case-study-image"
            />
          </div>
        </div>

        <Button
          text="Final Presentation Deck (Opens in New Tab)"
          showArrow={false}
          onClick={() =>
            window.open(
              "https://www.figma.com/proto/w83HiLegMwb4CK72VIr3Fb/Website?page-id=1618%3A358&node-id=1618-388&viewport=267%2C527%2C0.05&t=A7VTjLqMQqmOXrcR-1&scaling=contain&content-scaling=fixed",
              "_blank",
              "noopener,noreferrer",
            )
          }
        />
      </section>

      <section id="introduction" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          INTRODUCTION{" "}
        </h3>
        <p className="project-body-copy">
          Modus Coffee Roasters, a specialty café in Vancouver, wanted a clearer
          way to explain their menu to bridge the gap between casual coffee
          drinkers and enthusiasts. Their menu is organized into six rotating
          coffee profiles, ranging from classic dark roasts to experimental
          blends. Our project focused on improving menu communication after
          mixed customer feedback revealed a gap in understanding. Modus Coffee
          Cards encourages customers to explore and try new coffee profiles with
          greater confidence.
        </p>
        <h3>The problem</h3>
        <p>
          Modus Coffee Roasters bypasses traditional industry labels (like
          origin country or roast level) in favor of six rotating, perennial
          flavor profiles. While innovative, mixed customer feedback revealed an
          experience gap: new customers felt overwhelmed by the abstract menu
          vocabulary, creating a barrier to ordering and reducing confidence in
          their choices.
        </p>

        <h3>
          <i>
            How might we lower the barrier to specialty coffee knowledge at the
            point-of-sale, transforming an intimidating menu into an accessible,
            conversational experience?{" "}
          </i>
        </h3>
      </section>

      <section id="research" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          Part 1: Understanding The Average Joe
        </h3>
        <p className="project-body-copy">
          To diagnose the friction points in the café environment, we deployed a
          mixed-method research strategy to capture both behavioral and
          attitudinal data:
        </p>
        <p className="project-body-copy">
          <b>16 In-Depth Interviews: </b>Spanning casual drinkers to former
          baristas to map out structural industry friction.
        </p>
        <p className="project-body-copy">
          <b>Contextual Inquiry & Ethnography: </b>Observed live
          barista-customer micro-interactions and purchasing flows across local
          Vancouver specialty cafés.
        </p>
        <p className="project-body-copy">
          <b>Co-Design Workshop: </b>Hosted 7 users new to the Modus brand to
          evaluate digital onboarding, structural clarity, and mental models.
        </p>
        <div
          className="cs-gallery-item standalone-image-wrapper"
          onClick={() =>
            handleOpenImage(CustomerData, "Customer Data Infographics")
          }
        >
          <img
            src={CustomerData}
            alt="Customer Data"
            className="case-study-image"
          />
        </div>
        <p className="project-body-copy">
          Our synthesis yielded a primary persona: The One-Trick Pony. This
          segment values morning routine, predictability, and flavor
          consistency. They possess a "go-to" order and stick to it out of a
          fear of ordering a specialty cup they might dislike.
        </p>

        <p className="project-body-copy">
          Customers didn't want to become expert baristas; they wanted a safety
          net. They valued staff recommendations but needed a physical or visual
          anchor to feel autonomous and confident in trying something new.
        </p>
      </section>

      <section id="ideation" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          Part 2: Iteration & Tangible Interface Precedents{" "}
        </h3>
        <p className="project-body-copy">
          With that information, we proceeded to make a User Journey Map to go
          through typical interactions that happen and identify possibilities to
          help new customers. ​ One thing I noticed during our ethnography
          research were customers coming in and asking about the different
          profiles and so it felt important to highlight that within our user
          journey map.
        </p>
        <div
          className="cs-gallery-item standalone-image-wrapper"
          onClick={() =>
            handleOpenImage(CustomerJourneyMap, "User Journey Mapping Graph")
          }
        >
          <img
            src={CustomerJourneyMap}
            alt="Customer Journey Map"
            className="case-study-image"
          />
        </div>
        <p className="project-body-copy" style={{ marginTop: "40px" }}>
          From there, I lead the team through a round of Affinity Diagramming,
          where we took all of our customer research and data and came up with
          ideas. After, we sorted them by overarching theme and voted on which
          ideas we liked the most:
        </p>

        <div
          className="cs-gallery-item standalone-image-wrapper"
          onClick={() =>
            handleOpenImage(
              AffinityDiagram,
              "Affinity Diagram Design Sticky Notes",
            )
          }
        >
          <img
            src={AffinityDiagram}
            alt="Affinity Diagram"
            className="case-study-image"
          />
        </div>

        <p className="project-body-copy" style={{ marginTop: "40px" }}>
          Overall, we were drawn to these three ideas:
        </p>
        <div className="three-image-layout" style={{ marginTop: "20px" }}>
          <div>
            <h4>1. Redesigned Packaging</h4>
            <p>
              Redesigning the coffee packaging to show brew instructions,
              caffeine acidity, sweetness and roast profiles on the packaging
            </p>
          </div>
          <div>
            <h4>2. Personal Log</h4>
            <p>
              A booklet where customers can collect stamps for each types of
              coffee that they have tried and get rewards/discounts base on the
              number of stamps
            </p>
          </div>
          <div>
            <h4>3. Memo Board</h4>
            <p>
              Customers can leave their comment or their feeling there to create
              a sense of belonging and community
            </p>
          </div>
        </div>

        <h4 style={{ marginTop: "40px" }}>NARROWING IT DOWN</h4>
        <p className="project-body-copy">
          After testing our three initial prototypes with peers, the personal
          log received the strongest feedback. Our teaching team encouraged us
          to continue developing this idea and redesign it into a more portable,
          shareable format, something closer to a wallet-sized card. ​
        </p>

        <p className="project-body-copy">
          Considering Modus Coffee’s profile-based approach and the challenge
          new customers may face when choosing a coffee that matches their
          preferences, how might we guide them toward a suitable profile while
          also encouraging them to explore others? This led us to evolve the
          personal log/booklet concept into a card-based format that better
          supports discovery and conversation.
        </p>
        <p className="project-body-copy">
          We were down to the following precedents for our card design:
        </p>

        <div>
          <Carousel images={imagePrecedents} />
        </div>
      </section>

      <section id="finaldesign" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          Part 3: Final Design - Modus Coffee Cards
        </h3>
        <div className="two-column-layout">
          <div
            className="cs-gallery-item"
            onClick={() =>
              handleOpenImage(cards, "Modus Collectible Coffee Cards Overview")
            }
          >
            <img
              src={cards}
              alt="Potential location of Modus Coffee Cards, which is by the display people line up."
              className="case-study-image"
              // Removed the style scale: 1.5 because it was causing image zoom clipping
            />
          </div>

          <div
            className="cs-gallery-item"
            onClick={() =>
              handleOpenImage(
                cardBreakdown,
                "Detailed Infographic Card Design Breakdown",
              )
            }
          >
            <img
              src={cardBreakdown}
              alt="Breakdown of the card design"
              className="case-study-image"
            />
          </div>
        </div>
        <p className="project-body-copy">
          The final design introduces Modus Cards: a physical, collectible card
          system integrated directly into the café’s daily service workflow.
        </p>
        <div className="small-two-column-layout">
          <div>
            <h3>Data Visualization</h3>
            <p>
              Each card features a standardized radar chart mapping relative
              acidity, aroma, body, and sweetness. This translates abstract
              profile names into an immediate, universal visual language
              customers can look at while ordering.
            </p>
          </div>
          <div>
            <h3>Playful, Conversational Copy</h3>
            <p>
              Each card includes playful, conversational copy that helps
              customers understand and connect with the coffee profiles in a
              more engaging way.
            </p>
          </div>
        </div>
      </section>

      <section id="learnings" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          Final Thoughts
        </h3>
        <p className="project-body-copy">
          This project was a great opportunity to practice leading the design
          process from end-to-end, from research, to ideation, to prototyping,
          and testing. I also got to practice leading a team through the design
          process and facilitating activities like affinity diagramming and user
          journey mapping. It was also interesting to work on a project that was
          focused on education and discovery, which is something I haven’t had
          much experience with before.
        </p>

        <p className="project-body-copy">
          Overall, the client was pleased with the end product. This project
          taught me a lot about UX Consulting and I really enjoyed partnering
          with a real company to work on a solution together. It was very
          different from my other classes where we are given a brief and told to
          follow it while in this class, we had to create our own brief
          essentially according to the clients needs.
        </p>

        <h4 className="project-detail-label" style={{ marginBottom: "20px" }}>
          Key Takeaways{" "}
        </h4>

        <div className="small-two-column-layout">
          <div>
            <h3 className="project-detail-label">
              Mitigating Personal Bias in UX Research
            </h3>
            <p className="project-body-copy">
              As a dedicated coffee consumer who matches the "One-Trick Pony"
              archetype, this project was a masterclass in researcher
              neutrality. I intentionally detached my personal café preferences
              during ethnographic charting and journey mapping, ensuring our
              design choices were strictly grounded in synthesized user data
              rather than personal routine.
            </p>
          </div>

          <div>
            <h3 className="project-detail-label">
              Evolving from Scripted Interviews to Dynamic Inquiries
            </h3>
            <p className="project-body-copy">
              Stepping out of my comfort zone to conduct contextual inquiries
              with strangers radically matured my user research capabilities. I
              learned to move past rigid scripts to chase spontaneous,
              non-linear insights through active listening and tactical
              follow-up questions. A skill that directly improved the depth of
              our client discovery sessions.
            </p>
          </div>
        </div>
        <h3 className="project-detail-label">The Reality of UX Consulting</h3>
        <p className="project-body-copy">
          Unlike structured academic briefs, partnering with Modus required us
          to define our own scope, unpack a real-world non-traditional business
          model, and negotiate a balance between operational constraints and
          creative user interventions.
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

export default Modus;

// <div>
//   <h3 className="project-detail-label">Designing for Discovery</h3>
//   <p className="project-body-copy">
//     This project was a great opportunity to practice designing for
//     discovery, where the goal was to create an experience that would
//     allow users to explore and learn about coffee in a meaningful way.
//     I had to balance the need for education with the desire for an
//     engaging and enjoyable experience.
//   </p>
// </div>
