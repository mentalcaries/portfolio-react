import React from "react";
import cardImage from '../../images/around.png'

function ProjectCard(){
  return(
    // Project image
    // Overlay
    // Text
    // Icons showing Tech
    // Links to code and deployment
    <article>
      <a href="https://mentalcaries.students.nomoreparties.site" target="_blank" rel="noreferrer" >
      <img src={cardImage} alt="Project Card" className="max-h-80 w-auto rounded-xl object-contain" /></a>
      <p>Around the U.S</p>
      <p>React, Express, MongoDB</p>
    </article>

  )
}

export default ProjectCard