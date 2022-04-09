import {useState} from 'react';
import './Burger.css';
import {motion, AnimatePresence} from 'framer-motion';
function Burger() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }


  function handleOutsideClick(evt) {
    if (menuIsOpen && evt.target.className === 'overlay') {
      toggleMenu()
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
        <div className="overlay" onClick={handleOutsideClick}>
          <motion.ul
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.05}}
            exit={{opacity: 0}}
            className={`burger__items ${
              menuIsOpen ? 'burger__items_visible' : ''
            }`}
          >
            {[
              ['About', '#about'],
              ['Projects', '#projects'],
              ['Contact', '#contact'],
            ].map(([title, url]) => (
              <li className="burger__item" key={title} onClick={toggleMenu}>
                <a href={url}>{title}</a>
              </li>
            ))}
          </motion.ul>
          </div>
        )}
      </AnimatePresence>
    </motion.nav>

  );
}

export default Burger;
