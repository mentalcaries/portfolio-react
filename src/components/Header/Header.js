import React from "react";
import profileLogo from '../../images/dj-logo.png'

function Header(){
  return(
<header class="flex justify-between w-full my-6 px-6" >
  <img src={profileLogo} alt="DJ Profile" />
  <nav>
  <ul class="flex gap-6">
            <li class="navbar__item"><a href="#about" class="navbar__link hover-animate">About</a></li>
            <li class="navbar__item"><a href="#projects" class="navbar__link hover-animate">Projects</a></li>
            <li class="navbar__item"><a href="#experience" class="navbar__link hover-animate">Experience</a></li>
            <li class="navbar__item"><a href="#contact" class="navbar__link hover-animate">Contact</a></li>
          </ul>
        </nav>
</header>
  )
}
export default Header