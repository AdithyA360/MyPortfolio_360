import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
    setShowAbout(prev => !prev);
  };

  return (
    <header>
      <nav className="fixed-nav">
        <ul className="nav-links center-nav">
          <li><a href="#home">Home</a></li>
          <li><button type="button" onClick={toggleAbout} className="about-btn">About</button></li>
          <li>
            <a
              href="https://drive.google.com/file/d/1iR43AaYf0Uo3BdsvOU2cXxJwHsJYCWd4/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
        <ul className="nav-links right-nav">
          <li><a href="#location">...</a></li>
        </ul>
      </nav>

      {showAbout && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={toggleAbout}>&times;</button>
            <h2>About Me</h2>
            <p>
              Hi, I’m <strong>Adithyakumar</strong>!  
              I hold a Bachelor of Computer Science degree from <strong>SRM University, Chennai</strong>, and I am a <strong>Software Engineer</strong> and <strong>Full Stack Developer</strong> with over one year of experience in building scalable web applications.
            </p>
            <h3>Skills and Expertise</h3>
            <ul>
              <li>Frontend & Backend: React.js, Node.js, REST APIs, GraphQL</li>
              <li>Databases: MySQL, PostgreSQL, SSMS</li>
              <li>Cloud: Hands-on experience with AWS services</li>
            </ul>
            <h3>Projects</h3>
            <ul>
              <li><strong>HRMS (Human Resource Management System)</strong>: A system to manage employee data, payroll, leaves, attendance, and more.</li>
              <li><strong>Twilio API Integration</strong>: Bulk SMS tool with features like tracking customer replies.</li>
            </ul>
            <h3>Continuous Learning</h3>
            <p>Courses in AWS, DevOps, and Python.</p>
            <h3>What Drives Me</h3>
            <p>
              I’m a quick learner with a knack for solving complex problems. My passions include problem-solving, teamwork, and self-improvement. When I’m not coding, I enjoy reading books and exploring new technologies.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
