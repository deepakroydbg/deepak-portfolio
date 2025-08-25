import React from 'react';
import './Strengths.scss';

const Strengths = () => {
  const strengths = [
    {
      title: "Adaptability & Growth Mindset",
      description: "Flexible with environment and positive thinking approach to challenges",
      icon: "🌟"
    },
    {
      title: "Continuous Learning",
      description: "Quick learner of new technologies with hardworking and enthusiastic attitude",
      icon: "🚀"
    }
  ];

  return (
    <section className="strengths section-padding">
      <div className="section-container">
        <h2 className="section-title">
          Personal <span>Strengths</span>
        </h2>

        <div className="strengths-grid">
          {strengths.map((strength, index) => (
            <div key={index} className="strength-card card">
              <div className="strength-icon">{strength.icon}</div>
              <h3 className="strength-title">{strength.title}</h3>
              <p className="strength-description">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;