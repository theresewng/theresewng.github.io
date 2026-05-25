import { useState } from "react"; 
import { useNavigate, Link } from "react-router-dom";
import ProjectCard from "../components/projectcard.js";
import Button from "../components/button.js";
import { projectData } from "../data/projectData.js";

function Homepage() {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (category) => {
    setSelectedFilters((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProjects =
    selectedFilters.length === 0
      ? projectData
      : projectData.filter((project) => {
          if (!project.category || !Array.isArray(project.category))
            return false;

          return selectedFilters.some((filter) =>
            project.category.some(
              (cat) => cat.toLowerCase() === filter.toLowerCase()
            )
          );
        });

  const categories = ["Graphic Design", "Motion Design", "UX Research"];

  return (
    <div className="homepage-container">
      <div className="content-wrapper">
        
        {/* Headline section */}
        <div className="h2-homepage">
          Therese Wong is a multidisciplinary designer specialising in UX
          Research, Consulting, and Accessible Design
          <Button text="About Me" onClick={() => navigate("/about")} />
        </div>

        {/* The Master Split Layout Container */}
        <div className="two-column-layout-homepage">
          
          {/* Left Column: Fixed / Sticky Filters */}
          <aside className="left-panel-filters">
            <p className="filter-bar-label">Filter by:</p>
            <div className="filter-bar-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-bar-btn ${
                    selectedFilters.includes(category) ? "active" : ""
                  }`}
                  onClick={() => toggleFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          {/* Right Column: Scrolling Project Stack */}
          <main className="right-panel-projects">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                to={project.path}
                className="card-link-wrapper"
              >
                <ProjectCard {...project} size="small" />
              </Link>
            ))}

            {filteredProjects.length === 0 && (
              <p className="no-results-msg">
                No projects match the selected filters.
              </p>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}

export default Homepage;