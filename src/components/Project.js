import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Project.css';
import a from '../Images/a.jpg';
import b from '../Images/b.png';
import c from '../Images/c.jpeg';
import d from '../Images/d.jpeg';
import e from '../Images/e.jpg';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image: e,
      title: "Warehouse Management System",
      details: (
        <>
          <h4>Project Overview:</h4>
          <p><strong>Backend Development for Enterprise WMS</strong></p>
          <h4>My Role & Contributions:</h4>
          <p>
            As a Backend Developer, I was responsible for designing and implementing
            core backend services that power the warehouse operations.
          </p>
          <h4>Key Responsibilities:</h4>
          <ul>
            <li>
              <strong>Inbound & Outbound Operations:</strong> Designed and implemented
              backend services to manage warehouse inbound and outbound workflows,
              ensuring efficient order processing and shipment handling.
            </li>
            <li>
              <strong>Inventory Management & Optimization:</strong> Developed RESTful APIs
              for real-time inventory tracking, stock adjustments, and not-put-away processes,
              improving accuracy and warehouse efficiency.
            </li>
            <li>
              <strong>Database Development & Performance Tuning:</strong> Optimized SQL queries
              and database operations in SSMS (SQL Server Management Studio) to enhance system
              performance, scalability, and data integrity.
            </li>
            <li>
              <strong>Backend Architecture:</strong> Built robust backend services using modern
              frameworks, implementing business logic for warehouse operations and inventory control.
            </li>
            <li>
              <strong>API Development:</strong> Created and maintained RESTful APIs for seamless
              integration between frontend applications and database systems.
            </li>
          </ul>
          <h4>Technologies Used:</h4>
          <ul>
            <li>Backend: .NET/C# or Node.js</li>
            <li>Database: SQL Server (SSMS)</li>
            <li>API: RESTful Services</li>
            <li>Performance: Query Optimization & Indexing</li>
          </ul>
        </>
      ),
    },
    {
      image: a,
      title: "Twilio API",
      details: (
        <>
          <h4>Project Overview:</h4>
          <p><strong>SMS Management System</strong></p>
          <h4>Objective:</h4>
          <p>
            Streamlines customer communication via SMS, with customer data management,
            secure authentication, and logging.
          </p>
          <h4>Key Features:</h4>
          <ul>
            <li>User Authentication with tokens</li>
            <li>Excel-based Customer Data Upload</li>
            <li>SMS Sending & Validation</li>
            <li>Message Logging with timestamps</li>
            <li>Error Handling & Clear Feedback</li>
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
            Automates HR processes like employee data, recruitment,
            payroll, and performance evaluations.
          </p>
          <h4>Key Features:</h4>
          <ul>
            <li>Employee Database Management</li>
            <li>Recruitment Module</li>
            <li>Attendance & Leave Tracking</li>
            <li>Payroll Processing</li>
            <li>Performance Management</li>
            <li>Reports & Analytics</li>
            <li>Employee Self-Service Portal</li>
          </ul>
        </>
      ),
    },
    {
      image: c,
      title: "Tamil Character Recognition",
      details: (
        <>
          <h4>Objective:</h4>
          <p>
            Enhance Tamil character recognition using CNN-YOLOv8,
            boosting accuracy in real-world conditions.
          </p>
          <h4>Key Features:</h4>
          <ul>
            <li>CNN-YOLOv8 Algorithm</li>
            <li>Dataset Training on diverse fonts</li>
            <li>Google Colab Integration</li>
            <li>High Recognition Accuracy</li>
            <li>Real-world Adaptability</li>
          </ul>
        </>
      ),
    },
    {
      image: d,
      title: "AI Pothole Detection",
      details: (
        <>
          <h4>Objective:</h4>
          <p>
            Proactive pothole detection system using AI
            for safer roads and faster maintenance.
          </p>
          <h4>Key Features:</h4>
          <ul>
            <li>CNN-YOLOv8 Algorithm</li>
            <li>Roboflow for Image Annotation</li>
            <li>Python + Google Colab</li>
            <li>94.2% mAP Accuracy</li>
            <li>Published Research on IGI Global</li>
          </ul>
        </>
      ),
    }
  ];

  return (
    <section className="project-section" id="projects">
      <motion.h2
        className="project-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-item"
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              <div className="project-title">{project.title}</div>
              <div className="project-more">Click for details →</div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="project-modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button className="project-close-btn" onClick={() => setSelectedProject(null)}>
                &times;
              </button>
              <h3>{selectedProject.title}</h3>
              <div className="project-details">{selectedProject.details}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
