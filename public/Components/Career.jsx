import React from "react";
import "./Career.css";
import bgImage from "../assets/career.jpg";
import { Link, useNavigate } from "react-router-dom"; // 1. useNavigate import panniyachu

export default function Career() {
  const navigate = useNavigate(); // 2. Hook-ah initialize panniyachu

  return (
    <section
      className="career-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <div className="content">
          <h1>
            Ready to Transform <br />
            Your Future?
          </h1>

          <p>
            Join thousands of successful learners who have already taken the
            leap. Your journey to excellence starts here.
          </p>

          <div className="buttons">
            {/* Take a Look Button - Ippo ithu click panna Upskill page-ku pogum */}
            <button 
              className="primary-btn" 
              onClick={() => navigate('/upskill')} 
            >
              Take a Look
            </button>

            {/* Contact Us Button */}
            <Link to="/RegisterForm" className="secondary-btn-link">
              <button className="secondary-btn">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
