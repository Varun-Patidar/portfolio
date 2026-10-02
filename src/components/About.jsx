import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-container">

        <div className="section-heading">
          <p>About Me</p>
          <h2>
            Turning Ideas Into <span>Real-World Solutions</span>
          </h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p>
              I am a passionate Full Stack Developer with a strong
              interest in building modern and responsive web applications.
              I enjoy learning new technologies, solving real-world
              problems, and turning ideas into functional applications.
            </p>

            <p>
              I have worked on projects using React, Node.js, Express.js,
              MongoDB, REST APIs, JWT authentication, Socket.IO and WebRTC.
            </p>
          </div>

          <div className="about-points">

            <div className="about-point">
              <span>💡</span>
              <div>
                <h3>Problem Solver</h3>
                <p>Enjoy solving practical development problems.</p>
              </div>
            </div>

            <div className="about-point">
              <span>📚</span>
              <div>
                <h3>Quick Learner</h3>
                <p>Continuously learning new technologies.</p>
              </div>
            </div>

            <div className="about-point">
              <span>🤝</span>
              <div>
                <h3>Team Player</h3>
                <p>Comfortable working and learning with others.</p>
              </div>
            </div>

            <div className="about-point">
              <span>🚀</span>
              <div>
                <h3>Open to Opportunities</h3>
                <p>Interested in full-stack development opportunities.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;