import React from "react";
import thereseImg from "../images/therese.png";
import "../index.css";

function AboutMe() {
  //   const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="content-wrapper">
        <div className="h2-homepage">Hi, I'm Therese</div>

        <div className="two-column-layout">
          <div className="left-panel">
            {/* 2. Use the imported variable name */}
            <img
              src={thereseImg}
              alt="Therese Wong"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </div>
          <div className="right-panel">
            <section>
              <p>
                I am a communicator, web accessibility specialist, and digital
                designer with experience in IT and consulting spaces. I have a
                degree in Interactive Arts and Technology with concentrations in
                Interaction Design and Web and Mobile Design and Development. In
                addition, I have completed my Business certification in
                Innovation and Entrepreneurship which has allowed me to develop
                an interest in the intersection of Consulting and creating
                accessible User Experiences.
              </p>

              <p className="project-body-copy"></p>

              <p className="project-body-copy">
                Outside of designing, I have been working on a side project
                called Don't Look at Me! - a fashion exploration project
                designing clothes inspired by big fashion houses that is worn by
                the average office worker, and attached with quiet distinct
                branding (think RSVP from Paris, The Row, etc.).
              </p>
            </section>
          </div>
        </div>

        <section style={{ paddingTop: "40px" }}>
          <h2>Technologies</h2>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
