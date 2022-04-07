import { useState } from 'react';
import './Burger.css';
import react from 'react';

function Burger() {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function handleMenuClick(){
    setMenuIsOpen(!menuIsOpen)    
  }

  function handleOutsideClick(evt){
    if(evt.target.classlist ==='burger'){
      console.log('hey')
    }
    
  }

  document.addEventListener('click', handleOutsideClick)

  return (
    <nav className="burger">
        <button className={`hamburger hamburger--vortex ${menuIsOpen?'is-active':'' }`} type="button" onClick={handleMenuClick}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

      <ul className={`burger__items ${menuIsOpen? 'burger__items_visible' : ''}`}>
        {[
          ['About', '#about'],
          ['Projects', '#projects'],
          ['Contact', '#contact'],
        ].map(([title, url]) => (
          <li className="burger__item" key={title}>
            <a href={url} >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Burger;
