import React from "react";
import { useNavigate } from "react-router-dom";
import "./Coursesection.css";

const CoursesSection = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Frontend Development",
      tech: "React • Next.js • Tailwind CSS • TypeScript",
      highlight: "Crafting Pixel-Perfect Interfaces",
      img: "/Frontend.jpg",
      projects: "10+",
      actionText: "Start Building UI",
      desc: "Master modern UI development with React. Build blazing-fast, responsive, and high-performance web applications using industry-standard tools and best practices.",
    },
    {
      id: 2,
      title: "Backend Development",
      tech: "Node.js • Express • MongoDB • Redis",
      highlight: "Architecting Scalable Systems",
      img: "/backend.jpg",
      projects: "12+",
      actionText: "Explore Backend Systems",
      desc: "Deep dive into server-side architecture. Learn to design robust APIs, secure authentication, and scalable databases.",
    },
    {
      id: 3,
      title: "Full Stack Master",
      tech: "MERN Stack • GraphQL • AWS • Docker",
      highlight: "Ultimate End-to-End Proficiency",
      img: "/Mern.png",
      projects: "15+",
      actionText: "Become Full Stack Ready",
      desc: "End-to-end mastery from UI to cloud deployment with real-world full-stack projects.",
    },
    {
      id: 4,
      title: "UI / UX Design",
      tech: "Figma • Adobe XD • Prototyping",
      highlight: "Human-Centered Design Mastery",
      img: "/UI.jpg",
      projects: "8+",
      actionText: "Design Better Experiences",
      desc: "Learn professional wireframing, prototyping, and usability testing with real design challenges.",
    },
    {
      id: 5,
      title: "AI & Data Science",
      tech: "Python • ML • TensorFlow • PyTorch",
      highlight: "Intelligence Through Data",
      img: "/AI.png",
      projects: "14+",
      actionText: "Work With Data Models",
      desc: "Analyze data, build ML models, and create intelligent systems for real-world problems.",
    },
    {
      id: 6,
      title: "Mobile App Development",
      tech: "React Native • Flutter • Firebase",
      highlight: "Native Experience on All Platforms",
      img: "/Mobileapp.png",
      projects: "9+",
      actionText: "Build Mobile Apps",
      desc: "Create high-performance cross-platform mobile applications with a single codebase.",
    },
  ];

  return (
    <section id="coursesection" className="courses-section">
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
              <div className="course-image-group">
                <div className="image-card-wrapper">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="premium-img"
                  />
                  <div className="premium-overlay">
                    <p className="overlay-text">{course.highlight}</p>
                  </div>
                </div>
                <div className="decoration-box"></div>
              </div>

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
                    <strong>{course.projects}</strong>
                    <span>Projects</span>
                  </div>
                  <div className="stat-item">
                    <strong>Expert</strong>
                    <span>Mentorship</span>
                  </div>
                </div>

                {/* ✅ BUTTON → COURSE FORM PAGE */}
                <button
                  className="course-action-btn"
                  onClick={() => navigate("/courseform")}
                >
                  {course.actionText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
