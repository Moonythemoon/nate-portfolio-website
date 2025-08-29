import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Post-Baccalaureate Diploma of Computer and Information Systems, Emerging Technology',
      institution: 'Douglas College',
      period: 'Expected Completion August 2025',
      location: 'New Westminster, BC',
      description: 'Currently pursuing advanced studies in Computer and Information Systems with focus on emerging technologies.',
      relevantCourses: [
        'User Interface Troubleshooting and Enhancement',
        'Full Stack Development with JavaScript',
        'Mobile Development Project',
        'Peer Tech Assistance',
        'Multimedia Web Development'
      ]
    },
    {
      id: 2,
      degree: 'Bachelor of Interior Architecture',
      institution: 'School of Architecture and Design, King Mongkut\'s University of Technology Thonburi',
      period: 'June 2020',
      location: 'Thailand',
      description: 'Completed comprehensive studies in interior architecture and design, developing strong creative problem-solving and spatial design skills.',
      relevantCourses: [
        'Interior Design Principles',
        'Spatial Planning',
        'Architectural Drawing',
        'Design Theory',
        'Web Design'
      ]
    }
  ];

  const courseProjects = [
    {
      id: 1,
      title: 'Web Design - Guild Wars 2 Website Redesign',
      description: 'Worked independently to overhaul the user experience and interface of the Guild Wars 2 game website. Focused on improving usability and providing engaging elements for users to explore and play with the site. Successfully maintained and incorporated the website\'s distinctive color scheme and theme, ensuring recognition and user-friendliness across both mobile and desktop platforms.',
      technologies: ['Web Design', 'User Experience', 'User Interface', 'Mobile Responsiveness', 'Color Theory']
    },
    {
      id: 2,
      title: 'Full Stack Development with JavaScript',
      description: 'Collaborated on a web development project using HTML, CSS, and JavaScript, focusing on troubleshooting user interface issues and refining functionality to ensure a smooth experience for all users.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development']
    },
    {
      id: 3,
      title: 'Mobile Development Project',
      description: 'Assisted peers in troubleshooting mobile development challenges through Discord, providing real-time support and guidance to resolve coding issues and optimize project workflow.',
      technologies: ['Mobile Development', 'Peer Support', 'Troubleshooting']
    },
    {
      id: 4,
      title: 'Peer Tech Assistance',
      description: 'Helped classmates troubleshoot computer performance issues, such as slow processing and cache problems, by identifying and disabling unnecessary background processes to enhance system performance.',
      technologies: ['System Optimization', 'Technical Troubleshooting', 'Performance Enhancement']
    },
    {
      id: 5,
      title: 'Multimedia Web Development',
      description: 'Designed and implemented a JavaScript-based product filtering system, resolving technical issues and improving the accuracy and efficiency of user search results based on category, brand, and price.',
      technologies: ['JavaScript', 'Product Filtering', 'Search Functionality', 'Web Development']
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        {/* Education Timeline */}
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className="education-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="education-content">
                <div className="education-header">
                  <div className="degree-info">
                    <h3 className="degree-title">{edu.degree}</h3>
                    <div className="institution-details">
                      <span className="institution-name">
                        <FaGraduationCap /> {edu.institution}
                      </span>
                      <span className="education-period">
                        <FaCalendarAlt /> {edu.period}
                      </span>
                      <span className="education-location">
                        <FaMapMarkerAlt /> {edu.location}
                      </span>
                    </div>
                  </div>
                  
                </div>
                
                <p className="education-description">{edu.description}</p>
                
                <div className="relevant-courses">
                  <h4>Relevant Coursework:</h4>
                  <div className="course-tags">
                    {edu.relevantCourses.map((course, courseIndex) => (
                      <span key={courseIndex} className="course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* Course Projects & Activities */}
        <div className="course-projects-section">
          <h3 className="projects-title">Course Projects & Activities</h3>
          <div className="projects-grid">
            {courseProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-header">
                  <h4 className="project-title">{project.title}</h4>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
