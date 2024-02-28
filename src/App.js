// // Importing necessary React component
// import React from 'react';

// // Importing custom components
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Navbar from './Components/Navbar';
// import Projects from './Components/Projects';
// import Skills from './Components/Skills';
// import Resume from './Components/Resume';
// import Github from './Components/GitHub';


// // The main App component
// export default function App() {

//   const iconUrl = 'https://www.flaticon.com/free-icon/git_4494748s';
//   const destinationUrl = 'https://github.com/tobiwalker2014';

//   return (
//     <main className="text-gray-400 bg-gray-900 body-font">
//       <Navbar />
//       <About />
//       <Projects />
//       <Github />
//       <Skills />
//       <Resume />
//       <Contact />
//     </main>
//   );
// }

import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import GitHub from './Components/GitHub'; // Update the import statement

export default function App() {
  const destinationUrl = 'https://github.com/tobiwalker2014';

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <GitHub destinationUrl={destinationUrl} /> {/* Pass destinationUrl as a prop */}
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}
