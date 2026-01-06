import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

function Skills() {
  useEffect(() => {
    const cards = document.querySelectorAll('.skills-card');

    const handleMouseMove = (e) => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    document.getElementById('skills').addEventListener('mousemove', handleMouseMove);

    return () => {
      const section = document.getElementById('skills');
      if (section) section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML, CSS", "JavaScript", "React JS", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend",
      skills: [".NET", "Node.js", "PostgreSQL", "SSMS (SQL Server)", "REST APIs"]
    },
    {
      title: "Cloud / DevOps",
      skills: ["Linux", "AWS (EC2, S3, VPC)", "Docker", "CI/CD Pipelines"]
    },
    {
      title: "AI / Data",
      skills: ["AIML", "Python", "Data Analysis", "Computer Vision"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.h2
        className="skills-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skills-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
