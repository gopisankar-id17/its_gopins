import React, { useEffect, useState } from 'react';

function SniperCursorOverlay() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '30px',
        height: '30px',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    >
      <svg width="30" height="30">
        <circle cx="15" cy="15" r="14" stroke="red" strokeWidth="1" fill="none" />
        <line x1="15" y1="0" x2="15" y2="30" stroke="red" strokeWidth="1" />
        <line x1="0" y1="15" x2="30" y2="15" stroke="red" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default SniperCursorOverlay;
