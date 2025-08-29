import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'n.nabu213@gmail.com',
      link: 'mailto:n.nabu213@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+1 672-558-5340',
      link: 'tel:+16725585340'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: '902-820 6th Ave, New Westminster, BC V3M 5V4',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/nate-bussabok',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com',
      color: '#333'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com',
      color: '#E4405F'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate or just want to say hello!
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon" style={{ color: '#A68E46' }}>
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ backgroundColor: social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;
