import React, { useState, useEffect } from "react"; // Added useState and useEffect
import ProjectHero from "../components/banner.js"; 

function CaseStudy({ project, navLinks, children }) {
  // 1. Create state to track which section ID is currently visible
  const [activeId, setActiveId] = useState("");

  // 2. Setup the "Observer" to watch sections as they enter the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If a section is visible in the viewport, set it as active
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { 
        // This makes the 'switch' happen when the section is near the top
        rootMargin: "-20% 0% -70% 0%" 
      }
    );

    // Tell the observer to watch every ID you defined in your navLinks
    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    // Cleanup: Stop observing when the user leaves the page
    return () => observer.disconnect();
  }, [navLinks]);

  if (!project) return <div style={{ color: "white" }}>Project data not found.</div>;

  return (
    <div className="project-page-layout">
      <ProjectHero title={project.title} bannerImage={project.image} />

      <div className="project-page-container" style={{ paddingTop: "0px" }}>
        <div className="content-wrapper">
          <div className="two-column-layout-case-study">
            
            <div className="case-study-left">
              <div className="vertical-nav-menu">
                {navLinks.map((link) => (
                  <a 
                    key={link.id} 
                    href={`#${link.id}`} 
                    // 3. Apply 'active' class conditionally based on state
                    className={`vertical-nav-link ${activeId === link.id ? "active" : ""}`}
                    // 4. Smooth scroll and prevent URL hijacking
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="case-study-right">
              {children}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;