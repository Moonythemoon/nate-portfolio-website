import React from 'react';

const ThemeSwitcher = ({ theme, onThemeChange }) => {
  const switchTheme = (newTheme) => {
    onThemeChange(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className="theme-switcher">
      <button 
        className={`theme-btn ${theme === 'graffiti' ? 'active' : ''}`}
        onClick={() => switchTheme('graffiti')}
        title="Cyberpunk Theme"
      >
        <span className="theme-label">Cyberpunk</span>
      </button>
      
      <button 
        className={`theme-btn ${theme === 'manga' ? 'active' : ''}`}
        onClick={() => switchTheme('manga')}
        title="Manga Style Theme"
      >
        <span className="theme-label">Manga</span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
