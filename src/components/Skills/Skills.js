import React from 'react';
import './Skills.css'
import { iconArray } from '../../utils/constants';

function Skills() {
  return (
    <section className="skills">
      <div className="skills__content">
        <h2 className="skills__title">Skills</h2>

        <ul className="skills__icons">
          {iconArray.map(({name, icon}) => {
            // Create hover state and tooltips for icons
            return <li className="skills__icon" key={`${name}key`}>
              <img src={icon} alt={name} className="skills__icon-image" />
            </li>
          })}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
