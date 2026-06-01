import React from "react";

function ProjectHero({ title, description, bannerImage }) {
  return (
    <div className="project-detail-banner-container">
      <div className={`project-detail-banner ${!bannerImage ? "is-placeholder" : ""}`}>
        {bannerImage && (
          <img
            src={bannerImage}
            alt={`${title} Banner`}
            // Removed inline width/height/objectFit so CSS takes over
          />
        )}
        <div className="project-hero-text-wrapper">
        </div>
      </div>
    </div>
  );
}

export default ProjectHero;