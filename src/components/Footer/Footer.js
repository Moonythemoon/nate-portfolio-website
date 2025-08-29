import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Nate</h3>
            <p className="footer-description">
              Interior designer turned tech explorer, currently pursuing Computer and Information Systems at Douglas College.
            </p>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  style={{ backgroundColor: social.color }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>📍 New Westminster, BC</p>
              <p>📧 n.nabu213@gmail.com</p>
              <p>📱 +1 672-558-5340</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Nate. All rights reserved.</p>
          </div>
          
          <div className="footer-actions">
            <Link to="home" smooth={true} duration={500} className="back-to-top">
              <FaArrowUp />
              <span>Back to Top</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
