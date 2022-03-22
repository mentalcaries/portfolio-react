import React from 'react';
import './About.css'
import profile from '../../images/profile.jpg';

function About() {
  return (
    <section id="about" class="about">
      <div class="about__content">
        <div class="about__text">
          <h2 class="about__title">About Me</h2>
          {[
            "Hi, I'm Devin, a Full Stack Developer who's thrilled by the endless possibilities that come with code!",
            'I come from a background in healthcare and small business management.',
            'I believe that the small stuff matters, so I have always led my team to pay attention to the details!',
          ].map((paragraph) => (
            <p class="about__paragraph">{paragraph}</p>
          ))}
        <button class="about__button">Let's Connect</button>
        </div>
        <img
          class="max-h-96 rounded-t-full drop-shadow-2xl"
          src={profile}
          alt="Author profile"
        />
      </div>

    </section>
  );
}
export default About;
