import AppnovationCaseStudy from "../pages/case-studies/Appnovation";
import AccessibleNavCaseStudy from "../pages/case-studies/AccessibleNavigation";
import Modus from "../pages/case-studies/Modus";
import Glyphly from "../pages/case-studies/Glyphly";
import CNY from "../pages/case-studies/CNY";
import DataViz from "../pages/case-studies/DataViz";

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
    path: "/projects/accessible-navigation",
    component: AccessibleNavCaseStudy,
    title: "Reimagining Accessible Navigation",
    year: "Ongoing",
    category: ["UX Research", "Service Design", "Mobile Design"],
    role: ["UX Designer"],
    description:
      "          Reimagined how navigation would look like if accessibility specifically accessibility for users in wheelchairs came first.",
    tools: ["Figma", "Miro"],
  },

  {
    slug: "modus",
    path: "/projects/modus",
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
    path: "/projects/glyphly",
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
    path: "/projects/dataviz",
    component: DataViz,
    title: "An Overview of Vancouver's Restaurant Scene",
    year: "October - December 2025",
    category: ["Data Visualization"],
    role: ["Web Developer"],
    description:
      "An data visualization on how the restaurant industry has changed over time in downtown Vancouver, looking at the changes in culture, economics and consumer habits.",
    tools: ["Figma"],
  },

  {
    slug: "cny",
    path: "/projects/cny",
    component: CNY,
    title: "Chinese New Year Banking Feature",
    year: "February 2023",
    category: ["Mobile Design", "UI/UX Design", "Motion Design"],
    role: ["UI/UX Designer", "Motion Designer"],
    description:
      "A banking extension mockup that incorporates the traditional practice of giving and receiving red packets to family members when physically apart.",
    tools: ["Figma", "After Effects", "Premiere Pro"],
  },
];
