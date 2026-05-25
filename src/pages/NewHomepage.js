import React from "react";
import { projectData } from "../data/projectData";
import ProjectCard from "../components/projectcard";
import { Link } from "react-router-dom";

// This is a direct translation of the Figma layout to your React + CSS system.
// All gray boxes are placeholders for projects/links, etc.
// You can later replace the <div className="gray-box"> with links or project cards.

import "../index.css";

const grayBoxStyle = (custom) => ({
  background: "#d9d9d9",
  borderRadius: 12,
  ...custom,
});

export default function NewHomepage() {
  // Only use the first 6 projects for the 6 gray boxes
  const projects = projectData.slice(0, 6);
  // Coordinates for each box (in order)
  const boxPositions = [
    { left: "calc(16.67% + 60px)", top: "calc(11.11% + 26.22px)" }, // 1
    {
      left: "50%",
      top: "calc(22.22% + 32.44px)",
      transform: "translateX(-50%)",
    }, // 2
    { left: "33.33%", top: "calc(44.44% + 84.89px)" }, // 3
    { left: "8.33%", top: "calc(66.67% + 37.33px)" }, // 4
    { left: "calc(58.33% + 60px)", top: "calc(66.67% + 77.33px)" }, // 5
    { left: "calc(75% + 80px)", top: "calc(11.11% + 26.22px)" }, // 6
  ];
  // About and Contact box positions and z-index for overlap
  const aboutBox = {
    left: "calc(87.5% - 40px)",
    top: "calc(61.11% + 22.22px)",
    width: 220,
    height: 180,
    zIndex: 3,
  };
  const contactBox = {
    left: "calc(12.5% - 22px)",
    top: "calc(38.89% + 19.78px)",
    width: 220,
    height: 180,
    zIndex: 2,
  };
  // Overlap order for project boxes (foreground/background)
  const boxZ = [1, 4, 2, 3, 5, 2];
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Main Name */}
      <h1
        style={{
          position: "absolute",
          left: "calc(50% - 530px)",
          top: "calc(50% - 150px)",
          fontFamily: "PP Editorial Old, serif",
          fontSize: 200,
          color: "#000",
          margin: 0,
          letterSpacing: -10,
          whiteSpace: "nowrap",
          fontWeight: 400,
          lineHeight: 1,
        }}
      >
        Therese Wong
      </h1>

      {/* Project placeholders as cohesive rectangles with overlap */}
      {projects.map((project, i) => (
        <div
          key={project.slug}
          style={{
            position: "absolute",
            width: 220,
            height: 180,
            ...boxPositions[i],
            background: "#d9d9d9",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
            cursor: "pointer",
            transition: "box-shadow 0.2s",
            zIndex: boxZ[i],
          }}
        >
          <Link
            to={project.path}
            style={{
              textDecoration: "none",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "PP Neue Montreal Mono, monospace",
                fontSize: 20,
                color: "#000",
                textAlign: "center",
                fontWeight: 600,
                padding: 10,
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {project.title}
            </span>
          </Link>
        </div>
      ))}
      {/* About Box (foreground) */}
      <div
        style={{
          position: "absolute",
          ...aboutBox,
          background: "#d9d9d9",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          zIndex: aboutBox.zIndex,
        }}
      >
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "PP Neue Montreal Mono, monospace",
              fontSize: 20,
              color: "#000",
              textAlign: "center",
              fontWeight: 600,
              padding: 10,
              width: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            About
          </span>
        </Link>
      </div>
      {/* Contact Box (background) */}
      <div
        style={{
          position: "absolute",
          ...contactBox,
          background: "#d9d9d9",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          zIndex: contactBox.zIndex,
        }}
      >
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "PP Neue Montreal Mono, monospace",
              fontSize: 20,
              color: "#000",
              textAlign: "center",
              fontWeight: 600,
              padding: 10,
              width: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Contact
          </span>
        </Link>
      </div>

      {/* Subtitle */}
      <span
        style={{
          position: "absolute",
          left: "calc(62.5% - 160px)",
          top: "calc(61.11% - 5.78px)",
          fontFamily: "PP Neue Montreal",
          fontSize: 20,
          color: "#000",
          width: 413,
        }}
      >
        Multidisciplinary designer specialising in UX Research, Consulting, and
        Accessible Design
      </span>
      {/* Top right nav labels */}
      <span
        style={{
          position: "absolute",
          right: "calc(8.33% + 131px)",
          top: "calc(5.56% - 35.89px)",
          fontFamily: "PP Neue Montreal Mono, monospace",
          fontSize: 20,
          color: "#000",
          textTransform: "uppercase",
        }}
      >
        Resume
      </span>
      <span
        style={{
          position: "absolute",
          right: "calc(16.67% + 106px)",
          top: "calc(5.56% - 35.89px)",
          fontFamily: "PP Neue Montreal Mono, monospace",
          fontSize: 20,
          color: "#000",
          textTransform: "uppercase",
        }}
      >
        About
      </span>
      <span
        style={{
          position: "absolute",
          right: "calc(25% + 69px)",
          top: "calc(5.56% - 35.89px)",
          fontFamily: "PP Neue Montreal Mono, monospace",
          fontSize: 20,
          color: "#000",
          textTransform: "uppercase",
        }}
      >
        Work
      </span>
      <span
        style={{
          position: "absolute",
          right: 144,
          top: "calc(5.56% - 35.89px)",
          fontFamily: "PP Neue Montreal Mono, monospace",
          fontSize: 20,
          color: "#000",
          textTransform: "uppercase",
        }}
      >
        Contact
      </span>
      <span
        style={{
          position: "absolute",
          right: "calc(75% + 300px)",
          top: "calc(5.56% - 35.89px)",
          fontFamily: "PP Neue Montreal Mono, monospace",
          fontSize: 20,
          color: "#000",
        }}
      >
        Vancouver, Canada
      </span>
    </div>
  );
}
