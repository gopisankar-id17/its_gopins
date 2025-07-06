import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

// Component imports
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import About from './components/About';
import Expertise from './components/Expertise';
import Education from './components/Education_new';
import Projects from './components/Projects';
import Separator from './components/Separator';

function App() {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:reach4gopisankar@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="app">
      {/* Floating Background Effects */}
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Profile />
        <Separator />
        <About />
        <Separator />
        <Expertise />
        <Separator />
        <Education />
        <Separator />
        <Projects />
        <Separator />
        
        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Get In Touch
            </motion.h2>
            
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="contact-form-wrapper">
                <form onSubmit={handleContactSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Your full name"
                      autoComplete="name"
                      tabIndex="1"
                      onClick={() => console.log('Name input clicked')}
                      onFocus={() => console.log('Name input focused')}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="your.email@example.com"
                      autoComplete="email"
                      tabIndex="2"
                      onClick={() => console.log('Email input clicked')}
                      onFocus={() => console.log('Email input focused')}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      required 
                      placeholder="Tell me about your project or inquiry..."
                      tabIndex="3"
                      onClick={() => console.log('Message textarea clicked')}
                      onFocus={() => console.log('Message textarea focused')}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn" tabIndex="4">
                    <Mail size={20} />
                    Send Message
                  </button>
                </form>
                
                <div className="contact-info">
                  <h4>Let's Connect</h4>
                  <p>Ready to bring your ideas to life? I'd love to hear from you!</p>
                  <div className="contact-details">
                    <p><strong>Email:</strong> reach4gopisankar@gmail.com</p>
                    <p><strong>Phone:</strong> 8015840181</p>
                    <p><strong>Response Time:</strong> Within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      <motion.div 
        className="floating-action-btn"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="#contact">
          <Mail size={24} />
        </a>
      </motion.div>
    </div>
  );
}

export default App;
