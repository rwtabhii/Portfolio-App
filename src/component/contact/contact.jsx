import React from "react";
import Connection from "../../assets/images/connections.svg";
import github from "../../assets/images/socials/github.svg";
import linkedin from "../../assets/images/socials/linkedin.svg"
import "./contact.css";

const Contact = () => {
  return (
    <section
      className="app__contact"
      id="contacts"
      data-aos="fade"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__contact-container">
        <div className="app__contact-container_contacts">
          <p className="app__contact-container_contacts-touch">
            - Get in Touch
          </p>
          <h2>Let's create progress together</h2>
          <p>
            For all inquiries, you can contact and message me on any of the
            specified social medias below.
          </p>
          <ul className="app__contact-container_contacts-links">
            <a href="https://github.com/rwtabhii" target="blank">
              <img src={github} alt="" />
              rwtabhii
            </a>
            <a
              href="http://www.linkedin.com/in/abhishekrawatdev"
              target="blank"
            >
              <img src={linkedin} alt="" />
              Abhishek Rawat
            </a>
          </ul>
        </div>
        <div className="app__contact-container_image">
          <img src={Connection} alt="Cennections" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
