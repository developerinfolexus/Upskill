import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components Import
import Navbar from "./Components/Homepage/Navbar";
import Hero from "./Components/Homepage/Hero";
import Programlist from "./Components/Programlist";
import OurServices from "./Components/OurServices";
import Aboutus from "./Components/Aboutus";
import Upskill from "./Components/Upskill"; 
import Course from "./Components/Course";
import Logos from "./Components/Company/Logos";
import Career from "./Components/Career";
import Footer from "./Components/Footer";
import Coursesection from "./Components/Coursesection";
// RegistrationForm-nu irunthatha "RegisterForm"-nu mathunga
import RegistrationForm from "./Components/RegisterForm";
import LearningHub from "./Components/LearningHub";
import CourseExplorer from "./Components/CoursePage/CourseExplorer";
import CourseForm from "./Components/CoursePage/CourseForm";
import Demopage from "./Components/CoursePage/Demopage";
export default function App() {
  return (
    <Router>
    
       <Navbar />
      <Routes>
        {/* Home Page Route - Coursesection-ah inge irundhu remove pannitaen, so home-la display aagathu */}
        <Route path="/" element={
          <>
         
            <Hero />
            <Programlist />
            <OurServices />
            <Aboutus />
            <div id="learning-hub-section">
              <Upskill />
            </div>
            <Course />
            <Logos />
            <Career />
          </>
        } />

        {/* Separate Routes */}
        <Route path="/Upskill" element={<Upskill />} />
        <Route path="/RegisterForm" element={<RegistrationForm />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/DemoPage" element={<Demopage />} />
        
        <Route path="/coursesection" element={<Coursesection />} />
        <Route path="/Learning-hub" element={<LearningHub />} />
        <Route path="/CourseExplorer" element={<CourseExplorer />} />
        <Route path="/CourseForm" element={<CourseForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}