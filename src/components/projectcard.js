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

export default function ProjectCardFigma({
  title = "Project Title",
  year = "2024 - 2025",
  category = "Branding + Identity",
  description = "Short description",
  imageSrc = "",
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "40px", // Spacing between image and text
        background: "#ffffff",
        borderRadius: "12px",
        padding: "30px", // Inner padding matching your screenshot
        width: "100%",
        maxWidth: "1000px", // Prevents it from stretching too far on giant screens
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        boxSizing: "border-box",
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {/* Image Placeholder */}
      <div
        style={{
          flex: "1 1 55%", // Takes up slightly more than half the width
          minHeight: "400px", // Ensures it stays proportional
          background: imageSrc ? `url(${imageSrc}) center/cover` : "#d9d9d9",
          borderRadius: "8px",
        }}
      />

      {/* Content Column */}
      <div
        style={{
          flex: "1 1 45%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingTop: "20px", // Pushes the text down slightly to align nicely with the image
        }}
      >
        {/* Title */}
        <h2
          style={{
            margin: "0 0 20px 0",
            fontWeight: 400,
            fontSize: "clamp(20px, 4vw, 30px)", // Scales smoothly based on screen size
            color: "#000",
            lineHeight: 1.1,
          }}
        >
          {title}
        </h2>

        {/* Meta Info (Year / Category) */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            fontSize: "18px",
            color: "#000",
            marginBottom: "20px",
          }}
        >
          <span>{year}</span>
          <span>/</span>
          <span>{category}</span>
        </div>

        {/* Divider Line (Native HTML instead of an external SVG) */}
        <hr
          style={{
            width: "100%",
            border: "none",
            borderTop: "1px solid #000",
            margin: "0 0 20px 0",
          }}
        />

        {/* Description */}
        <p
          style={{
            margin: 0,
            fontSize: "18px",
            color: "#000",
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
