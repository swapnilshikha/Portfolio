import React from "react";
import "./skillitem.css";
const Skillitem = ({ name, image }) => {
  return (
    <div className="skill-item">
      <img src={image} alt="image" />
      <span>{name}</span>
    </div>
  );
};

export default Skillitem;
