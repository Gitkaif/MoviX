import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main grid for the footer content */}
        <div className="footer-grid">
          {/* Section 1: Movie App brand and description */}
          <div className="footer-section">
            <div className="footer-brand">
              <span className="brand-icon">🎬</span>
              <span className="brand-text">MoviZ</span>
            </div>
            <p className="footer-description">
              Discover your next favorite movie with our comprehensive collection of films, ratings, and reviews.
            </p>
          </div>


          {/* Section 2: Developer */}
          <div className="footer-section">
            <h4 className="footer-heading">Developer</h4>
            <div className="developer-info">
              <div className="developer-name">Kaif Shaikh</div>
              <div className="developer-role">Full Stack Developer</div>
              <div className="skills-used">Skills Used:</div>
              <div className="developer-skills">
                <span className="skill-tag">React JS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">React Router</span>
                <span className="skill-tag">React Icons</span>
                <span className="skill-tag">IMDB API Integration</span>
                <span className="skill-tag">Lazy Loading</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">Vite</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">Firestore</span>
                <span className="skill-tag">Vercel</span>
              </div>
            </div>
          </div>

          {/* Section 3: Contact Us */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:kaifs1391@gmail.com" className="footer-link">
                  kaifs1391@gmail.com
                </a>
              </li>
              <li className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+919321797384" className="footer-link">
                  +91 9321797384
                </a>
              </li>
              <li className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span className="footer-link">
                  Mumbai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator line */}
        <hr className="footer-separator" />

        {/* Bottom section: social media and copyright */}
        <div className="footer-bottom">
          {/* Social Media Icons */}
          <div className="social-links">
            <a href="https://www.instagram.com/_.kaif_shaikh?igsh=bGV5MTdwZm50am53" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://github.com/Gitkaif" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/kaifs1391" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
              <FaLinkedin className="social-icon" />
            </a>
          </div>

          {/* Copyright text */}
          <div className="copyright">
            <p>&copy; 2025 MoviX. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
