import AppnovationCaseStudy from "../pages/case-studies/Appnovation";
import AccessibleNavCaseStudy from "../pages/case-studies/AccessibleNavigation";
import Modus from "../pages/case-studies/Modus";
import Glyphly from "../pages/case-studies/Glyphly";

export const projectData = [
  {
    slug: "appnovation",
    path: "/work/appnovation",
    imageSrc: "/images/appnologo.png",
    component: AppnovationCaseStudy,
    title: "Appnovation Technologies",
    year: "2024 - 2025",
    category: [
      "Design Systems",
      "Motion Design",
      "Web Design"
    ],
    role: ["Experience Designer", "Motion Specialist"],
    description:
      "Led end-to-end visual execution, interactive collateral, and motion design assets across global teams to accelerate client acquisition and elevate Appnovation's brand presence.",
    tools: ["Adobe Creative Suite", "Figma", "Webflow"],
  },

  {
    slug: "accessible-navigation",
    path: "/work/accessible-navigation",
    imageSrc: "/images/accessible.png",
    component: AccessibleNavCaseStudy,
    title: "Reimagining Accessible Navigation",
    year: "Ongoing",
    category: ["Accessible Design", "UX Research", "Service Design"],
    role: ["Product Designer"],
    description:
      "Reimagined how navigation would look like if accessibility, specifically for users in wheelchairs, came first.",
    tools: ["Figma"],
  },

    {
    slug: "glyphly",
    path: "/work/glyphly",
    imageSrc: "/images/glyphly.png",
    component: Glyphly,
    title: "Glyphly Mobile App",
    year: "February - April 2025",
    category: ["Mobile Design"],
    role: ["Product Designer & Developer"],
    description:
      "Inspired by websites such as FontsinUse and TypeWolf, Glyphly is a mobile app designed to help users discover and explore different fonts and how they are used around the world.",
    tools: ["Figma", "VS Code", "React Native", "Firebase"],
  },

  {
    slug: "modus",
    path: "/work/modus",
    imageSrc: "/images/modus.png",
    component: Modus,
    title: "Modus Coffee Cards",
    year: "September - December 2024",
    category: ["Consulting", "CX Design", "Service Design"],
    role: ["Experience Consultant"],
    description:
      "An in-store, tangible menu companion system for Modus Coffee Roasters to bridge the gap between casual drinkers and specialty coffee profiles.",
    tools: ["Figma"],
  },

];
