import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaRocket, FaAward, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import './programlist.css';

const FutureAdvantage = () => {
  const cards = [
    {
      id: "01",
      title: "Industry grade content",
      desc: "Curated by experts for real-world impact.",
      icon: <FaGraduationCap />,
      accent: "#7000ff"
    },
    {
      id: "02",
      title: "100% Placement Support",
      desc: "Direct referrals to top global tech firms.",
      icon: <FaRocket />,
      accent: "#00a3ff"
    },
    {
      id: "03",
      title: "Excellence Certified",
      desc: "Recognized by over 180K+ companies.",
      icon: <FaAward />,
      accent: "#00ff88"
    }
  ];

  return (
    <section className="premium-advantage">
      {/* Dynamic Background Elements */}
      <div className="mesh-gradient"></div>
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="content-wrapper">
        <header className="header-v2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="badge"
          >
            <FaPaperPlane /> <span>THE FUTURE IS HERE</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="main-h2"
          >
            The Future <span className="text-glow">Advantage</span>
          </motion.h2>
          
          <p className="description-v2">
            Elevate your career with 100% online courses designed to give you 
            a competitive edge in the global landscape.
          </p>
        </header>

        <div className="advantage-grid-v2">
          {cards.map((card, index) => (
            <motion.div 
              key={card.id}
              className="glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -15 }}
            >
              <div className="card-inner-v2">
                <div className="icon-container" style={{ '--clr': card.accent }}>
                  {card.icon}
                </div>
                <div className="card-text">
                  <span className="card-index">{card.id}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
                <div className="card-footer">
                  <FaCheckCircle /> <span>Industry Verified</span>
                </div>
              </div>
              {/* Border Beam Effect */}
              <div className="border-beam" style={{ '--beam-clr': card.accent }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureAdvantage;