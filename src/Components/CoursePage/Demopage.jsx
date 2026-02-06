import React from "react";
import "./Demopage.css"; 
import bgImage from "../../assets/Demo.png"; // Corrected path to reach src/assets
import { Link, useNavigate } from "react-router-dom";

export default function DemoRequest() {
  const navigate = useNavigate();

  return (
    <section
      className="demo-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <div className="content">
          <h1>
            Experience the <br/>
                Platform in Action
          </h1>
          <p>
            See how our solution can transform your workflow. 
            Schedule a personalized demo with our experts today.
          </p>

          <div className="buttons">
            <button 
              className="primary-btn" 
              onClick={() => navigate("/CourseForm")} 
            >
              Request Demo
            </button>

           
          </div>
        </div>
      </div>
    </section>
  );
}