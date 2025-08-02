import drnextdoor from "../../assets/drnextdoor.png";
import burberry from "../../assets/burberry.png";
import crop from "../../assets/crop.png";
import CSS3 from "../../assets/CSS3.svg";
import Bootstrap from "../../assets/Bootstrap.svg";
import HTML5 from "../../assets/HTML5.svg";
import MaterialUI from "../../assets/MaterialUI.svg";
import MongoDB from "../../assets/MongoDB.svg";
import Mongoose from "../../assets/Mongoose.js.svg";
import Nodejs from "../../assets/Node.js.svg";
import React from "../../assets/React.svg";
import Express from "../../assets/Express.svg";
import Python from "../../assets/Python.jpg";
import Jupyter from "../../assets/Jupyter.png";
import Flask from "../../assets/Flask.webp";
const projectdata = [
  {
    image: drnextdoor,
    title: "DrNextDoor",
    description:
      "DrNextDoor is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to help patients discover and connect with nearby doctors based on location and specialization.   ",
    github: "https://github.com/swapnilshikha/DrNextDoor",
    // demo: "", // Add demo link when available
    icons: [MongoDB, Express, React, Nodejs, CSS3, Bootstrap],
  },
  {
    image: burberry,
    title: "Burberry Clone",
    description:
      "Developed a responsive login page for a Burberry website clone using React, CSS, and Material UI, with a focus on clean design and user-friendly form validation. ",
    github: "https://github.com/swapnilshikha/Burberry-Login",
    demo: "https://coding-comandoes.github.io/Burberry-Clone/",
    icons: [React, MaterialUI, CSS3],
  },
  {
    image: crop,
    title: "Climate_change_on_agriculture",
    description:
      "This is a mini project based on Machine Learning which predicts the economical impact on agriculture affected by climatic factors such as average temperature, humidity, average rainfall, irrigation access and extreme weather events.",
    github: "https://github.com/swapnilshikha/Climate_change_on_agriculture",
    // demo: " ",
    icons: [ Python, Jupyter, Flask],
  },
];

export default projectdata;
