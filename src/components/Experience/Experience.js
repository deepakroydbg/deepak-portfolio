import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import './Experience.scss';

const Experience = () => {
  const experiences = [
    {
      title: "Front-End Developer",
      company: "Retail Insights Pvt Ltd",
      location: "Bangalore",
      period: "May 2022 - Present",
      client: "SSBeauty (by Shoppers Stop)",
      duration: "Dec 2024 - Present (8 months)",
      tech: ["Next.js", "Material UI", "TypeScript", "GA4", "Redux Toolkit", "Strapi CMS"],
      achievements: [
        "Spearheaded development of multi-tier loyalty membership program (First Citizen, Silver Club, Golden Glow, Platinum, Black Card)",
        "Designed dynamic user flows for enrollment, tier upgrades, and rewards tracking",
        "Collaborated with backend teams for real-time membership status integration",
        "Implemented GA4 analytics for precise user behavior tracking",
        "Boosted performance with lazy loading and SSR optimization"
      ]
    },
    {
      title: "Front-End Developer",
      company: "Retail Insights Pvt Ltd",
      location: "Bangalore",
      period: "Jan 2024 - Dec 2024",
      client: "Decathlon Play & Partner Central App",
      duration: "11 months",
      tech: ["Next.js", "Bootstrap 3", "Tailwind CSS", "JavaScript ES6+", "GA4"],
      achievements: [
        "Developed bulk status update feature in Partner Central Admin Panel",
        "Enhanced UI/UX across dynamic components with Next.js",
        "Built robust admin panel modules for lead management",
        "Maintained high code quality and performance standards"
      ]
    },
    {
      title: "Front-End Developer",
      company: "Retail Insights Pvt Ltd",
      location: "Bangalore",
      period: "May 2022 - Jan 2024",
      client: "Decathlon Philippines & Vietnam",
      duration: "21 months",
      tech: ["React.js", "Bootstrap 3", "CSS3", "Contentful CMS"],
      achievements: [
        "Developed responsive, mobile-first interfaces using React.js",
        "Engineered modular, reusable React components",
        "Integrated custom UI elements like accordions, date pickers, modals",
        "Ensured seamless cross-device experiences"
      ]
    }
  ];

  return (
    <section id="experience" className="experience section-padding">
      <div className="section-container">
        <h2 className="section-title">
          Professional <span>Journey</span>
        </h2>

        <div className="experience-timeline">
          <div className="timeline-line"></div>
          
          <div className="experiences-list">
            {experiences.map((job, index) => (
              <div key={index} className="experience-item">
                <div className="timeline-marker"></div>
                
                <div className="experience-card card">
                  <div className="experience-header">
                    <div>
                      <h3 className="job-title">{job.title}</h3>
                      <div className="company">{job.company}</div>
                      <div className="location-period">{job.location} • {job.period}</div>
                      {job.client && (
                        <div className="client">Client: {job.client}</div>
                      )}
                      <div className="duration">{job.duration}</div>
                    </div>
                    <div className="experience-icon">
                      <Briefcase className="icon-purple" size={32} />
                    </div>
                  </div>

                  <div className="tech-stack">
                    <h4>Tech Stack:</h4>
                    <div className="tech-tags">
                      {job.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>
                          <ChevronRight className="chevron-icon" size={16} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;