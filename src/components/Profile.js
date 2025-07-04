import React from 'react';
import './Profile.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

function Profile() {
  return (
    <section id="home" className="profile-section">
      <div className="profile-container">
        {/* Main content layout */}
        <div className="profile-main">
          {/* Left side - Portrait Image and Info */}
          <div className="profile-left">
            {/* Portrait and Social Icons Wrapper */}
            <div className="portrait-social-wrapper">
              <div className="portrait-container">
                <motion.img
                  src="/portrait.png"
                  alt="Portrait"
                  className="portrait-pic"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/gopisankarm05/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="icon linkedin" />
                </a>
                <a href="https://github.com/gopisankar-id17" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon github" />
                </a>
                <a href="https://leetcode.com/u/Gopi_sankarm/" target="_blank" rel="noopener noreferrer">
                  <SiLeetcode className="icon leetcode" />
                </a>
                <a href="https://www.instagram.com/gopi.n.sankar/?hl=en" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="icon instagram" />
                </a>
              </div>
            </div>
            
            {/* Profile info below image */}
            <div className="profile-info">
              <motion.h1
                className="profile-name-bottom"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                Gopi Sankar
              </motion.h1>

              <motion.p
                className="profile-tagline-bottom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
              >
                <Typewriter
                  words={['Frontend Developer', 'Backend Developer', 'UI/UX Designer']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </motion.p>
            </div>
          </div>

          {/* Right side - Quotes and Buttons */}
          <div className="profile-right">
            <div className="quotes-container">
              {/* Tamil Quote from Thiruvalluvar */}
              <motion.div
                className="profile-quote-tamil"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
              >
                "தெய்வத்தான் ஆகா தெனினும் முயற்சிதன்<br />
                மெய்வருத்தக் கூலி தரும்"
                <br />
                <span className="quote-author">- திருவள்ளுவர்</span>
              </motion.div>

              {/* English Inspirational Quote */}
              <motion.div
                className="profile-quote"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                "The best way to get started is to quit talking and begin doing."
                <br />
                <span className="quote-author">– Walt Disney</span>
              </motion.div>
            </div>
            
            {/* Buttons below quotes */}
            <motion.div 
              className="profile-buttons-below-quotes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <a href="/GopiSankar_Resume.pdf" download className="profile-button-bottom">
                Download Resume
              </a>
              <a href="#contact" className="profile-button-bottom contact-button-bottom">
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
