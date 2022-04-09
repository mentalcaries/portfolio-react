import React from 'react';
import './Skills.css';
import {iconArray} from '../../utils/constants';
import {motion} from 'framer-motion';

function Skills() {
  return (
    <motion.section
      className="skills"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{type: 'tween', duration: 1}}
    >
      <div className="skills__content">
        <h2 className="skills__title">Skills</h2>

        <ul className="skills__icons">
          {iconArray.map(({name, icon}) => {
            // Create hover state and tooltips for icons
            return (
              <motion.li
                className="skills__icon"
                key={`${name}key`}
                initial={{x: '-100vw'}}
                animate={{x: 0}}
              >
                <img src={icon} alt={name} className="skills__icon-image" />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
}

export default Skills;
