import React from "react";
import { projectData } from "../../data/projectData";
import CaseStudyLayout from "../../pages/CaseStudy.js";
import TLDR from "../../components/tldr.js";

import CustomerJourneyMap from "../../images/Customer Journey Map.png";
import initialUIs from "../../images/initialUIs.png";
import RedPackets from "../../images/redpackets.png";

function CNYCaseStudy() {
  const data = projectData.find((p) => p.slug === "cny");

  // Define the specific sidebar links for this project
  const projectNavLinks = [{ id: "tldr", label: "TLDR" }];

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
          which felt like my "yearly earnings." <br />
          With e-transfers becoming common in Canada, my mom started putting
          Monopoly money in our envelopes, promising to transfer the real amount
          within 24–48 hours. This led me to joke that relatives abroad could
          just e-transfer directly. ​
          <br />
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

        <div>
          <img
            src={CustomerJourneyMap}
            alt="Customer Journey Map"
            style={{ width: "100%", height: "auto", marginTop: "20px" }}
          />{" "}
        </div>

        <div>
          <p className="project-body-copy" style={{ marginTop: "20px" }}>
            I added a Lunar New Year extension to the 'Send Money' tab, making
            it red to differentiate it from the other options and by using a
            colour familiar to the tradition.
          </p>

          <div>
            <img
              src={initialUIs}
              alt="Initial Design for the red packets"
              style={{ width: "100%", height: "auto", marginTop: "20px" }}
            />
          </div>
        </div>
      </section>

      <section id="designing" className="case-study-section">
        <h3 className="project-detail-label" style={{ marginBottom: "20px" }}>
          PART TWO: ART DIRECTION
        </h3>

        <h2>RED PACKET DESIGNS</h2>
        <p className="project-body-copy">
          Red packets (红包) symbolize good luck, blessings, and wealth. To
          honor this tradition, I designed a series of classic red envelopes in
          Figma, including a Year of the Rabbit theme, for senders to choose
          from. ​<br />
          Traditionally given in pairs to represent both parents, I incorporated
          an option to send two envelopes, either by splitting a total amount or
          sending two envelopes of the same value.
        </p>

        <div>
          <img
            src={RedPackets}
            alt="Red Packet Designs"
            style={{ width: "100%", height: "auto", marginTop: "20px" }}
          />
        </div>
      </section>
    </CaseStudyLayout>
  );
}

export default CNYCaseStudy;
