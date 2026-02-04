import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaCloud,
  FaUserTie,
  FaSearchPlus,
  FaDatabase,
  FaArrowRight
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './LearningHub.css';

const LearningHub = () => {
  const navigate = useNavigate();

  const learningPaths = [
    { title: "Web Development", icon: <FaCode />, color: "#00d2ff", desc: "Master Modern Frontend & Backend with industry standards and live projects." },
    { title: "Cloud Architecting", icon: <FaCloud />, color: "#ff9f43", desc: "Deploy and scale global applications with AWS, Azure & Google Cloud." },
    { title: "Soft Skills", icon: <FaUserTie />, color: "#a55eea", desc: "Get industry-recognized certifications to accelerate your career growth." },
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

        {/* Header */}
        <div className="hub-header">
          <motion.span className="section-tag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            LEARNING ECOSYSTEM
          </motion.span>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            Explore Our <span className="highlight-text">Learning Hub</span>
          </motion.h2>

          <p className="header-subtitle">
            High-impact programs designed to transform beginners into industry-ready tech professionals.
          </p>
        </div>

        {/* Learning Paths */}
        <div className="paths-grid">
          {learningPaths.map((path, index) => (
            <motion.div key={index} className="path-card" whileHover={{ y: -8 }}>
              <div className="path-card-info">
                <div
                  className="path-icon"
                  style={{ background: `${path.color}15`, color: path.color }}
                >
                  {path.icon}
                </div>
                <h3>{path.title}</h3>
                <p>{path.desc}</p>
              </div>

              {/* ✅ ROUTE NAVIGATION */}
              <button
                className="path-btn"
                style={{ borderColor: `${path.color}40` }}
                onClick={() => navigate("/coursesection")}
              >
                Explore Courses <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Top Courses */}
        <div className="courses-grid">
          {topCourses.map((course, index) => (
            <motion.div key={index} className="course-item">
              <div className="course-info">
                <span>{course.category}</span>
                <h4>{course.name}</h4>
              </div>
              <FaDatabase />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningHub;
