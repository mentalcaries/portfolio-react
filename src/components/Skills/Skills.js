import React from 'react';
import iconArray from '../../utils/constants';

function Skills() {
  return (
    <section class="bg-[#DCE1E3] min-h-min p-10">
      <div class="mx-auto max-w-4xl">
        <h2>Skills</h2>

        <ul class="w-[80%] mx-auto py-12 flex flex-wrap items-center justify-center gap-10">
          {iconArray.map(({name, icon}) => {
            // Create hover state and tooltips for icons
            return <li class="rounded-full min-h-[100px] w-[100px] flex justify-center items-center bg-[white] shadow-lg" key={`${name}key`}>
              <img src={icon} alt={name} class="max-h-16 " />
            </li>
          })}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
