import React from 'react';
import './Skills.css'
import iconArray from '../../utils/constants';

function Skills() {
  return (
    <section class="skills">
      <div class="skills__content">
        <h2 class="skills__title">Skills</h2>

        <ul class="skills__icons">
          {iconArray.map(({name, icon}) => {
            // Create hover state and tooltips for icons
            return <li class="skills__icon" key={`${name}key`}>
              <img src={icon} alt={name} class="skills__icon-image" />
            </li>
          })}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
