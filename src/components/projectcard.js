import React from "react";
import { Link } from "react-router-dom";

// Added 'slug' to the props list here
function ProjectCard({ year, title, category, imageSrc, slug }) {
  return (
    <Link to={`/project/${slug}`} className="card-link-wrapper">
      <div className="project-card">
        <div className="card-line" />

        <div className="card-year">{year}</div>
        <div className="card-title">{title}</div>
        <div className="card-category">{category}</div>

        <div className="card-arrow">
          <svg
            width="66.609px"
            height="47.855px"
            viewBox="0 0 67 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 24H57M57 24L42 9M57 24L42 39"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          className="card-image-placeholder"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </Link>
  );
}

export default ProjectCard;