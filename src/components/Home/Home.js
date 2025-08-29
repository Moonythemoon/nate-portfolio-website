import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-image">
          <div className="profile-photo">
            <img 
              src="/profile-photo.jpg" 
              alt="Nathan Bussabok" 
              className="profile-image"
            />
          </div>        
        </div>

        <div className="home-text">
          <h1 className="home-title">
            Hi, I'm <span className="highlight">Nathan</span>
          </h1>
          <p className="home-description">
            Hey, I'm Nate. An interior designer who turned tech explorer. 
            Now diving into Computer and Information Systems, discovering how my eye for detail and creative problem-solving skills can thrive in tech. 
            Life's all about unexpected turns, and I'm loving every twist in this journey!
          </p>
          
          <div className="home-buttons">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-social"
            >
              <FaGithub /> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/nate-bussabok" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-social"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a 
              href="mailto:n.nabu213@gmail.com" 
              className="btn btn-social"
            >
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </div>
      

    </section>
  );
};

export default Home;
