import React from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';

function Projects() {
  return (
    <section class="projects">
      <div class="projects__content">
        <h2>Projects</h2>
        <div class="project-gallery">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
export default Projects;
