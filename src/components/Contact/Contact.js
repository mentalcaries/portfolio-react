import {contacts} from '../../utils/constants';
import './Contact.css';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__content">
        <h2 className="contact__title">Let's Connect!</h2>
        <p className="contact__text">Feel free to drop me a line on any of the regular channels</p>
        <ul className="contact__icons">
          {contacts.map((contact) => (
            <motion.li className="contact__element" key={contact.url} 
            initial={{z: 200, opacity:0, scale:0.5}}
            whileInView={{z:0, opacity: 0.9, scale: 1}}
            transition={{duration:0.5}}
            whileHover={{scale:1.1, opacity:1.5, transition:{duration: 0.3}}}
            >
              <a 
                href={contact.url}
                className="contact__link"
                target="_blank"
                rel="noreferrer"
              >
                <img className='contact__icon' src={contact.icon} alt={contact.name} />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
