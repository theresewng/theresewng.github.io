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

export default function ProjectCard({
  title,
  year,
  description,
  category = [], // Defaults to an empty array to prevent crashes while DB loads
  imageSrc,
}) {
  return (
    console.log("Categories data for", title, "is:", category),
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
          
          {/* Bottom Tags: Safely pulls from your database array */}
          <div className="pc-tags">
            {category && category.length > 0 ? (
              category.map((category, index) => (
                <span key={index} className="pc-tag">
                  {category}
                </span>
              ))
            ) : null}
          </div>
          
        </div>

      </div>
    </div>
  );
}