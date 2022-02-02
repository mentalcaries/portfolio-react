import React from 'react';
import profile from '../../images/profile.jpg';

function About() {
  return (
    <section id="about" class="max-w-4xl mx-auto my-12 px-4">
      <div class="flex justify-center">
        <div class="max-w-lg mb-8">
          <h2>About Me</h2>
          {[
            "Hi, I'm Devin, a Full Stack Developer who's thrilled by the endless possibilities that come with code!",
            'I come from a background in healthcare and small business management.',
            'I believe that the small stuff matters, so I have always led my team to pay attention to the details!',
          ].map((paragraph) => (
            <p class="text-paragraph text-lg mb-3">{paragraph}</p>
          ))}
        <button class="border-2 rounded-xl h-10 ">Let's Connect</button>
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
