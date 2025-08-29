import React, { useState } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, 
  FaDatabase, FaMobile, FaTools, FaDrawPolygon,
  FaRulerCombined, FaPalette, FaCamera, FaPencilRuler
} from 'react-icons/fa';
import { SiMongodb, SiPostman, SiAutocad, SiSketchup } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = {
    architecture: {
      name: 'Architecture & Design',
      icon: <FaDrawPolygon />,
      skills: [
        { name: 'AutoCAD', icon: <SiAutocad />, color: '#D92229' },
        { name: 'SketchUp', icon: <SiSketchup />, color: '#005F9E' },
        { name: 'Lumion', icon: <FaPalette />, color: '#00A3E0' },
        { name: 'V-ray', icon: <FaCamera />, color: '#4A90E2' },
        { name: 'Photoshop', icon: <FaPalette />, color: '#31A8FF' },
        { name: 'Illustrator', icon: <FaPencilRuler />, color: '#FF9A00' },
        { name: 'Spatial Planning', icon: <FaRulerCombined />, color: '#A68E46' },
        { name: 'Design Theory', icon: <FaDrawPolygon />, color: '#735A2C' }
      ]
    },
    frontend: {
      name: 'Frontend',
      icon: <FaHtml5 />,
      skills: [
        { name: 'HTML', icon: <FaHtml5 />, color: '#e34f26' },
        { name: 'CSS', icon: <FaCss3Alt />, color: '#1572b6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
        { name: 'React', icon: <FaReact />, color: '#61dafb' },
        { name: 'React Native', icon: <FaMobile />, color: '#61dafb' }
      ]
    },
    backend: {
      name: 'Backend',
      icon: <FaNodeJs />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Java', icon: <FaJava />, color: '#ed8b00' },
        { name: 'Firebase', icon: <FaDatabase />, color: '#FFCA28' }
      ]
    },
    database: {
      name: 'Database',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
        { name: 'MySQL', icon: <FaDatabase />, color: '#336791' }
      ]
    },
    tools: {
      name: 'Tools & Software',
      icon: <FaTools />,
      skills: [
        { name: 'Postman', icon: <SiPostman />, color: '#ff6c37' },
        { name: 'Git', icon: <FaTools />, color: '#f05032' }
      ]
    }
  };

  const allSkills = Object.values(skillCategories).flatMap(category => category.skills);

  const getSkillsToShow = () => {
    if (activeCategory === 'all') return allSkills;
    return skillCategories[activeCategory]?.skills || [];
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        {/* Category Filter */}
        <div className="skills-navigation">
          <button
            className={`nav-button ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Skills
          </button>
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              className={`nav-button ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {getSkillsToShow().map((skill, index) => (
            <div 
              key={skill.name} 
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
