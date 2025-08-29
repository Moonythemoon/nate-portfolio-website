import React from 'react';
import './Header.css';

const Header = ({ onPageChange, currentPage }) => {

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Hobbies', to: 'hobbies' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <button 
            onClick={() => onPageChange('home')}
            className="logo-button"
          >
            Nate
          </button>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <button
                  onClick={() => onPageChange(item.to)}
                  className={`nav-link ${currentPage === item.to ? 'active' : ''}`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
