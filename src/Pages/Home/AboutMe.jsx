import React from 'react';
import Lottie from "lottie-react";
import aboutUsAnimation from "../../assets/animations/about_us.json";

export default function AboutUs() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
      <Lottie animationData={aboutUsAnimation} loop autoplay style={{ width: "500px", height: "500px", overflow: "hidden" }} />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="team-section--heading">About Us</h1>
          <p className="hero--section-description">
            TechShuttle is the official tech society of BVCOE, New Delhi, dedicated
            to fostering innovation, collaboration, and technical excellence. We
            organize coding competitions, workshops, and tech talks
            to help students enhance their skills in programming, data science, web
            development, and more. Our mission is to create a dynamic community
            where tech enthusiasts can learn, grow, and push the boundaries of
            technology together. 🚀
          </p>
        </div>
      </div>
    </section>
  );
}