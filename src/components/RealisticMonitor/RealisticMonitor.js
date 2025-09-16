import React, { useRef, useEffect } from 'react';

const RealisticMonitor = ({ children }) => {
  const monitorRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Performance check: disable on mobile and reduced motion
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isMobile || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e) => {
      if (!monitorRef.current) return;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const rect = monitorRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) / rect.width;
        const deltaY = (e.clientY - centerY) / rect.height;
        
        const rotateX = Math.max(-5, Math.min(5, deltaY * 5));
        const rotateY = Math.max(-5, Math.min(5, deltaX * 5));
        
        monitorRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
      });
    };

    const handleMouseLeave = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      if (monitorRef.current) {
        monitorRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.1)';
      }
    };

    const monitor = monitorRef.current;
    if (monitor) {
      monitor.addEventListener('pointermove', handleMouseMove, { passive: true });
      monitor.addEventListener('pointerleave', handleMouseLeave);
    }

    return () => {
      if (monitor) {
        monitor.removeEventListener('pointermove', handleMouseMove);
        monitor.removeEventListener('pointerleave', handleMouseLeave);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="desktop-setup" ref={monitorRef}>
      {/* Desk Surface */}
      <div className="desk-surface"></div>
      
      {/* Monitor */}
      <div className="monitor-container">
        <svg
          width="800"
          height="600"
          viewBox="0 0 800 600"
          className="monitor-svg"
        >
          <defs>
            <linearGradient id="bezelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2a2a2a" />
              <stop offset="50%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#0d0d0d" />
            </linearGradient>
            
            <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#333" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#000" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#111" stopOpacity="0.8" />
            </linearGradient>
            
            <linearGradient id="standGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3a3a3a" />
              <stop offset="50%" stopColor="#2a2a2a" />
              <stop offset="100%" stopColor="#1a1a1a" />
            </linearGradient>
            
            <filter id="ledGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Monitor stand base */}
          <ellipse cx="400" cy="580" rx="60" ry="10" fill="#000" opacity="0.3" />
          <rect x="350" y="520" width="100" height="60" rx="5" fill="url(#standGradient)" />
          
          {/* Monitor bezel */}
          <rect x="50" y="50" width="700" height="450" rx="15" fill="url(#bezelGradient)" />
          
          {/* Screen */}
          <rect x="70" y="70" width="660" height="410" rx="8" fill="url(#glassGradient)" />
          
          {/* Power LED */}
          <circle cx="680" cy="60" r="3" fill="#00ff00" filter="url(#ledGlow)" />
          
          {/* Screen content */}
          <foreignObject x="80" y="80" width="640" height="390">
            <div className="monitor-screen-content">
              {children}
            </div>
          </foreignObject>
        </svg>
      </div>
      
      {/* Keyboard */}
      <div className="keyboard">
        <svg width="400" height="120" viewBox="0 0 400 120">
          <defs>
            <linearGradient id="keyboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#0d0d0d" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="400" height="120" rx="8" fill="url(#keyboardGradient)" />
          <rect x="10" y="10" width="380" height="100" rx="4" fill="#000" />
          
          {/* Key rows */}
          <rect x="20" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="40" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="60" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="80" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="100" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="120" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="140" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="160" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="180" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="200" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="220" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="240" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="260" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="280" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="300" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="320" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="340" y="20" width="15" height="15" rx="2" fill="#333" />
          <rect x="360" y="20" width="15" height="15" rx="2" fill="#333" />
          
          {/* Space bar */}
          <rect x="150" y="60" width="100" height="20" rx="3" fill="#333" />
        </svg>
      </div>
      
      {/* Mouse */}
      <div className="mouse">
        <svg width="60" height="100" viewBox="0 0 60 100">
          <defs>
            <linearGradient id="mouseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#0d0d0d" />
            </linearGradient>
          </defs>
          <ellipse cx="30" cy="50" rx="25" ry="45" fill="url(#mouseGradient)" />
          <ellipse cx="30" cy="30" rx="20" ry="25" fill="#000" />
          
          {/* Scroll wheel */}
          <rect x="25" y="25" width="10" height="3" rx="1" fill="#333" />
        </svg>
      </div>
      
      {/* Cables */}
      <div className="cables">
        <svg width="200" height="100" viewBox="0 0 200 100">
          <path d="M0,50 Q50,30 100,50 T200,50" stroke="#333" strokeWidth="3" fill="none" />
          <path d="M0,60 Q50,40 100,60 T200,60" stroke="#333" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  );
};

export default RealisticMonitor;
