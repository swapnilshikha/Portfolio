import React from "react";
import "./about.css";
import about_image from "../../assets/about-me-img.svg";
import { ImPointRight } from "react-icons/im";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <div className="about-heading">
          <h2>
            Know Who <span>I'M</span>
          </h2>
        </div>
        <div className="about-content">
          <div className="about-me">
            <p>
              Hi Everyone, I am final year CSE student <span>Swapnilshikha Bhakat</span> from{" "}
              <span>Jamshedpur, Jharkhand</span> , studying at{" "}
              <span>Silicon University, Bhubaneshwar</span>. I thrive on transforming ideas into clean, functional, and engaging web applications.
            </p>
          </div>
          <p className="others">Alongside coding, some other activities that I love to do!</p>
          <div className="hobbies">
            <ul>
              <li className="about-activity">
                <ImPointRight /> Painting and Sketching
              </li>
              <li className="about-activity">
                <ImPointRight /> Content Writing
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling and Exploring New Places
              </li>
            </ul>
          </div>
          <div className="quote">"I want to put a ding in the universe!" </div>
        </div>
      </div>
      <div className="about-right">
        <img src={about_image} alt="about-image" />
      </div>
    </div>
  );
};

export default About;
