import React from 'react';
import './Header.css';
import profileLogo from '../../images/dj-logo.png';

function Header() {
  return (
    <header className="header">
      <img src={profileLogo} alt="DJ Profile" className="header__logo" />
      <nav>
        <ul className="header__items">
          {[
            ['About', '#about'],
            ['Projects', '#projects'],
            // ['Experience', '#experience'],
            ['Contact', '#contact'],
          ].map(([title, url]) => (
            <li key={title}>
              <a href={url} className="header__item">
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
