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
    // 1. Changed from a string to an array of individual disciplines
    category: [
      "CO-OP",
      "Graphic Design",
      "Motion Design",
      "Brand Design",
      "Web Design",
    ],
    role: [
      "Graphic Designer",
      "Motion Designer",
      "Brand Designer",
      "Web Designer",
    ],
    description: "Digital branding and skincare product analysis.",
    tools: ["Adobe Creative Suite", "Figma", "Webflow"],
  },

  {
    slug: "accessible-navigation",
    path: "/work/accessible-navigation",
    imageSrc: "/images/accessible.png",
    component: AccessibleNavCaseStudy,
    title: "Reimagining Accessible Navigation",
    year: "Ongoing",
    category: ["UX Research", "Service Design", "Mobile Design"],
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
    category: ["UX Research", "Service Design"],
    role: ["UX Designer"],
    description:
      "Helping customers choose a coffee profile that matches their preferences through cards.",
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
      "Inspired by websites such as FontsinUse and TypeWolf, me and my partner created the app Glyphly to look at font pairings and see how fonts are being used around the world.",
    tools: ["Figma"],
  },

  {
    slug: "dataviz",
    path: "/work/dataviz",
    imageSrc: "/images/appnobanner2.png",
    component: DataViz,
    title: "An Overview of Vancouver's Restaurant Scene",
    year: "October - December 2025",
    category: ["Data Visualization"],
    role: ["Web Developer"],
    description:
      "A data visualization on how the restaurant industry has changed over time in downtown Vancouver, looking at the changes in culture, economics and consumer habits.",
    tools: ["Figma"],
  },

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
      "I designed an imaginary banking extension that incorporates the traditional practice of giving and receiving red packets to family members when physically apart.",
    tools: ["Figma", "After Effects", "Premiere Pro"],
  },
];
