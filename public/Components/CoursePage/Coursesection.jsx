import React from "react";
import "./Coursesection.css";

// Assets Imports (EXACT file names)
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
      tech: "React, Next.js, Tailwind CSS",
      desc: "Master modern UI development using React and build responsive, high-performance web applications.",
      img: FrontendImg,
    },
    {
      id: 2,
      title: "Backend Development",
      tech: "Node.js, Express, MongoDB",
      desc: "Learn server-side development, APIs, authentication, and database integration for scalable systems.",
      img: BackendImg,
    },
    {
      id: 3,
      title: "Full Stack Master",
      tech: "MERN Stack, SQL, AWS",
      desc: "Become a complete developer by mastering both frontend and backend with real-time projects.",
      img: FullstackImg,
    },
    {
      id: 4,
      title: "UI/UX Design Specialization",
      tech: "Figma, Adobe XD, Prototyping",
      desc: "Design user-centered interfaces using modern design principles and professional prototyping tools.",
      img: UiuxImg,
    },
    {
      id: 5,
      title: "AI & Data Science",
      tech: "Python, ML, TensorFlow",
      desc: "Build machine learning models and analyze data to create intelligent solutions for real-world apps.",
      img: AiImg,
    },
    {
      id: 6,
      title: "Mobile App Development",
      tech: "React Native, Flutter, Firebase",
      desc: "Develop cross-platform mobile applications and deploy apps for both Android and iOS.",
      img: MobileImg,
    },
  ];

  return (
    <section className="courses-section">
      <div className="courses-container">
        <h2 className="courses-title">Our Professional Courses</h2>

        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image-wrapper">
                <img
                  src={course.img}
                  alt={course.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=Image+Not+Found";
                  }}
                />
              </div>

              <div className="course-content">
                <span className="course-tech-tag">{course.tech}</span>
                <h3>{course.title}</h3>
                <p className="course-desc">{course.desc}</p>
                <button className="start-btn" type="button">
                  Get Started
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
