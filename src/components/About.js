import React, { useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion , useInView } from 'framer-motion';

import './Section.css';

const features = [
  "Passionate Frontend Developer",
  "Builds responsive React applications",
  "Skilled with Tailwind, Node.js, MongoDB",
  "Eager to learn and contribute to projects"
];

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <motion.section
      id="about"
      ref={ref}
      className="section"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Card with About heading and description */}
      <div className="about-card">
        <h2>About Me</h2>
        <p>
          I am a dedicated frontend developer passionate about building responsive and interactive web applications using React. I focus on creating clean, maintainable, and scalable code while delivering a visually appealing user experience.
        </p>
      </div>

      {/* Points BELOW the card with alternate sliding */}
      <ul className="about-features">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 * index }}
            className="about-feature-item"
          >
            <CheckCircle className="feature-icon" />
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}

export default About;