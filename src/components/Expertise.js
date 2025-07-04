import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ExpertiseNew.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaGithub, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiCanva, SiC } from 'react-icons/si';

function Expertise() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    // Frontend
    { name: 'HTML5', icon: <FaHtml5 color="#E44D26" size={28} />, category: 'Frontend' },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" size={28} />, category: 'Frontend' },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" size={28} />, category: 'Frontend' },
    
    // Frameworks
    { name: 'React', icon: <FaReact color="#61DAFB" size={28} />, category: 'Frameworks' },
    { name: 'Node.js', icon: <FaNodeJs color="#3C873A" size={28} />, category: 'Frameworks' },
    { name: 'Express.js', icon: <SiExpress color="#ffffff" size={28} />, category: 'Frameworks' },
    
    // Database
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={28} />, category: 'Database' },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" size={28} />, category: 'Database' },
    { name: 'PHP', icon: <FaPhp color="#777BB4" size={28} />, category: 'Database' },
    
    // Tools
    { name: 'GitHub', icon: <FaGithub color="#ffffff" size={28} />, category: 'Tools' },
    { name: 'Git', icon: <FaGitAlt color="#F05032" size={28} />, category: 'Tools' },
    { name: 'Canva', icon: <SiCanva color="#00C4CC" size={28} />, category: 'Tools' },
    
    // Programming
    { name: 'Java', icon: <FaJava color="#007396" size={28} />, category: 'Programming' },
    { name: 'Python', icon: <FaPython color="#3776AB" size={28} />, category: 'Programming' },
    { name: 'C', icon: <SiC color="#A8B9CC" size={28} />, category: 'Programming' },
  ];

  const categories = [
    { name: 'Frontend', color: '#FF6F61', face: 'front' },
    { name: 'Frameworks', color: '#007BFF', face: 'back' },
    { name: 'Database', color: '#28A745', face: 'right' },
    { name: 'Tools', color: '#FFC107', face: 'left' },
    { name: 'Programming', color: '#6F42C1', face: 'top' },
    { name: 'More Skills', color: '#17A2B8', face: 'bottom' }
  ];

  return (
    <section id="expertise" className="expertise-section">
      <div className="container">
        <h2 className="section-title">Expertise</h2>
        <motion.div
          className="cube-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration:3.0, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="skill-cube">
            {categories.map((category, index) => (
              <div 
                key={index}
                className={`cube-face ${category.face}`}
                style={{ '--face-color': category.color }}
              >
                <div className="face-label">{category.name}</div>
                <div className="face-skills">
                  {category.name === 'More Skills' ? (
                    <div className="coming-soon">Coming Soon...</div>
                  ) : (
                    skills
                      .filter(skill => skill.category === category.name)
                      .map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className="skill-icon"
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          whileHover={{ scale: 1.2 }}
                        >
                          {skill.icon}
                          <div className={`skill-tooltip ${hoveredSkill === skill.name ? 'visible' : ''}`}>
                            {skill.name}
                          </div>
                        </motion.div>
                      ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Expertise;
