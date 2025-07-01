import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Event Management System",
    desc: "A full-stack web app for managing college events using Flask, SQLite, and Bootstrap.",
    tech: "Flask, SQLite, HTML, CSS"
  },
  {
    title: "Real-time Chat App",
    desc: "Login-based chat system using Node.js, Express, MongoDB, and Socket.io.",
    tech: "Node.js, Express, MongoDB, Socket.io"
  },
  {
    title: "Hospital Bed Tracker",
    desc: "Dashboard for doctors to update and users to view bed availability (PHP + MySQL).",
    tech: "PHP, MySQL, Bootstrap"
  }
];

function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="card project-card" key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <span className="tech">{proj.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
