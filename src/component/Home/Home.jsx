import React from "react";
import "./home.css";
import profile_image from "../../assets/profile_image.png";
import Type from "./Type.jsx";
const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <div className="heading">
          <h1>
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
            <span className="name">&nbsp;&nbsp;I'm Swapnilshikha,</span>
            <br />
            <div className="type" style={{ padding: 50, textAlign: "left" }}>
              <Type />
            </div>
          </h1>
        </div>
        <div className="home-action">
          <a href="#contactme">
            <div className="home-connect">Connect With Me</div>
          </a>
          <a
            href="https://drive.google.com/file/d/1AQQjAzWf_-FUJ165-ub5BxdowUcRsrOA/view?usp=sharing"
            target="_blank"
          >
            <div className="home-resume">My resume</div>
          </a>
        </div>
      </div>
      <div className="home-right">
        <img src={profile_image} alt="profile-img" />
      </div>
    </div>
  );
};

export default Home;
