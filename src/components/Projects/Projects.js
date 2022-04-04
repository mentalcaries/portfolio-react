import React from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projectCards } from '../../utils/constants';

function Projects() {
  return (
    <section class="projects">
      <div class="projects__content">
        <h2>Projects</h2>
        <div class="project-gallery">
          { projectCards.map(card => {
            return <ProjectCard card={card} key={card.key}/>
          })}
        </div>
      </div>
    </section>
  );
}
export default Projects;
