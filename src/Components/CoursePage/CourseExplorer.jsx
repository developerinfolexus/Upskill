import React, { useState } from 'react';
import { 
  FaCheckCircle, 
  FaStar, 
  FaTimes, 
  FaArrowRight,
  FaEye,
  FaAward,
  FaClock // Added for duration
} from 'react-icons/fa'; 
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './CourseExplorer.css';
import Demopage from './Demopage';

const COURSE_DATA = [
  {
    id: 1,
    title: "Data Science",
    instructor: "Dr. Arun Kumar",
    rating: 4.8,
    price: "Premium",
    tag: "Analytics",
    color: "#00e5ff",
    duration: "6 Months", 
    img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Master statistical analysis, data visualization, and predictive modeling using Python and R."
  },
  {
    id: 2,
    title: "Generative AI (GenAI)",
    instructor: "Sarah Chen",
    rating: 5.0,
    price: "New",
    tag: "Advanced",
    color: "#7c4dff",
    duration: "4 Months",
    img: "https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-a-look-inside-the-complexity-of-an-ai-language-model-it-was-created-by-artist-wes-cockx-as-part-of-the-visual-con.png?auto=compress&cs=tinysrgb&w=800",
    description: "Build next-gen applications using LLMs, Prompt Engineering, and OpenAI APIs."
  },
  {
    id: 3,
    title: "Digital Marketing",
    instructor: "James Wilson",
    rating: 4.7,
    price: "Trending",
    tag: "Growth",
    color: "#ff007a",
    duration: "4 Months",
    img: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Master SEO, SEM, Social Media Strategy, and Performance Marketing for the digital era."
  },
  {
    id: 4,
    title: "Python Full Stack",
    instructor: "Vikram Singh",
    rating: 4.7,
    price: "Free",
    tag: "Web Dev",
    color: "#ffd600",
    duration: "4 Months",
    img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "End-to-end development using Python, Django, and modern React frontend frameworks."
  },
  {
    id: 5,
    title: "Java Full Stack",
    instructor: "Manoj Prabu",
    rating: 4.8,
    price: "Enterprise",
    tag: "Backend",
    color: "#00e676",
    duration: "6 Months",
    img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Master Java Spring Boot, Microservices, and Angular for high-performance enterprise apps."
  },
  {
    id: 6,
    title: "UI / UX Design",
    instructor: "Priya Dass",
    rating: 4.9,
    price: "Creative",
    tag: "Design",
    color: "#f50057",
    duration: "4 Months",
    img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Learn user-centric design principles, prototyping in Figma, and usability testing."
  },
   /* 🔥 NEW COURSES ADDED BELOW 🔥 */

  {
    id: 7,
    title: "Artificial Intelligence",
    instructor: "AI Faculty Team",
    rating: 4.9,
    price: "Advanced",
    tag: "AI",
    color: "#18ffff",
    duration: "6 Months",
    img: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Learn core AI concepts including intelligent agents, search algorithms, and real-world AI applications."
  },
  {
    id: 8,
    title: "AI & Generative AI",
    instructor: "AI Research Team",
    rating: 5.0,
    price: "Trending",
    tag: "GenAI",
    color: "#651fff",
    duration: "5 Months",
    img: "https://images.pexels.com/photos/8386369/pexels-photo-8386369.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Hands-on training with Generative AI, LLMs, prompt engineering, and AI-powered products."
  },
  {
    id: 9,
    title: "Data Science + AI + GenAI",
    instructor: "Industry Experts",
    rating: 5.0,
    price: "Premium",
    tag: "AI Stack",
    color: "#00e676",
    duration: "8 Months",
    img: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Complete career track covering Data Science, Artificial Intelligence, and Generative AI projects."
  },
  {
    id: 10,
    title: "Data Analysis",
    instructor: "Analytics Team",
    rating: 4.8,
    price: "Popular",
    tag: "Analytics",
    color: "#ffab00",
    duration: "4 Months",
    img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Learn Excel, SQL, Power BI, and Python to analyze and visualize real-world business data."
  },
  {
    id: 11,
    title: "MERN Stack",
    instructor: "Full Stack Team",
    rating: 4.9,
    price: "Hot",
    tag: "Full Stack",
    color: "#00b0ff",
    duration: "6 Months",
    img: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Build full-stack web apps using MongoDB, Express, React, and Node.js with deployment."
  },
  {
    id: 12,
    title: "Programming in C",
    instructor: "Core Programming Faculty",
    rating: 4.6,
    price: "Foundation",
    tag: "Programming",
    color: "#ff5252",
    duration: "3 Months",
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Strong foundation in C programming, data structures basics, and problem-solving techniques."
  }
];

