import React, { useState } from "react";
import { projectData } from "../../data/projectData";
import CaseStudyLayout from "../../pages/CaseStudy.js";
import TLDR from "../../components/tldr.js";

import CustomerJourneyMap from "../../images/Customer Journey Map.png";
import initialUIs from "../../images/initialUIs.png";
import RedPackets from "../../images/redpackets.png";
import WellWishes from "../../images/wellwishes.mov";

function CNYCaseStudy() {
  const data = projectData.find((p) => p.slug === "cny");

  // Track the active image asset object { src, alt } currently blown up full screen
  const [activeExpandedImage, setActiveExpandedImage] = useState(null);

  // Define the specific sidebar links for this project
  const projectNavLinks = [
    { id: "tldr", label: "TLDR" },
    { id: "intro", label: "Introduction" },
    { id: "designprocess", label: "PART 1: THE CUSTOMER JOURNEY" },
    { id: "designing", label: "PART 2: ART DIRECTION" },
    { id: "theotherside", label: "PART 3: THE RECEIVING END" },
    { id: "learnings", label: "LEARNINGS" },
  ];

  const handleOpenImage = (src, alt) => {
    setActiveExpandedImage({ src, alt });
  };

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

      <section id="intro" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          INTRODUCTION
        </h3>
        <p className="project-body-copy">
          As a child, I eagerly awaited Lunar New Year for the red envelope,
          which felt like my "yearly earnings." 
        </p>
        <p className="project-body-copy">
          With e-transfers becoming common in Canada, my mom started putting
          Monopoly money in our envelopes, promising to transfer the real amount
          within 24–48 hours. This led me to joke that relatives abroad could
          just e-transfer directly. ​
        </p>
        <p className="project-body-copy">
          Talking with a friend who never received red packets made me consider
          how families could celebrate Lunar New Year together even when apart.
        </p>
      </section>

      <section id="designprocess" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          PART ONE:{" "}
        </h3>

        <h2>THE CUSTOMER JOURNEY</h2>
        <p className="project-body-copy">
          To start, I used e-transferring money as a familiar precedent. By
          mapping the journeys of e-transfers and traditional red packet
          exchanges, I identified opportunities to translate the cultural
          experience of giving and receiving red packets into a digital context.
        </p>

        <div 
          className="cs-gallery-item standalone-image-wrapper" 
          onClick={() => handleOpenImage(CustomerJourneyMap, "Lunar New Year Red Packet Customer Journey Map")}
        >
          <img
            src={CustomerJourneyMap}
            alt="Customer Journey Map"
            className="cs-responsive-img"
          />{" "}
        </div>

        <div>
          <p className="project-body-copy" style={{ marginTop: "40px" }}>
            I added a Lunar New Year extension to the 'Send Money' tab, making
            it red to differentiate it from the other options and by using a
            colour familiar to the tradition.
          </p>

          <div 
            className="cs-gallery-item standalone-image-wrapper" 
            onClick={() => handleOpenImage(initialUIs, "Initial Mobile Interface Wireframes for Red Packets")}
          >
            <img
              src={initialUIs}
              alt="Initial Design for the red packets"
              className="cs-responsive-img"
            />
          </div>
        </div>
      </section>

      <section id="designing" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          PART TWO: ART DIRECTION
        </h3>

        <h2>RED PACKET DESIGNS</h2>

        <div className="two-column-layout">
          <div>
            <p className="project-body-copy">
              Red packets (红包) symbolize good luck, blessings, and wealth. To
              honor this tradition, I designed a series of classic red envelopes
              in Figma, including a Year of the Rabbit theme, for senders to
              choose from. ​
            </p>
            <p className="project-body-copy">
              Traditionally given in pairs to represent both parents, I
              incorporated an option to send two envelopes, either by splitting
              a total amount or sending two envelopes of the same value.
            </p>
          </div>

          <div 
            className="cs-gallery-item" 
            onClick={() => handleOpenImage(RedPackets, "Figma Art Direction - Red Packet Visual Designs")}
          >
            <img
              src={RedPackets}
              alt="Red Packet Designs"
              className="cs-responsive-img"
            />
          </div>
        </div>

        <h2 style={{ marginTop: "40px" }}>WELL WISHES</h2>

        <div className="two-column-layout">
          <div>
            <p className="project-body-copy">
              Another tradition is to express well-wishes for the year ahead. As
              an option, the sendee is able to send the recipient well wishes
              such as good grades, to grow taller, and to stay healthy that will
              be sent with the transfer.
            </p>
          </div>

          <div>
            {/* Kept intact as a standard video item block */}
            <video 
              src={WellWishes} 
              className="cs-responsive-img" 
              controls 
              muted
            />
          </div>
        </div>
      </section>

      <section id="theotherside" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          PART THREE
        </h3>
        <h2>THE RECEIVING END</h2>

        <div className="two-column-layout">
          <div>
            <p className="project-body-copy">
              On the receiving end, the recipient gets an email similar to an
              e-transfer, but instead of auto-depositing, they’re prompted to
              “Open My Red Packet,” which directs them to their banking app.
              There, they can open the packet to reveal the amount and hear the
              attached voice memo before the funds are deposited automatically.
            </p>
          </div>

          <div>
            {/* Empty source placeholder image hidden from lightbox array until source is defined */}
            <div style={{ width: "100%", height: "200px", background: "#f5f5f7", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", color: "#86868b" }}>
              E-Transfer Animation Placeholder
            </div>
          </div>
        </div>
      </section>

      <section id="learnings" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          REFLECTIONS
        </h3>
        <p className="project-body-copy">
          This project was a fun opportunity to explore how digital design can
          reimagine and preserve cultural traditions. It also made me think
          about how we can use design to foster connection and celebration even
          when physically apart.
        </p>
        <p className="project-body-copy">
          I have to thank my friend for saying that one sentence, a
          sentence that started it all. While my more traditional parents found
          the concept as non-traditional and confusing, the new generation
          thought it was quirky idea. This concept came to me during a period of
          extreme creative and mental burn out. Unlike all of my school projects
          where I am following a brief, I got to do something self-directed,
          which really helped me to restore myself from that creative burnout
          and do a bit more motion design, something that I would say I have a
          love/hate relationship with. And although this project isn't
          affiliated with the TD Brand, it was fun trying playing within TD's
          branding guidelines. 
        </p>
        <p className="project-body-copy">
          On a more personal note, now that I am older, I recognise that money
          isn’t the purpose of Lunar New Year, but it is to honour the history
          of of our elders and really celebrate culture that has been cultivated
          to what we know today. ​
        </p>
        <p className="project-body-copy">
          Given the short timeline I had with this project, I am overall pleased
          with the end result. I have a lot to learn and I plan to revisit this
          project when I have gained some more knowledge
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

export default CNYCaseStudy;