import React from 'react';
import { 
  FaMountain, FaPencilAlt, FaCamera, FaGamepad, 
  FaFilm, FaBook 
} from 'react-icons/fa';
import './Hobbies.css';

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      name: 'Trekking',
      icon: <FaMountain />,
      description: 'Exploring scenic trails with friends, discovering new landscapes and enjoying nature.',
      color: '#4CAF50'
    },
    {
      id: 2,
      name: 'Drawing',
      icon: <FaPencilAlt />,
      description: 'Casually drawing pictures of places, people, or doodling imaginative monsters for creative fulfillment.',
      color: '#FF9800'
    },
    {
      id: 3,
      name: 'Photography',
      icon: <FaCamera />,
      description: 'Passionate about capturing moments while trekking and exploring both cityscapes and nature.',
      color: '#2196F3',
      link: '/photography'
    },
    {
      id: 4,
      name: 'Gaming',
      icon: <FaGamepad />,
      description: 'Enthusiastic about playing on computer, mobile and board games with friends.',
      color: '#9C27B0'
    },
    {
      id: 5,
      name: 'Movies & Music',
      icon: <FaFilm />,
      description: 'Enjoying the art of storytelling movies, especially those with captivating soundtracks.',
      color: '#E91E63'
    },
    {
      id: 6,
      name: 'Reading',
      icon: <FaBook />,
      description: 'Indulging in fantasy, sci-fi, conceptual, and horror novels enhancing experiences.',
      color: '#795548'
    }
  ];

  return (
    <section id="hobbies" className="hobbies-section">
      <div className="section-container">
        <h2 className="section-title">Hobbies & Interests</h2>
        
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <div 
              key={hobby.id} 
              className={`hobby-card ${hobby.link ? 'clickable' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={hobby.link ? () => window.open(hobby.link, '_blank') : undefined}
            >
              <div className="hobby-icon" style={{ color: hobby.color }}>
                {hobby.icon}
              </div>
              <h3 className="hobby-name">
                {hobby.name}
                {hobby.link && <span className="link-indicator">↗</span>}
              </h3>
              <p className="hobby-description">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
