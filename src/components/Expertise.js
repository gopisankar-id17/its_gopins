import React from 'react';
import { motion } from 'framer-motion';
import './Expertise.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaGithub, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiCanva, SiC } from 'react-icons/si';

function Expertise() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 color="#E44D26" size={40} /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" size={40} /> },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" size={40} /> },
    { name: 'React', icon: <FaReact color="#61DAFB" size={40} /> },
    { name: 'Node.js', icon: <FaNodeJs color="#3C873A" size={40} /> },
    { name: 'Express.js', icon: <SiExpress color="#000000" size={40} /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={40} /> },
    { name: 'PHP', icon: <FaPhp color="#777BB4" size={40} /> },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" size={40} /> },
    { name: 'GitHub', icon: <FaGithub color="#181717" size={40} /> },
    { name: 'Git', icon: <FaGitAlt color="#F05032" size={40} /> },
    { name: 'Canva', icon: <SiCanva color="#00C4CC" size={40} /> },
    { name: 'Java', icon: <FaJava color="#007396" size={40} /> },
    { name: 'Python', icon: <FaPython color="#3776AB" size={40} /> },
    { name: 'C', icon: <SiC color="#A8B9CC" size={40} /> },
  ];

  return (
    <section id="expertise" className="section">
      <h2>Expertise</h2>
      <motion.div
        className="skills-grid"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.1, rotate: [5] }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            {skill.icon}
            <div className="skill-name">{skill.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Expertise;
