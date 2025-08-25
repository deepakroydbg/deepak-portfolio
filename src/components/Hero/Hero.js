import React from "react";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import "./Hero.scss";

const Hero = ({ scrollToSection }) => {
  return (
    <section id="about" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="avatar-container">
            <div className="avatar">
              <img src="/my-avatar.jpg" alt="User Avatar" />
            </div>
            <div className="avatar-glow"></div>
          </div>
          <h1 className="hero-title">
            Deepak <span className="title-accent">Kumar</span>
          </h1>

          <p className="hero-description">
            <span className="description-accent">Front-End Developer</span>{" "}
            crafting exceptional digital experiences with
            <span className="description-accent-secondary"> 3+ years</span> of
            expertise in React.js, Next.js, and modern web technologies
          </p>

          <div className="hero-actions">
            <a href="mailto:deepakroydbg@gmail.com" className="btn btn-primary">
              <Mail size={20} />
              Get In Touch
            </a>
            <button className="btn btn-secondary">
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="hero-info">
            <div className="info-item">
              <Mail size={16} />
              <span>deepakroydbg@gmail.com</span>
            </div>
            <div className="info-item">
              <Phone size={16} />
              <span>+91 9006032830</span>
            </div>
            <div className="info-item">
              <MapPin size={16} />
              <span>Bangalore, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
