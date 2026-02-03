import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUser, FaEnvelope, FaPhone, FaGraduationCap,
  FaPaperPlane, FaCheckCircle, FaRocket,
  FaUniversity, FaUsers, FaBuilding
} from 'react-icons/fa';
import './RegisterForm.css';

const RegistrationForm = () => {
  const [category, setCategory] = useState('jobseeker');

  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    phone: '',
    program: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      _subject: category === 'jobseeker' ? 'New Individual Registration' : 'New Institution Registration',
      _template: 'table', // Optional: makes the email look nicer
      _captcha: 'false', // Optional: disable captcha if desired, or keep it 'true'
      Category: category === 'jobseeker' ? 'Individual' : 'Institution',
      Name: formData.name,
      Institution: category === 'college' ? formData.institution : 'N/A',
      Email: formData.email,
      Phone: formData.phone,
      Program: formData.program,
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/Support@infolexus.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Registration submitted successfully! We will contact you soon.");
        setFormData({
          name: '',
          institution: '',
          email: '',
          phone: '',
          program: ''
        });
      } else {
        alert("Something went wrong. Please try again later.");
        console.error("FormSubmit Error:", result);
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
      console.error("Network Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`registration-section ${category}-dark-theme`} id="enroll-form">
      <div className="dark-bg-glow"></div>

      <div className="form-container">

        {/* LEFT CONTENT */}
        <motion.div
          key={category}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="form-info-enhanced"
        >
          <div className="status-tag-dark">
            <FaRocket /> <span>ADMISSIONS OPEN 2026</span>
          </div>

          <h2 className="form-title-dark">
            {category === 'jobseeker'
              ? <>Ready to <span className="highlight-neon">Upskill?</span></>
              : <>Empower your <span className="highlight-neon">Campus</span></>}
          </h2>

          <p className="form-subtitle-dark">
            {category === 'jobseeker'
              ? 'Elevate your career with industry-aligned training.'
              : 'Partner with Infolexus to train your students.'}
          </p>

          <div className="feature-list-dark">
            <div className="mini-card-dark">
              <div className="mini-icon-box">
                {category === 'jobseeker' ? <FaGraduationCap /> : <FaUniversity />}
              </div>
              <div className="mini-text">
                <h4>{category === 'jobseeker' ? 'Expert Mentors' : 'Industry Synergy'}</h4>
                <p>Learn from real-world experts.</p>
              </div>
            </div>

            <div className="mini-card-dark">
              <div className="mini-icon-box">
                {category === 'jobseeker' ? <FaCheckCircle /> : <FaUsers />}
              </div>
              <div className="mini-text">
                <h4>{category === 'jobseeker' ? 'Global Certification' : 'Placement Cell'}</h4>
                <p>Recognized by top tech companies.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="form-card-dark"
        >
          <div className="category-switcher-dark">
            <button
              type="button"
              className={category === 'jobseeker' ? 'active js-active' : ''}
              onClick={() => setCategory('jobseeker')}
            >
              <FaUser /> Individual
            </button>

            <button
              type="button"
              className={category === 'college' ? 'active clg-active' : ''}
              onClick={() => setCategory('college')}
            >
              <FaBuilding /> Institution
            </button>
          </div>

          <form onSubmit={handleSubmit} className="actual-form">
            <div className="input-group-dark">
              <label><FaUser /> Name</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} />
            </div>

            <AnimatePresence>
              {category === 'college' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="input-group-dark"
                >
                  <label><FaUniversity /> Institution Name</label>
                  <input type="text" name="institution" required value={formData.institution} onChange={handleChange} />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="input-flex-dark">
              <div className="input-group-dark">
                <label><FaEnvelope /> Email</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} />
              </div>

              <div className="input-group-dark">
                <label><FaPhone /> Phone</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
              </div>
            </div>

            <div className="input-group-dark">
              <label>{category === 'jobseeker' ? 'Target Program' : 'Student Capacity'}</label>
              <select name="program" required value={formData.program} onChange={handleChange}>
                {category === 'jobseeker' ? (
                  <>
                    <option value="">Select Program</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="DevOps">DevOps</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </>
                ) : (
                  <>
                    <option value="">Select Capacity</option>
                    <option value="Below 100">Below 100</option>
                    <option value="100 - 500">100 - 500</option>
                    <option value="500+">500+</option>
                  </>
                )}
              </select>
            </div>

            <button type="submit" className="submit-btn-dark" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : (category === 'jobseeker' ? 'Start My Journey' : 'Request Partnership')} <FaPaperPlane />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;
