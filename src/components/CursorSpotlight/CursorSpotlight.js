import React, { useEffect, useRef } from 'react';

const CursorSpotlight = () => {
  const spotlightRef = useRef(null);
  const cyanHaloRef = useRef(null);
  const pinkHaloRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Performance check: disable on mobile and reduced motion
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isMobile || prefersReducedMotion) {
      return;
    }

    const updateSpotlight = (e) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        if (spotlightRef.current) {
          spotlightRef.current.style.background = 
            `radial-gradient(300px circle at ${x}% ${y}%, rgba(255,255,255,0.08), transparent 70%)`;
        }
        
        if (cyanHaloRef.current) {
          const cyanX = x + 8;
          const cyanY = y + 8;
          cyanHaloRef.current.style.background = 
            `radial-gradient(300px circle at ${cyanX}% ${cyanY}%, rgba(60, 248, 255, 0.06) 0%, transparent 70%)`;
        }
        
        if (pinkHaloRef.current) {
          const pinkX = x - 8;
          const pinkY = y - 8;
          pinkHaloRef.current.style.background = 
            `radial-gradient(300px circle at ${pinkX}% ${pinkY}%, rgba(255, 56, 212, 0.06) 0%, transparent 70%)`;
        }
      });
    };

    const handleMouseMove = (e) => {
      updateSpotlight(e);
    };

    document.addEventListener('pointermove', handleMouseMove, { passive: true });

    // Cleanup
    return () => {
      document.removeEventListener('pointermove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main spotlight */}
      <div
        ref={spotlightRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(300px circle at 50% 50%, rgba(255,255,255,0.08), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 2,
          willChange: 'background'
        }}
      />
      
      {/* Cyan chromatic aberration halo */}
      <div
        ref={cyanHaloRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(300px circle at 50% 50%, rgba(60, 248, 255, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
          mixBlendMode: 'screen',
          willChange: 'background'
        }}
      />
      
      {/* Pink chromatic aberration halo */}
      <div
        ref={pinkHaloRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(300px circle at 50% 50%, rgba(255, 56, 212, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
          mixBlendMode: 'screen',
          willChange: 'background'
        }}
      />
    </>
  );
};

export default CursorSpotlight;
