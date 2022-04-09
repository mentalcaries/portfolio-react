import React from 'react';
import './About.css';
import profile from '../../images/profile.jpg';
import {motion} from 'framer-motion';
import { aboutMe } from '../../utils/constants';

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{type: 'tween', duration: 1}}
    >
      <div className="about__content">
        <div className="about__text">
          <h2 className="about__title">About Me</h2>
          {aboutMe.map((paragraph) => (
            <p className="about__paragraph" key={Math.random()}>
              {paragraph}
            </p>
          ))}
          <a className="about__button" href="#contact">
            Let's Connect
          </a>
        </div>
        <img className="about__image" src={profile} alt="Author profile" />
      </div>
    </motion.section>
  );
}
export default About;
