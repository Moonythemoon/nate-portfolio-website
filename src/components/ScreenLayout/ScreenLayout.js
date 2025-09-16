import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ScreenLayout = () => {
  return (
    <div className="screen-layout">
      {/* Left Panel - Portrait */}
      <div className="screen-left-panel">
        <div className="portrait-container">
          <img 
            src="/profile-photo.jpg" 
            alt="Nathan Bussabok" 
            className="portrait-image"
          />
        </div>
      </div>
      
      {/* Right Panel - Content */}
      <div className="screen-right-panel">
        <h1 className="screen-title">
          Hi, I'm <span className="highlight">Nathan</span>
        </h1>
        <h2 className="screen-subtitle">Architect → Developer</h2>
        <p className="screen-bio">
          Hey, I'm Nate. An interior designer who turned tech explorer. 
          Now diving into Computer and Information Systems, discovering how my eye for detail and creative problem-solving skills can thrive in tech. 
          Life's all about unexpected turns, and I'm loving every twist in this journey!
        </p>
        
        <div className="screen-links">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="neon-link"
          >
            <FaGithub /> GitHub
          </a>
          <a 
            href="https://linkedin.com/in/nate-bussabok" 
            target="_blank" 
            rel="noopener noreferrer"
            className="neon-link"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a 
            href="mailto:n.nabu213@gmail.com" 
            className="neon-link"
          >
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ScreenLayout;
