import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">

      <div className="project-card-content">

        <div className="project-number">
          0{project.id}
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology, index) => (
            <span key={index}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">

          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}

          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo ↗
            </a>
          )}

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;