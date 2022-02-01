import React from 'react';
import profile from '../../images/profile.jpg'

function About() {
  return (
    <section id="about" class="max-w-4xl mx-auto my-12">
      <div class="flex">
        <div class="max-w-lg mb-8">
      <h2 class="font-sans font-semibold text-2xl mb-5 text-main">About Me</h2>
          {[
            "Hi, I'm Devin, a Full Stack Developer who's thrilled by the endless possibilities that come with code!",
            'I come from a background in healthcare and small business management.',
            'I believe that the small stuff matters, so I have always led my team to pay attention to the details!',
          ].map((paragraph) => (
            <p class="text-paragraph text-lg mb-3">{paragraph}</p>
          ))}
        </div>
            <img class="max-h-96 rounded-full" src={profile} alt="Author profile" />
      </div>

      <button class="about__contact">Let's Connect</button>
    </section>
  );
}
export default About;
