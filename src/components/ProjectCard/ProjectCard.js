import React from 'react';
import './ProjectCard.css';

function ProjectCard({card}) {
  const {url, image, title, desc, frontend, backend, tech} = card;

  return (
    // Project image
    // Overlay
    // Text
    // Links to code and deployment
    <article className="project-card">
      <a href={url} target="_blank" rel="noreferrer">
        {/* <div
          className="
        "
        > */}
        <img src={image} alt="Project Card" className="project__image" />
      </a>
      <h3 className="project__title">{title}</h3>
      <ul className="project__links">
        {frontend && (
          <li>
            <a href={frontend} target="_blank" rel="noreferrer">
              Frontend
            </a>
          </li>
        )}
        {backend && (
          <li>
            <a href={backend} target="_blank" rel="noreferrer">
              Backend
            </a>
          </li>
        )}
        <li>
          <a href={url} target="_blank" rel="noreferrer">
            Deployment
          </a>
        </li>
      </ul>
      <p className="project__desc">{desc}</p>
      {/* </div> */}

      <div className="project__tech">
        {tech.map((icon) => {
          return (
            <img
              key={`${icon}96`}
              className="project__icon"
              src={icon}
              alt={`${icon} icon`}
            />
          );
        })}
      </div>
    </article>
  );
}

export default ProjectCard;
