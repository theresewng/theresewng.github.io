import AppnovationCaseStudy from "../pages/case-studies/Appnovation";
import AccessibleNavCaseStudy from "../pages/case-studies/AccessibleNavigation";

export const projectData = [
  {
    slug: "appnovation",
    path: "/projects/appnovation",
    component: AppnovationCaseStudy,
    title: "Appnovation Technologies",
    year: "2024 - 2025",
    // 1. Changed from a string to an array of individual disciplines
    category: [
      "CO-OP",
      "Graphic Design",
      "Motion Design",
      "Brand Design",
      "Web Design",
    ],
    description: "Digital branding and skincare product analysis.",
    image: "public/images/appnobanner.png",
    tools: ["Adobe Creative Suite", "Figma", "Webflow"],
  },
  {
    slug: "accessible-navigation",
    path: "/projects/accessible-navigation",
    component: AccessibleNavCaseStudy,
    title: "Reimagining Accessible Navigation",
    year: "2025 - 2026",
    category: ["UX Research", "Service Design", "Mobile Design"],
    description: "UX research on urban navigation barriers.",
    image: "/images/nav.png",
    tools: "Figma, Miro",
  },
];
