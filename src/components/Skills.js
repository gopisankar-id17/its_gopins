import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

// Import the actual icons from your icons folder
import reactIcon from './icons/react.svg';
import pythonIcon from './icons/python.svg';
import nodejsIcon from './icons/nodejs.svg';
import mongodbIcon from './icons/mongodb.svg';
import html5Icon from './icons/html5.svg';
import css3Icon from './icons/css3.svg';
import javaIcon from './icons/java.svg';
import gitIcon from './icons/git.svg';
import mysqlIcon from './icons/mysql.svg';
import expressIcon from './icons/express.svg';
import phpIcon from './icons/php.svg';
import cIcon from './icons/c.svg';

const skillsData = [
  {
    name: 'React',
    level: 90,
    icon: reactIcon,
    category: 'Frontend',
    experience: 'Legendary',
    projects: 12,
    gearSize: 'large'
  },
  {
    name: 'JavaScript',
    level: 85,
    icon: html5Icon,
    category: 'Programming',
    experience: 'Expert',
    projects: 15,
    gearSize: 'medium'
  },
  {
    name: 'Python',
    level: 80,
    icon: pythonIcon,
    category: 'Programming',
    experience: 'Expert',
    projects: 10,
    gearSize: 'large'
  },
  {
    name: 'Node.js',
    level: 75,
    icon: nodejsIcon,
    category: 'Backend',
    experience: 'Advanced',
    projects: 8,
    gearSize: 'medium'
  },
  {
    name: 'MongoDB',
    level: 70,
    icon: mongodbIcon,
    category: 'Database',
    experience: 'Advanced',
    projects: 7,
    gearSize: 'small'
  },
  {
    name: 'HTML5',
    level: 95,
    icon: html5Icon,
    category: 'Frontend',
    experience: 'Legendary',
    projects: 20,
    gearSize: 'large'
  },
  {
    name: 'CSS3',
    level: 90,
    icon: css3Icon,
    category: 'Frontend',
    experience: 'Legendary',
    projects: 18,
    gearSize: 'medium'
  },
  {
    name: 'Java',
    level: 75,
    icon: javaIcon,
    category: 'Programming',
    experience: 'Advanced',
    projects: 6,
    gearSize: 'medium'
  },
  {
    name: 'Git',
    level: 85,
    icon: gitIcon,
    category: 'Tools',
    experience: 'Expert',
    projects: 25,
    gearSize: 'small'
  },
  {
    name: 'MySQL',
    level: 80,
    icon: mysqlIcon,
    category: 'Database',
    experience: 'Expert',
    projects: 9,
    gearSize: 'small'
  },
  {
    name: 'Express',
    level: 70,
    icon: expressIcon,
    category: 'Backend',
    experience: 'Advanced',
    projects: 8,
    gearSize: 'small'
  },
  {
    name: 'PHP',
    level: 65,
    icon: phpIcon,
    category: 'Backend',
    experience: 'Advanced',
    projects: 5,
    gearSize: 'small'
  },
  {
    name: 'C',
    level: 70,
    icon: cIcon,
    category: 'Programming',
    experience: 'Advanced',
    projects: 4,
    gearSize: 'medium'
  }
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGear, setSelectedGear] = useState(null);
  const [isSystemRunning, setIsSystemRunning] = useState(true);
  
  const categories = ['All', 'Frontend', 'Backend', 'Programming', 'Database', 'Tools'];
  
  const filteredSkills = selectedCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.h2 
          className="skills-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical Arsenal
        </motion.h2>
        
        <motion.p 
          className="skills-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Precision-engineered skills powering my development machine. Each gear represents mastery in motion.
        </motion.p>
        
        {/* Category Filter */}
        <motion.div 
          className="category-filter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* 3D Mechanical Gears System */}
        <div className="skills-3d-container">
          <div className={`mechanical-system ${!isSystemRunning ? 'paused' : ''}`}>
            
            {/* System Controls */}
            <div className="system-controls">
              <button 
                className="control-btn"
                onClick={() => setIsSystemRunning(!isSystemRunning)}
                title={isSystemRunning ? 'Stop System' : 'Start System'}
              >
                {isSystemRunning ? '⏹️' : '▶️'}
              </button>
              <span className="control-label">
                System {isSystemRunning ? 'Running' : 'Stopped'}
              </span>
              <div className="system-status">
                <div className={`status-light ${isSystemRunning ? 'running' : 'stopped'}`}></div>
              </div>
            </div>

            {/* Central Power Core */}
            <div className="power-core">
              <div className="core-housing">
                <div className="core-center">
                  <div className="energy-orb">
                    <div className="orb-inner"></div>
                    <div className="energy-rings">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="energy-ring" style={{
                          '--ring-delay': `${i * 0.5}s`,
                          '--ring-size': `${1 + i * 0.3}`
                        }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="core-label">CORE</div>
                </div>
                <div className="core-vents">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="vent" style={{
                      '--vent-angle': `${i * 45}deg`
                    }}></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mechanical Gears */}
            <div className="gears-container">
              {/* Ring Guides */}
              <div className="gear-rings">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="gear-ring" style={{
                    '--ring-radius': `${220 + (i * 140)}px`,
                    '--ring-delay': `${i * 0.5}s`
                  }}></div>
                ))}
              </div>

              {filteredSkills.map((skill, index) => {
                // Create organized concentric circles
                const totalSkills = filteredSkills.length;
                const skillsPerRing = Math.ceil(totalSkills / 3); // Distribute across 3 rings
                const ringIndex = Math.floor(index / skillsPerRing);
                const positionInRing = index % skillsPerRing;
                
                // Calculate ring radius based on gear size and ring level
                const baseRadius = 220;
                const ringSpacing = 140;
                const systemRadius = baseRadius + (ringIndex * ringSpacing);
                
                // Calculate angle for even distribution in each ring
                const angleStep = 360 / Math.max(skillsPerRing, 1);
                const startAngle = ringIndex * 30; // Offset each ring slightly
                const gearAngle = startAngle + (positionInRing * angleStep);
                
                return (
                  <motion.div
                    key={`${skill.name}-${selectedCategory}`}
                    className={`skill-gear ${skill.gearSize} ${selectedGear === skill.name ? 'selected' : ''}`}
                    initial={{ opacity: 0, scale: 0, rotateZ: 180 }}
                    whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                    transition={{ 
                      duration: 1.2, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      z: 50,
                      rotateX: 15
                    }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedGear(selectedGear === skill.name ? null : skill.name)}
                    style={{
                      '--gear-radius': `${systemRadius}px`,
                      '--gear-angle': `${gearAngle}deg`,
                      '--gear-rotation-speed': `${8 + (ringIndex % 3) * 2}s`,
                      '--gear-delay': `${index * 0.2}s`,
                      '--skill-level': `${skill.level}%`,
                      '--gear-hue': `${20 + (index * 25) % 300}`,
                      '--ring-index': ringIndex,
                      '--position-in-ring': positionInRing
                    }}
                  >
                    <div className="gear-positioning">
                      <div className="gear-assembly">
                        {/* Main Gear */}
                        <div className="gear-main">
                          <div className="gear-body">
                            <div className="gear-center">
                              <div className="center-hub">
                                <div className="hub-bolts">
                                  {[...Array(6)].map((_, i) => (
                                    <div key={i} className="bolt" style={{
                                      '--bolt-angle': `${i * 60}deg`
                                    }}></div>
                                  ))}
                                </div>
                                <div className="skill-icon-gear">
                                  <img src={skill.icon} alt={skill.name} />
                                </div>
                              </div>
                            </div>
                            
                            {/* Gear Teeth */}
                            <div className="gear-teeth">
                              {[...Array(skill.gearSize === 'large' ? 24 : 
                                          skill.gearSize === 'medium' ? 18 : 12)].map((_, i) => (
                                <div key={i} className="tooth" style={{
                                  '--tooth-angle': `${i * (360 / (skill.gearSize === 'large' ? 24 : 
                                                          skill.gearSize === 'medium' ? 18 : 12))}deg`
                                }}></div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Gear Side Details */}
                          <div className="gear-side-details">
                            <div className="side-rings">
                              {[...Array(3)].map((_, i) => (
                                <div key={i} className="side-ring" style={{
                                  '--ring-radius': `${30 + i * 15}px`
                                }}></div>
                              ))}
                            </div>
                            <div className="side-bolts">
                              {[...Array(8)].map((_, i) => (
                                <div key={i} className="side-bolt" style={{
                                  '--bolt-angle': `${i * 45}deg`
                                }}></div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Connecting Rods (connect to adjacent gears in same ring) */}
                        {positionInRing < skillsPerRing - 1 && ringIndex < 2 && (
                          <div className="connecting-rod">
                            <div className="rod-body"></div>
                            <div className="rod-joints">
                              <div className="joint joint-start"></div>
                              <div className="joint joint-end"></div>
                            </div>
                          </div>
                        )}

                        {/* Steam/Smoke Effect for high-level skills */}
                        {skill.level >= 80 && (
                          <div className="steam-effect">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="steam-puff" style={{
                                '--puff-delay': `${i * 0.4}s`,
                                '--puff-angle': `${i * 72}deg`
                              }}></div>
                            ))}
                          </div>
                        )}

                        {/* Gear Sparks */}
                        <div className="gear-sparks">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="spark" style={{
                              '--spark-delay': `${i * 0.3}s`,
                              '--spark-angle': `${i * 60}deg`
                            }}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Gear Info Panel */}
                    <div className={`gear-info ${selectedGear === skill.name ? 'active' : ''}`}>
                      <div className="info-panel">
                        <div className="info-header">
                          <h3 className="skill-name">{skill.name}</h3>
                          <div className="skill-category">{skill.category}</div>
                        </div>
                        
                        <div className="performance-metrics">
                          <div className="metric">
                            <div className="metric-label">Efficiency</div>
                            <div className="metric-gauge">
                              <div className="gauge-track"></div>
                              <div className="gauge-fill" style={{
                                '--fill-level': `${skill.level}%`
                              }}></div>
                              <div className="gauge-needle" style={{
                                '--needle-angle': `${(skill.level / 100) * 180}deg`
                              }}></div>
                            </div>
                            <div className="metric-value">{skill.level}%</div>
                          </div>
                          
                          <div className="technical-specs">
                            <div className="spec-row">
                              <span className="spec-label">Classification:</span>
                              <span className="spec-value">{skill.experience}</span>
                            </div>
                            <div className="spec-row">
                              <span className="spec-label">Deployments:</span>
                              <span className="spec-value">{skill.projects}+</span>
                            </div>
                            <div className="spec-row">
                              <span className="spec-label">Gear Size:</span>
                              <span className="spec-value">{skill.gearSize.toUpperCase()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mechanical Environment */}
            <div className="mechanical-environment">
              {/* Steam Pipes */}
              <div className="steam-pipes">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="pipe" style={{
                    '--pipe-angle': `${i * 90}deg`,
                    '--pipe-length': `${300 + i * 50}px`
                  }}>
                    <div className="pipe-body"></div>
                    <div className="pipe-joints">
                      <div className="pipe-joint"></div>
                      <div className="pipe-joint"></div>
                    </div>
                    <div className="pipe-steam">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="steam" style={{
                          '--steam-delay': `${j * 0.6}s`
                        }}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mechanical Pistons */}
              <div className="pistons">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="piston" style={{
                    '--piston-delay': `${i * 1.2}s`,
                    '--piston-position': `${i * 120}deg`
                  }}>
                    <div className="piston-cylinder"></div>
                    <div className="piston-rod"></div>
                    <div className="piston-head"></div>
                  </div>
                ))}
              </div>

              {/* Conveyor Belts */}
              <div className="conveyor-belts">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="conveyor" style={{
                    '--conveyor-level': `${i * 200}px`
                  }}>
                    <div className="belt-track"></div>
                    <div className="belt-surface"></div>
                    <div className="belt-rollers">
                      <div className="roller roller-start"></div>
                      <div className="roller roller-end"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Industrial Lights */}
              <div className="industrial-lights">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="light" style={{
                    '--light-angle': `${i * 60}deg`,
                    '--light-distance': `${400 + i * 30}px`
                  }}>
                    <div className="light-fixture"></div>
                    <div className="light-beam"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transmission Lines */}
            <div className="transmission-lines">
              {filteredSkills.map((skill, index) => {
                if (index % 3 === 0) {
                  return (
                    <div key={`transmission-${index}`} className="transmission-line" style={{
                      '--line-angle': `${(index * 360) / filteredSkills.length}deg`,
                      '--line-length': `${200 + Math.floor(index / 4) * 120}px`
                    }}>
                      <div className="power-line"></div>
                      <div className="line-sparks">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="line-spark" style={{
                            '--spark-position': `${i * 30}%`,
                            '--spark-delay': `${i * 0.5}s`
                          }}></div>
                        ))}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
