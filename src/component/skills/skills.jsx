import React from "react";
import MultiDevice from "../../assets/images/multi-device.svg";
import skills from "./imports";
import "./Skills.css";
import SkillsCard from "./skillsCard";

const Skills = () => {
  return (
    <section
      className="app__skills"
      id="skills"
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="400"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__skills-title">
        <h2 className="app__skills-title_title">Skills</h2>

       <p className="app__skills-title_content">
  At present, I'm enhancing my development skills by focusing on best coding practices and learning{" "}
  <a href="https://www.docker.com/" target="_blank" className="app__links">
    Docker
  </a>{" "}
  to improve my understanding of containerization and deployment workflows.{" "}
  <p>
    As a passionate MERN Stack Developer, I aim to strengthen my backend and DevOps skills to become a highly efficient Full Stack Developer.
  </p>
</p>

        <p className="app__skills-title_content">
          These are the Tech Stack Tools I use as a developer in designing,
          creating and establishing development projects.
        </p>
      </div>

      <div className="app__skills-container">
        <div
          className="app__skills-container_skills"
          data-aos="zoom-out"
          data-aos-offset="300"
          data-aos-delay="700"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          {skills.map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
          ))}
        </div>
      </div>
      <div className="app__skills-container_image multidevice">
        <img src={MultiDevice} alt="MultiDevice" />
      </div>
    </section>
  );
};

export default Skills;
