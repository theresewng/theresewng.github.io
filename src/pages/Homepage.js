import { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProjectCard from "../components/projectcard.js";
import Button from "../components/button.js";
import { projectData } from "../data/projectData.js";

// Keep color definitions outside the component function
const CATEGORY_COLORS = {
  "Graphic Design": { bg: "#E3F2FD", border: "#2196F3", text: "#0D47A1" },
  "Motion Design": { bg: "#F3E5F5", border: "#9C27B0", text: "#4A148C" },
  "UX Research": { bg: "#E8F5E9", border: "#4CAF50", text: "#1B5E20" },
  "Branding + Identity": { bg: "#FFF3E0", border: "#FF9800", text: "#E65100" }
};
const DEFAULT_COLOR = { bg: "transparent", border: "#000000", text: "#000000" };

function Homepage() {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Dynamically extract unique categories from your database
  const categories = useMemo(() => {
    const allCategories = projectData.flatMap(
      (project) => project.category || [],
    );
    return [...new Set(allCategories)];
  }, []);

  const toggleFilter = (category) => {
    setSelectedFilters((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
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
              (cat) => cat.toLowerCase() === filter.toLowerCase(),
            ),
          );
        });

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
              {categories.map((category) => {
                const isActive = selectedFilters.includes(category);
                const colors = CATEGORY_COLORS[category] || DEFAULT_COLOR;

                return (
                  <button
                    key={category}
                    className={`filter-bar-btn ${isActive ? "active" : ""}`}
                    style={
                      isActive
                        ? {
                            backgroundColor: colors.bg,
                            borderColor: colors.border,
                            color: colors.text,
                          }
                        : {}
                    }
                    onClick={() => toggleFilter(category)}
                  >
                    {category}
                  </button>
                );
              })}
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
                <ProjectCard {...project} />
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