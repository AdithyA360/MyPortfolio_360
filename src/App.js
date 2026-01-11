import React, { useState, useEffect } from 'react';
import './styles/App.css';
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
  const [theme, setTheme] = useState('light'); // Default to light mode

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ClickSpark
      sparkColor='#ffa500'
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
      easing='ease-out'
    >
      <div className="App" data-theme={theme}>
        <SmileyFollower />
        <Header theme={theme} toggleTheme={toggleTheme} />
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
