import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [showAbout, setShowAbout] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAbout = (e) => {
    e.preventDefault();
    setMenuOpen(false);

    // Scroll to top first
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Delay opening modal to allow scroll to complete
    setTimeout(() => {
      setShowAbout((prev) => !prev);
    }, 300);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={scrolled ? "glass" : ""}>
      <nav className="fixed-nav">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Adithya
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a></li>
          <li><button onClick={toggleAbout} className="about-btn">About</button></li>
          <li><a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a></li>
          <li>
            <a
              href="https://drive.google.com/file/d/1fp2XloW5GOAksHC2MmailuOZ84rivofY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* About Modal */}
      {showAbout && (
        <div className="modal-overlay" onClick={() => setShowAbout(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={toggleAbout}>
              &times;
            </button>
            <h2>About Me</h2>
            <p>
              Hi, I’m <strong>Adithyakumar</strong>!
              I hold a Bachelor of Computer Science degree from <strong>SRM University, Chennai</strong>, and I am a <strong>Software Engineer</strong> and <strong>Full Stack Developer</strong>.
            </p>

            <h3>Skills & Expertise</h3>
            <ul>
              <li>Frontend & Backend: React.js, Node.js, REST APIs, GraphQL</li>
              <li>Databases: MySQL, PostgreSQL, SSMS</li>
              <li>Cloud: AWS services</li>
            </ul>

            <h3>Projects</h3>
            <ul>
              <li><strong>HRMS</strong>: Manage employee data, payroll, leaves, attendance.</li>
              <li><strong>Twilio API</strong>: Bulk SMS tool with tracking.</li>
              <li><strong>Tamil Character Recognition</strong>: Enhance Tamil character recognition using CNN-YOLOv8, boosting accuracy in real-world conditions.</li>
              <li><strong>AI Pothole Detection</strong>: Proactive pothole detection system using AI for safer roads and faster maintenance.</li>
            </ul>

            <h3>Continuous Learning</h3>
            <p>Courses in AWS, DevOps, and Python.</p>

            <h3>What Drives Me</h3>
            <p>
              Quick learner, problem solver, and team player. Passionate about reading books and exploring new tech.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
