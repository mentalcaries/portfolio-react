import React from 'react';
import './About.css'
import profile from '../../images/profile.jpg';

function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div className="about__text">
          <h2 className="about__title">About Me</h2>
          {[
            "Hi, I'm Devin, a Full Stack Developer who's thrilled by the endless possibilities that come with code!",
            'I come from a background in healthcare and small business management.',
            'I believe that the small stuff matters, so attention to detail is always key, whether it comes to clinical practice or writing code.',
          ].map((paragraph) => (
            <p className="about__paragraph" key={Math.random()}>{paragraph}</p>
          ))}
        <button className="about__button">Let's Connect</button>
        </div>
        <img
          className="about__image"
          src={profile}
          alt="Author profile"
        />
      </div>

    </section>
  );
}
export default About;
