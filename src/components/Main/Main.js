import './Main.css';
import {motion} from 'framer-motion';

function Main() {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{type: 'tween', duration: 0.4}}
      className="main"
    >
      <div className="main__content">
        <h1 className="main__title">Devin Jaggernauth</h1>
        <p className="main__subtitle">Full Stack Software Engineer</p>
        <p className="main__subtitle">DDS</p>
      </div>
      {/* Photo by <a href="https://unsplash.com/@lishakov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrej Lišakov</a> */}
    </motion.section>
    
  );
}

export default Main;
