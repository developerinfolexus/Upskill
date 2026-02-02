import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, FaTerminal, FaDatabase, FaPalette, 
  FaBrain, FaMobile, FaCloud, FaShieldAlt, FaCircle 
} from 'react-icons/fa';
import './Course.css';
import { Link } from "react-router-dom";


const LearningTracks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const courseList = [
    { title: "Frontend Development",  icon: <FaCode />, skills: "React, Next.js, Tailwind CSS", color: "#6366f1" },
    { title: "Backend Development",  icon: <FaTerminal />, skills: "Node.js, Express, MongoDB", color: "#10b981" },
    { title: "Full Stack Master",  icon: <FaDatabase />, skills: "MERN Stack, SQL, AWS", color: "#f59e0b" },
    { title: "UI/UX Design Specialization",  icon: <FaPalette />, skills: "Figma, Adobe XD, Prototyping", color: "#ec4899" },
    { title: "AI & Data Science",  icon: <FaBrain />, skills: "Python, ML, TensorFlow", color: "#8b5cf6" },
    { title: "Mobile App Development",  icon: <FaMobile />, skills: "React Native, Flutter, Firebase", color: "#3b82f6" }
  ];

  return (
    <section className="roadmap-section">
      <div className="roadmap-container">
        {/* Header */}
        <div className="roadmap-header">
          <span className="roadmap-badge">OUR COURSES</span>
          <h2 className="roadmap-title">Explore Learning <span className="highlight">Tracks</span></h2>
          <p className="roadmap-subtitle">Choose Path to Elevate Your Career Industry-led curriculum.</p>
        </div>

        {/* Roadmap List Area */}
        <div className="roadmap-list">
          {courseList.map((course, index) => (
            <motion.div 
              className={`roadmap-item ${hoveredIndex === index ? 'active' : ''}`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline Connector */}
              <div className="timeline-connector">
                <div className="dot-outer" style={{ borderColor: course.color }}>
                  <div className="dot-inner" style={{ backgroundColor: course.color }}></div>
                </div>
                {index !== courseList.length - 1 && <div className="line"></div>}
              </div>

              {/* Course Info Strip */}
              <div className="course-strip">
                <div className="strip-main">
                  <div className="icon-box" style={{ background: `${course.color}15`, color: course.color }}>
                    {course.icon}
                  </div>
                  <div className="text-box">
                    <h3>{course.title}</h3>
                    <span className="duration-pill">{course.duration}</span>
                  </div>
                </div>

                {/* Expanded Details on Hover */}
                <div className="strip-details">
                   <p>{course.skills}</p>
                </div>

                <div className="strip-action">
                  <Link to="/coursesection" className="no-link-style">
                   <button
                     className="path-btn"
                       style={{ "--hover-col": course.color }}
                    >
                          Get Started
                        </button>
                   </Link>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTracks;