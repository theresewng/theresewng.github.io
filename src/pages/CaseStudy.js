// src/pages/ProjectA.js
import ProjectHero from "../components/banner";
import ProjectMeta from "../components/metadata";

function CaseStudy() {
  return (
    <div className="project-page-container design-system-a">
      {/* Uses shared blocks sequentially */}
      <ProjectHero title="Project Alpha" description="A clean web app layout." bannerImage="/img/alpha.jpg" />
      
      <div className="custom-two-column-split">
        <ProjectMeta role="Lead Designer" timeline="3 Months" tools={["Figma", "CSS"]} />
        
        {/* Completely customized presentation layout for Project A */}
        <div className="unique-gallery-layout">
          <p>This layout uses a masonry image grid specific to Alpha...</p>
          <img src="/img/alpha-sketch.jpg" alt="Sketches" />
        </div>
      </div>
    </div>
  );
}
export default CaseStudy;