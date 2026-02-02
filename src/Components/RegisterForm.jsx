import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUser, FaEnvelope, FaPhone, FaGraduationCap, 
  FaPaperPlane, FaCheckCircle, FaRocket, 
  FaUniversity, FaUsers, FaBuilding
} from 'react-icons/fa';
import './RegisterForm.css';

const RegistrationForm = () => {
  const [category, setCategory] = useState('jobseeker'); // 'jobseeker' or 'college'

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Success! Our team will contact you regarding the ${category} program.`);
  };

  return (
    <section className={`registration-section ${category}-dark-theme`} id="enroll-form">
      {/* Background Decorative Elements */}
      <div className="dark-bg-glow"></div>
      
      <div className="form-container">
        
        {/* LEFT SIDE: CONTENT */}
        <motion.div 
          key={category}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="form-info-enhanced"
        >
          <div className="status-tag-dark">
            <FaRocket className="rocket-icon" /> <span>ADMISSIONS OPEN 2026</span>
          </div>
          
          <h2 className="form-title-dark">
            {category === 'jobseeker' ? (
              <>Ready to <span className="highlight-neon">Upskill?</span></>
            ) : (
              <>Empower your <span className="highlight-neon">Campus</span></>
            )}
          </h2>
          
          <p className="form-subtitle-dark">
            {category === 'jobseeker' 
              ? "Elevate your career with industry-aligned technical training and hands-on projects."
              : "Partner with Infolexus to bring world-class technical curriculum to your students."}
          </p>

          <div className="feature-list-dark">
            <div className="mini-card-dark">
              <div className="mini-icon-box">
                {category === 'jobseeker' ? <FaGraduationCap /> : <FaUniversity />}
              </div>
              <div className="mini-text">
                <h4>{category === 'jobseeker' ? "Expert Mentors" : "Industry Synergy"}</h4>
                <p>Learn from those who build the tech.</p>
              </div>
            </div>

            <div className="mini-card-dark">
              <div className="mini-icon-box">
                {category === 'jobseeker' ? <FaCheckCircle /> : <FaUsers />}
              </div>
              <div className="mini-text">
                <h4>{category === 'jobseeker' ? "Global Certification" : "Placement Cell"}</h4>
                <p>Recognized by top tech giants.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: DARK FORM CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="form-card-dark"
        >
          {/* CATEGORY SWITCHER */}
          <div className="category-switcher-dark">
            <button 
              className={category === 'jobseeker' ? 'active js-active' : ''} 
              onClick={() => setCategory('jobseeker')}
            >
              <FaUser /> Individual
            </button>
            <button 
              className={category === 'college' ? 'active clg-active' : ''} 
              onClick={() => setCategory('college')}
            >
              <FaBuilding /> Institution
            </button>
          </div>

          <form onSubmit={handleSubmit} className="actual-form">
            <div className="input-group-dark">
              <label><FaUser /> {category === 'jobseeker' ? 'Full Name' : 'Authorized Name'}</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <AnimatePresence mode='wait'>
              {category === 'college' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -10 }}
                  className="input-group-dark"
                >
                  <label><FaUniversity /> Institution Name</label>
                  <input type="text" placeholder="e.g. SRM University" required />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="input-flex-dark">
              <div className="input-group-dark">
                <label><FaEnvelope /> Email</label>
                <input type="email" placeholder="mail@example.com" required />
              </div>
              <div className="input-group-dark">
                <label><FaPhone /> Phone</label>
                <input type="tel" placeholder="+91 ..." required />
              </div>
            </div>

            <div className="input-group-dark">
              <label>
                {category === 'jobseeker' ? 'Target Program' : 'Student Capacity'}
              </label>
              <select>
                {category === 'jobseeker' ? (
                  <>
                    <option>Full Stack Development</option>
                    <option>Data Science</option>
                    <option>Cloud Computing</option>
                    <option>Data Analytics</option>
                    <option>DevOps</option>
                    <option>UI/UX Design</option>
                  </>
                ) : (
                  <>
                    <option>Below 100</option>
                    <option>100 - 500</option>
                    <option>500+</option>
                  </>
                )}
              </select>
            </div>

            <button type="submit" className="submit-btn-dark">
              {category === 'jobseeker' ? 'Start My Journey' : 'Request Partnership'} <FaPaperPlane />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default RegistrationForm;