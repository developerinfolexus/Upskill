import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  FaChalkboardTeacher, FaLaptopCode, FaUserGraduate, 
  FaBookOpen, FaHandshake, FaArrowRight, FaRocket,
  FaCheckCircle
} from 'react-icons/fa';
import './OurServices.css';

/* Asset Imports */
import TrainersImg from '../assets/Trainers.jpg';
import LiveProjectImg from '../assets/Live Project.jpg';
import InternshipImg from '../assets/Real time internship.jpg';
import MentorImg from '../assets/Personal mentor.jpg';
import CurriculumImg from '../assets/latest curriculum.jpg';
import PlacementImg from '../assets/placement.jpg';

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const mX = e.clientX - rect.left;
    const mY = e.clientY - rect.top;
    x.set(mX / rect.width - 0.5);
    y.set(mY / rect.height - 0.5);
    cardRef.current.style.setProperty("--m-x", `${mX}px`);
    cardRef.current.style.setProperty("--m-y", `${mY}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", "--color": service.color }}
      className="liquid-card" 
    >
      <div className="card-glass-body">
        <div className="spotlight-layer"></div>
        
        <div className="visual-block">
          <img src={service.image} alt={service.title} className="hd-image" />
          <div className="image-vignette"></div>
        </div>

        <div className="floating-elements">
          <motion.div className="icon-pod" style={{ translateZ: 100 }}>
            {service.icon}
          </motion.div>
          
          <div className="content-box" style={{ translateZ: 60 }}>
            <div className="tag-row">
              <span className="count">0{index + 1}</span>
              <div className="divider"></div>
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>

          {/* ✅ Verified Badge Added */}
          <div className="action-row" style={{ translateZ: 40 }}>
            <div className="verified-badge">
              <FaCheckCircle />
              <span>{service.badge}</span>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

const OurServices = () => {
  const services = [
    { 
      title: "Expert Trainers",
      desc: "Industry architects with 10+ years of deep-tech corporate wisdom.",
      icon: <FaChalkboardTeacher />,
      image: TrainersImg,
      color: "#6366f1",
      badge: "Certified Industry Experts"
    },
    { 
      title: "Live Projects",
      desc: "Architect high-scale cloud systems in a real-world environment.",
      icon: <FaLaptopCode />,
      image: LiveProjectImg,
      color: "#10b981",
      badge: "Real Industry Projects"
    },
    { 
      title: "Real-time Internship",
      desc: "Gain a competitive edge with verified corporate exposure.",
      icon: <FaHandshake />,
      image: InternshipImg,
      color: "#a855f7",
      badge: "Corporate Verified Internship"
    },
    { 
      title: "Personal Mentor",
      desc: "1-on-1 strategic career roadmaps and leadership guidance.",
      icon: <FaUserGraduate />,
      image: MentorImg,
      color: "#f43f5e",
      badge: "Dedicated Career Mentorship"
    },
    { 
      title: "Latest Curriculum",
      desc: "Syllabus evolved weekly to match the rapid global tech shifts.",
      icon: <FaBookOpen />,
      image: CurriculumImg,
      color: "#f59e0b",
      badge: "Industry Updated Curriculum"
    },
    { 
      title: "Placement Cell",
      desc: "100% placement support in elite Fortune 500 tech giants.",
      icon: <FaRocket />,
      image: PlacementImg,
      color: "#0ea5e9",
      badge: "Verified Placement Support"
    }
  ];

  return (
    <section className="liquid-universe">
      <div className="blur-blob blob-1"></div>
      <div className="blur-blob blob-2"></div>
      
      <div className="container-xl">
        <header className="liquid-header">
          <div className="pill-label">OUR SERVICES</div>
          <h2 className="liquid-title premium-line">
            Why Choose Our <span className="premium-transparent">Academy</span>
          </h2>
          <p className="liquid-sub">
            Breaking the traditional education gap with immersive industry training.
          </p>
        </header>

        <div className="liquid-flow-grid">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
