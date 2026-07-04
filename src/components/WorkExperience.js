import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/WorkExperience.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

function WorkExperience() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const experiences = [
    {
      company: "Access Healthcare Services Pvt. Ltd. (A Smarter Technologies Company)",
      role: "Application Development",
      description: "Project: .Flow – Healthcare Claims Workflow & AI Automation Platform",
      location: "Chennai",
      date: "Apr 2025 - Present",
      website: "https://www.accesshealthcare.com/",
      points: [
        "Developed Python-based RESTful APIs and backend services to support end-to-end healthcare claims workflows, including customer onboarding, project setup, workgroup allocation, claim creation, claim entry, auditing, ATA processing, and claim submission.",
        "Built and deployed an AI-powered chatbot within .Flow to assist users with workflow navigation, claim-processing queries, project configuration, and operational support across the platform.",
        "Engineered prompt logic and tuned LLM generation parameters, including temperature, token limits, and response formatting, to improve response accuracy, consistency, and conversational quality.",
        "Implemented session-aware conversation context management, enabling coherent multi-turn interactions across claims, projects, workgroups, and workflow stages.",
        "Integrated React.js, Python backend services, SQL Server, and LLM APIs into a unified full-stack solution delivering intelligent workflow automation and real-time user assistance, supporting 400,000+ claims transactions and 35,000+ active users.",
        "Continuously improved chatbot performance through prompt engineering, edge-case testing, response evaluation, and iterative optimization, enhancing operational efficiency across healthcare business processes."
      ],
      techStack: "React.js, Python, SQL Server, LLM APIs, RESTful APIs",
    },
    {
      company: "Vyapi Info Technology",
      role: "Application Development",
      description: "Project: Warehouse Management System (WMS) – Inbound Operations",
      location: "Tiruchirapalli",
      date: "Jan 2025 - Mar 2025",
      website: "https://www.vyapisoft.com/",
      points: [
        "Developed React.js user interfaces and ASP.NET Core REST APIs to support inbound warehouse operations, including receiving, inventory validation, stock movement, and real-time transaction management.",
        "Implemented business-critical workflows for receiving, unreceiving, inventory tracking, shipment processing, and warehouse transaction management, ensuring data accuracy and operational efficiency.",
        "Integrated React.js, ASP.NET Core, and SQL Server, while developing and optimizing SQL queries, stored procedures, and backend processes to improve inventory visibility, transaction performance, and real-time warehouse operation tracking."
      ]
    },
    {
      company: "Infoway Group",
      role: "Application Development Intern",
      location: "Chennai",
      date: "Jan 2024 - Dec 2024",
      website: "https://www.infowaygroup.com/",
      points: [
        "Developed applications using React.js and Node.js.",
        "Managed database operations using pgAdmin 4.",
        "Integrated LMS with HRMS and implemented Twilio API for SMS communication.",
        "Collaborated on system design and API integration.",
        "Performed QA testing and prepared documentation."
      ]
    }
  ];

  return (
    <section id="experience" className="work-experience-section">
      <motion.h2
        className="work-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>

      <div className="work-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="work-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="timeline-dot"></div>
            <div className="work-header">
              <div>
                <h3>{exp.role}</h3>
                <div className="work-company">{exp.company}</div>
                <div className="work-date">{exp.date}</div>
                <a href={exp.website} target="_blank" rel="noopener noreferrer" className="work-link">
                  Visit Website
                </a>
              </div>
              <div className="work-location">
                <FaMapMarkerAlt /> {exp.location}
              </div>
            </div>

            {exp.description && (
              <p className="work-description">{exp.description}</p>
            )}

            <div className={`work-details ${expandedCards[index] ? 'expanded' : ''}`}>
              <div className="work-section-title">Key Contributions</div>
              <ul>
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {exp.techStack && (
                <>
                  <div className="work-section-title">Tech Stack</div>
                  <p className="work-tech-stack">{exp.techStack}</p>
                </>
              )}

              {exp.impact && (
                <>
                  <div className="work-section-title">Impact</div>
                  <ul className="work-impact-list">
                    {exp.impact.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            
            <button 
              className="mobile-expand-btn" 
              onClick={() => toggleExpand(index)}
            >
              {expandedCards[index] ? 'Show Less' : 'View Details'}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
