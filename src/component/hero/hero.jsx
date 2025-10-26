import "aos/dist/aos.css";
import React from "react";
import { ReactTyped } from "react-typed";
import HeroSvg from "../../assets/images/hero.svg";
import "./hero.css";

const Hero = () => {
  return (
    <main
      className="app__hero"
      id="home"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__hero-container">
         <div className="app__hero-container_text">
      {/* First line */}
      <p className="app__hero-title">
        <ReactTyped
          strings={["Hi, my name is"]}
          typeSpeed={50}
          showCursor={false}
        />
      </p>

      {/* Name */}
      <h1 className="app__hero-container_text-name">
        <ReactTyped
          strings={["Abhishek Rawat"]}
          typeSpeed={50}
          startDelay={2000}   // delay before typing
          showCursor={false}
        />
      </h1>

      {/* Subtitle */}
      <h2 className="app__hero-container_text-title">
        <ReactTyped
          strings={["I enjoy creating stuffs."]}
          typeSpeed={50}
          startDelay={3000}
          showCursor={false}
        />
      </h2>

      {/* Rotating text */}
      <h3 className="app__hero-container_text-subtitle">
        <ReactTyped
          strings={[
            "I am a Full Stack Developer",
            "I enjoy building web applications.",
            "Let's learn from each other.",
          ]}
          typeSpeed={50}
          backSpeed={30}
          backDelay={500}     // pause before deleting
          startDelay={4500}
          loop                // infinite loop
        />
      </h3>
    </div>
        <div className="app__hero-container_image">
          <img src={HeroSvg} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
