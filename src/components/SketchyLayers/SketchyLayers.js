import React, { useRef, useEffect } from 'react';

const SketchyLayers = () => {
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
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
        
        // Subtle parallax for sketchy layers
        if (layer1Ref.current) {
          const moveX = Math.max(-2, Math.min(2, x * 0.02));
          const moveY = Math.max(-2, Math.min(2, y * 0.02));
          layer1Ref.current.style.transform = `translateZ(10px) translate(${moveX}px, ${moveY}px)`;
        }
        if (layer2Ref.current) {
          const moveX = Math.max(-1, Math.min(1, x * 0.01));
          const moveY = Math.max(-1, Math.min(1, y * 0.01));
          layer2Ref.current.style.transform = `translateZ(5px) translate(${moveX}px, ${moveY}px)`;
        }
        if (layer3Ref.current) {
          const moveX = Math.max(-0.5, Math.min(0.5, x * 0.005));
          const moveY = Math.max(-0.5, Math.min(0.5, y * 0.005));
          layer3Ref.current.style.transform = `translateZ(2px) translate(${moveX}px, ${moveY}px)`;
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
      {/* Layer 1 - Pencil sketch lines */}
      <div className="sketchy-layer sketchy-layer-1" ref={layer1Ref}>
        <svg width="100%" height="100%" viewBox="0 0 1400 900" className="sketchy-svg">
          <defs>
            <filter id="pencilGlow1" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="0.3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Hand-drawn sketch lines with varying pressure */}
          <g stroke="#ffffff" strokeWidth="0.8" fill="none" opacity="0.4">
            {/* Contour lines */}
            <path d="M50,150 Q150,120 250,150 Q350,180 450,150 Q550,120 650,150" strokeDasharray="3,8" filter="url(#pencilGlow1)" />
            <path d="M100,300 Q200,270 300,300 Q400,330 500,300 Q600,270 700,300" strokeDasharray="2,6" filter="url(#pencilGlow1)" />
            <path d="M150,450 Q250,420 350,450 Q450,480 550,450 Q650,420 750,450" strokeDasharray="4,10" filter="url(#pencilGlow1)" />
            <path d="M200,600 Q300,570 400,600 Q500,630 600,600 Q700,570 800,600" strokeDasharray="3,7" filter="url(#pencilGlow1)" />
            <path d="M250,750 Q350,720 450,750 Q550,780 650,750 Q750,720 850,750" strokeDasharray="2,5" filter="url(#pencilGlow1)" />
            
            {/* Vertical sketch lines */}
            <path d="M200,50 Q180,150 200,250 Q220,350 200,450 Q180,550 200,650" strokeDasharray="3,9" filter="url(#pencilGlow1)" />
            <path d="M500,100 Q480,200 500,300 Q520,400 500,500 Q480,600 500,700" strokeDasharray="2,7" filter="url(#pencilGlow1)" />
            <path d="M800,75 Q780,175 800,275 Q820,375 800,475 Q780,575 800,675" strokeDasharray="4,11" filter="url(#pencilGlow1)" />
            <path d="M1100,125 Q1080,225 1100,325 Q1120,425 1100,525 Q1080,625 1100,725" strokeDasharray="3,8" filter="url(#pencilGlow1)" />
          </g>
        </svg>
      </div>

      {/* Layer 2 - Brush strokes and shading */}
      <div className="sketchy-layer sketchy-layer-2" ref={layer2Ref}>
        <svg width="100%" height="100%" viewBox="0 0 1400 900" className="sketchy-svg">
          <defs>
            <filter id="brushGlow2" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Brush stroke shading */}
          <g stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.3">
            {/* Hatching strokes */}
            <path d="M100,200 L300,200 M150,250 L350,250 M200,300 L400,300" strokeDasharray="1,3" filter="url(#brushGlow2)" />
            <path d="M500,350 L700,350 M550,400 L750,400 M600,450 L800,450" strokeDasharray="2,4" filter="url(#brushGlow2)" />
            <path d="M900,500 L1100,500 M950,550 L1150,550 M1000,600 L1200,600" strokeDasharray="1,2" filter="url(#brushGlow2)" />
            
            {/* Cross-hatching */}
            <path d="M200,400 L200,600 M250,400 L250,600 M300,400 L300,600" strokeDasharray="1,4" filter="url(#brushGlow2)" />
            <path d="M600,500 L600,700 M650,500 L650,700 M700,500 L700,700" strokeDasharray="2,3" filter="url(#brushGlow2)" />
            <path d="M1000,300 L1000,500 M1050,300 L1050,500 M1100,300 L1100,500" strokeDasharray="1,5" filter="url(#brushGlow2)" />
          </g>
          
          {/* Artistic scribbles */}
          <g stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.25">
            <path d="M150,100 Q200,80 250,100 Q300,120 350,100 Q400,80 450,100" strokeDasharray="5,15" filter="url(#brushGlow2)" />
            <path d="M550,200 Q600,180 650,200 Q700,220 750,200 Q800,180 850,200" strokeDasharray="3,12" filter="url(#brushGlow2)" />
            <path d="M950,300 Q1000,280 1050,300 Q1100,320 1150,300 Q1200,280 1250,300" strokeDasharray="4,18" filter="url(#brushGlow2)" />
            <path d="M350,700 Q400,680 450,700 Q500,720 550,700 Q600,680 650,700" strokeDasharray="2,8" filter="url(#brushGlow2)" />
            <path d="M750,800 Q800,780 850,800 Q900,820 950,800 Q1000,780 1050,800" strokeDasharray="6,20" filter="url(#brushGlow2)" />
          </g>
        </svg>
      </div>

      {/* Layer 3 - Fine details and texture */}
      <div className="sketchy-layer sketchy-layer-3" ref={layer3Ref}>
        <svg width="100%" height="100%" viewBox="0 0 1400 900" className="sketchy-svg">
          <defs>
            <filter id="detailGlow3" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="0.2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Fine pencil details */}
          <g stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.2">
            {/* Texture lines */}
            {Array.from({length: 25}, (_, i) => (
              <path key={i} d={`M${50 + i*55},${100 + (i*17) % 800} L${100 + i*55},${100 + (i*17) % 800}`} strokeDasharray="1,2" filter="url(#detailGlow3)" />
            ))}
            {Array.from({length: 20}, (_, i) => (
              <path key={i} d={`M${100 + (i*25) % 1300},${200 + i*35} L${100 + (i*25) % 1300},${250 + i*35}`} strokeDasharray="0.5,1" filter="url(#detailGlow3)" />
            ))}
          </g>
          
          {/* Artistic dots and marks */}
          <g fill="#ffffff" opacity="0.15">
            {Array.from({length: 40}, (_, i) => (
              <circle key={i} cx={Math.random() * 1400} cy={Math.random() * 900} r={Math.random() * 1.5 + 0.5} filter="url(#detailGlow3)" />
            ))}
          </g>
          
          {/* Sketchy highlights */}
          <g stroke="#ffffff" strokeWidth="0.3" fill="none" opacity="0.1">
            <path d="M300,200 Q400,180 500,200 Q600,220 700,200" strokeDasharray="0.5,3" filter="url(#detailGlow3)" />
            <path d="M800,400 Q900,380 1000,400 Q1100,420 1200,400" strokeDasharray="0.3,2" filter="url(#detailGlow3)" />
            <path d="M200,600 Q300,580 400,600 Q500,620 600,600" strokeDasharray="0.4,4" filter="url(#detailGlow3)" />
            <path d="M700,800 Q800,780 900,800 Q1000,820 1100,800" strokeDasharray="0.2,1" filter="url(#detailGlow3)" />
          </g>
        </svg>
      </div>
    </>
  );
};

export default SketchyLayers;
