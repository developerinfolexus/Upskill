import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaBriefcase, FaComments, FaBrain, FaUserCheck, FaArrowRight, FaRocket } from 'react-icons/fa';
import CollegeImg from '../assets/clgTrain.jpg'; 
import GraduateImg from '../assets/jobseeker.jpg';
import './Upskill.css';

const UpskillingSection = () => {
  const [activeTab, setActiveTab] = useState('colleges');

  const content = {
    colleges: {
      title: "For Colleges & Institutions",
      subtitle: "CAMPUS TO CORPORATE",
      desc: "This specialized initiative is designed to bridge the critical gap between academic learning and industry expectations. We empower students by transforming theoretical knowledge into industry-ready skills through immersive, hands-on coding workshops focused on modern tech stacks. Our comprehensive support system includes deep-tech training in MERN and Cloud architectures, ensuring students are prepared for high-scale environments.",
      image: CollegeImg,
      cards: [
        { icon: <FaLaptopCode />, title: "Technical Training", info: "Hands-on coding workshops." },
        { icon: <FaBriefcase />, title: "Placement Readiness", info: "Preparing for corporate life." },
        { icon: <FaComments />, title: "Soft Skills", info: "Mastering communication." },
        { icon: <FaBrain />, title: "Aptitude Skills", info: "Logical reasoning & IQ." },
        { icon: <FaUserCheck />, title: "Pre-Placement", info: "Final recruitment polish." }
      ]
    },
    graduates: {
      title: "For Graduates & Job Seekers",
      subtitle: "CAREER ACCELERATOR",
      // ...existing code...
desc: "Unlock your potential with our industry-focused career accelerator programs. Designed for graduates and job seekers, our specialized tracks provide hands-on experience, practical skills, and mentorship to help you land your first high-paying tech role. Gain real-world exposure, master in-demand technologies, and step confidently into your dream career.",
// ...existing code...
      image: GraduateImg,
      cards: [
        { icon: <FaLaptopCode />, title: "Full Stack Specialization", info: "Master modern web tech." },
        { icon: <FaBriefcase />, title: "Real-time Internships", info: "Live projects with mentors." },
        { icon: <FaUserCheck />, title: "Mock Interviews", info: "Industry expert feedback." }
      ]
    }
  };

  return (
    <section className="upskill-container">
      <div className="section-header">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-badge">
          OUR PROGRAMS
        </motion.span>
        <h2 className="main-title">Elevate Your Skillset with <span className="blue-text">Infolexus</span></h2>
      </div>

      <div className="upskill-wrapper">
        <div className="upskill-sidebar">
          {Object.keys(content).map((tab) => (
            <button 
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <span>{content[tab].title}</span>
              <FaArrowRight />
            </button>
          ))}
          
         
        </div>

        <div className="upskill-content">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* HERO BOX */}
              <div className="content-hero-card">
                <div className="hero-text">
                  <span className="hero-sub">{content[activeTab].subtitle}</span>
                  <h2>{content[activeTab].title}</h2>
                  <p>{content[activeTab].desc}</p>
                </div>
                <div className="hero-img-box">
                  <img src={content[activeTab].image} alt="Training" />
                </div>
              </div>

              {/* CARDS GRID - Now directly under hero box */}
              <div className="upskill-grid">
                {content[activeTab].cards.map((card, index) => (
                  <div className="upskill-card" key={index}>
                    <div className="card-icon-box">{card.icon}</div>
                    <div className="card-info">
                      <h3>{card.title}</h3>
                      <p>{card.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default UpskillingSection;