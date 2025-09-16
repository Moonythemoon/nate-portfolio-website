import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';
import CursorSpotlight from './components/CursorSpotlight/CursorSpotlight';
import MangaLayers from './components/MangaLayers/MangaLayers';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState('graffiti');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'graffiti';
    setTheme(savedTheme);
    document.body.className = savedTheme;

    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      case 'hobbies':
        return <Hobbies />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <h2>Loading Portfolio...</h2>
      </div>
    );
  }

  const switchTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className="App">
      {/* Theme Switcher */}
      <ThemeSwitcher theme={theme} onThemeChange={switchTheme} />
      
      {/* Conditional Background Effects */}
      {theme === 'graffiti' && (
        <>
          {/* Neon Fog Blobs */}
          <div className="neon-fog-blob neon-fog-pink"></div>
          <div className="neon-fog-blob neon-fog-cyan"></div>
          <div className="neon-fog-blob neon-fog-purple"></div>
          
          {/* Cursor Spotlight */}
          <CursorSpotlight />
        </>
      )}
      
      {theme === 'manga' && (
        <>
          {/* Manga Layers */}
          <MangaLayers />
        </>
      )}
      
      <Header onPageChange={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
