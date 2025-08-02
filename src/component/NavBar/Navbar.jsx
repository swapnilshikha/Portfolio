import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar" id="home">
      <div className="logo">
        <span>_Swapnilshikha_</span>
      </div>
      <div className="content">
        <a href="#home">
          <div className="item">
            <i className="bx bx-home-alt"></i>
            <p>Home</p>
          </div>
        </a>
        <a href="#about">
          <div className="item">
            <i className="bx bxs-user"></i>
            <p>About Me</p>
          </div>
        </a>
        <a href="#project">
          <div className="item">
            <i className="bx bx-slideshow"></i>
            <p>Project</p>
          </div>
        </a>
        <a href="#skills">
          <div className="item">
            <i className="bx bxs-briefcase"></i>
            <p>Skills</p>
          </div>
        </a>
      </div>
      <div className="menu" onClick={handleMenuToggle}>
        <i className="bx bx-menu-alt-right bx-md"></i>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-navbar">
            <i className="bx bx-x bx-md" onClick={handleMenuToggle}></i>
          </div>
          <div className="mobile-menu-content">
            <a href="#home">
              <div className="item">
                <i className="bx bx-home-alt"></i>
                <p>Home</p>
              </div>
            </a>
            <a href="#about">
              <div className="item">
                <i className="bx bxs-user"></i>
                <p>About Me</p>
              </div>
            </a>
            <a href="#project">
              <div className="item">
                <i className="bx bx-slideshow"></i>
                <p>Project</p>
              </div>
            </a>
            <a href="#skills">
              <div className="item">
                <i className="bx bxs-briefcase"></i>
                <p>Skills</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
