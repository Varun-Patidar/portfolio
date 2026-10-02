import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
      ],
    },
    {
      title: "Database",
      skills: [
        "MongoDB",
        "Mongoose",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "Socket.IO",
        "WebRTC",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-container">

        <div className="section-heading">
          <p>My Skills</p>
          <h2>
            Technologies I <span>Work With</span>
          </h2>
        </div>

        <div className="skills-grid">

          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>

              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;