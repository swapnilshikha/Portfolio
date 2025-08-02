import React from "react";
import Particle from "./component/Particle/Particle";
import Navbar from "./component/NavBar/Navbar";
import "./app.css";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Project from "./component/Project/Project";
import ContactMe from "./component/ContactMe/ContactMe";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <>
      <Particle id="particles" />
      <div className="app">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Project />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
};

export default App;
