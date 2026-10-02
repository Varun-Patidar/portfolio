import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-container">

        <div className="section-heading">
          <p>My Work</p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p className="section-description">
            Some of the projects I have built while learning
            and working with modern web technologies.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;