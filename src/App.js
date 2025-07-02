import React, { useEffect } from 'react';
import SniperCursorOverlay from './components/SniperCursorOverlay';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Profile from './components/Profile';
import About from './components/About';

import Education from './components/Education';
import Projects from './components/Projects';
import Separator from './components/Separator';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          const navLink = document.querySelector(`.navbar a[href="#${id}"]`);
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <SniperCursorOverlay />
      <Navbar />

      <section id="home"><Profile /></section>
      <Separator />
      <section id="about"><About /></section>
      <Separator />
      <section id="banner"><Banner /></section>
      <Separator />
      <section id="education"><Education /></section>
      <Separator />
      <section id="projects"><Projects /></section>
      <Separator />
    </div>
  );
}

export default App;
