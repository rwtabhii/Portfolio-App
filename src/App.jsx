import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./App.css";
import About from "./component/about/about";
import Skills from "./component/skills/skills";
import Projects from "./component/project/project";
import Hero from "./component/hero/hero";
import Navbar from "./component/navbar/navbar";
import Earphone from "./component/earphone/earphone";
import Contact from "./component/contact/contact";


const App = () => {
  //aos initialization
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Earphone />
    </>
  );
};

export default App;
