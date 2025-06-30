// WorkExperience.js
import React from 'react';
import './WorkExperience.css';

function WorkExperience() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects'); 
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="work-experience-section" id="work-experience">
      <h2>Work Experience</h2>
      <div className="work-experience-content">
        <h3>Infoway Group - Application Development </h3>
        <h4><strong>Location:</strong> Chennai</h4>
        
        <h4>
        <strong>Website:</strong> <a href="https://www.infowaygroup.com/" target="_blank" rel="noopener noreferrer">www.infowaygroup.com</a>
        </h4>
        <ul>
          <li>Integrated a Learning Management System (LMS) with a Human Resource Management System (HRMS) and implemented Twilio API for SMS communication.</li>
          <li>Contributed to system design, development, and API integration using JavaScript, HTML, CSS, and React.js technologies.</li>
          <li>Performed testing and quality assurance to ensure system reliability and performance.</li>
          <li>Prepared comprehensive documentation and conducted user training sessions.</li>
          <li>Enhanced full-stack development skills and problem-solving abilities through hands-on project experience.</li>
        </ul>
        <button className="view-more-button" onClick={scrollToProjects}>
          View More About Project
        </button>
       
      </div>

      <br></br>
      
      <div className="work-experience-content">
        <h3>Vyapi - Application Development </h3>
        <h4><strong>Location:</strong> Tiruchirappalli</h4>        
        <h4>
        <strong>Website:</strong> <a href="https://www.vyapisoft.com/" target="_blank" rel="noopener noreferrer">www.Vyapi.com</a>
        </h4>
        <ul>
          <li><strong>Inbound & Outbound Operations:</strong> Designed and implemented backend services to manage warehouse inbound and outbound workflows, ensuring efficient order processing and shipment handling.</li>
          <li><strong>Inventory Management & Optimization:</strong> Developed APIs for real-time inventory tracking, adjustments, and not-put-away processes, improving accuracy and warehouse efficiency.</li>
          <li><strong>Database Development & Performance Tuning:</strong> Optimized SQL queries and database operations in SSMS to enhance system performance, scalability, and data integrity.</li>
        </ul>
      </div>

      <br></br>

      <div className="work-experience-content">
        <h3>Access Health Care - Application Development </h3>
        <h4><strong>Location:</strong> Tiruchirappalli</h4>        
        <h4>
        <strong>Website:</strong> <a href="https://www.vyapisoft.com/" target="_blank" rel="noopener noreferrer">www.accessheathcare.com</a>
        </h4>
        <ul>
          <li><strong>Inbound & Outbound Operations:</strong> Designed and implemented backend services to manage warehouse inbound and outbound workflows, ensuring efficient order processing and shipment handling.</li>
          <li><strong>Inventory Management & Optimization:</strong> Developed APIs for real-time inventory tracking, adjustments, and not-put-away processes, improving accuracy and warehouse efficiency.</li>
          <li><strong>Database Development & Performance Tuning:</strong> Optimized SQL queries and database operations in SSMS to enhance system performance, scalability, and data integrity.</li>
        </ul>
      </div>
      
    </section>
  );
}

export default WorkExperience;
