import { useParams } from "react-router-dom";
import { projectData } from "../data/projectData";
import Banner from "../components/banner";

function ProjectDetail(imageSrc) {
  const { slug } = useParams();
  const project = projectData.find((p) => p.slug === slug);

  if (!project) return <div>Project not found!</div>;

  return (
    <div className="project-detail-page">
      {/* 1. Full Bleed Banner - Outside the layout grid */}
      <div className="project-full-bleed-banner">
        <Banner image={project.imageSrc} />
        <h2 className="project-detail-title">{project.title}</h2>
        {/* If Banner component doesn't handle the image directly, use a placeholder/img here */}
      </div>

      {/* 2. Content Wrapper - For centered/padded content */}
      <div className="homepage-container">
        <div className="project-detail-layout">
          {/* Left Panel */}
          <div className="panel-left">
            <h3>Duration:</h3>
            <p>{project.year}</p>
            <h3>Tools:</h3>
            <p>{project.tools}</p>
            <h3>Design Focuses:</h3>
            <p>{project.category}</p>

            {/* ... rest of your labels  body ... */}
            <div className="project-detail-divider"></div>
          </div>

          {/* Right Panel */}
          <div className="panel-right">
            <h3>{project.description}</h3>

            <div className="image-placeholder">
              <div
                className="card-image-placeholder"
                style={{
                  backgroundImage: `url(${imageSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
