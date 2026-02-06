import React, { useState } from "react";
import "./CourseForm.css";

const CourseForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    course: "",
    trainingMode: "offline",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      _subject: "New Course Registration",
      _template: "table",
      _captcha: "false",

      Full_Name: formData.fullName,
      Email: formData.email,
      Phone: formData.phone,
      Qualification: formData.education,
      Course: formData.course,
      Training_Mode: formData.trainingMode,
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/kumarsasi9081@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(submissionData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Application submitted successfully! Our team will contact you soon.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          education: "",
          course: "",
          trainingMode: "offline",
        });
      } else {
        alert("Something went wrong. Please try again.");
        console.error("FormSubmit Error:", result);
      }
    } catch (error) {
      alert("Network error. Please check your internet connection.");
      console.error("Network Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="premium-wrapper">
      {/* animated background */}
      <div className="ambient-bg">
        <span className="orb blue"></span>
        <span className="orb pink"></span>
        <span className="orb purple"></span>
      </div>

      <div className="premium-form-card">
        <header className="premium-header">
          <span className="badge">OFFICIAL REGISTRATION</span>
          <h1>
            Build Your <span>Future</span>
          </h1>
          <p>Secure your seat in our 2026 professional training programs</p>
        </header>

        <form className="premium-form" onSubmit={handleSubmit}>
          <div className="grid">

            {/* Full Name */}
            <div className="field span-2">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="eg. Rahul Kumar"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="eg. rahul@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="field">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Education */}
            <div className="field">
              <label>Qualification</label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="Working Professional">Working Professional</option>
              </select>
            </div>

            {/* Course */}
            <div className="field">
              <label>Career Path</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="MERN Stack">MERN Stack</option>
                <option value="AI & ML">AI & ML</option>
                <option value="UI / UX Design">UI / UX Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Marketing">Data Science</option>
                <option value="Marketing">Python Full Stack</option>
                <option value="Marketing">Java Full Stack</option>
                <option value="Marketing">Gen AI </option>

              </select>
            </div>

            {/* Training Mode */}
            <div className="field span-2">
              <label>Training Mode</label>
              <div className="mode-cards">
                <label className={`mode ${formData.trainingMode === "offline" ? "active" : ""}`}>
                  <input
                    type="radio"
                    name="trainingMode"
                    value="offline"
                    checked={formData.trainingMode === "offline"}
                    onChange={handleChange}
                  />
                  <span>🏢 In-Campus</span>
                </label>

                <label className={`mode ${formData.trainingMode === "online" ? "active" : ""}`}>
                  <input
                    type="radio"
                    name="trainingMode"
                    value="online"
                    checked={formData.trainingMode === "online"}
                    onChange={handleChange}
                  />
                  <span>⚡ Live Online</span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="actions span-2">
              <button type="submit" className="primary-btn" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Apply →"}
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
