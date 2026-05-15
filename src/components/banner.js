import React from "react";

function ProjectHero({ title, description, bannerImage }) {
  return (
    <div className="project-detail-banner-container">
      <div className={`project-detail-banner ${!bannerImage ? "is-placeholder" : ""}`}>
        {bannerImage && (
          <img
            src={bannerImage}
            alt={`${title} Banner`}
            // style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
        <div className="project-hero-text-wrapper">
          <h1 className="project-detail-title">{title}</h1>
          <p className="project-detail-body">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectHero;