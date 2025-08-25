import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navigation.scss';

const Navigation = ({ activeSection, isScrolled, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          DEEPAK <span className="brand-accent">KUMAR</span>
        </div>
        
        <div className="nav-menu desktop">
          {['about', 'skills', 'experience', 'education', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`nav-link ${activeSection === item ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="nav-menu mobile">
            {['about', 'skills', 'experience', 'education', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="nav-link"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;