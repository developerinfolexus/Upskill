import React, { useEffect } from "react";
import "./Coursesection.css";

// Assets Imports
import FrontendImg from "../assets/Frontend.jpg";
import BackendImg from "../assets/backend.jpg";
import FullstackImg from "../assets/mern.png";
import UiuxImg from "../assets/ui.jpg";
import AiImg from "../assets/AI.png";
import MobileImg from "../assets/mobileapp.png";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Frontend Development",
      tech: "React • Next.js • Tailwind CSS • TypeScript",
      highlight: "Crafting Pixel-Perfect Interfaces",
      desc: "Master modern UI development with React. Build blazing-fast, responsive, and high-performance web applications using industry-standard tools and best practices. Focus on state management, hooks, and seamless user interactions.",
      img: FrontendImg,
    },
    {
      id: 2,
      title: "Backend Development",
      tech: "Node.js • Express • MongoDB • Redis",
      highlight: "Architecting Scalable Systems",
      desc: "Deep dive into server-side architecture. Learn to design robust APIs, handle secure authentication, and manage complex database schemas. Focus on performance tuning, security, and building systems that scale for millions.",
      img: BackendImg,
    },
    {
      id: 3,
      title: "Full Stack Master",
      tech: "MERN Stack • GraphQL • AWS • Docker",
      highlight: "Ultimate End-to-End Proficiency",
      desc: "Become an architect of the web. This comprehensive journey covers everything from front-facing UI to cloud deployment. Work on real-world projects involving real-time data, complex workflows, and cloud-native architecture.",
      img: FullstackImg,
    },
    {
      id: 4,
      title: "UI / UX Design",
      tech: "Figma • Adobe XD • Prototyping",
      highlight: "Human-Centered Design Mastery",
      desc: "Master the psychology behind great design. Learn professional wireframing, high-fidelity prototyping, and user testing. Transform abstract ideas into intuitive digital experiences that users love and trust.",
      img: UiuxImg,
    },
    {
      id: 5,
      title: "AI & Data Science",
      tech: "Python • ML • TensorFlow • PyTorch",
      highlight: "Intelligence Through Data",
      desc: "Step into the future with Machine Learning. Learn to analyze massive datasets and build predictive models. Master neural networks and natural language processing to create intelligent solutions for real-world business challenges.",
      img: AiImg,
    },
    {
      id: 6,
      title: "Mobile App Development",
      tech: "React Native • Flutter • Firebase",
      highlight: "Native Experience on All Platforms",
      desc: "Bridge the gap between iOS and Android. Build high-performance cross-platform mobile apps using a single codebase. Learn mobile-first design, push notifications, and local storage for a seamless mobile experience.",
      img: MobileImg,
    },
  ];

  return (
    <section className="courses-section">
      <div className="bg-blur-effect"></div>
      <div className="container">
        <header className="courses-header">
          <span className="sub-title">Premium Learning Experience</span>
          <h2 className="courses-title">
            Elevate Your <span>Career Path</span>
          </h2>
        </header>

        <div className="courses-list">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`course-row ${index % 2 !== 0 ? "row-reverse" : ""}`}
            >
              {/* Image Side with 3D Float Effect */}
              <div className="course-image-group">
                <div className="image-card-wrapper">
                  <img src={course.img} alt={course.title} className="premium-img" />
                  <div className="premium-overlay">
                    <p className="overlay-text">{course.highlight}</p>
                  </div>
                </div>
                <div className="decoration-box"></div>
              </div>

              {/* Content Side with X-Axis Motion */}
              <div className="course-info-group">
                <div className="tech-badge">
                  <span className="pulse-dot"></span>
                  {course.tech}
                </div>
                <h3 className="premium-h3">{course.title}</h3>
                <div className="premium-divider"></div>
                <p className="premium-desc">{course.desc}</p>
                
                <div className="course-stats">
                  <div className="stat-item">
                    <strong>12+</strong>
                    <span>Projects</span>
                  </div>
                  <div className="stat-item">
                    <strong>Expert</strong>
                    <span>Mentorship</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;