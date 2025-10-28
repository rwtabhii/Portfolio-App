import React from "react";
import AboutSVG from "../../assets/images/about.svg";
import "./about.css";

const About = () => {
  return (
    <section
      className="app__about"
      id="about"
      data-aos="fade-right"
      data-aos-offset="230"
      data-aos-delay="450"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__about-container">
        <div className="app__about-container_text">
          <h2>About</h2>
          <p>
            Hello! My name is Abhishek Rawat, and I am a Full-Stack Developer with a passion for building fast, scalable, 
            and visually engaging web applications.
            I work across both frontend and backend, transforming ideas into 
            products that are not only beautiful but also highly functional.

            On the frontend, I specialize in React along with Redux Toolkit, Bootstrap, 
            and Vite to create responsive user interfaces and smooth user experiences.
            On the backend, I work with Node.js, Express, and MongoDB to build robust APIs 
            and manage data efficiently.
            I am also comfortable with RESTful APIs, authentication & authorization (JWT),
             Git/GitHub, Docker, and deploying apps to cloud platforms like AWS ,Vercel,Render.
          </p>

          <p>
            I spend my time learning and exploring technology, with a particular focus on Full-Stack Development.
            I consistently deepen my understanding of both frontend and backend concepts, tools,
            and frameworks while building real-world projects to apply what I learn.
          </p>

          <p>
            I'm currently looking for a Full Stack Development Role{" "}
            <a
              href="https://nexplay.gg/"
              target="_blank"
              className="app__links"
            >
              My_Resume
            </a>
          </p>
        </div>
        <div className="app__about-container_image">
          <img src={AboutSVG} alt="Programming" />
        </div>
      </div>
    </section>
  );
};

export default About;
