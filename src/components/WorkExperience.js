import React from 'react';
import { motion } from 'framer-motion';
import '../styles/WorkExperience.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

function WorkExperience() {
  const experiences = [
    {
      company: "Smarter Technologies",
      role: "Application Development",
      location: "Chennai",
      date: "Apr 2025 - Present",
      website: "https://www.acthicesshealthcare.com/",
      points: [
        "Worked on a healthcare claims processing application using React and Redux.",
        "Developed workflow modules for claims management, audits, and reporting systems.",
        "Built reusable components and generic reporting engine serving 25+ different reports.",
        "Implemented role-based access control and customizable user interfaces for different projects.",
        "Optimized performance for handling large datasets with efficient state management."
      ],
      techStack: "React 18, Redux Toolkit, DevExtreme, Axios, React Router, IAM Authentication, JavaScript (ES6+)",
      impact: [
        "Reduced code duplication by 90% through component reusability.",
        "Improved application performance and user experience across multiple client projects."
      ]
    },
    {
      company: "Vyapi",
      role: "Application Development",
      location: "Tiruchirappalli",
      date: "Jan 2025 - Mar 2025",
      website: "https://www.vyapisoft.com/",
      points: [
        "Developed backend services using .NET.",
        "Optimized database queries using SQL Server Management Studio (SSMS).",
        "Designed backend for warehouse workflows (Inbound & Outbound).",
        "Created APIs for real-time inventory tracking."
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
