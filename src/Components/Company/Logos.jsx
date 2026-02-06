import React from "react";
import "./Logos.css";

// LOGOS
import Accenture from "../../assets/Accenture.png";
import Ardhas from "../../assets/Ardhas.jpg";
import zoho from "../../assets/zoho.jpeg";
import HCL from "../../assets/HCL.png";
import Hexaware from "../../assets/Hexaware.png";
import HRLogo from "../../assets/HR logo.jpg";
import Integra from "../../assets/Integra.jpg";
import infosys from "../../assets/infosys.jpeg";
import Omega from "../../assets/Omega logo.jpg";
import Wipro from "../../assets/Wipro.png";

const logos = [
  Accenture, Ardhas, zoho, HCL, Hexaware,
  HRLogo, Integra, infosys, Omega, Wipro,
];

const LogoSlider = () => {
  return (
    <section className="trusted-section">
      <div className="container">
        <h2 className="trusted-text">
          Trusted by <span className="trusted-count">100+</span> Companies
        </h2>

        <div className="logo-slider">
          <div className="logo-track">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="logo-box"
                style={{ backgroundImage: `url(${logo})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;