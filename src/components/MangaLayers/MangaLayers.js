import React, { useRef, useEffect } from 'react';

const MangaLayers = () => {
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
        
        // Subtle parallax for manga layers
        if (layer1Ref.current) {
          const moveX = Math.max(-3, Math.min(3, x * 0.03));
          const moveY = Math.max(-3, Math.min(3, y * 0.03));
          layer1Ref.current.style.transform = `translateZ(15px) translate(${moveX}px, ${moveY}px)`;
        }
        if (layer2Ref.current) {
          const moveX = Math.max(-2, Math.min(2, x * 0.02));
          const moveY = Math.max(-2, Math.min(2, y * 0.02));
          layer2Ref.current.style.transform = `translateZ(10px) translate(${moveX}px, ${moveY}px)`;
        }
        if (layer3Ref.current) {
          const moveX = Math.max(-1, Math.min(1, x * 0.01));
          const moveY = Math.max(-1, Math.min(1, y * 0.01));
          layer3Ref.current.style.transform = `translateZ(5px) translate(${moveX}px, ${moveY}px)`;
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
      {/* Layer 1 - Manga brush strokes */}
      <div className="manga-layer manga-layer-1" ref={layer1Ref}>
        <svg width="100%" height="100%" viewBox="0 0 1400 900" className="manga-svg">
          <defs>
            <filter id="mangaGlow1" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Manga-style brush strokes */}
          <g stroke="#000000" strokeWidth="2" fill="none" opacity="0.3">
            {/* Dynamic brush strokes */}
            <path d="M100,200 Q300,150 500,200 Q700,250 900,200 Q1100,150 1300,200" strokeDasharray="8,20" filter="url(#mangaGlow1)" />
            <path d="M150,400 Q350,350 550,400 Q750,450 950,400 Q1150,350 1350,400" strokeDasharray="6,15" filter="url(#mangaGlow1)" />
            <path d="M200,600 Q400,550 600,600 Q800,650 1000,600 Q1200,550 1400,600" strokeDasharray="10,25" filter="url(#mangaGlow1)" />
            <path d="M50,300 Q250,250 450,300 Q650,350 850,300 Q1050,250 1250,300" strokeDasharray="5,12" filter="url(#mangaGlow1)" />
            <path d="M300,500 Q500,450 700,500 Q900,550 1100,500 Q1300,450 1500,500" strokeDasharray="7,18" filter="url(#mangaGlow1)" />
            
            {/* Vertical manga strokes */}
            <path d="M200,100 Q180,300 200,500 Q220,700 200,900" strokeDasharray="4,10" filter="url(#mangaGlow1)" />
            <path d="M600,150 Q580,350 600,550 Q620,750 600,950" strokeDasharray="6,14" filter="url(#mangaGlow1)" />
            <path d="M1000,125 Q980,325 1000,525 Q1020,725 1000,925" strokeDasharray="8,20" filter="url(#mangaGlow1)" />
            <path d="M400,200 Q380,400 400,600 Q420,800 400,1000" strokeDasharray="5,12" filter="url(#mangaGlow1)" />
            <path d="M800,175 Q780,375 800,575 Q820,775 800,975" strokeDasharray="7,16" filter="url(#mangaGlow1)" />
          </g>
        </svg>
      </div>

      {/* Layer 2 - Ink splashes and details */}
      <div className="manga-layer manga-layer-2" ref={layer2Ref}>
        <svg width="100%" height="100%" viewBox="0 0 1400 900" className="manga-svg">
          <defs>
            <filter id="mangaGlow2" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Ink splashes */}
          <g fill="#000000" opacity="0.2">
            <circle cx="300" cy="200" r="15" filter="url(#mangaGlow2)" />
            <circle cx="700" cy="350" r="12" filter="url(#mangaGlow2)" />
            <circle cx="1100" cy="500" r="18" filter="url(#mangaGlow2)" />
            <circle cx="500" cy="700" r="10" filter="url(#mangaGlow2)" />
            <circle cx="900" cy="150" r="14" filter="url(#mangaGlow2)" />
            <circle cx="200" cy="600" r="16" filter="url(#mangaGlow2)" />
            <circle cx="1200" cy="300" r="11" filter="url(#mangaGlow2)" />
            <circle cx="400" cy="800" r="13" filter="url(#mangaGlow2)" />
          </g>
          
          {/* Manga-style speed lines */}
          <g stroke="#000000" strokeWidth="1.5" fill="none" opacity="0.25">
            <path d="M100,100 L300,100 M150,120 L350,120 M200,140 L400,140" strokeDasharray="2,8" filter="url(#mangaGlow2)" />
            <path d="M800,200 L1000,200 M850,220 L1050,220 M900,240 L1100,240" strokeDasharray="3,10" filter="url(#mangaGlow2)" />
            <path d="M200,600 L400,600 M250,620 L450,620 M300,640 L500,640" strokeDasharray="2,6" filter="url(#mangaGlow2)" />
            <path d="M900,700 L1100,700 M950,720 L1150,720 M1000,740 L1200,740" strokeDasharray="4,12" filter="url(#mangaGlow2)" />
          </g>
          
          {/* Artistic flourishes */}
          <g stroke="#000000" strokeWidth="1" fill="none" opacity="0.15">
            <path d="M150,100 Q200,80 250,100 Q300,120 350,100" strokeDasharray="15,30" filter="url(#mangaGlow2)" />
            <path d="M550,300 Q600,280 650,300 Q700,320 750,300" strokeDasharray="12,25" filter="url(#mangaGlow2)" />
            <path d="M950,500 Q1000,480 1050,500 Q1100,520 1150,500" strokeDasharray="18,35" filter="url(#mangaGlow2)" />
            <path d="M350,800 Q400,780 450,800 Q500,820 550,800" strokeDasharray="10,20" filter="url(#mangaGlow2)" />
            <path d="M750,100 Q800,80 850,100 Q900,120 950,100" strokeDasharray="14,28" filter="url(#mangaGlow2)" />
          </g>
        </svg>
      </div>

      {/* Layer 3 - Fine manga details */}
      <div className="manga-layer manga-layer-3" ref={layer3Ref}>
        <svg width="100%" height="100%" viewBox="0 0 1400 900" className="manga-svg">
          <defs>
            <filter id="mangaGlow3" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="0.3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Fine manga texture */}
          <g stroke="#000000" strokeWidth="0.5" fill="none" opacity="0.1">
            {/* Hatching patterns */}
            {Array.from({length: 20}, (_, i) => (
              <path key={i} d={`M${50 + i*70},${100 + (i*23) % 800} L${100 + i*70},${100 + (i*23) % 800}`} strokeDasharray="1,3" filter="url(#mangaGlow3)" />
            ))}
            {Array.from({length: 15}, (_, i) => (
              <path key={i} d={`M${100 + (i*35) % 1300},${200 + i*45} L${100 + (i*35) % 1300},${250 + i*45}`} strokeDasharray="0.5,2" filter="url(#mangaGlow3)" />
            ))}
          </g>
          
          {/* Manga-style dots */}
          <g fill="#000000" opacity="0.08">
            {Array.from({length: 50}, (_, i) => (
              <circle key={i} cx={Math.random() * 1400} cy={Math.random() * 900} r={Math.random() * 2 + 0.5} filter="url(#mangaGlow3)" />
            ))}
          </g>
          
          {/* Subtle manga highlights */}
          <g stroke="#000000" strokeWidth="0.3" fill="none" opacity="0.05">
            <path d="M300,200 Q400,180 500,200 Q600,220 700,200" strokeDasharray="0.5,4" filter="url(#mangaGlow3)" />
            <path d="M800,400 Q900,380 1000,400 Q1100,420 1200,400" strokeDasharray="0.3,3" filter="url(#mangaGlow3)" />
            <path d="M200,600 Q300,580 400,600 Q500,620 600,600" strokeDasharray="0.4,5" filter="url(#mangaGlow3)" />
            <path d="M700,800 Q800,780 900,800 Q1000,820 1100,800" strokeDasharray="0.2,2" filter="url(#mangaGlow3)" />
          </g>
        </svg>
      </div>
    </>
  );
};

export default MangaLayers;
