import React, { useState } from 'react'; // Added useState
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { FaGraduationCap, FaArrowRight, FaCheckCircle, FaLaptopCode, FaBullseye, FaLightbulb } from 'react-icons/fa';
import AboutImg from '../assets/About.png'; 
import './Aboutus.css';

const AboutSection = () => {
  // State to handle showing more content
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about-custom-section">
      <div className="container-v4">
        <div className="about-wrapper">
          
          {/* LEFT SIDE: CONTENT */}
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="badge-wrapper">
              <span className="line"></span>
              <span className="badge-text">Job-Ready Training</span>
            </div>
            
            <h2 className="about-title">
              Get your dream IT job with <br />
              <span className="highlight">Coimbatore's Top Software Training Institute</span>
            </h2>
            
            <p className="about-desc">
              At Yale IT Skill Hub, we offer the best IT courses in Coimbatore, designed to 
              equip students with job-oriented skills that meet industry demands.
            </p>

            {/* Main Info Grid */}
            <div className="about-info-grid">
               <div className="info-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Expert Instructors</span>
               </div>
               <div className="info-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Latest Industry Trends</span>
               </div>
            </div>

            {/* INTERACTIVE SECTION: SHOW MORE CONTENT */}
            <AnimatePresence>
              {showMore && (
                <motion.div 
                  className="extra-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="more-details-grid">
                    <div className="detail-card">
                      <FaBullseye className="detail-icon" />
                      <div>
                        <h5>Our Mission</h5>
                        <p>To bridge the gap between academic learning and industry requirements.</p>
                      </div>
                    </div>
                    <div className="detail-card">
                      <FaLightbulb className="detail-icon" />
                      <div>
                        <h5>Our Vision</h5>
                        <p>Empowering the next generation of developers with practical, hands-on tech skills.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button 
              className={`about-btn ${showMore ? 'active' : ''}`}
              onClick={() => setShowMore(!showMore)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showMore ? "Show Less" : "Discover Our Mission"} 
              <FaArrowRight className={`btn-arrow ${showMore ? 'rotate-down' : ''}`} />
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE: IMAGE */}
          <motion.div 
            className="about-right"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="organic-shape-container">
              <div className="blob-bg b1"></div>
              <div className="blob-bg b2"></div>
              
              <div className="image-mask">
                <img 
                  src={AboutImg} 
                  alt="Infolexus Training" 
                  className="training-img"
                />
              </div>

              <motion.div 
                className="floating-badge megaphone"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <FaLaptopCode />
              </motion.div>

              <motion.div 
                className="floating-card"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="card-icon"><FaGraduationCap /></div>
                <div>
                  <h4>Infolexus</h4>
                  <p>Coimbatore, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;