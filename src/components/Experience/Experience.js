import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Interior Designer',
      company: 'Azen Studio',
      period: 'May - October 2022',
      location: 'Thailand',
      description: 'Worked on Japanese-style residential and retail projects, delivering distinctive and culturally inspired designs for both residential and commercial spaces.',
      technologies: ['AutoCAD', 'SketchUp', 'Lumion', 'V-ray', 'Photoshop', 'Illustrator'],
      achievements: [
        'Communicated directly with clients to understand their specific needs',
        'Contacted many stakeholders to accomplish projects from concept to building process',
        'Utilized creative skills including video editing and visual presentations'
      ]
    },
    {
      id: 2,
      title: 'Junior Interior Designer',
      company: 'Plangguy Co.Ltd.',
      period: 'May - January 2022',
      location: 'Thailand',
      description: 'Managed multiple projects in healthcare, education, and residential sectors, meeting diverse client requirements through thoughtful coordination and planning.',
      technologies: ['AutoCAD', 'SketchUp', 'Project Management', 'Client Communication'],
      achievements: [
        'Actively collaborated with engineers, constructors, and carpenters',
        'Brought design-thinking approach to problem-solving',
        'Enhanced spatial comfort and addressed client needs with practical solutions'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="job-title">{experience.title}</h3>
                  <div className="company-info">
                    <span className="company-name">
                      <FaBriefcase /> {experience.company}
                    </span>
                    <span className="job-period">
                      <FaCalendarAlt /> {experience.period}
                    </span>
                    <span className="job-location">
                      <FaMapMarkerAlt /> {experience.location}
                    </span>
                  </div>
                </div>
                
                <p className="job-description">{experience.description}</p>
                
                <div className="technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {experience.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        

        
      </div>
    </section>
  );
};

export default Experience;
