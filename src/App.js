// Importing necessary React component
import React from 'react';

// Importing custom components
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import GitHub from './Components/GitHub';


// The main App component
export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <GitHub 
        url="https://github.com/tobiwalker2014"  
        iconUrl="https://iconduck.com/icons/111935/git"  
        alt="External Link Icon"  
      />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}