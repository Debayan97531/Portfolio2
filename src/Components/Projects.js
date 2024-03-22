import React from 'react';
import './Projects.css'; // Import CSS file for Projects component

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2 style={{fontSize: '38px', fontWeight: 'bold'}}>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Online Shopping</h3>
          <p>Online Shopping Website made with the help of MERN : <a href="https://github.com/Debayan97531/SE_Project_Onilne_Shopping">link</a></p>
        </div>
        <div className="project-card">
          <h3>To Do List</h3>
          <p>TO Do List Created with React Codesandbox : <a href='https://github.com/Debayan97531/ToDoListReact'>link</a></p>
        </div>
        <div className="project-card">
          <h3>AI ML Projects</h3>
          <p>Listed all data science projects that are done on Google Colab : <a href='https://github.com/Debayan97531/AI-ML-projects'>link</a></p>
        </div>
        <div className="project-card">
          <h3>Fitness Tracker</h3>
          <p>Track Daily Fitness Activity : <a href='https://codeclause-task2.vercel.app/'>website</a></p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
