import React from "react";

const CATEGORY_COLORS = {
  "Design Systems": { bg: "#F5F5F5", border: "#000000", text: "#000000" }, // Neutral grey
  "Accessible Design": { bg: "#E3F2FD", border: "#2196F3", text: "#0D47A1" }, // Blue
  "Consulting": { bg: "#F3E5F5", border: "#9C27B0", text: "#4A148C" }, // Purple
  "CX Design": { bg: "#FFF3E0", border: "#FF9800", text: "#E65100" }, // Orange
  "Web Design": { bg: "#E0F7FA", border: "#00BCD4", text: "#006064" }, // Cyan
  "UX Research": { bg: "#E8F5E9", border: "#4CAF50", text: "#1B5E20" }, // Green
  "Service Design": { bg: "#FCE4EC", border: "#E91E63", text: "#880E4F" }, // Pink
  "Mobile Design": { bg: "#EFEBE9", border: "#795548", text: "#3E2723" }, // Brown
  "Motion Design": { bg: "#E0F2F1", border: "#009688", text: "#004D40" }, // Teal
  "Interaction Design": { bg: "#FFFDE7", border: "#FBC02D", text: "#F57F17" }, // Yellow
};

// This falls back to a clean outline if a category isn't defined above
const DEFAULT_COLOR = { bg: "transparent", border: "#000000", text: "#000000" };

function ProjectCard({
  title,
  year,
  description,
  category = [], // Safely falls back to empty array if data is missing
  imageSrc,
}) {
  // Your console log lives safely here now, before the UI renders
  console.log("Categories data for", title, "is:", category);

  return (
    <div className="project-card-wrapper">
      <div className="project-card">
        {/* Left Side: Image */}
        <div
          className="pc-image"
          style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : {}}
        ></div>

        {/* Right Side: Content */}
        <div className="pc-content">
          <p className="pc-meta">{year}</p>
          <h2 className="pc-title">{title}</h2>

          <hr className="pc-divider" />

          <p className="pc-description">{description}</p>

          {/* Bottom Tags */}
          <div className="pc-tags">
            {category && category.length > 0
              ? category.map((catName, index) => {
                  // Find the color match or fall back to black/transparent
                  const colors = CATEGORY_COLORS[catName] || DEFAULT_COLOR;

                  return (
                    <span
                      key={index}
                      className="pc-tag"
                      style={{
                        backgroundColor: colors.bg,
                        borderColor: colors.border,
                        color: colors.text,
                      }}
                    >
                      {catName}
                    </span>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
