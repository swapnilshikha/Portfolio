import React from "react";
import projectdata from "./projectdata.js";
import "./project.css";
import ProjectCarousel from "./ProjectCarousel.jsx";
const Project = () => {
  return (
    <div className="project-section" id="project">
      <h1 className="project-heading">
        My Recent <strong className="accent">Works</strong>
      </h1>
      <div className="project-container">
        <ProjectCarousel projects={projectdata} />
      </div>
    </div>
  );
};

export default Project;
