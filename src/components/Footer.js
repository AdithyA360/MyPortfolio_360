import React from 'react';
import './Footer.css';
import { FaLinkedin, FaEnvelope, FaPhone, FaReact } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/adithyakumar-u/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="mailto:adithyakumar.u@gmail.com">
                <FaEnvelope /> Email
              </a>
              <a href="tel:+919345524743">
                <FaPhone /> Phone
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Adithyakumar U. • Built with <FaReact className="react-icon" /> React & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
