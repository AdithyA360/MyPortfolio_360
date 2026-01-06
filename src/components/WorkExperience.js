import React from 'react';
import { motion } from 'framer-motion';
import './WorkExperience.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

function WorkExperience() {
  const experiences = [
    {
      company: "Smarter Technologies",
      role: "Application Development",
      location: "Chennai",
      date: "Apr 2025",
      website: "https://www.accesshealthcare.com/",
      points: [
        "Developed dynamic workflow modules including Inbox Call Sheet, Audit Screens, and Multi-step Claim Processing.",
        "Built a generic reporting engine (ReportsComp) that powers 25+ reports through a single reusable component using dynamic routing & Redux.",
        "Implemented cascading form logic (Call Type → Issue Code → Action Code) with API-driven dependencies.",
        "Optimized large data grids using DevExtreme virtualization, memoization, and efficient state updates.",
        "Integrated role-based access control, feature flags, and project-level UI customization.",
        "Designed reusable service layers & Axios interceptors for secure token-based API communication.",
        "Worked on Custom Views, enabling users to save filters, columns, and layout preferences.",
        "Enhanced performance through React Hooks (useMemo, useCallback, React.memo) and Redux Toolkit slices."
      ],
      techStack: "React 18, Redux Toolkit, Context API, DevExtreme, Axios, React Router, IAM Authentication, JavaScript (ES6+), HTML/CSS",
      impact: [
        "Reduced code duplication by 90% using a generic component architecture.",
        "Improved grid performance for datasets with thousands of records.",
        "Streamlined user workflows across claims, audits, reporting, and project configurations.",
        "Delivered a scalable UI foundation supporting multiple client projects and operational teams."
      ]
    },
    {
      company: "Vyapi",
      role: "Application Development",
      location: "Tiruchirappalli",
      date: "Jan 2025",
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
      date: "Jan 2024",
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
