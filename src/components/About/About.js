import React from 'react';
import './About.css';
import profile from '../../images/profile.jpg';
import {motion} from 'framer-motion';

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
          {[
            "Hi, I'm Devin, a Full Stack Developer who's thrilled by the endless possibilities that come with code!",
            "I'm from a background in healthcare and small business management, and my knack for problem solving has made this journey equally fun and challenging.",
            'I believe that the small stuff matters, so attention to detail is always key, whether it comes to clinical practice or writing code.',
          ].map((paragraph) => (
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
