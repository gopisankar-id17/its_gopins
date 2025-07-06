// Alternative Contact Section Designs

// OPTION 1: Neumorphism Design
const ContactNeumorphism = () => (
  <section id="contact">
    <div style={{
      background: 'linear-gradient(135deg, #e0e0e0 0%, #f0f0f0 100%)',
      padding: '8          <div style={{
            padding: '30px',
            borderRadius: '10px',
            background: '#f8f9fa',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Email</h3>
            <p style={{ color: '#7f8c8d' }}>gopisankar.id17@gmail.com</p>
          </div>
          
          <div style={{
            padding: '30px',
            borderRadius: '10px',
            background: '#f8f9fa',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Phone</h3>
            <p style={{ color: '#7f8c8d' }}>8015840181</p>
          </div>
          
          <div style={{
            padding: '30px',
            borderRadius: '10px',
            background: '#f8f9fa',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>LinkedIn</h3>
            <p style={{ color: '#7f8c8d' }}>Connect with me professionally</p>
          </div>r: '#2c3e50',
      textAlign: 'center',
      minHeight: '60vh',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Neumorphism Contact Card */}
        <div style={{
          background: '#e0e0e0',
          borderRadius: '30px',
          padding: '60px 40px',
          boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '30px',
            color: '#2c3e50',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>Let's Connect</h2>
          
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '40px',
            lineHeight: '1.6',
            color: '#34495e'
          }}>
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <button style={{
              background: '#e0e0e0',
              border: 'none',
              borderRadius: '25px',
              padding: '15px 30px',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#2c3e50',
              cursor: 'pointer',
              boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
              transition: 'all 0.3s ease'
            }}>
              Send Message
            </button>
            
            <button style={{
              background: '#e0e0e0',
              border: 'none',
              borderRadius: '25px',
              padding: '15px 30px',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#2c3e50',
              cursor: 'pointer',
              boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
              transition: 'all 0.3s ease'
            }}>
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// OPTION 2: Neon Glow Design
const ContactNeonGlow = () => (
  <section id="contact">
    <div style={{
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      padding: '80px 0',
      color: '#ffffff',
      textAlign: 'center',
      minHeight: '60vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Neon Grid Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        zIndex: 1
      }}></div>
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Neon Contact Card */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.8)',
          border: '2px solid #00ffff',
          borderRadius: '20px',
          padding: '50px 40px',
          boxShadow: '0 0 50px rgba(0, 255, 255, 0.3), inset 0 0 50px rgba(0, 255, 255, 0.1)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '30px',
            color: '#00ffff',
            textShadow: '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff',
            animation: 'neonPulse 2s ease-in-out infinite'
          }}>CONTACT</h2>
          
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '40px',
            lineHeight: '1.6',
            color: '#ffffff'
          }}>
            Enter the digital realm and let's create something extraordinary together.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <button style={{
              background: 'transparent',
              border: '2px solid #ff00ff',
              borderRadius: '25px',
              padding: '15px 30px',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#ff00ff',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
              transition: 'all 0.3s ease'
            }}>
              SEND MESSAGE
            </button>
            
            <button style={{
              background: 'transparent',
              border: '2px solid #00ff00',
              borderRadius: '25px',
              padding: '15px 30px',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#00ff00',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
              transition: 'all 0.3s ease'
            }}>
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// OPTION 3: Minimalist Card Design
const ContactMinimalist = () => (
  <section id="contact">
    <div style={{
      background: '#ffffff',
      padding: '80px 0',
      color: '#333333',
      textAlign: 'center',
      minHeight: '60vh'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '300',
          marginBottom: '20px',
          color: '#2c3e50'
        }}>Get In Touch</h2>
        
        <div style={{
          width: '60px',
          height: '3px',
          background: '#FF6F61',
          margin: '0 auto 40px',
          borderRadius: '2px'
        }}></div>
        
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '50px',
          lineHeight: '1.6',
          color: '#7f8c8d'
        }}>
          I'm always interested in new opportunities and collaborations.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}>
          <div style={{
            padding: '30px',
            borderRadius: '10px',
            background: '#f8f9fa',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Email</h3>
            <p style={{ color: '#7f8c8d' }}>gopisankar.id17@gmail.com</p>
          </div>
          
          <div style={{
            padding: '30px',
            borderRadius: '10px',
            background: '#f8f9fa',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Phone</h3>
            <p style={{ color: '#7f8c8d' }}>8015840181</p>
          </div>
          
          <div style={{
            padding: '30px',
            borderRadius: '10px',
            background: '#f8f9fa',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>LinkedIn</h3>
            <p style={{ color: '#7f8c8d' }}>Connect with me professionally</p>
          </div>
        </div>
        
        <button style={{
          background: '#FF6F61',
          color: '#ffffff',
          border: 'none',
          borderRadius: '30px',
          padding: '15px 40px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(255, 111, 97, 0.3)'
        }}>
          Start a Conversation
        </button>
      </div>
    </div>
  </section>
);

// OPTION 4: Particle Animation Design
const ContactParticles = () => (
  <section id="contact">
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '80px 0',
      color: '#ffffff',
      textAlign: 'center',
      minHeight: '60vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: '#ffffff',
            borderRadius: '50%',
            opacity: 0.6,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s linear infinite`
          }}
        />
      ))}
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderRadius: '25px',
          padding: '50px 40px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '30px',
            background: 'linear-gradient(45deg, #ffffff, #f0f0f0)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Let's Create Together</h2>
          
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '40px',
            lineHeight: '1.6',
            opacity: 0.9
          }}>
            Transform your ideas into reality with cutting-edge technology and creative solutions.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <button style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '25px',
              padding: '15px 30px',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#ffffff',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Get in Touch
            </button>
            
            <button style={{
              background: 'transparent',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '25px',
              padding: '15px 30px',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#ffffff',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// OPTION 5: Split Screen Design
const ContactSplitScreen = () => (
  <section id="contact">
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: '60vh'
    }}>
      {/* Left Side - Dark */}
      <div style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        padding: '80px 40px',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '30px',
          color: '#FF6F61'
        }}>Ready to Start?</h2>
        
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '40px',
          lineHeight: '1.6',
          opacity: 0.9
        }}>
          I'm excited to hear about your project and discuss how we can bring your vision to life.
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: '#FF6F61',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>📧</div>
            <span>gopisankar.id17@gmail.com</span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: '#28a745',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>📞</div>
            <span>8015840181</span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: '#007BFF',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>💼</div>
            <span>LinkedIn Profile</span>
          </div>
        </div>
      </div>
      
      {/* Right Side - Light */}
      <div style={{
        background: 'linear-gradient(135deg, #ecf0f1 0%, #ffffff 100%)',
        padding: '80px 40px',
        color: '#2c3e50',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <form style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: '15px 20px',
              borderRadius: '10px',
              border: '2px solid #e9ecef',
              fontSize: '1rem',
              background: '#ffffff'
            }}
          />
          
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: '15px 20px',
              borderRadius: '10px',
              border: '2px solid #e9ecef',
              fontSize: '1rem',
              background: '#ffffff'
            }}
          />
          
          <textarea
            placeholder="Your Message"
            rows="5"
            style={{
              padding: '15px 20px',
              borderRadius: '10px',
              border: '2px solid #e9ecef',
              fontSize: '1rem',
              background: '#ffffff',
              resize: 'vertical'
            }}
          />
          
          <button style={{
            background: '#FF6F61',
            color: '#ffffff',
            border: 'none',
            borderRadius: '10px',
            padding: '15px 30px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export {
  ContactNeumorphism,
  ContactNeonGlow,
  ContactMinimalist,
  ContactParticles,
  ContactSplitScreen
};
