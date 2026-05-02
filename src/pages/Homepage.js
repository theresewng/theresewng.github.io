import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/projectcard.js";
import Button from "../components/button.js";
import { projectData } from "../data/projectData.js";

function Homepage() {
  const navigate = useNavigate();
  console.log("Current Projects:", projectData);
  return (
    <div className="homepage-container">
      <div className="content-wrapper">
        <div className="h2-homepage">
          Therese Wong is a multidisciplinary designer specialising in UX
          Research, Consulting, and Accessible Design
          <Button text="About Me" onClick={() => navigate("/about")} />
        </div>

        <div className="projct-card-container">
          {projectData.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
