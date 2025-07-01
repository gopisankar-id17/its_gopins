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

        {/* LEFT: Profile with social links */}
        <div className="profile-left">
          <motion.img
            src="/pic3.png"
            alt="Profile"
            className="profile-pic"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />

          <motion.h1
            className="profile-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Gopi Sankar
          </motion.h1>

          <motion.p
            className="profile-tagline"
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

        {/* RIGHT: Portrait with Resume & Contact buttons */}
        <div className="profile-right">
          <img src="/portrait.png" alt="Portrait" className="portrait-pic" />

          <div className="profile-buttons">
            <a href="/GopiSankar_Resume.pdf" download className="profile-button">
              Download Resume
            </a>
            <a href="#contact" className="profile-button contact-button">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
