import React from 'react';
import cardImage from '../../images/around.png';

function ProjectCard() {
  return (
    // Project image
    // Overlay
    // Text
    // Icons showing Tech
    // Links to code and deployment
    <article className="shadow-lg rounded-lg p-5">
      <a
        href="https://mentalcaries.students.nomoreparties.site"
        target="_blank"
        rel="noreferrer"
      >
        <div
          className="
        "
        >
          <img
            src={cardImage}
            alt="Project Card"
            className="max-h-80 w-auto rounded-xl object-contain hover:scale-[1.02] duration-300"
          />
          <p className="text-center">A full stack photo gallery app that allows users add, delete or like photos. Registration and authentication handled on the back end  with photos and users saved to a Mongo database</p>
        </div>
      </a>
      <h3 className="font-semibold text-xl mt-4 mb-1 text-center">Around the U.S</h3>
      <p className="text-center">
        React | Express | Node | MongoDB | Google Cloud
      </p>
    </article>
  );
}

export default ProjectCard;
