import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Edu from './components/Edu'; 
import WorkExperience from './components/WorkExperience'; 
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home">
      </div>
      <About />
      <Edu />
      <WorkExperience />
      <Skills /> 
      <Project /> 
      <Footer />
    </div>
  );
}

export default App;
