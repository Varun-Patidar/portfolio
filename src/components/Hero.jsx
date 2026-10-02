import React from "react";
import resume from "../assets/Resume4.pdf";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-intro">Hello, I'm</p>

          <h1>
            <span>Varun </span> Patidar
          </h1>

          <h2>Full Stack Developer | MERN Stack</h2>

          <p className="hero-description">
            I build responsive and scalable web applications using modern
            technologies. I enjoy solving real-world problems and turning ideas
            into functional applications.
          </p>

          <p className="availability">● Open to internship opportunities</p>

          <div className="hero-buttons">
            <a
              href="https://github.com/Varun-Patidar"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/varun-patidar-88bb63328/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bf6EcqhJgS8y17yRYe%2BbQSg%3D%3D"
              className="btn secondary-btn"
            >
              LinkedIn
            </a>

            <a href={resume} target="_blank" rel="noreferrer" className="btn">
              View Resume
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-circle">
            <span>VP</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
