import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Edu from './components/Edu';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';
import SmileyFollower from './components/SmileyFollower';
import ClickSpark from './components/ClickSpark';

function App() {
  return (
    <ClickSpark
      sparkColor='#ffa500'
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
      easing='ease-out'
    >
      <div className="App">
        <SmileyFollower />
        <Header />
        <main>
          <Hero />
          <About />
          <Edu />
          <WorkExperience />
          <Skills />
          <Project />
        </main>
        <Footer />
      </div>
    </ClickSpark>
  );
}

export default App;
