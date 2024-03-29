import React from 'react';
import './ProjectCard.css';
import { motion } from 'framer-motion';

function ProjectCard({ card }) {
  const { url, image, title, desc, frontend, backend, repository, tech } = card;

  return (
    <motion.article
      className="project-card"
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <img src={image} alt="Project Card" className="project__image" />
      </a>
      <h3 className="project__title">{title}</h3>
      <ul className="project__links">
        {frontend && (
          <li>
            <a
              href={frontend}
              className="project__link"
              target="_blank"
              rel="noreferrer"
            >
              Frontend
            </a>
          </li>
        )}
        {backend && (
          <li>
            <a
              href={backend}
              className="project__link"
              target="_blank"
              rel="noreferrer"
            >
              Backend
            </a>
          </li>
        )}
        {repository && (
          <li>
            <a
              href={repository}
              className="project__link"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
        )}
        {url && (
          <li>
            <a
              href={url}
              className="project__link"
              target="_blank"
              rel="noreferrer"
            >
              Deployment
            </a>
          </li>
        )}
      </ul>
      <p className="project__desc">{desc}</p>

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
    </motion.article>
  );
}

export default ProjectCard;
