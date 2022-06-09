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
            <h3 className="text-2xl text-natural font-bold mb-4">About Me</h3>
            <p className="text-sm text-natural leading-6 mb-3">
              I'm Abu Shama. A passionate web developer. <br /> Frontend Web
              Developer at Softlab Ltd. || Web Developer at ITFLE Ltd. || MERN
              Developer || Shopify, WiX and Squarespace Expert || E-commerce Web
              Developer || BBA Major at Finance and Banking, BRUR.
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
