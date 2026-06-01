import AppnovationCaseStudy from "../pages/case-studies/Appnovation";
import AccessibleNavCaseStudy from "../pages/case-studies/AccessibleNavigation";
import Modus from "../pages/case-studies/Modus";
import Glyphly from "../pages/case-studies/Glyphly";
import CNY from "../pages/case-studies/CNY";
import DataViz from "../pages/case-studies/DataViz";

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
    role: ["Inclusive Product Designer"],
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


  // {
  //   slug: "cny",
  //   path: "/work/cny",
  //   imageSrc: "/images/cnyimg.png",
  //   component: CNY,
  //   title: "Chinese New Year Banking Feature",
  //   year: "February 2023",
  //   category: ["Mobile Design", "Interaction Design"],
  //   role: ["Product Designer"],
  //   description:
  //     "A conceptual banking extension that incorporates the traditional practice of giving and receiving red packets to family members when physically apart.",
  //   tools: ["Figma", "After Effects"],
  // },


  // {
  //   slug: "dataviz",
  //   path: "/work/dataviz",
  //   imageSrc: "/images/appnobanner2.png",
  //   component: DataViz,
  //   title: "An Overview of Vancouver's Restaurant Scene",
  //   year: "October - December 2025",
  //   category: ["Data Visualization", "Web Development"],
  //   role: ["Frontend Developer"],
  //   description:
  //     "A data visualization on how the restaurant industry has changed over time in downtown Vancouver, looking at the changes in culture, economics and consumer habits.",
  //   tools: ["Figma", "D3.js"],
  // },


];
