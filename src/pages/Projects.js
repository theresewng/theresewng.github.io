import ProjectCard from "../components/projectcard.js";
import { projectData } from "../data/projectData.js";

function Projects() {
  return (
    <div className="homepage-container">
      <div className="content-wrapper">
        <div className="h2-homepage">projects</div>

        {projectData.map((project) => (
          <div
            className="two-column-layout-project"
          >
            {/* Left Panel: The Interactive Card */}
            <div className="left-panel">
              <div className="projct-card-container-small">
                <ProjectCard
                  key={project.slug}
                  {...project}
                  size="small"
                />{" "}
              </div>
            </div>

            {/* Right Panel: The Description Text */}
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
