import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import './Header.css';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const Header = () => {

    const handleAboutClick = () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      };
      const handleProjectsClick = () => {
        const projectsSection = document.getElementById('projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      };
      const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
      };


  return (
    <div>
    <div className="header">
      <div className="left-icons">
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
        <a href="https://github.com/Debayan97531" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/debayan-kumar-ghosh-9022a1249/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://leetcode.com/debayanKumar/" target="_blank" rel="noopener noreferrer"><FaCode /></a>
      </div>
      <div className="right-links">
      <button className="about-btn" onClick={handleAboutClick} >About Me</button>
      <button className="projects-btn" onClick={handleProjectsClick}>Projects</button>
      <button className="about-btn" onClick={handleContactClick}>Contact Me</button>
      </div>
    </div>
    <About/>
    <Projects/>
    <Contact/>
    </div>
  );
};

export default Header;