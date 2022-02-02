import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

function App() {
  return <div class="max-w-[1440px] mx-auto">
    <Header/>
    <Main/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>

  </div>;
}

export default App;
