import React from 'react';
import { Code } from 'lucide-react';
import './Skills.scss';

const Skills = () => {
  const skillGroups = [
    {
      category: "Frontend Frameworks",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+"],
      icon: <Code className="icon-purple" size={24} />
    },
    {
      category: "Styling & UI",
      skills: ["Tailwind CSS", "Material UI", "Bootstrap", "SCSS/SASS"],
      icon: <Code className="icon-pink" size={24} />
    },
    {
      category: "State Management",
      skills: ["Redux", "Redux Toolkit", "Context API"],
      icon: <Code className="icon-blue" size={24} />
    },
    {
      category: "Tools & Deployment",
      skills: ["Jenkins CI/CD", "Visual Studio", "Jira", "Sonar Cloud"],
      icon: <Code className="icon-green" size={24} />
    },
    {
      category: "CMS & Analytics",
      skills: ["Contentful", "Strapi", "Google Analytics", "GTM"],
      icon: <Code className="icon-yellow" size={24} />
    },
    {
      category: "Methodologies",
      skills: ["Agile", "Scrum", "Code Reviews", "Performance Optimization"],
      icon: <Code className="icon-red" size={24} />
    }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="section-container">
        <h2 className="section-title">
          Technical <span>Arsenal</span>
        </h2>
        
        <div className="skills-grid">
          {skillGroups.map((skillGroup, index) => (
            <div key={index} className="skill-card card">
              <div className="skill-header">
                {skillGroup.icon}
                <h3 className="skill-title">{skillGroup.category}</h3>
              </div>
              <div className="skills-list">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;