import React, {useEffect, useState} from 'react';
import './App.css';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import ToTop from '../ToTop/ToTop';

function App() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {showButton && <ToTop /> }
    </div>
  );
}

export default App;
