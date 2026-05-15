import React from "react";
import { projectData } from "../../data/projectData";
import CaseStudyLayout from "../../pages/CaseStudy.js";
import TLDR from "../../components/tldr.js";

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
        <div style={{ height: "300px", background: "#333", marginTop: "20px" }}>
          customer breakdown placeholder{" "}
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
          <br />
          2. Customers are interested in trying new coffee profiles but feel
          overwhelmed by the menu.
          <br />
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
        <div style={{ height: "300px", background: "#333", marginTop: "20px" }}>
          Journey Map Placeholder
        </div>
        <p className="project-body-copy">
          From there, I lead the team through a round of Affinity Diagramming,
          where we took all of our customer research and data and came up with
          ideas. After, we sorted them by overarching theme and voted on which
          ideas we liked the most:
        </p>

        <div style={{ height: "300px", background: "#333", marginTop: "20px" }}>
          Affinity Diagram Placeholder
        </div>

        <p className="project-body-copy">
          Overall, we were drawn to these three ideas:
        </p>
        <div style={{ height: "300px", background: "#333", marginTop: "20px" }}>
          3 ideas placeholder
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
        <div style={{ height: "300px", background: "#333", marginTop: "20px" }}>
          precedents placeholder
        </div>
      </section>

      <section id="finaldesign" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          PART 3: FINAL DESIGN
        </h3>
        <p className="project-body-copy">
          Our final iteration became Modus Cards, collectible cards that
          highlight individual coffee notes to lower the barrier to specialty
          coffee knowledge.
          <br></br>​ Taking the playful language of Standart, the classification
          system of Le Nez, and educational layout of Starbucks Reserve, each
          card includes a radar chart showing the relative acidity, aroma,
          taste, and sweetness of each note within its profile.
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
          <br />
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
      </section>
    </CaseStudyLayout>
  );
}

export default Modus;
