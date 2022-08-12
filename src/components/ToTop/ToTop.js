import './ToTop.css';
import arrow from '../../images/up.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {motion} from 'framer-motion';

function ToTop() {
  return (
    <AnchorLink className="top-button" href="#header">
      <motion.img
        className='top-button__image'
        src={arrow}
        alt="Up arrow"
        initial={{opacity: 0.3}}
        whileHover={{opacity: 1, scale: 1.2}}
      />
    </AnchorLink>
  );
}

export default ToTop;
