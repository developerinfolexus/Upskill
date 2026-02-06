import React from "react";
import "./Career.css";
import bgImage from "../assets/career.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Career() {
  const navigate = useNavigate();

  return (
    <section
      className="career-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <div className="content">
          <h1>Ready to Transform Your Future?</h1>

          <p>
            Join thousands of successful learners who have already taken the
            leap. Your journey to excellence starts here.
          </p>

          <div className="buttons-wrapper">
            <button
              className="primary-btn"
              onClick={() => navigate("/upskill")}
            >
              Take a Look
            </button>

            <Link to="/RegisterForm" className="secondary-btn-link">
              <button className="secondary-btn">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}