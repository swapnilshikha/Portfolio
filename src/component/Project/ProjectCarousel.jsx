import React from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projectcarousel.css";

const ProjectCarousel = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="project-carousel">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="carousel-slide">
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              github={project.github}
              demo={project.demo}
              techicons={project.icons}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;
