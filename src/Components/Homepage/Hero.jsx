import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaAward, FaLaptopCode } from 'react-icons/fa';
import './Hero.css';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="premium-upskill-hero">
      {/* Dynamic Background with added animation wrapper */}
      <div className="hero-bg-container">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
          alt="Technical Upskilling"
          className="hero-media animated-bg"
        />
        <div className="hero-gradient-overlay"></div>
        <div className="hero-neural-pulse"></div>
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-text-content">
          <h1 className="hero-main-title">
            Empowering <span className="text-light">Technical</span> <br /> 
            Excellence<span className="dot">.</span>
          </h1>

          <p className="hero-lead-text">
            Strategic workforce transformation through industry-aligned curriculum 
            and hands-on proficiency training. Elevate your technical trajectory 
            with InfoLexus Global.
          </p>

          <div className="hero-button-row">
            <Link to="/Course" className="no-underline">
              <button className="btn-primary-solid">
                Explore Programs <FaArrowRight className="btn-icon" />
              </button>
            </Link>

            <button className="btn-secondary-outline">
              Corporate Training
            </button>
          </div>
        </div>
      </div>

      {/* Modern UI Footer Elements */}
      <div className="hero-footer-info">
        <div className="info-item">
          <span className="info-num">1000+</span>
          <span className="info-label">Student placed in Companies</span>
        </div>
        <div className="info-item">
          <span className="info-num">50+</span>
          <span className="info-label">Industry Mentors</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;