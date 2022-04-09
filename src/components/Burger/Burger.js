import {useState} from 'react';
import './Burger.css';
import {motion, AnimatePresence} from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Burger() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  function handleOutsideClick(evt) {
    if (menuIsOpen && evt.target.className === 'overlay') {
      toggleMenu();
    }
  }

  return (
    <motion.nav
      className="burger"
      initial={{opacity: 0, x: 250}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.5}}
    >
      <button
        className={`hamburger hamburger--vortex ${
          menuIsOpen ? 'is-active' : ''
        }`}
        type="button"
        onClick={toggleMenu}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <AnimatePresence>
        {menuIsOpen && (
          <motion.div
            className="overlay"
            onClick={handleOutsideClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.3}}}
          >
            <motion.ul
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.05}}
              exit={{opacity: 0, transition: {duration: 0.3}}}
              className={`burger__items 
            }`}
            >
              {[
                ['About', '#about'],
                ['Projects', '#projects'],
                ['Contact', '#contact'],
              ].map(([title, url]) => (
                <li className="burger__item" key={title} onClick={toggleMenu}>
                  <AnchorLink href={url}>{title}</AnchorLink>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Burger;
