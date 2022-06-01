import React from "react";
import Education from "./Education/Education";
import Exprience from "./Exprience/Exprience";
import Skills from "./Skills/Skills";
// import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-natural font-bold mb-4">Who am I?</h3>
            <p className="text-sm text-natural leading-6 mb-3">
              It's Shama from Squeak It. Currently, I running a small team
              providing complete e-commerce service, data processing, and any
              type of website development.
            </p>
            <p className="text-sm text-natural leading-6 mb-3">
              Since 2017, we are providing complete e-commerce services
              including market research, suppliers connection, website
              development, marketing, and management. We have successfully
              completed 120+ projects from 2017 around the globe.
            </p>
          </div>
          <Exprience />
          <Skills />
          <Education />
        </div>
      </div>
    </section>
  );
};

export default About;
