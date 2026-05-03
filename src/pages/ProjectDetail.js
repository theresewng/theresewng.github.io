import { useParams } from "react-router-dom";
import { projectData } from "../data/projectData";
import Banner from "../components/banner";

function ProjectDetail() {
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
            {/* <h2 className="project-detail-title">{project.title}</h2> */}
            {/* ... rest of your labels and body ... */}
          </div>
          <div className="project-detail-divider"></div>

          {/* Right Panel */}
          <div className="panel-right">
            <div className="project-detail-image">
              <img src={project.imageSrc} alt={project.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
