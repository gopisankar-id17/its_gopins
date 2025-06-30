import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#about">About</a>
      <a href="#expertise">Expertise</a>
      <a href="#education">Education</a>
      <a href="#projects">Projects</a>
    </nav>
  );
}

export default Navbar;
