import React from "react";
import "./skillcategory.css";
import Skillitem from "./Skillitem";
const SkillCategory = ({ title, skills }) => {
  return (
    <div className="skill-category">
      <div className="skill-category-title">
        <span>{title}</span>
      </div>
      <div className="each-skill">
        {skills.map((skill, index) => {
          return (
            <div key={index}>
              <Skillitem name={skill.name} image={skill.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCategory;
