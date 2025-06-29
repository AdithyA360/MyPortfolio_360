import React, { useState, useEffect } from 'react';
import './Edu.css';
import srmImage from '.././Images/srm.jpeg'; 
import msImage from '.././Images/ms.png'; 
import greImage from '.././Images/gre.jpeg'; 

function Edu() {
  const [currentEducation, setCurrentEducation] = useState(0);
  const [fadeClass, setFadeClass] = useState(''); 

  const educationData = [
    {
      institution: "SRM Institution of Science and Technology",
      location: "Chennai",
      percentage: "88.6",
      duration: "2020-09-01 - 2024-06-07",
      degree: "B. Tech in Computer Science and Engineering",
      image: srmImage
    },
    {
      institution: "Microsoft in association with Intrnforte",
      location: "Azure exam",
      percentage: "842/1000",
      duration: "2023-06-01 - 2023-09-11",
      degree: "AIML (Microsoft Azure - AI900)",
      image: msImage
    },
    {
      institution: "Green's Technology",
      location: "Chennai",
      degree: "AWS and DevOps",
      technologies: [
        "AWS: EC2, S3, VPC, LB, Route 53, IAM",
        "DevOps: Docker, Kubernetes, Jenkins, GIT, Ansible, Terraform"
      ],
      duration: "Feb 2024",
      image: greImage
    }
  ];

  useEffect(() => {
    setFadeClass(''); 
    setTimeout(() => setFadeClass('fade-in'), 100); 
  }, [currentEducation]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEducation((prev) => (prev + 1) % educationData.length);
    }, 5000);
    return () => clearInterval(interval); 
  }, [educationData.length]);

  const { institution, location, percentage, duration, degree, image, technologies } = educationData[currentEducation];

  const handleRadioChange = (index) => {
    setCurrentEducation(index);
  };

  return (
    <section className="education-section">
      <div className="education-content">
        <h2 className={fadeClass}>{currentEducation === 1 ? "Certification" : currentEducation === 2 ? "Training" : "Education"}</h2>
        <p className={`line-1 ${fadeClass}`}>{institution}</p>
        <p className={`line-2 ${fadeClass}`}>📍 {location}</p>
        {percentage && <p className={`line-3 ${fadeClass}`}>Percentage: {percentage}</p>} 
        <p className={`line-4 ${fadeClass}`}>Duration: {duration}</p>
        <p className={`line-5 ${fadeClass}`}>Degree: {degree}</p>
        {technologies && (
          <div className={`line-6 ${fadeClass}`}>
            <p>{technologies[0]}</p>
            <p>{technologies[1]}</p>
          </div>
        )}
      </div>
      <div className="education-images">
        <button className="education-image" style={{ backgroundImage: `url(${image})` }} onClick={() => handleRadioChange(currentEducation)}>
          <span className="button-overlay">View Details</span>
        </button>
      </div>
      <div className="education-radios">
        {educationData.map((_, index) => (
          <label key={index}>
            <input
              type="radio"
              name="education"
              checked={currentEducation === index}
              onChange={() => handleRadioChange(index)}
            />
          </label>
        ))}
      </div>
    </section>
  );
}

export default Edu;
