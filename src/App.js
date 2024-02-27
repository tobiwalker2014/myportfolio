// Importing necessary React component
import React from 'react';

// Importing custom components
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Github from './Components/GitHub';


// The main App component
export default function App() {

  const iconUrl = 'https://iconduck.com/icons/111935/git';
  const destinationUrl = 'https://github.com/tobiwalker2014';

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Github iconUrl={iconUrl} destinationUrl={destinationUrl} />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}