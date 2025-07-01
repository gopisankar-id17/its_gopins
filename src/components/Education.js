import React from 'react';
import { FaSchool, FaUserGraduate, FaUniversity } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon"><FaSchool /></div>
          <div className="timeline-content">
            <h3>Secondary Education</h3>
            <p>XYZ Matriculation School, 2017</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"><FaUserGraduate /></div>
          <div className="timeline-content">
            <h3>Higher Secondary Education</h3>
            <p>ABC Higher Secondary School, 2019</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"><FaUniversity /></div>
          <div className="timeline-content">
            <h3>Bachelor's Degree</h3>
            <p>Kongu Engineering College, 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
