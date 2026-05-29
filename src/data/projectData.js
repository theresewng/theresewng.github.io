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
      "CO-OP",
      "Graphic Design",
      "Motion Design",
      "Brand Design",
      "Web Design",
      "Marketing Design",
    ],
    role: [
      "Graphic Designer",
      "Motion Designer",
      "Brand Designer",
      "Web Designer",
    ],
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
    category: ["UX Research", "Service Design", "Mobile Design", "UX Design"],
    role: ["UX Designer"],
    description:
      "          Reimagined how navigation would look like if accessibility specifically accessibility for users in wheelchairs came first.",
    tools: ["Figma"],
  },

  {
    slug: "modus",
    path: "/work/modus",
    imageSrc: "/images/modus.png",
    component: Modus,
    title: "Modus Coffee Cards",
    year: "September - December 2024",
    category: ["Consulting", "UX Design", "CX Design", "Graphic Design"],
    role: ["Project Manager", "Graphic Designer", "Copywriter"],
    description:
      "Designed an in-store, tangible menu companion system for Modus Coffee Roasters to bridge the gap between casual drinkers and specialty coffee profiles.",
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
    role: ["Mobile Designer", "Developer"],
    description:
      "Inspired by websites such as FontsinUse and TypeWolf, Glyphly is a mobile app designed to help users discover and explore different fonts and how they are used around the world.",
    tools: ["Figma", "VS Code", "React Native", "Firebase"],
  },

  // {
  //   slug: "dataviz",
  //   path: "/work/dataviz",
  //   imageSrc: "/images/appnobanner2.png",
  //   component: DataViz,
  //   title: "An Overview of Vancouver's Restaurant Scene",
  //   year: "October - December 2025",
  //   category: ["Data Visualization"],
  //   role: ["Web Developer"],
  //   description:
  //     "A data visualization on how the restaurant industry has changed over time in downtown Vancouver, looking at the changes in culture, economics and consumer habits.",
  //   tools: ["Figma"],
  // },

  {
    slug: "cny",
    path: "/work/cny",
    imageSrc: "/images/cnyimg.png",
    component: CNY,
    title: "Chinese New Year Banking Feature",
    year: "February 2023",
    category: ["Mobile Design", "UI/UX Design", "Motion Design"],
    role: ["UI/UX Designer", "Motion Designer"],
    description:
      "A conceptual banking extension that incorporates the traditional practice of giving and receiving red packets to family members when physically apart.",
    tools: ["Figma", "After Effects", "Premiere Pro"],
  },
];
