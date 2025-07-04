import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './LightBulb.css';

const LightBulb = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isSwinging, setIsSwinging] = useState(false);
  const [isPulling, setIsPulling] = useState(false);

  const handlePullWire = () => {
    setIsPulling(true);
    setIsSwinging(true);
    
    // Add delay to make the pull feel realistic
    setTimeout(() => {
      toggleTheme();
      setIsPulling(false);
    }, 300);

    // Stop swinging after animation
    setTimeout(() => {
      setIsSwinging(false);
    }, 1500);
  };

  return (
    <div className="light-bulb-container">
      {/* Ceiling attachment */}
      <div className="ceiling-attachment"></div>
      
      {/* Wire */}
      <div 
        className={`wire ${isPulling ? 'pulling' : ''} ${isSwinging ? 'swinging' : ''}`}
        onClick={handlePullWire}
        title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        <div className="wire-segment wire-1"></div>
        <div className="wire-segment wire-2"></div>
        <div className="wire-segment wire-3"></div>
      </div>
      
      {/* Light bulb */}
      <div 
        className={`bulb-container ${isSwinging ? 'swinging' : ''}`}
        onClick={handlePullWire}
      >
        <div className={`light-bulb ${isDarkMode ? 'off' : 'on'}`}>
          {/* Bulb base/screw */}
          <div className="bulb-base">
            <div className="screw-thread"></div>
            <div className="screw-thread"></div>
            <div className="screw-thread"></div>
          </div>
          
          {/* Bulb glass */}
          <div className="bulb-glass">
            <div className="filament">
              <div className="filament-wire filament-1"></div>
              <div className="filament-wire filament-2"></div>
              <div className="filament-support"></div>
            </div>
            
            {/* Light glow effect */}
            {!isDarkMode && (
              <div className="light-glow">
                <div className="glow-inner"></div>
                <div className="glow-outer"></div>
              </div>
            )}
          </div>
          
          {/* Light rays when on */}
          {!isDarkMode && (
            <div className="light-rays">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="light-ray" 
                  style={{ '--ray-angle': `${i * 45}deg` }}
                ></div>
              ))}
            </div>
          )}
        </div>
        
        {/* Pull indicator */}
        <div className="pull-indicator">
          <span>💡 {isDarkMode ? 'Turn On' : 'Turn Off'}</span>
        </div>
      </div>
    </div>
  );
};

export default LightBulb;
