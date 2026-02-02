import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import LogoImg from '../../assets/Logor.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`upskill-nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-container">
        
        {/* BRANDING */}
        <div className="brand-section">
          <Link to="/" className="logo-link">
            <div className="logo-container">
              <img 
                src={LogoImg} 
                alt="Infolexus Logo" 
                className="logo-image" 
                style={{ height: '40px', width: 'auto' }}
              />
            </div>
          </Link>
        </div>

        {/* TRAINING NAVIGATION */}
        <div className="nav-links-section">
          <ul className="nav-list">
            {/* Home Link - Redirects to / path */}
            <li><Link to="/" className="nav-anchor">Home</Link></li>
            
            <li className="nav-li has-megamenu">
              <span className="nav-anchor">
                 <li><Link to="/learning-hub" className="nav-anchor">UPSKILL</Link></li> <FaChevronDown className="arrow" />
              </span>
              <div className="megamenu-panel">
                <div className="megamenu-grid">
                  <div className="megamenu-col">
                    <h4>LEARNING PATHS</h4>
                    <a href="#">Web Development</a>
                    <a href="#">Cloud Architecting</a>
                    <a href="#">Data Engineering</a>
                  </div>
                  <div className="megamenu-col">
                    <h4>CERTIFICATIONS</h4>
                    <a href="#">Professional Diplomas</a>
                    <a href="#">Corporate Training</a>
                    <a href="#">Skill Assessment</a>
                  </div>
                  <div className="megamenu-col">
                    <h4>COURSES</h4>
                    <a href="#">Full Stack Developer</a>
                    <a href="#">Data Science</a>
                    <a href="#">Data Analytics</a>
                    <a href="#">Web/UI Designing</a>
                    <a href="#">App Developer</a>
                  </div>
                </div>
              </div>
            </li>

            {/* Link components correctly styled as <li> items */}
            <li><Link to="/Upskill" className="nav-anchor">Learning Hub</Link></li>
            <li><Link to="/RegisterForm" className="nav-anchor">Contact Us</Link></li>
          </ul>
        </div>

        {/* ACTIONS */}
        <div className="action-section">
          <div className="search-bar">
            <FaSearch className="search-ico" />
            <input type="text" placeholder="FIND A COURSE" />
          </div>
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;