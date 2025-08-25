import React from 'react';
import { Briefcase, Code, User, ExternalLink } from 'lucide-react';
import './Highlights.scss';

const Highlights = () => {
  const stats = [
    { number: "4+", label: "Years Experience", icon: <Briefcase size={32} /> },
    { number: "10+", label: "Projects Delivered", icon: <Code size={32} /> },
    { number: "5+", label: "Major Clients", icon: <User size={32} /> },
    { number: "100%", label: "Client Satisfaction", icon: <ExternalLink size={32} /> }
  ];

  return (
    <section className="highlights section-padding">
      <div className="section-container">
        <h2 className="section-title">
          Professional <span>Highlights</span>
        </h2>

        <div className="highlights-grid">
          {stats.map((stat, index) => (
            <div key={index} className="highlight-card card">
              <div className="highlight-icon">
                {stat.icon}
              </div>
              <div className="highlight-number">{stat.number}</div>
              <div className="highlight-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;