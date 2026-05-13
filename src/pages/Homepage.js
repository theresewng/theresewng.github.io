import { useNavigate, Link } from "react-router-dom"; // Added Link
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

        {/* Full-Sized Project Cards Grid */}
        <div className="projct-card-container">
          {projectData.map((project) => (
            <Link 
              key={project.slug} 
              to={project.path} /* Smoothly guides visitors to your custom route layouts */
              className="card-link-wrapper"
            >
              {/* No size prop here; renders your original full-size design style */}
              <ProjectCard {...project} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;