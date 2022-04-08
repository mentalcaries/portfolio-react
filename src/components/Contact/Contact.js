import {contacts} from '../../utils/constants';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__content">
        <h2 className="contact__title">Let's Connect!</h2>
        <p className="contact__text">Feel free to drop me a line on any of the regular channels</p>
        <ul className="contact__icons">
          {contacts.map((contact) => (
            <li className="contact__icon" key={contact.url}>
              <a
                href={contact.url}
                className="contact__link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={contact.icon} alt={contact.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
