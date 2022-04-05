import React from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projectCards } from '../../utils/constants';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__content">
        <h2 className='projects__title'>Projects</h2>
        <div className="project-gallery">
          { projectCards.map(card => {
            return <ProjectCard card={card} key={card.key}/>
          })}
        </div>
      </div>
    </section>
  );
}
export default Projects;
