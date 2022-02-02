import React from 'react';
import About from '../About/About';
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

  </div>;
}

export default App;
