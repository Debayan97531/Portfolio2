import React from 'react';
import './About.css'; // Import CSS file for About component
import avatarImage from './pass_pic.png'; 

const About = () => {
  return (
    <div className="about-section" id="about">
      <img src={avatarImage} alt="Avatar" className="avatar" />
      <p style={{fontSize: '38px', fontWeight: 'bold'}}>
        {/* I am a passionate software engineer with expertise in web development. I enjoy building robust and scalable applications using modern technologies. With a strong background in computer science, I strive to continually learn and grow in the ever-evolving field of technology. */}
        I am a passionate software engineer with expertise in web development.<br/>
        I enjoy building robust and scalable applications using modern technologies.<br/>
        {/* With a strong background in computer science, I strive to continually learn and grow<br/>
        in the ever-evolving field of technology. */}
      </p>
    </div>
  );
};

export default About;
