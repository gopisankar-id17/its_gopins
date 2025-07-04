import React from 'react';
import './App.css';
import SniperCursorOverlay from './components/SniperCursorOverlay';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Expertise from './components/Expertise';
import Education from './components/Education_new';
import Projects from './components/Projects';
import Separator from './components/Separator';

function App() {

  return (
    <div className="app">
      <SniperCursorOverlay />
      <Navbar />
      <section id="home"><Profile /></section>
      <Separator />
      <section id="about"><About /></section>
      <Separator />
      <section id="expertise"><Expertise /></section>
      <Separator />
      <Education />
      <Separator />
      <section id="projects"><Projects /></section>
      <Separator />
    </div>
  );
}

export default App;
