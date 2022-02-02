import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

function Projects() {
  return (
    <section id="projects" class="max-w-4xl mx-auto my-12 ">
      
      <div class="max-w-3xl mb-8 mx-auto">
        <h2>Projects</h2>
        <ul class="">
    <ProjectCard/>
        </ul>
      </div>
    </section>
  );
}
export default Projects;
