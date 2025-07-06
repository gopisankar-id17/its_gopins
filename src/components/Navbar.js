import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCog, FaGraduationCap, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle smooth scrolling and close mobile menu
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        let currentSection = null;
        let maxIntersectionRatio = 0;
        
        // Find the section with the highest intersection ratio
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
            maxIntersectionRatio = entry.intersectionRatio;
            currentSection = entry.target.getAttribute('id');
          }
        });
        
        // If no section is intersecting, keep the current active section
        if (currentSection) {
          setActiveSection(currentSection);
          console.log('Active section:', currentSection); // Debug log
        }
      },
      {
        root: null,
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5], // Multiple thresholds for better detection
        rootMargin: '-100px 0px -50% 0px' // Account for navbar height
      }
    );

    // Backup scroll listener for better detection
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Account for navbar height
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    sections.forEach((section) => {
      console.log('Observing section:', section.id); // Debug log
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <nav className="navbar">
      <div className="logo">
        <img 
          src="/portfolio logo.png" 
          alt="Gopi Sankar" 
          className="logo-image"
        />
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a 
          href="#home" 
          className={activeSection === 'home' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <FaHome size={16} />
          Home
        </a>
        <a 
          href="#about" 
          className={activeSection === 'about' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'about')}
        >
          <FaUser size={16} />
          About
        </a>
        <a 
          href="#expertise" 
          className={activeSection === 'expertise' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'expertise')}
        >
          <FaCog size={16} />
          Expertise
        </a>
        <a 
          href="#education" 
          className={activeSection === 'education' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'education')}
        >
          <FaGraduationCap size={16} />
          Education
        </a>
        <a 
          href="#projects" 
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'projects')}
        >
          <FaProjectDiagram size={16} />
          Projects
        </a>
        <a 
          href="#contact" 
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
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
