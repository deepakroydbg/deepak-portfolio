import React from 'react';
import { GraduationCap } from 'lucide-react';
import './Education.scss';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering",
      field: "Electronics & Communication",
      institution: "LNCTS, Bhopal",
      university: "RGPV, Bhopal",
      level: "Graduation"
    },
    {
      degree: "Intermediate",
      field: "Science, Mathematics, Physics",
      institution: "CM Science College",
      university: "BSEB",
      level: "12th"
    },
    {
      degree: "Matriculation",
      institution: "Kendriya Vidyalaya No2, DBG",
      university: "CBSE",
      level: "10th"
    },
  ];

  return (
    <section id="education" className="education section-padding">
      <div className="section-container">
        <h2 className="section-title">
          Educational <span>Background</span>
        </h2>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card card">
              <div className="education-header">
                <GraduationCap className="icon-purple" size={24} />
                <span className="education-level">{edu.level}</span>
              </div>
              
              <h3 className="education-degree">{edu.degree}</h3>
              {edu.field !== "General" && (
                <div className="education-field">{edu.field}</div>
              )}
              <div className="education-institution">{edu.institution}</div>
              <div className="education-university">{edu.university}</div>
              <div className="education-year">{edu.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;