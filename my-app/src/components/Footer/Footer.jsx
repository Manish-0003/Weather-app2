import React from 'react';
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
     <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="footer-content">
        {/* Logo + Tagline */}
        <div className="footer-section">
          <h2 className="footer-logo">🌤 WeatherApp</h2>
          <p className="footer-text">
            Accurate forecasts. Beautiful design. Built for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/forecast">Forecast</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-socials">
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} WeatherApp • All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer