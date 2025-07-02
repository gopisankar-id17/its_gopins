import React from 'react';
import { FaUniversity, FaSchool, FaUserGraduate } from 'react-icons/fa';
import './Education.css';

const educationData = [
  {
    icon: <FaUniversity />,
    degree: "Bachelor's Degree",
    institution: "Kongu Engineering College, Erode",
    year: "2023-2027",
    percentage: 78.9
  },
  {
    icon: <FaSchool />,
    degree: "Higher Secondary Education",
    institution: "Sri Jayendra Saraswathi Swamigal Golden Jubilee Matriculation Higher Secondary School, Tirunelveli",
    year: "2023",
    percentage: 92
  },
  {
    icon: <FaUserGraduate />,
    degree: "SSLC",
    institution: "Sri Jayendra Saraswathi Swamigal Golden Jubilee Matriculation Higher Secondary School, Tirunelveli",
    year: "2021",
    percentage: 100
  },
];

const Education = () => {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">{edu.icon}</div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <p>{edu.year}</p>
              <div className="progress-circle" style={{ '--percentage': edu.percentage }}>
                <div className="progress-inner">
                  <span>{edu.percentage}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
