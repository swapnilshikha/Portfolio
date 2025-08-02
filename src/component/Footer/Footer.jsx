import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-top">
        <div className="top-content">
          <h3 className="heading">FIND ME ON</h3>
          <p>
            Feel free to <span>connect</span> with me
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/swapnilshikha-bhakat-264221270/"
              target="_blank"
            >
              <i className="bx bxl-linkedin-square bx-md"></i>
            </a>
            <a href="https://github.com/swapnilshikha/" target="_blank">
              <i className="bx bxl-github bx-md"></i>
            </a>
            <a href="https://www.instagram.com/_swapnilshikha_/" target="_blank">
              <i className="bx bxl-instagram bx-md"></i>
            </a>
          </div>
        </div>
        <hr />
      </div>
      <div className="footer-bottom">
        <p>Designed and Developed by Swapnilshikha Bhakat</p>
        <p>Copyright&copy;swapnilshikha</p>
      </div>
    </div>
  );
};

export default Footer;
