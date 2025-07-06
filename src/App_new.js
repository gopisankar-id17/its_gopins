import React from 'react';
import './App.css';
import SniperCursorOverlay from './components/SniperCursorOverlay';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Expertise from './components/Expertise';
import Education from './components/Education_new';
import Projects from './components/Projects';
import Separator from './components/Separator';

function App() {
  // Add state for cursor position for blob morphing
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });
  const [isLocked, setIsLocked] = React.useState(true);
  const [swipePosition, setSwipePosition] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSwipeStart = (e) => {
    setIsDragging(true);
    const startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    setSwipePosition(startX);
  };

  const handleSwipeMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const diff = currentX - swipePosition;
    
    if (diff > 150) { // Swipe threshold
      setIsLocked(false);
      setIsDragging(false);
    }
  };

  const handleSwipeEnd = () => {
    setIsDragging(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:reach4gopisankar@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Show success message
    alert('Email client opened! Please send the email to complete your message.');
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleSwipeMove);
      document.addEventListener('mouseup', handleSwipeEnd);
      document.addEventListener('touchmove', handleSwipeMove);
      document.addEventListener('touchend', handleSwipeEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleSwipeMove);
      document.removeEventListener('mouseup', handleSwipeEnd);
      document.removeEventListener('touchmove', handleSwipeMove);
      document.removeEventListener('touchend', handleSwipeEnd);
    };
  }, [isDragging, swipePosition]);

  return (
    <div className="app">
      <SniperCursorOverlay />
      <Navbar />
      <section id="home"><Profile /></section>
      <Separator />
      <section id="about"><About /></section>
      <Separator />
      <section id="expertise"><Expertise /></section>
      <Separator />
      <section id="education"><Education /></section>
      <Separator />
      <section id="projects"><Projects /></section>
      <Separator />
      <section id="contact">
        <div style={{
          background: 'linear-gradient(135deg, #e0e0e0 0%, #f0f0f0 100%)',
          minHeight: '100vh',
          padding: '80px 20px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated Background Orbs */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255,111,97,0.3) 0%, rgba(255,111,97,0.1) 50%, transparent 100%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
          
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '10%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(0,123,255,0.3) 0%, rgba(0,123,255,0.1) 50%, transparent 100%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            animation: 'float 8s ease-in-out infinite reverse'
          }}></div>

          {/* Liquid Blob Background */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '400px',
            zIndex: '1'
          }}>
            <svg width="100%" height="100%" viewBox="0 0 600 400">
              <defs>
                <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: 'rgba(255,111,97,0.1)', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: 'rgba(0,123,255,0.1)', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <path d="M300,50 Q450,100 500,200 Q450,300 300,350 Q150,300 100,200 Q150,100 300,50 Z" 
                    fill="url(#blobGradient)" 
                    style={{
                      filter: 'blur(2px)',
                      animation: 'blobMorph 10s ease-in-out infinite'
                    }}
              />
            </svg>
          </div>

          {/* Interactive Cursor Blob */}
          <div style={{
            position: 'absolute',
            left: `${cursorPosition.x - 50}px`,
            top: `${cursorPosition.y - 50}px`,
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(255,111,97,0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(20px)',
            pointerEvents: 'none',
            transition: 'all 0.1s ease',
            zIndex: '1'
          }}></div>

          <div style={{
            position: 'relative',
            zIndex: '2'
          }}>
            {/* Lock Screen / Contact Form */}
            {isLocked ? (
              /* Lock Screen */
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '25px',
                padding: '60px 40px',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                maxWidth: '600px',
                margin: '0 auto',
                userSelect: 'none'
              }}>
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '30px',
                  animation: 'lockGlow 2s ease-in-out infinite'
                }}>🔒</div>
                
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: '#FF6F61',
                  textShadow: '0 0 20px rgba(255, 111, 97, 0.5)'
                }}>Contact Locked</h2>
                
                <p style={{
                  fontSize: '1.2rem',
                  marginBottom: '40px',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  Swipe right to unlock and reveal the contact form
                </p>
                
                {/* Swipe Slider */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 111, 97, 0.3)',
                  borderRadius: '50px',
                  padding: '8px',
                  position: 'relative',
                  maxWidth: '300px',
                  margin: '0 auto',
                  cursor: 'pointer'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 20px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.9rem'
                  }}>
                    <span>Swipe to unlock</span>
                    <span>→</span>
                  </div>
                  
                  <div 
                    style={{
                      position: 'absolute',
                      left: '8px',
                      top: '8px',
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(45deg, #FF6F61, #007BFF)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(255, 111, 97, 0.4)',
                      cursor: 'grab',
                      animation: 'slideHint 3s ease-in-out infinite'
                    }}
                    onMouseDown={handleSwipeStart}
                    onTouchStart={handleSwipeStart}
                  >
                    🔓
                  </div>
                </div>
                
                <p style={{
                  fontSize: '0.9rem',
                  marginTop: '20px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontStyle: 'italic'
                }}>
                  Or click the unlock icon and drag right
                </p>
              </div>
            ) : (
              /* Contact Form */
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '25px',
                padding: '50px 40px',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                maxWidth: '800px',
                margin: '0 auto',
                animation: 'slideInFromRight 0.8s ease-out'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '30px'
                }}>
                  <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#FF6F61',
                    textShadow: '0 0 20px rgba(255, 111, 97, 0.5)',
                    margin: 0
                  }}>Get In Touch</h2>
                  
                  <button 
                    onClick={() => setIsLocked(true)}
                    style={{
                      background: 'rgba(255, 111, 97, 0.2)',
                      border: '1px solid rgba(255, 111, 97, 0.3)',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontSize: '1.2rem'
                    }}
                  >
                    🔒
                  </button>
                </div>
                
                <form 
                  onSubmit={handleSubmit}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                  }}
                >
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px'
                  }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '15px',
                        padding: '15px 20px',
                        fontSize: '1rem',
                        color: '#ffffff',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                    />
                    
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '15px',
                        padding: '15px 20px',
                        fontSize: '1rem',
                        color: '#ffffff',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                  
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '15px',
                      padding: '15px 20px',
                      fontSize: '1rem',
                      color: '#ffffff',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  />
                  
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '15px',
                      padding: '15px 20px',
                      fontSize: '1rem',
                      color: '#ffffff',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'all 0.3s ease'
                    }}
                  />
                  
                  <button
                    type="submit"
                    style={{
                      background: 'linear-gradient(45deg, #FF6F61, #007BFF)',
                      border: 'none',
                      borderRadius: '15px',
                      padding: '15px 30px',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#ffffff',
                      cursor: 'pointer',
                      boxShadow: '0 8px 25px rgba(255, 111, 97, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 12px 35px rgba(255, 111, 97, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 8px 25px rgba(255, 111, 97, 0.3)';
                    }}
                  >
                    Send Message ✉️
                  </button>
                </form>
              </div>
            )}
          </div>
          
          {/* Floating Action Buttons */}
          <div style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            zIndex: '1000'
          }}>
            {/* Email FAB */}
            <a href="mailto:reach4gopisankar@gmail.com" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              background: 'rgba(255, 111, 97, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 111, 97, 0.3)',
              borderRadius: '50%',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1.5rem',
              boxShadow: '0 8px 25px rgba(255, 111, 97, 0.4)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px) scale(1.1)';
              e.target.style.boxShadow = '0 15px 35px rgba(255, 111, 97, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(255, 111, 97, 0.4)';
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            
            {/* LinkedIn FAB */}
            <a href="https://www.linkedin.com/in/gopisankarm05/" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              background: 'rgba(0, 123, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 123, 255, 0.3)',
              borderRadius: '50%',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1.5rem',
              boxShadow: '0 8px 25px rgba(0, 123, 255, 0.4)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px) scale(1.1)';
              e.target.style.boxShadow = '0 15px 35px rgba(0, 123, 255, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 123, 255, 0.4)';
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            {/* GitHub FAB */}
            <a href="https://github.com/gopisankar-id17" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              background: 'rgba(100, 100, 100, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(100, 100, 100, 0.3)',
              borderRadius: '50%',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1.5rem',
              boxShadow: '0 8px 25px rgba(100, 100, 100, 0.4)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px) scale(1.1)';
              e.target.style.boxShadow = '0 15px 35px rgba(100, 100, 100, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(100, 100, 100, 0.4)';
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <Separator />
    </div>
  );
}

export default App;
