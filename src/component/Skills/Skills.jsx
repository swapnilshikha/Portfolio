import React, { useEffect } from "react";
import "./skill.css";
import skillsdata from "./skilldata.js";
import SkillCategory from "./SkillCategory.jsx";
const Skills = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((mouseX - centerX) / centerX) * 15;
      const rotateX = ((centerY - mouseY) / centerY) * 15;

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = (event) => {
      const element = event.currentTarget;
      element.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    };

    const tiltElements = document.querySelectorAll(".tilt");
    tiltElements.forEach((element) => {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      tiltElements.forEach((element) => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="skills-section" id="skills">
      <div className="skills-heading">
        <h1>
          Professional <span>Skillset</span>
        </h1>
      </div>
      <div className="skill-container">
        {skillsdata.map((item, index) => {
          return (
            <div key={index} className="tilt">
              <SkillCategory title={item.title} skills={item.skills} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
