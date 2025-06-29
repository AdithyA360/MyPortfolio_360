import React, { useState, useEffect } from 'react';
import './About.css'; 
import Photo1 from '.././Images/Photo1.jpeg'; 
import Photo2 from '.././Images/Photo2.jpeg'; 
import Photo3 from '.././Images/Photo3.jpeg'; 

function About() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = [Photo1, Photo2, Photo3]; 

  // Cycle through the photos every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
    }, 2000);
    return () => clearInterval(interval); 
  }, [photos.length]);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>Adithyakumar U</h1>
          <p>📍 Chennai, Tamilnadu</p>
          <p>📞 <a href="tel:+919345524743">+91 9345524743</a></p>
          <p>📧 <a href="mailto:adithyakumar.u@gmail.com">adithyakumar.u@gmail.com</a></p>
          <p>🔗 <a href="https://www.linkedin.com/in/adithyakumar-u/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
          <p>📄 <a href="https://drive.google.com/file/d/1iR43AaYf0Uo3BdsvOU2cXxJwHsJYCWd4/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">Download CV</a></p>
        </div>
        <div className="about-photo">
          <img src={photos[currentPhoto]} alt="Adithyakumar" />
        </div>
      </div>

      {/* AREA OF INTERESTS section */}
      <div className="interests-container">
        <h2>AREA OF INTERESTS</h2>
        <div className="interests-marquee">
          <p>Cloud Computing | DevOps | Web Development | Data Analysis | Machine Learning</p>
        </div>
      </div>
    </section>
  );
}

export default About;
