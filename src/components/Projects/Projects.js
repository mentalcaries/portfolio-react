import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

function Projects() {
  return (
    <section id="projects" class="max-w-4xl mx-auto my-12 ">
      
      <div class="max-w-3xl mb-8 mx-auto">
        <h2>Projects</h2>
        {/* .elements {
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
  gap: 20px 17px;
  padding-bottom: 67px;
  min-height: 55vh;
}

@media screen and (max-width: 420px) {
  .elements {
    padding-bottom: 50px;
    gap: 20px;
  }
} */}
        <div class="max-w-full mx-auto grid grid-cols-2 gap-10">
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
        </div>
      </div>
    </section>
  );
}
export default Projects;
