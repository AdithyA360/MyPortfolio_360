import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';
import Photo1 from '.././Images/Photo1.jpeg';
import Photo2 from '.././Images/Photo2.jpeg';
import Photo3 from '.././Images/Photo3.jpeg';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function About() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const photos = [Photo1, Photo2, Photo3];

  // Preload all images to prevent flickering
  useEffect(() => {
    const imagePromises = photos.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error('Error loading images:', err));
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [photos.length, imagesLoaded]);

  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-content-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-image-container">
          <motion.img
            key={currentPhoto}
            src={photos[currentPhoto]}
            alt="Adithyakumar"
            className="about-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="about-text-content">
          <h2>About Me</h2>
          <div className="about-role">Software Engineer & Full Stack Developer</div>

          <p className="about-description">
            I am a passionate developer with a strong foundation in computer science and a knack for building efficient, scalable web applications.
            With expertise in both frontend and backend technologies, I love turning complex problems into simple, beautiful solutions.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt /> Chennai, Tamilnadu
            </div>
            <div className="info-item">
              <FaPhone /> <a href="tel:+919345524743">+91 9345524743</a>
            </div>
            <div className="info-item">
              <FaEnvelope /> <a href="mailto:adithyakumar.u@gmail.com">adithyakumar.u@gmail.com</a>
            </div>
            <div className="info-item">
              <FaLinkedin /> <a href="https://www.linkedin.com/in/adithyakumar-u/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="interests-section">
            <div className="interests-title">Areas of Interest</div>
            <div className="interests-tags">
              <span className="interest-tag">Web Development</span>
              <span className="interest-tag">Cloud Computing</span>
              <span className="interest-tag">DevOps</span>
              <span className="interest-tag">Data Analysis</span>
              <span className="interest-tag">Machine Learning</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
