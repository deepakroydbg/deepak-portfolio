import React from 'react';
import { Mail, Phone } from 'lucide-react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-content">
          <div className="footer-brand">
            Deepak<span className="brand-accent">Kumar</span>
          </div>
          <p className="footer-description">
            Crafting exceptional digital experiences with passion and precision
          </p>
          <div className="footer-contacts">
            <a href="mailto:deepakroydbg@gmail.com" className="footer-contact">
              <Mail size={24} />
            </a>
            <a href="tel:+919006032830" className="footer-contact">
              <Phone size={24} />
            </a>
          </div>
          <div className="footer-copyright">
            © 2025 Deepak Kumar. Crafted with React.js & CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;