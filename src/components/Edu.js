import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Edu.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Edu() {
  const educationData = [
    {
      institution: "SRM Institution of Science and Technology",
      location: "Chennai",
      percentage: "88.6%",
      duration: "2020 - 2024",
      degree: "B. Tech in Computer Science and Engineering",
      details: "Graduated with First Class with Distinction."
    },
    {
      institution: "Microsoft in association with Intrnforte",
      location: "Online",
      percentage: "842/1000",
      duration: "Jun 2023 - Sep 2023",
      degree: "AIML (Microsoft Azure - AI900)",
      details: "Certified in Azure AI Fundamentals."
    },
    {
      institution: "Green's Technology",
      location: "Chennai",
      duration: "Feb 2024",
      degree: "AWS and DevOps Training",
      details: "Hands-on training in AWS services (EC2, S3, VPC) and DevOps tools (Docker, Kubernetes, Jenkins)."
    }
  ];

  return (
    <section id="education" className="education-section">
      <motion.h2
        className="education-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education & Certifications
      </motion.h2>

      <div className="timeline">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-content">
              <span className="timeline-date">{item.duration}</span>
              <h3>{item.institution}</h3>
              <h4>{item.degree}</h4>
              <p><FaMapMarkerAlt /> {item.location}</p>
              {item.percentage && <p>Score: {item.percentage}</p>}
              <p>{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Edu;