const CourseExplorer = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="modern-explorer">
      <ToastContainer position="bottom-center" theme="dark" />
      
      <div className="explorer-wrapper">
        <header className="minimal-header">
          <motion.span 
            className="label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaAward /> 2026 TOP RATED PROGRAMS
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Upgrade Your <span>Skills</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Join 50k+ students mastering high-demand technology.
          </motion.p>
        </header>

        <div className="modern-grid">
          {COURSE_DATA.map((course, index) => (
            <motion.div 
              key={course.id}
              className="glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              onClick={() => setSelectedCourse(course)}
            >
              <div className="card-media">
                <img src={course.img} alt={course.title} loading="lazy" />
                <div className="price-tag">{course.price}</div>
                <div className="view-overlay">
                  <div className="eye-circle"><FaEye /></div>
                  <span>Quick Look</span>
                </div>
              </div>

              <div className="card-content">
                <div className="card-top">
                  <span className="badge" style={{ '--glow-color': course.color, color: course.color }}>
                    {course.tag}
                  </span>
                  <div className="rating"><FaStar /> {course.rating}</div>
                </div>
                <h3>{course.title}</h3>
                
                
                {/* 🔥 DURATION ADDED TO CARD */}
                <div className="card-duration">
                   <FaClock /> {course.duration}
                </div>

                <div className="card-footer-line" style={{ background: course.color }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCourse && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div 
              className="modal-body"
              initial={{ scale: 0.9, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedCourse(null)}>
                <FaTimes />
              </button>
              
              <div className="modal-grid">
                <div className="modal-image-container">
                  <img src={selectedCourse.img} alt={selectedCourse.title} />
                  <div className="img-gradient-overlay"></div>
                </div>
                
                <div className="modal-text"><br/>
                  <span className="modal-badge" style={{ color: selectedCourse.color }}>
                    {selectedCourse.tag} • {selectedCourse.duration}
                  </span>
                  <h2>{selectedCourse.title}</h2>
                  <p className="description">{selectedCourse.description}</p>
                  
                  <div className="features-grid">
                    <div className="feature-item">
                      <FaCheckCircle className="check" />
                      <span>Performance based Stipend</span>
                    </div>
                    <div className="feature-item">
                      <FaCheckCircle className="check" />
                      <span> Live Industry Projects</span>
                    </div>
                    <div className="feature-item">
                      <FaCheckCircle className="check" />
                      <span> Internship Opportunity</span>
                    </div>
                    <div className="feature-item">
                      <FaCheckCircle className="check" />
                      <span> 100% Placement Assistance</span>
                    </div>
                    <div className="feature-item">
                      <FaCheckCircle className="check" />
                      <span> Industry Certification</span>
                    </div>
                    <div className="feature-item">
                      <FaCheckCircle className="check" />
                      <span> Mock Interviews</span>
                    </div>
                  </div>

                  <button
                    className="enroll-now-btn"
                    style={{ background: `linear-gradient(90deg, ${selectedCourse.color}, #7000ff)` }}
                    onClick={() => {
                        navigate("/CourseForm");
                        setSelectedCourse(null);
                    }}
                  >
                    Enroll Now <FaArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Demopage />
    </div>
  );
};

export default CourseExplorer;