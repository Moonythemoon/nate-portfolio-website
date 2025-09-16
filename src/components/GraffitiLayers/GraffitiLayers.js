import React, { useRef, useEffect } from 'react';

const GraffitiLayers = () => {
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const layer4Ref = useRef(null);
  const layer5Ref = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Performance check: disable on mobile and reduced motion
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isMobile || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        // Bounded parallax effect for depth (≤5px movement for performance)
        if (layer1Ref.current) {
          const moveX = Math.max(-5, Math.min(5, x * 0.05));
          const moveY = Math.max(-5, Math.min(5, y * 0.05));
          layer1Ref.current.style.transform = `translateZ(20px) translate(${moveX}px, ${moveY}px)`;
        }
        if (layer2Ref.current) {
          const moveX = Math.max(-5, Math.min(5, x * 0.04));
          const moveY = Math.max(-5, Math.min(5, y * 0.04));
          layer2Ref.current.style.transform = `translateZ(15px) translate(${moveX}px, ${moveY}px)`;
        }
        if (layer3Ref.current) {
          const moveX = Math.max(-5, Math.min(5, x * 0.03));
          const moveY = Math.max(-5, Math.min(5, y * 0.03));
          layer3Ref.current.style.transform = `translateZ(10px) translate(${moveX}px, ${moveY}px)`;
        }
        if (layer4Ref.current) {
          const moveX = Math.max(-5, Math.min(5, x * 0.02));
          const moveY = Math.max(-5, Math.min(5, y * 0.02));
          layer4Ref.current.style.transform = `translateZ(5px) translate(${moveX}px, ${moveY}px)`;
        }
        if (layer5Ref.current) {
          const moveX = Math.max(-5, Math.min(5, x * 0.01));
          const moveY = Math.max(-5, Math.min(5, y * 0.01));
          layer5Ref.current.style.transform = `translateZ(2px) translate(${moveX}px, ${moveY}px)`;
        }
      });
    };

    document.addEventListener('pointermove', handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener('pointermove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Layer 1 - Massive hex-grid network */}
      <div className="graffiti-layer graffiti-layer-1" ref={layer1Ref}>
        <svg width="100%" height="100%" viewBox="0 0 1400 900" className="graffiti-svg">
          <defs>
            <filter id="neonGlow1" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Massive hex grid pattern */}
          <g stroke="var(--neon-cyan)" strokeWidth="1" fill="none" opacity="0.2">
            {Array.from({length: 20}, (_, i) => (
              <path key={i} d={`M${100 + i*60},200 L${130 + i*60},230 L${130 + i*60},300 L${100 + i*60},330 L${70 + i*60},300 L${70 + i*60},230 Z`} strokeDasharray="6,3" filter="url(#neonGlow1)" />
            ))}
            {Array.from({length: 15}, (_, i) => (
              <path key={i} d={`M${200 + i*80},400 L${240 + i*80},430 L${240 + i*80},500 L${200 + i*80},530 L${160 + i*80},500 L${160 + i*80},430 Z`} strokeDasharray="8,4" filter="url(#neonGlow1)" />
            ))}
          </g>
          
          {/* Circuit patterns */}
          <g stroke="var(--neon-cyan)" strokeWidth="1.5" fill="none" opacity="0.3">
            <path d="M50,100 L200,100 L200,150 L350,150 L350,100 L500,100" strokeDasharray="4,2" filter="url(#neonGlow1)" />
            <path d="M900,100 L1050,100 L1050,150 L1200,150 L1200,100 L1350,100" strokeDasharray="4,2" filter="url(#neonGlow1)" />
            <path d="M50,800 L200,800 L200,750 L350,750 L350,800 L500,800" strokeDasharray="4,2" filter="url(#neonGlow1)" />
          </g>
        </svg>
      </div>

      {/* Layer 2 - Wild brush strokes */}
      <div className="graffiti-layer graffiti-layer-2" ref={layer2Ref}>
        <svg width="100%" height="100%" viewBox="0 0 1400 900" className="graffiti-svg">
          <defs>
            <filter id="neonGlow2" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Massive brush strokes */}
          <path d="M0,200 Q300,100 600,200 T1200,200 Q1350,150 1400,200" stroke="var(--neon-pink)" strokeWidth="4" fill="none" opacity="0.6" strokeDasharray="30,20" filter="url(#neonGlow2)" />
          <path d="M0,400 Q400,300 800,400 T1400,400" stroke="var(--neon-purple)" strokeWidth="3" fill="none" opacity="0.5" strokeDasharray="25,15" filter="url(#neonGlow2)" />
          <path d="M0,600 Q200,500 400,600 T800,600 Q1000,550 1200,600 T1400,600" stroke="var(--neon-pink)" strokeWidth="3" fill="none" opacity="0.4" strokeDasharray="20,10" filter="url(#neonGlow2)" />
          <path d="M0,800 Q500,700 1000,800 T1400,800" stroke="var(--neon-purple)" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="15,8" filter="url(#neonGlow2)" />
          
          {/* Vertical strokes */}
          <path d="M200,0 Q150,200 200,400 T200,800 Q250,600 200,900" stroke="var(--neon-cyan)" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="20,15" filter="url(#neonGlow2)" />
          <path d="M1200,0 Q1250,200 1200,400 T1200,800 Q1150,600 1200,900" stroke="var(--neon-lime)" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="20,15" filter="url(#neonGlow2)" />
        </svg>
      </div>

      {/* Layer 3 - Runes and symbols */}
      <div className="graffiti-layer graffiti-layer-3" ref={layer3Ref}>
        <svg width="100%" height="100%" viewBox="0 0 1400 900" className="graffiti-svg">
          <defs>
            <filter id="neonGlow3" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Runes scattered everywhere */}
          <g stroke="var(--neon-amber)" strokeWidth="2" fill="none" opacity="0.4">
            {Array.from({length: 30}, (_, i) => (
              <g key={i}>
                <path d={`M${50 + (i*45) % 1300},${100 + (i*67) % 800} L${70 + (i*45) % 1300},${100 + (i*67) % 800} L${70 + (i*45) % 1300},${120 + (i*67) % 800} L${50 + (i*45) % 1300},${120 + (i*67) % 800} Z`} strokeDasharray="3,2" filter="url(#neonGlow3)" />
                <path d={`M${60 + (i*45) % 1300},${100 + (i*67) % 800} L${60 + (i*45) % 1300},${120 + (i*67) % 800}`} strokeDasharray="2,1" filter="url(#neonGlow3)" />
              </g>
            ))}
          </g>
          
          {/* Tech symbols */}
          <g stroke="var(--neon-lime)" strokeWidth="1.5" fill="none" opacity="0.5">
            {Array.from({length: 20}, (_, i) => (
              <circle key={i} cx={100 + (i*65) % 1200} cy={200 + (i*43) % 700} r="15" strokeDasharray="8,4" filter="url(#neonGlow3)" />
            ))}
          </g>
        </svg>
      </div>

      {/* Layer 4 - Splatters and blobs */}
      <div className="graffiti-layer graffiti-layer-4" ref={layer4Ref}>
        <svg width="100%" height="100%" viewBox="0 0 1400 900" className="graffiti-svg">
          <defs>
            <filter id="neonGlow4" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Massive splatter field */}
          {Array.from({length: 50}, (_, i) => (
            <circle key={i} cx={Math.random() * 1400} cy={Math.random() * 900} r={Math.random() * 8 + 3} fill="var(--neon-amber)" opacity={Math.random() * 0.4 + 0.2} filter="url(#neonGlow4)" />
          ))}
          
          {/* Starbursts everywhere */}
          <g stroke="var(--neon-lime)" strokeWidth="1" fill="none" opacity="0.3">
            {Array.from({length: 25}, (_, i) => (
              <g key={i}>
                <path d={`M${Math.random() * 1400},${Math.random() * 900} L${Math.random() * 1400 + 20},${Math.random() * 900} M${Math.random() * 1400 + 10},${Math.random() * 900 - 10} L${Math.random() * 1400 + 10},${Math.random() * 900 + 10}`} filter="url(#neonGlow4)" />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Layer 5 - Data streams */}
      <div className="graffiti-layer graffiti-layer-5" ref={layer5Ref}>
        <svg width="100%" height="100%" viewBox="0 0 1400 900" className="graffiti-svg">
          <defs>
            <filter id="neonGlow5" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Data streams */}
          <path d="M0,150 Q200,100 400,150 T800,150 Q1000,100 1200,150 T1400,150" stroke="var(--neon-cyan)" strokeWidth="1" fill="none" opacity="0.6" strokeDasharray="15,10" filter="url(#neonGlow5)" />
          <path d="M0,300 Q300,250 600,300 T1200,300 Q1350,250 1400,300" stroke="var(--neon-pink)" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="12,8" filter="url(#neonGlow5)" />
          <path d="M0,450 Q250,400 500,450 T1000,450 Q1250,400 1400,450" stroke="var(--neon-purple)" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="10,6" filter="url(#neonGlow5)" />
          <path d="M0,600 Q350,550 700,600 T1400,600" stroke="var(--neon-lime)" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="8,4" filter="url(#neonGlow5)" />
          <path d="M0,750 Q400,700 800,750 T1400,750" stroke="var(--neon-amber)" strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="6,3" filter="url(#neonGlow5)" />
        </svg>
      </div>
    </>
  );
};

export default GraffitiLayers;
