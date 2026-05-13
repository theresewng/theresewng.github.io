import { Link } from "react-router-dom";
import ProjectCard from "../components/projectcard.js";
import { projectData } from "../data/projectData.js";

function Projects() {
  return (
    <div className="homepage-container">
      <div className="content-wrapper">
        <div className="h2-homepage">projects</div>

        {projectData.map((project) => (
          <div className="two-column-layout-project" key={project.slug}>
            {/* Left Panel: Scaled Card Wrapper Link */}
            <div className="left-panel">
              <div className="projct-card-container-small">
                <Link to={project.path} className="card-link-wrapper">
                  <ProjectCard {...project} size="small" />
                </Link>
              </div>
            </div>

            {/* Right Panel: Side Descriptions */}
            <div className="right-panel">
              <div className="project-description-box">
                <p className="project-description-text">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
