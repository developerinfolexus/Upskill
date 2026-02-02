import React from "react";
import "./Footer.css";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

// Images
import logoImage from "../assets/Logor.png";
import mapImage from "../assets/map.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-col company-col">
          <img
            src={logoImage}
            alt="Infolexus Logo"
            className="footer-logo"
          />

          <p>
            Infolexus is a premier technology partner delivering innovative
            IT solutions and strategic workforce management to global
            enterprises.
          </p>

          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul className="footer-links-list">
            <li><a href="https://infolexus.com/" target="_blank" rel="noopener noreferrer">Home</a></li>
            <li><a href="https://infolexus.com/about" target="_blank" rel="noopener noreferrer">About Us</a></li>
            <li><a href="https://infolexus.com/technologies" target="_blank" rel="noopener noreferrer">Technologies</a></li>
            <li><a href="https://infolexus.com/clients" target="_blank" rel="noopener noreferrer">Clients</a></li>
            <li><a href="https://infolexus.com/careers" target="_blank" rel="noopener noreferrer">Careers</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact Us</h3>

          <p className="contact-item">
            <FaMapMarkerAlt className="footer-icon" /> 
            <span>
              Infolexus Solutions,<br />
              63/54–55, Dhamu Nagar,<br />
              Puliyakulam, Coimbatore – 641045
            </span>
          </p>

          <p className="contact-item">
            <FaEnvelope className="footer-icon" /> sales@infolexus.com
          </p>

          <p className="contact-item">
            <FaPhoneAlt className="footer-icon" /> +91 90439 19570
          </p>
        </div>

        {/* Location Map */}
        <div className="footer-col map-col">
          <h3>Location</h3>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
            <img src={mapImage} alt="Location Map" className="footer-map-img" />
          </a>
        </div>

      </div>

      {/* Bottom Bar - Center Aligned Content */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© 2026 Infolexus Solutions. All rights reserved.</p>
          <a href="https://infolexus.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}