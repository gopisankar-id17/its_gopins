import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCog, FaGraduationCap, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver(
    (entries) => {
      let activeId = 'home'; // fallback

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId = entry.target.getAttribute('id');
        }
      });

      setActiveSection(activeId);
    },
    {
      root: null,
      threshold: 0.3,
      rootMargin: '0px 0px -50% 0px', // triggers earlier for bottom sections
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);




  return (
    <nav className="navbar">
      <div className="logo">GnS</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
          <FaHome size={16} />
          Home
        </a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
          <FaUser size={16} />
          About
        </a>
        <a href="#expertise" className={activeSection === 'expertise' ? 'active' : ''}>
          <FaCog size={16} />
          Expertise
        </a>
        <a href="#education" className={activeSection === 'education' ? 'active' : ''}>
          <FaGraduationCap size={16} />
          Education
        </a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
          <FaProjectDiagram size={16} />
          Projects
        </a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
          <FaEnvelope size={16} />
          Contact
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </nav>
  );
}

export default Navbar;
