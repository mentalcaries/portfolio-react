import React from 'react';
import './App.css';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

function App() {
  return (
    <div class="app">
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
