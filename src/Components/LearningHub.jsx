import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaUserTie, FaSearchPlus, FaDatabase, FaArrowRight } from 'react-icons/fa';
import './LearningHub.css';

const LearningHub = () => {
  const learningPaths = [
    { title: "Web Development", icon: <FaCode />, color: "#00d2ff", desc: "Master Modern Frontend & Backend with industry standards and live projects." },
    { title: "Cloud Architecting", icon: <FaCloud />, color: "#ff9f43", desc: "Deploy and scale global applications with AWS, Azure & Google Cloud." },
    { title: "Professional Diplomas", icon: <FaUserTie />, color: "#a55eea", desc: "Get industry-recognized certifications to accelerate your career growth." },
    { title: "Skill Assessment", icon: <FaSearchPlus />, color: "#2bcbba", desc: "Evaluate your technical proficiency and find the right learning path." }
  ];

  const topCourses = [
    { name: "Web/UI Designing", category: "Design System" },
    { name: "Data Analytics", category: "Big Data" },
    { name: "Data Science", category: "Machine Learning" },
    { name: "Full Stack Dev", category: "MERN Stack" }
  ];

  return (
    <section className="learning-hub-section">
      <div className="hub-container">
        {/* Header Section */}
        <div className="hub-header">
          <motion.span 
            className="section-tag"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            LEARNING ECOSYSTEM
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore Our <span className="highlight-text">Learning Hub</span>
          </motion.h2>
          <p className="header-subtitle">
            High-impact programs designed to transform beginners into industry-ready tech professionals.
          </p>
        </div>

        {/* Section 1: Learning Paths */}
        <div className="grid-label">
          <span>01. PRIMARY PATHS</span>
          <div className="label-line"></div>
        </div>

        <div className="paths-grid">
          {learningPaths.map((path, index) => (
            <motion.div 
              className="path-card" 
              key={index}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="path-icon" style={{ background: `${path.color}15`, color: path.color }}>
                {path.icon}
              </div>
              <h3 className="path-title">{path.title}</h3>
              <p className="path-desc">{path.desc}</p>
              <button className="path-btn" style={{ borderColor: `${path.color}40` }}>
                Learn More <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Section 2: Top Courses */}
        <div className="grid-label">
          <span>02. SPECIALIZED COURSES</span>
          <div className="label-line"></div>
        </div>

        <div className="courses-grid">
          {topCourses.map((course, index) => (
            <motion.div 
              className="course-item" 
              key={index}
              whileHover={{ x: 5 }}
            >
              <div className="course-info">
                <span className="course-cat">{course.category}</span>
                <h4 className="course-name">{course.name}</h4>
              </div>
              <div className="course-action">
                <FaDatabase className="db-icon" />
                <span className="view-text">DETAILS</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningHub;