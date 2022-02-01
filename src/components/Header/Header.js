import React from 'react';
import profileLogo from '../../images/dj-logo.png';

function Header() {
  return (
    <header class="flex justify-between max-w-screen-x mt-6 px-10">
      <img
        src={profileLogo}
        alt="DJ Profile"
        className="max-w-[300px] w-full"
      />
      <nav class="flex">
        <ul class="flex justify-around max-w-lg">
          {[
            ['About', '#about'],
            ['Projects', '#projects'],
            ['Experience', '#experience'],
            ['Contact', '#contact'],
          ].map(([title, url]) => (
            <li class="">
              <a
                href={url}
                class="font-sans text-m uppercase font-semibold tracking-wider ml-5 hover:opacity-60 ease-linear duration-300 "
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
