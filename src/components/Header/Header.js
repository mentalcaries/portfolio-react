import React from 'react';
import './Header.css';
import profileLogo from '../../images/dj-logo.png';

function Header() {
  return (
    <header class="header">
      <img src={profileLogo} alt="DJ Profile" className="header__logo" />
      <nav>
        <ul class="header__items">
          {[
            ['About', '#about'],
            ['Projects', '#projects'],
            ['Experience', '#experience'],
            ['Contact', '#contact'],
          ].map(([title, url]) => (
            <li class="">
              <a href={url} class="header__item">
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
