import React from "react";

const imgLine1 = "http://localhost:3845/assets/58eac12cbd2eba48a8cc44e6aaaba84090a0eb79.svg";

function ProjectCardFigma({
  title = "Project Title",
  year = "2024 - 2025",
  category = "Branding + Identity",
  description = "Short description",
  imageSrc = "",
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12.934,
        position: "relative",
        width: 1241.651,
        height: 698.428,
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          position: "absolute",
          left: 49,
          top: "50%",
          transform: "translateY(-50%)",
          width: 674,
          height: 591,
          background: imageSrc ? `url(${imageSrc}) center/cover` : "#d9d9d9",
          borderRadius: 12,
        }}
      />
      {/* Title */}
      <div
        style={{
          position: "absolute",
          left: 752,
          top: 54,
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: 62.083,
          color: "#000",
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </div>
      {/* Year */}
      <div
        style={{
          position: "absolute",
          left: 752,
          top: 151,
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: 20.694,
          color: "#000",
          whiteSpace: "nowrap",
        }}
      >
        {year}
      </div>
      {/* Category */}
      <div
        style={{
          position: "absolute",
          left: 905,
          top: 151,
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: 20.694,
          color: "#000",
          whiteSpace: "nowrap",
        }}
      >
        {category}
      </div>
      {/* Slash */}
      <div
        style={{
          position: "absolute",
          left: 886,
          top: 151,
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: 20.694,
          color: "#000",
          whiteSpace: "nowrap",
        }}
      >
        /
      </div>
      {/* Description */}
      <div
        style={{
          position: "absolute",
          left: 752,
          top: 228,
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: 20.694,
          color: "#000",
          whiteSpace: "nowrap",
        }}
      >
        {description}
      </div>
      {/* Divider line SVG */}
      <div
        style={{
          position: "absolute",
          left: 815.17,
          top: 202,
          width: 456,
          height: 0,
          transform: "translateX(-50%)",
        }}
      >
        <img
          src={imgLine1}
          alt="divider"
          style={{ width: "100%", height: 2, display: "block" }}
        />
      </div>
    </div>
  );
}

export default ProjectCardFigma;
