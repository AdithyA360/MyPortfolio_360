import React, { useEffect } from 'react';
import './Skills.css'; // Ensure you import the CSS for styles

function Skills() {
  useEffect(() => {
    const cursor = document.querySelector('.torch-cursor');

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="skills-section">
      <div className="torch-cursor"></div> {/* Torch cursor element */}
      <h2>Skills</h2>
      <div className="skills-divider"></div> {/* White border above skills */}
      <div className="skills-container">
        <div className="skills-left">
          <h3>Skills</h3>
          <ul>
            <li>Python</li>
            <li>Linux</li>
            <li>HTML, CSS, JavaScript</li>
            <li>React JS</li>
            <li>REST API</li>
            <li>SQL</li>
            <li>AIML</li>
            <li>AWS</li>
            <li>EC2, S3, VPC, LB, Route 53, IAM</li>
          </ul>
        </div>
        <div className="skills-right">
          <h3>Tools</h3>
          <ul>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Jenkins</li>
            <li>GIT</li>
            <li>Ansible</li>
            <li>Terraform</li>
            <li>Power BI</li>
            <li>PG Admin 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
