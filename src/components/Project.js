import React, { useState, useEffect } from 'react';
import './Project.css';
import a from '.././Images/a.jpg'; 
import b from '.././Images/b.png';
import c from '.././Images/c.jpeg';
import d from '.././Images/d.jpeg';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [vantaEffect, setVantaEffect] = useState(0); 

  const projects = [
    {
      image: a,
      title: "Twilio API",
      details: (
        <>
          <h4>Project Overview:</h4>
          <p><strong>SMS Management System</strong></p>
          
          <h4>Objective:</h4>
          <p>
            The SMS Management System is designed to streamline customer communication through SMS,
            allowing users to manage customer data effectively, send messages, and log communications
            efficiently. It targets businesses looking to enhance their customer outreach via SMS.
          </p>

          <h4>Key Features:</h4>
          <ul>
            <li><strong>User Authentication:</strong> The system includes secure token-based authentication,
              ensuring that only authorized users can access and manage customer data. Users can log in,
              and their session is maintained using tokens stored in local storage.</li>
            <li><strong>Customer Data Management:</strong> Users can upload customer data through Excel files.
              The application processes the uploaded data, formats phone numbers, and ensures no duplicates
              are stored. It supports filtering and searching to facilitate easy access to customer information.</li>
            <li><strong>SMS Sending Capability:</strong> Users can compose SMS messages and send them to
              selected customers. The system validates phone numbers before sending messages, ensuring that
              only properly formatted numbers are used.</li>
            <li><strong>Message Logging:</strong> The system keeps a detailed log of all sent messages,
              including timestamps, message contents, and statuses. Users can view, search, and filter logs
              to track communications effectively.</li>
            <li><strong>Error Handling and Feedback:</strong> Comprehensive error handling provides users with
              clear feedback in case of issues, such as invalid data or failed API requests. Success messages
              confirm actions, like successful message sending or data uploads.</li>
          </ul>
        </>
      ),
    },
    {
      image: b,
      title: "HRMS",
      details: (
        <>
          <h4>Objective:</h4>
          <p>
            The Human Resource Management System (HRMS) is designed to automate and streamline various HR processes,
            enabling organizations to manage employee data, recruitment, attendance, payroll, and performance evaluations
            efficiently. The system aims to enhance HR productivity, improve data accuracy, and facilitate better
            decision-making through real-time access to employee information.
          </p>

          <h4>Key Features:</h4>
          <ul>
            <li><strong>Employee Database Management:</strong> Centralized storage of employee information, including
              personal details, job roles, and contact information, allowing easy access and updates.</li>
            <li><strong>Recruitment Module:</strong> Tools for managing job postings, applications, and candidate
              tracking, streamlining the recruitment process from job opening to hiring.</li>
            <li><strong>Attendance and Leave Management:</strong> Automated tracking of employee attendance, leave
              requests, and approvals, providing insights into workforce availability.</li>
            <li><strong>Payroll Processing:</strong> Integration of salary calculations, tax deductions, and benefits
              management, ensuring timely and accurate payroll disbursement.</li>
            <li><strong>Performance Management:</strong> Features for setting employee goals, conducting performance
              reviews, and tracking progress, fostering a culture of continuous improvement.</li>
            <li><strong>Reporting and Analytics:</strong> Generation of reports on various HR metrics, enabling
              data-driven decision-making and compliance with labor regulations.</li>
            <li><strong>Employee Self-Service Portal:</strong> A user-friendly interface allowing employees to access
              their information, submit leave requests, and update personal details without HR intervention.</li>
            <li><strong>Integration Capabilities:</strong> Ability to integrate with other business systems, such as
              accounting software and project management tools, for seamless data flow across the organization.</li>
          </ul>
        </>
      ),
    },
    {
      image: c,
      title: "Enhancing Character Recognition Using Vision-Based Deep Learning Model",
      details: (
        <>
          <h4>Objective:</h4>
          <p>
            The project aims to enhance Tamil character recognition by implementing a vision-based deep learning model 
            using the CNN-YOLOv8 algorithm. The focus is on improving the accuracy and efficiency of recognizing Tamil 
            characters in real-world scenarios through advanced machine learning techniques.
          </p>

          <h4>Key Features:</h4>
          <ul>
            <li><strong>CNN-YOLOv8 Algorithm:</strong> Utilized the CNN-YOLOv8 algorithm to create a deep learning model 
              tailored for Tamil character recognition.</li>
            <li><strong>Google Colab Integration:</strong> Google Colab served as the primary platform for model development, 
              training, and testing, providing access to powerful computational resources.</li>
            <li><strong>Dataset Training:</strong> The model underwent rigorous training on a diverse dataset of Tamil characters, 
              improving its adaptability to various fonts and styles.</li>
            <li><strong>High Recognition Accuracy:</strong> Achieved notable improvements in recognition accuracy, proving the model's 
              effectiveness in practical applications.</li>
            <li><strong>Real-World Scenario Adaptability:</strong> The model was fine-tuned for better performance in real-world 
              situations, ensuring efficient and reliable character recognition.</li>
          </ul>
        </>
      )
    },
    {
      image: d,
      title: "Path Breaking AI for Proactive Pothole Identification on Roads",
      details: (
        <>
          <h4>Objective:</h4>
          <p>
            The project focuses on creating a proactive pothole detection system using AI to enhance road safety. 
            By employing the CNN-YOLOv8 algorithm, the system aims to accurately identify potholes on roads, 
            streamlining maintenance efforts and reducing road hazards.
          </p>

          <h4>Key Features:</h4>
          <ul>
            <li><strong>CNN-YOLOv8 Algorithm:</strong> A state-of-the-art deep learning model was developed using CNN-YOLOv8 
              for detecting potholes with high precision.</li>
            <li><strong>Roboflow for Image Annotation:</strong> Utilized Roboflow for efficient image annotation, improving 
              the quality and preparation of the training dataset.</li>
            <li><strong>Python and Google Colab:</strong> Python, combined with Google Colab, facilitated efficient model training, 
              testing, and evaluation, leveraging cloud resources for faster development.</li>
            <li><strong>High Performance Metrics:</strong> Achieved exceptional results, including a mean average precision (mAP) 
              of 94.2%, precision of 90.6%, and recall of 89.4%, indicating the model's accuracy and reliability in detecting potholes.</li>
            <li><strong>Published Research:</strong> The project findings were published in a research paper on IGI Global, 
              showcasing its contribution to AI-driven road safety advancements.</li>
          </ul>
        </>
      )
    }
  ];

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.3/vanta.birds.min.js';
    script2.async = true;

    script2.onload = () => {
      const VANTA = window.VANTA; 
      setVantaEffect(
        VANTA.BIRDS({
          el: "#vanta-background",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color1: 0xa77f7f,
        })
      );
    };

    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      if (vantaEffect) vantaEffect.destroy(); // Cleanup Vanta effect
    };
  }, [vantaEffect]);

  return (
    <section className="project-section" id="projects" style={{ backgroundImage: `url('../dev.avif')` }}>
      <h2 className="project-heading">Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item" onClick={() => handleImageClick(project)}>
            <img src={project.image} alt={project.title} />
            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={handleClose}>
          <div className="project-modal-content">
            <h3>{selectedProject.title}</h3>
            <div className="project-details">{selectedProject.details}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
