import React, { useRef, useEffect } from 'react';

const MonitorWrapper = ({ children }) => {
  const wrapperRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!wrapperRef.current) return;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const rect = wrapperRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) / rect.width;
        const deltaY = (e.clientY - centerY) / rect.height;
        
        const rotateX = Math.max(-10, Math.min(10, deltaY * 10));
        const rotateY = Math.max(-10, Math.min(10, deltaX * 10));
        
        wrapperRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    const handleMouseLeave = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }
    };

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('mousemove', handleMouseMove);
      wrapper.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener('mousemove', handleMouseMove);
        wrapper.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="monitor-wrapper" ref={wrapperRef}>
      <div className="monitor-bezel">
        <div className="monitor-screen">
          {children}
          <div className="scanlines"></div>
          <div className="hover-glitch"></div>
        </div>
      </div>
      <div className="monitor-stand"></div>
    </div>
  );
};

export default MonitorWrapper;
