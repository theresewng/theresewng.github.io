import { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProjectCard from "../components/projectcard.js";
import Button from "../components/button.js";
import { projectData } from "../data/projectData.js";

// Keep color definitions outside the component function
// Add colors for all the tags appearing in your project data
const CATEGORY_COLORS = {
  "CO-OP": { bg: "#F5F5F5", border: "#000000", text: "#000000" }, // Neutral grey
  "Graphic Design": { bg: "#E3F2FD", border: "#2196F3", text: "#0D47A1" }, // Blue
  "Motion Design": { bg: "#F3E5F5", border: "#9C27B0", text: "#4A148C" }, // Purple
  "Brand Design": { bg: "#FFF3E0", border: "#FF9800", text: "#E65100" }, // Orange
  "Web Design": { bg: "#E0F7FA", border: "#00BCD4", text: "#006064" }, // Cyan
  "UX Research": { bg: "#E8F5E9", border: "#4CAF50", text: "#1B5E20" }, // Green
  "Service Design": { bg: "#FCE4EC", border: "#E91E63", text: "#880E4F" }, // Pink
  "Mobile Design": { bg: "#EFEBE9", border: "#795548", text: "#3E2723" }, // Brown
  "Data Visualization": { bg: "#E0F2F1", border: "#009688", text: "#004D40" }, // Teal
  "UI/UX Design": { bg: "#FFFDE7", border: "#FBC02D", text: "#F57F17" }, // Yellow
};

// This falls back to a clean outline if a category isn't defined above
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
                    className={`pc-tag ${isActive ? "active" : ""}`}
                    style={{
                      // ALWAYS use the unique category colors
                      backgroundColor: colors.bg,
                      borderColor: colors.border,
                      color: colors.text,

                      // VISUAL INDICATOR: If it's NOT active, make it look faded/unselected
                      // If it IS active, make it fully solid and pop out
                      opacity: isActive ? 1 : 0.4,
                      transform: isActive ? "scale(1)" : "scale(0.95)",
                      transition: "all 0.2s ease",
                    }}
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
