import React from "react";
import "./projectcard.css";

const ProjectCard = ({
  image,
  title,
  description,
  github,
  demo,
  techicons,
}) => {
  return (
    <div className="project-card">
      <img src={image} alt="Project" className="project-image" />
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <div className="tech-icons">
            {techicons.map((icon, index) => {
              return <img key={index} src={icon} alt="icon" />;
            })}
          </div>
        </div>

        <p className="project-description">{description}</p>
        <div className="project-links">
          <a
            href={github}
            className="project-link github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
            GitHub
          </a>
          <a
            href={demo}
            className="project-link demo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxs-left-top-arrow-circle bx-rotate-90"></i>
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
