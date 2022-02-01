import React from 'react';
import profileLogo from '../../images/dj-logo.png';

function Header() {
  return (
    <header class="flex justify-between max-w-screen-x mt-6 px-10">
      <img src={profileLogo} alt="DJ Profile" />
      <nav class="flex items-center">
        <ul class="flex gap-8">
          <li class="">
            <a
              href="#about"
              class="font-sans text-lg uppercase font-semibold tracking-wider hover:opacity-60 ease-linear duration-300"
            >
              About
            </a>
          </li>
          <li class="navbar__item">
            <a
              href="#projects"
              class="font-sans text-lg uppercase font-semibold hover:opacity-60 ease-linear duration-300"
            >
              Projects
            </a>
          </li>
          <li class="navbar__item">
            <a
              href="#experience"
              class="font-sans text-lg uppercase font-semibold tracking-wider tracking-wider hover:opacity-60 ease-linear duration-300"
            >
              Experience
            </a>
          </li>
          <li class="navbar__item">
            <a
              href="#contact"
              class="font-sans text-lg uppercase font-semibold tracking-wider hover:opacity-60 ease-linear duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
