import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
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
            <li><Link to="/" className="nav-anchor">Home</Link></li>

            <li className="nav-li has-megamenu">
              <span className="nav-anchor">
                <Link to="/learning-hub" className="nav-anchor">UPSKILL</Link> 
              </span>
            
            </li>

            <li><Link to="/Upskill" className="nav-anchor">Learning Hub</Link></li>
            <li><Link to="/RegisterForm" className="nav-anchor">Contact Us</Link></li>
          </ul>
        </div>

        {/* ACTIONS - FIND A COURSE linked to CourseExplorer */}
        <div className="action-section">
          <Link to="/CourseExplorer" className="course-link-cta">
            <span className="cta-label">FIND A COURSE</span>
            <FaArrowRight className="cta-arrow-icon" />
          </Link>
          
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;