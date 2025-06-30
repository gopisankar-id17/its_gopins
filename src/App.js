import React from 'react';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import About from './components/About';
import Expertise from './components/Expertise';
import Education from './components/Education';
import Projects from './components/Projects';


function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Expertise />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
