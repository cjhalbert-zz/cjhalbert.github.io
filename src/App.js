import React, { Component } from 'react';
import "./sass/stylesheet.scss";

import Header from './components/Header.js';
import Splash from './components/Splash.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import About from './components/About.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Splash />
        <Projects />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
