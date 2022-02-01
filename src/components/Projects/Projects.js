import React from 'react';

function Projects() {
  return (
    <section id="projects" class="projects">
      <h2 class="projects__title section__title">Projects</h2>
      <ul class="projects__cards">
        <li class="projects__card">
          <a
            href="https://mentalcaries.github.io/around-react/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./images/around.png"
              alt="Around the U.S"
              class="project__image"
            />
          </a>
          <div class="projects__items">
            <h3 class="projects__card-title">Around the U.S</h3>
            <div class="projects__card-text">
              <a
                href="https://mentalcaries.github.io/around-react/"
                class="project__link hover-animate"
                target="_blank"
                rel="noreferrer"
              >
                Project
              </a>
              <a
                href="https://github.com/mentalcaries/around-react"
                class="project__link hover-animate"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </li>
        <li class="projects__card">
          <a
            href="https://mentalcaries.github.io/web_project_3/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./images/portland.png"
              alt="Around the U.S"
              class="project__image"
            />
          </a>
          <div class="projects__items">
            <h3 class="projects__card-title">From Portland to Portland</h3>
            <div class="projects__card-text">
              <a
                href="https://mentalcaries.github.io/web_project_3/"
                class="project__link hover-animate"
                target="_blank"
                rel="noreferrer"
              >
                Project
              </a>
              <a
                href="https://github.com/mentalcaries/web_project_3"
                class="project__link hover-animate"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </li>
        <li class="projects__card">
          <a
            href="https://mentalcaries.github.io/code-jam-july-landing/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./images/elise.png"
              alt="Around the U.S"
              class="project__image"
            />
          </a>
          <div class="projects__items">
            <h3 class="projects__card-title">Code Jam Landing Page</h3>
            <div class="projects__card-text">
              <a
                href="https://mentalcaries.github.io/code-jam-july-landing/"
                class="project__link hover-animate"
                target="_blank"
                rel="noreferrer"
              >
                Project
              </a>
              <a
                href="https://github.com/mentalcaries/code-jam-july-landing"
                class="project__link hover-animate"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </li>
        <li class="projects__card">
          <a
            href="https://mentalcaries.github.io/web_project_1/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./images/feynman.png"
              alt="Around the U.S"
              class="project__image"
            />
          </a>
          <h3 class="projects__card-title">Learning How to Learn</h3>
          <div class="projects__card-text">
            <a
              href="https://mentalcaries.github.io/web_project_1/"
              class="project__link hover-animate"
              target="_blank"
              rel="noreferrer"
            >
              Project
            </a>
            <a
              href="https://github.com/mentalcaries/web_project_1"
              class="project__link hover-animate"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}
export default Projects;
