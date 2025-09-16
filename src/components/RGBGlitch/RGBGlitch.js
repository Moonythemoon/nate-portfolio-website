import React, { useRef, useEffect } from 'react';

const RGBGlitch = ({ children, imageSrc }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create enhanced RGB glitch layers
    const createGlitchLayer = (className, filter, delay) => {
      const layer = document.createElement('div');
      layer.className = `cyber-glitch-layer ${className}`;
      layer.style.position = 'absolute';
      layer.style.top = '0';
      layer.style.left = '0';
      layer.style.width = '100%';
      layer.style.height = '100%';
      layer.style.backgroundImage = `url('${imageSrc}')`;
      layer.style.backgroundSize = 'cover';
      layer.style.backgroundPosition = 'center';
      layer.style.borderRadius = '50%';
      layer.style.filter = filter;
      layer.style.animationDelay = delay;
      layer.style.pointerEvents = 'none';
      layer.style.zIndex = '11';
      container.appendChild(layer);
    };

    // Add RGB layers with staggered timing
    createGlitchLayer('red', 'hue-rotate(0deg) saturate(3) contrast(1.2)', '0ms');
    createGlitchLayer('green', 'hue-rotate(120deg) saturate(3) contrast(1.2)', '40ms');
    createGlitchLayer('blue', 'hue-rotate(240deg) saturate(3) contrast(1.2)', '80ms');

    // Add datamosh layer
    const datamoshLayer = document.createElement('div');
    datamoshLayer.className = 'datamosh-layer';
    datamoshLayer.style.position = 'absolute';
    datamoshLayer.style.top = '0';
    datamoshLayer.style.left = '0';
    datamoshLayer.style.width = '100%';
    datamoshLayer.style.height = '100%';
    datamoshLayer.style.backgroundImage = `url('${imageSrc}')`;
    datamoshLayer.style.backgroundSize = 'cover';
    datamoshLayer.style.backgroundPosition = 'center';
    datamoshLayer.style.borderRadius = '50%';
    datamoshLayer.style.filter = 'contrast(1.1) brightness(1.1)';
    datamoshLayer.style.pointerEvents = 'none';
    datamoshLayer.style.zIndex = '12';
    container.appendChild(datamoshLayer);

    // Cleanup function
    return () => {
      const layers = container.querySelectorAll('.cyber-glitch-layer, .datamosh-layer');
      layers.forEach(layer => layer.remove());
    };
  }, [imageSrc]);

  return (
    <div className="cyber-glitch-container" ref={containerRef}>
      {children}
    </div>
  );
};

export default RGBGlitch;
