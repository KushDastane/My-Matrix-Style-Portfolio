// src/components/MainWebsite.jsx
import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";

import TransitionSection from "./TransitionSection";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const MainWebsite = () => {
  return (
    <div className="bg-white text-gray-900 scroll-smooth">
      {/* About Me */}
      <AboutMe />

      {/* Skills */}
      <Skills />
      <TransitionSection />
      {/* Projects */}
      <Projects />
      <TransitionSection
        nextLabel="Experience"
        command='"Initializing timeline..."'
        status="Awaiting user scroll"
      />
      {/* Experience */}
      <Experience />
      <TransitionSection
        nextLabel="Client Reviews"
        command='"Initializing cards..."'
        status="Ratings Initialized..."
      />
      <Testimonials />
      <Contact/>
    </div>
  );
};

export default MainWebsite;
