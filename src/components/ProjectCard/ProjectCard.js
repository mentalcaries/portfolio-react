import React from 'react';
import './ProjectCard.css';
import cardImage from '../../images/around.png';

function ProjectCard() {
  return (
    // Project image
    // Overlay
    // Text
    // Links to code and deployment
    <article className="project-card">
      <a
        href="https://mentalcaries.students.nomoreparties.site"
        target="_blank"
        rel="noreferrer"
      >
        <div
          className="
        "
        >
          <img src={cardImage} alt="Project Card" className="project__image" />
          <h3 className="project__title">
            Around the U.S
          </h3>
          <p className="project__desc">
            A full stack photo gallery app that allows users add, delete or like
            photos. Registration and authentication handled on the back end with
            photos and users saved to a Mongo database
          </p>
        </div>
      </a>
      <p className="project__tech">
        React | Node | MongoDB | Google Cloud
      </p>
    </article>
  );
}

export default ProjectCard;
