import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('architecture');

  const projectCategories = {
    architecture: {
      name: 'Architecture & Design',
      projects: [
        {
          title: 'Interior Architecture Portfolio',
          subtitle: 'University Projects & Professional Work',
          description: 'A comprehensive collection of my interior architecture work, including Japanese-style residential designs, healthcare facilities, educational spaces, and retail projects. Features detailed technical drawings, 3D visualizations, and design concepts developed during my studies at King Mongkut\'s University of Technology Thonburi.',
          technologies: ['AutoCAD', 'SketchUp', 'Lumion', 'V-ray', 'Photoshop', 'Illustrator'],
          link: 'https://issuu.com/moonythemoon/docs/interior_architecture_portfolio',
          linkText: 'View Portfolio'
        }
      ]
    },
    mobile: {
      name: 'Mobile Applications',
      projects: [
        {
          title: 'Coming Soon',
          subtitle: 'Mobile Development Projects',
          description: 'Exciting mobile applications are in development using React Native and Firebase. These projects will demonstrate my cross-platform development capabilities and user experience design skills.',
          technologies: ['React Native', 'Firebase', 'JavaScript', 'Mobile UI/UX']
        }
      ]
    },
    web: {
      name: 'Web Applications',
      projects: [
        {
          title: 'Coming Soon',
          subtitle: 'Web Development Projects',
          description: 'I\'m currently working on several web applications using React, Node.js, and modern web technologies. These projects will showcase my full-stack development skills and problem-solving abilities.',
          technologies: ['React', 'Node.js', 'JavaScript', 'MongoDB']
        }
      ]
    }
  };

  const renderProjects = () => {
    const category = projectCategories[activeCategory];
    return (
      <div className="projects-grid">
        {category.projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-subtitle">{project.subtitle}</p>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.link && (
              <div className="project-actions">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {project.linkText} ↗
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        {/* Project Navigation */}
        <div className="project-navigation">
          {Object.entries(projectCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`nav-button ${activeCategory === key ? 'active' : ''}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Project Content */}
        <div className="project-content">
          {renderProjects()}
        </div>
      </div>
    </section>
  );
};

export default Projects;
