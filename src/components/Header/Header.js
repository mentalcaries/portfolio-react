import React from 'react';
import './Header.css';
import profileLogo from '../../images/dj-logo.png';
import Burger from '../Burger/Burger';
import {motion} from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Header() {
  return (
    <header className="header" id="header">
      <motion.img
        src={profileLogo}
        alt="DJ Profile"
        className="header__logo"
        initial={{opacity: 0, x: -250}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.5}}
      />
      <motion.nav
        className="header__nav"
        initial={{opacity: 0, x: 250}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.5}}
      >
        <ul className="header__items">
          {[
            ['About', '#about'],
            ['Projects', '#projects'],
            ['Contact', '#contact'],
          ].map(([title, url]) => (
            <motion.li
              key={title}
              whileHover={{opacity: 0.7, scale: 1.05}}
              whileTap={{scale: 0.9}}
            >
              <AnchorLink href={url} className="header__item">
                {title}
              </AnchorLink>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
      <Burger />
    </header>
  );
}
export default Header;
