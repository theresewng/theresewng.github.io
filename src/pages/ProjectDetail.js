import { useParams } from "react-router-dom";
import { projectData } from "../data/projectData";
import Banner from "../components/banner";

function ProjectDetail() {
  const { slug } = useParams();

  const project = projectData.find((p) => p.slug === slug);
  if (!project) return <div>Project not found!</div>;

  return (
    <div className="homepage-container">
      <div className="content-wrapper">
        <div className="project-detail-layout">
          {/* Banner Image */}
          <div className="project-detail-banner">
            <Banner image={project.imageSrc} />
          </div>

          {/* Left Panel - Project Info */}
          <div className="project-detail-left">
            <h2 className="project-detail-title">{project.title}</h2>
            
            <div className="project-detail-section">
              <span className="project-detail-label">ROLE</span>
              <p className="project-detail-value">
                {project.role || "Design Lead"}
              </p>
            </div>

            <div className="project-detail-body">
              <p>{project.description}</p>
            </div>

            <div className="project-detail-section">
              <span className="project-detail-label">TIMELINE</span>
              <p className="project-detail-value">{project.year}</p>
            </div>

            <div className="project-detail-section">
              <span className="project-detail-label">TOOLS USED</span>
              <p className="project-detail-value">Figma, React, CSS</p>
            </div>

            <div className="project-detail-section">
              <span className="project-detail-label">DESIGN FOCUSES</span>
              <p className="project-detail-value">
                UX Research, UI Design, Accessibility
              </p>
            </div>
          </div>

          {/* Right Panel - Project Image */}
          <div className="project-detail-right">
            <div className="project-detail-divider"></div>
            <div className="project-detail-image">
              {project.imageSrc && (
                <img 
                  src={project.imageSrc} 
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;

//             <div className="project-detail-section">
//               <span className="project-detail-label">DESIGN FOCUSES</span>
//               <p className="project-detail-value">
//                 UX Research, UI Design, Accessibility
//               </p>
//             </div>
//           </div>
//           <div className="right-panel">
//             {/* <div className="card-image-placeholder"></div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectDetail;
