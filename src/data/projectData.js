import AppnovationCaseStudy from "../pages/case-studies/Appnovation";
import AccessibleNavCaseStudy from "../pages/case-studies/AccessibleNavigation";

export const projectData = [
  {
    slug: "appnovation",
    path: "/projects/appnovation",
    component: AppnovationCaseStudy,
    title: "Appnovation Technologies",
    role: "Creative Director",
    description: "UX/UI design for a global digital consultancy.",
    year: "2024 - 2025",
    category: "UX Research | Service Design | Mobile Design",
    image: "",
    tools: "Adobe Creative Suite, Figma, Webflow",
  },
  {
    slug: "accessible-navigation",
    path: "/projects/accessible-navigation",
    component: AccessibleNavCaseStudy,
    role: "UX Researcher",
    title: "Reimagining Accessible Navigation",
    year: "2025 - 2026",
    category: "UX Research | Service Design | Mobile Design",
    description: "UX research on urban navigation barriers.",
    image: "/images/nav.png",
    tools: "Figma, Miro",
  },
];
