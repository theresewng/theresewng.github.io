import React from "react";
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

  // Define the specific sidebar links for this project
  const projectNavLinks = [
    { id: "tldr", label: "TLDR" },
    { id: "introduction", label: "INTRODUCTION" },
    { id: "research", label: "PART 1: UNDERSTANDING THE CUSTOMER" },
    { id: "ideation", label: "PART 2: IDEATION" },
    { id: "finaldesign", label: "PART 3: FINAL DESIGN" },
    { id: "learnings", label: "LEARNINGS" },
  ];

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
            href="https://standartmag.com/products/standart-playing-cards"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source: Standart Coffee Magazine
          </a>
          <br />
          Made for Starbucks Reserve, they act as takeaway cards for coffee
          lovers to highlight the stories behind each coffee origin using
          expressive illustration and custom type and highlighting distinctive
          tasting notes.
        </>
      ),
    },

    {
      url: PrecedentThree,
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
  ];

  return (
    <CaseStudyLayout
      project={{ ...data, image: "/images/modusbanner.png" }}
      navLinks={projectNavLinks}
    >
      <section id="tldr" className="case-study-section">
        <h3 className="project-detail-label">TLDR</h3>
        <p className="project-body-copy">{data.description}</p>
        <TLDR
          role={data.role}
          timeline={data.year}
          toolsUsed={data.tools}
          designFocuses={data.category}
        />

        <div className="three-image-layout" style={{ marginTop: "20px" }}>
          <div>
            <img
              src={imageOne}
              alt="Potential location of Modus Coffee Cards, which is by the display people line up."
              className="case-study-image"
            />
          </div>

          <div>
            <img
              src={imageTwo}
              alt="User holding Modus Coffee Cards"
              className="case-study-image"
            />
          </div>

          <div>
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
        <p>insert text here</p>
      </section>

      <section id="research" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          PART 1: UNDERSTANDING THE CUSTOMER
        </h3>
        <p className="project-body-copy">
          We interviewed 16 coffee drinkers, including three former baristas.
          All eight Modus customers felt prior coffee knowledge was needed,
          reinforcing a misalignment between Modus’ mission and customer
          experience. We also conducted ethnographic research at nearby cafés,
          observing menu explanations, barista–customer interactions, and
          ordering behaviours.
        </p>
        <div>
          <img
            src={CustomerData}
            alt="Customer Data"
            className="case-study-image"
          />
        </div>

        <h4 className="project-detail-label" style={{ marginBottom: "20px" }}>
          DESIGN WORKSHOP
        </h4>
        <p className="project-body-copy">
          We also recruited seven coffee drinkers who have never heard of Modus
          Coffee for our design workshop. They were first asked to explore the
          website and share their first impressions. We aimed to understand what
          stood out to them, what felt unclear, and what factors might encourage
          or discourage them from visiting the café. Many of our participants
          found the website confusing, stating:
        </p>

        <h4 className="project-detail-label" style={{ marginBottom: "20px" }}>
          KEY INSIGHTS
        </h4>
        <p className="project-body-copy">
          1. Customers want to understand the menu before visiting the café.
        </p>

        <p className="project-body-copy">
          2. Customers are interested in trying new coffee profiles but feel
          overwhelmed by the menu.
        </p>

        <p className="project-body-copy">
          3. Customers value barista recommendations but want more confidence in
          their choices.
        </p>

        <h4 className="project-detail-label" style={{ marginBottom: "20px" }}>
          CHOSEN PERSONA: THE ONE-TRICK PONY{" "}
        </h4>
        <p className="project-body-copy">
          From our initial interviews, we were able to come up with a persona
          that would guide our design decisions, The One Trick Pony. They are
          seasoned coffee drinker who values consistency, routine, and a
          reliable caffeine fix before they go to work. They have a go to drink,
          coffee notes they prefer, and/or a cafe they go to. They appreciate
          coffee with similar / predictable notes, and feel most comfortable
          sticking with what they know.
        </p>
      </section>

      <section id="ideation" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          PART 2: IDEATION
        </h3>
        <p className="project-body-copy">
          With that information, we proceeded to make a User Journey Map to go
          through typical interactions that happen and identify possibilities to
          help new customers. ​ One thing I noticed during our ethnography
          research were customers coming in and asking about the different
          profiles and so it felt important to highlight that within our user
          journey map.
        </p>
        <div>
          <img
            src={CustomerJourneyMap}
            alt="Customer Journey Map"
            className="case-study-image"
          />
        </div>
        <p className="project-body-copy">
          From there, I lead the team through a round of Affinity Diagramming,
          where we took all of our customer research and data and came up with
          ideas. After, we sorted them by overarching theme and voted on which
          ideas we liked the most:
        </p>

        <div>
          <img
            src={AffinityDiagram}
            alt="Affinity Diagram"
            className="case-study-image"
          />
        </div>

        <p className="project-body-copy">
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

        <h4>NARROWING IT DOWN</h4>
        <p className="project-body-copy">
          After testing our three initial prototypes with peers, the personal
          log received the strongest feedback. Our teaching team encouraged us
          to continue developing this idea and redesign it into a more portable,
          shareable format, something closer to a wallet-sized card. ​<br></br>
          Considering Modus Coffee’s profile-based approach and the challenge
          new customers may face when choosing a coffee that matches their
          preferences, how might we guide them toward a suitable profile while
          also encouraging them to explore others? This led us to evolve the
          personal log/booklet concept into a card-based format that better
          supports discovery and conversation.
          <br></br>
          We were down to the following precedents for our card design:
        </p>

        <div>
          <Carousel images={imagePrecedents} />
        </div>
      </section>

      <section id="finaldesign" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          PART 3: FINAL DESIGN
        </h3>
        <div className="two-column-layout">
          <div>
            <img
              src={cards}
              alt="Potential location of Modus Coffee Cards, which is by the display people line up."
              className="case-study-image"
              style={{ scale: "1.5" }}
            />
          </div>

          <div>
            <img
              src={cardBreakdown}
              alt="Breakdown of the card design"
              className="case-study-image"
            />
          </div>
        </div>
        <p className="project-body-copy">
          Our final iteration became Modus Cards, collectible cards that
          highlight individual coffee notes to lower the barrier to specialty
          coffee knowledge.
        </p>
        <p className="project-body-copy">
          Taking the playful language of Standart, the classification system of
          Le Nez, and educational layout of Starbucks Reserve, each card
          includes a radar chart showing the relative acidity, aroma, taste, and
          sweetness of each note within its profile.
        </p>{" "}
      </section>

      <section id="learnings" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          LEARNINGS
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
          KEY LEARNINGS
        </h4>

        <div className="small-two-column-layout">
          <div>
            <h3 className="project-detail-label">Balancing Personal Biases</h3>
            <p className="project-body-copy">
              As a coffee drinker and someone who would consider themselves to
              be a One Trick Pony, I had to maintain a balance of sharing
              personal experiences and not jumping straight into a solution or
              thinking that I know what the solution is from the start. I also
              had to make sure my biases on all coffee shops that we did
              ethnographic studies were neutral.
            </p>
            <p className="project-body-copy">
              One example is when creating the Customer Journey Map for our
              One-Trick Pony, I had to make sure that the map was inclusive of
              all the data we gathered and disconnect myself from that persona
              and journey map.
            </p>
          </div>

          <div>
            <h3 className="project-detail-label">
              The Importance of Direct User Interaction
            </h3>
            <p className="project-body-copy">
              While this might seem obvious, talking to people has always been
              scary for me. Stepping outside of my comfort zone and engaging
              directly with strangers helped me build stronger research skills.
              By asking spontaneous follow-up questions and digging deeper into
              participants’ responses, I gained more meaningful insights than a
              scripted interview alone could provide.
            </p>

            <p className="project-body-copy">
              This was especially important during our client meetings when we
              would meet and the team has a list of questions to ask but we did
              not just want the meetings to just be a back and forth question
              and answer session.
            </p>
          </div>
        </div>
      </section>
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
