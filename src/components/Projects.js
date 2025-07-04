import React, { useState, useEffect } from 'react';
import './Projects.css';

// Import project images
import portfolioImg from './images/portfolio-project.png';
import jewelryImg from './images/jewelry-shop.png';
import collegeImg from './images/college-network.png';
import ambulanceImg from './images/ai-ambulance.png';
import straydogsImg from './images/stray-dogs.png';
import logisticsImg from './images/transportation-logistics.png';

const projects = [
  {
    title: "Portfolio",
    image: portfolioImg,
    desc: "A responsive personal portfolio website showcasing skills, projects, and professional experience with modern design and smooth animations.",
    features: [
      "Responsive design that works on all devices",
      "Smooth scrolling and modern animations",
      "Interactive components with hover effects",
      "Optimized performance and SEO-friendly"
    ],
    tech: "React, CSS3, HTML5, JavaScript",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Jewelry Shop Management",
    image: jewelryImg,
    desc: "Complete management system for jewelry stores with inventory tracking, sales management, customer records, and billing functionality.",
    features: [
      "Inventory management with real-time stock updates",
      "Customer relationship management (CRM)",
      "Sales tracking and reporting dashboard",
      "Automated billing and invoice generation",
      "Multi-user access with role-based permissions"
    ],
    tech: "React, Node.js, MongoDB, Express",
    github: "https://github.com/yourusername/jewelry-shop-management"
  },
  {
    title: "College Network",
    image: collegeImg,
    desc: "Social networking platform for college students featuring discussion forums, event announcements, and academic resource sharing.",
    features: [
      "User authentication and profile management",
      "Discussion forums organized by subjects",
      "Event calendar with RSVP functionality",
      "File sharing for academic resources",
      "Real-time messaging system"
    ],
    tech: "React, Node.js, MySQL, Socket.io",
    github: "https://github.com/yourusername/college-network"
  },
  {
    title: "AI Powered Smart Ambulance System",
    image: ambulanceImg,
    desc: "Intelligent emergency response system using AI for optimal route planning, real-time patient monitoring, and hospital coordination.",
    features: [
      "AI-powered route optimization for fastest response",
      "Real-time patient vital signs monitoring",
      "Hospital bed availability tracking",
      "Emergency contact notification system",
      "GPS tracking and location sharing"
    ],
    tech: "Python, TensorFlow, React, Node.js, GPS APIs",
    github: "https://github.com/yourusername/ai-ambulance-system"
  },
  {
    title: "Stray Dogs Favour",
    image: straydogsImg,
    desc: "Community-driven platform for reporting stray dogs, organizing rescue operations, and connecting volunteers with animal welfare organizations.",
    features: [
      "Location-based stray dog reporting system",
      "Volunteer registration and coordination",
      "Rescue operation scheduling and tracking",
      "Animal welfare organization partnerships",
      "Community awareness and education resources"
    ],
    tech: "React, Node.js, MongoDB, Google Maps API",
    github: "https://github.com/yourusername/stray-dogs-favour"
  },
  {
    title: "Transportation and Logistics System",
    image: logisticsImg,
    desc: "Comprehensive logistics management solution with vehicle tracking, route optimization, delivery scheduling, and real-time monitoring.",
    features: [
      "Real-time vehicle tracking and monitoring",
      "Route optimization for cost efficiency",
      "Delivery scheduling and timeline management",
      "Customer notification and tracking system",
      "Analytics dashboard with performance metrics"
    ],
    tech: "React, Node.js, MongoDB, Google Maps API, Chart.js",
    github: "https://github.com/yourusername/transportation-logistics"
  }
];

