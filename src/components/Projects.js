// import { useNavigate } from "react-router-dom";
import ProjectCard from "./projectcard.js";
// import Button from "./button.js";
import { projectData } from "../data/projectData.js";

function Projects() {
//   const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="content-wrapper">
        <div className="h2-homepage">projects</div>

        <div className="projct-card-container">
          {projectData.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
