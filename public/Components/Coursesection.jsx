import React from "react";
import "./Coursesection.css";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Frontend Development",
      tech: "React • Next.js • Tailwind CSS • TypeScript",
      highlight: "Crafting Pixel-Perfect Interfaces",
      img: "/Mrn.png",
      desc: "Master modern UI development with React. Build blazing-fast, responsive, and high-performance web applications using industry-standard tools and best practices.",
    },
    {
      id: 2,
      title: "Backend Development",
      tech: "Node.js • Express • MongoDB • Redis",
      highlight: "Architecting Scalable Systems",
      img: "/backend.jpg",
      desc: "Deep dive into server-side architecture. Learn to design robust APIs, handle secure authentication, and manage complex database schemas.",
    },
    {
      id: 3,
      title: "Full Stack Master",
      tech: "MERN Stack • GraphQL • AWS • Docker",
      highlight: "Ultimate End-to-End Proficiency",
      img: "/mern.png",
      desc: "Become an architect of the web. This journey covers everything from UI to cloud deployment using real-world projects.",
    },
    {
      id: 4,
      title: "UI / UX Design",
      tech: "Figma • Adobe XD • Prototyping",
      highlight: "Human-Centered Design Mastery",
      img: "/ui.jpg",
      desc: "Learn wireframing, prototyping, and usability testing to design intuitive and engaging digital experiences.",
    },
    {
      id: 5,
      title: "AI & Data Science",
      tech: "Python • ML • TensorFlow • PyTorch",
      highlight: "Intelligence Through Data",
      img: "/AI.png",
      desc: "Analyze data, build ML models, and create intelligent applications using modern AI frameworks.",
    },
    {
      id: 6,
      title: "Mobile App Development",
      tech: "React Native • Flutter • Firebase",
      highlight: "Cross-Platform Excellence",
      img: "/mobileapp.png",
      desc: "Build high-performance mobile applications for Android and iOS using cross-platform technologies.",
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