function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isMobile) {
    // MOBILE VERSION - NUCLEAR GRID CENTERING
    return (
      <section style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        padding: '60px 0',
        color: '#ffffff',
        width: '100vw',
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '40px',
          color: '#FF6F61',
          textShadow: '0 0 20px rgba(255, 111, 97, 0.5)',
          justifySelf: 'center'
        }}>Projects</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '30px',
          width: '100%',
          maxWidth: '350px',
          padding: '0 20px',
          justifyItems: 'center',
          alignItems: 'center',
          justifySelf: 'center'
        }}>
          {projects.map((proj, idx) => (
            <div key={idx} style={{
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '15px',
              border: '2px solid rgba(255, 111, 97, 0.2)',
              backdropFilter: 'blur(10px)',
              width: '100%',
              maxWidth: '320px',
              overflow: 'hidden',
              justifySelf: 'center',
              margin: '0 auto',
              position: 'relative',
              left: '50%',
              transform: 'translateX(-50%)'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '180px',
                background: 'none',
                margin: 0,
                padding: 0,
                overflow: 'hidden',
                borderRadius: '15px 15px 0 0'
              }}>
                <div style={{
                  flex: '1 1 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%'
                }}>
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    style={{
                      maxWidth: '90%',
                      maxHeight: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      margin: '0 auto',
                      borderRadius: '15px 15px 0 0',
                      boxShadow: 'none'
                    }}
                  />
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  marginLeft: '8px',
                  marginRight: '8px',
                  height: '100%'
                }}>
                  {/* GitHub Icon */}
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{color: '#FF6F61', display: 'flex', alignItems: 'center'}}>
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  {/* LinkedIn Icon */}
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{color: '#FF6F61', display: 'flex', alignItems: 'center'}}>
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
                    </svg>
                  </a>
                  {/* External Link Icon */}
                  <a href="#" target="_blank" rel="noopener noreferrer" style={{color: '#FF6F61', display: 'flex', alignItems: 'center'}}>
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41 9.83-9.83v3.59h2v-7h-7zm-4 4h-7v14h14v-7h-2v5h-10v-10h5v-2z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div style={{ 
                padding: '20px',
                display: 'grid',
                placeItems: 'center',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#FF6F61',
                  marginBottom: '15px',
                  textAlign: 'center',
                  width: '100%'
                }}>{proj.title}</h3>
                
                <p style={{
                  color: '#ffffff',
                  lineHeight: '1.6',
                  marginBottom: '15px',
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  width: '100%'
                }}>{proj.desc}</p>
                
                <div style={{ 
                  marginBottom: '15px',
                  width: '100%',
                  textAlign: 'center'
                }}>
                  <h4 style={{
                    color: '#FF6F61',
                    fontSize: '1rem',
                    marginBottom: '10px',
                    textAlign: 'center'
                  }}>Key Features:</h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: '0',
                    margin: '0 auto',
                    maxWidth: '280px',
                    textAlign: 'left'
                  }}>
                    {proj.features.map((feature, featureIdx) => (
                      <li key={featureIdx} style={{
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        lineHeight: '1.5',
                        padding: '3px 0',
                        paddingLeft: '15px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#007BFF',
                          fontWeight: 'bold'
                        }}>▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div style={{
                  textAlign: 'center',
                  marginBottom: '15px',
                  paddingTop: '10px',
                  borderTop: '1px solid rgba(255, 111, 97, 0.2)',
                  width: '100%'
                }}>
                  <span style={{
                    color: '#FF6F61',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    display: 'block',
                    marginBottom: '5px'
                  }}>Technologies:</span>
                  <span style={{
                    color: '#007BFF',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>{proj.tech}</span>
                </div>
                
                <div style={{
                  display: 'grid',
                  placeItems: 'center',
                  marginTop: '15px',
                  width: '100%'
                }}>
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'linear-gradient(135deg, #24292e, #2f363d)',
                      color: '#ffffff',
                      textDecoration: 'none',
                      padding: '10px 16px',
                      borderRadius: '25px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      border: '2px solid transparent',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                      justifySelf: 'center',
                      margin: '0 auto'
                    }}
                  >
                    <svg viewBox="0 0 24 24" style={{
                      width: '16px',
                      height: '16px',
                      fill: 'currentColor'
                    }}>
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // DESKTOP VERSION - USES CSS
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-image">
                <img src={proj.image} alt={proj.title} />
              </div>
              <div className="project-content">
                <h3>{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {proj.features.map((feature, featureIdx) => (
                      <li key={featureIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-tech">
                  <span className="tech-label">Technologies:</span>
                  <span className="tech">{proj.tech}</span>
                </div>
                <div className="project-actions">
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <svg viewBox="0 0 24 24" className="github-icon">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
