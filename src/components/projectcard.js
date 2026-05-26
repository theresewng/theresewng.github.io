// import React from "react";
// import { Link } from "react-router-dom";

// // Added 'slug' to the props list here
// function ProjectCard({ year, title, category, imageSrc, size, slug }) {
//   return (
//     <Link to={`/projects/${slug}`} className="card-link-wrapper">
//       <div className={`project-card ${size === "small" ? "is-small" : ""}`}>
//         {" "}
//         <div className="card-line" />
//         <div className="card-year">{year}</div>
//         <div className="card-title">{title}</div>
//         <div className="card-category">
//           {Array.isArray(category) ? category.join(" | ") : category}
//         </div>{" "}
//         <div className="card-arrow">
//           <svg
//             width="66.609px"
//             height="47.855px"
//             viewBox="0 0 67 48"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M10 24H57M57 24L42 9M57 24L42 39"
//               stroke="black"
//               strokeWidth="4"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//         <div
//           className="card-image-placeholder"
//           style={{
//             backgroundImage: `url(${imageSrc})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       </div>
//     </Link>
//   );
// }

// export default ProjectCard;

import React from "react";

// Keeping configuration maps outside the component is a best practice 
// so they aren't completely recreated on every single re-render.
const CATEGORY_COLORS = {
  "Graphic Design": { bg: "#E3F2FD", border: "#2196F3", text: "#0D47A1" },
  "Motion Design": { bg: "#F3E5F5", border: "#9C27B0", text: "#4A148C" },
  "UX Research": { bg: "#E8F5E9", border: "#4CAF50", text: "#1B5E20" },
  "Branding + Identity": { bg: "#FFF3E0", border: "#FF9800", text: "#E65100" }
};
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
            {category && category.length > 0 ? (
              category.map((catName, index) => {
                // Find the color match or fall back to black/transparent
                const colors = CATEGORY_COLORS[catName] || DEFAULT_COLOR;
                
                return (
                  <span 
                    key={index} 
                    className="pc-tag"
                    style={{
                      backgroundColor: colors.bg,
                      borderColor: colors.border,
                      color: colors.text
                    }}
                  >
                    {catName}
                  </span>
                );
              })
            ) : null}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;