import React from "react";
import "./Hero.scss";
import { useNavigate } from "react-router";
function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-content flex-center">
        <h1 className="heading">Exclusive Print</h1>
        <p className="subheading">Exclusive Art pieces for the Exclusive You</p>
        <button
          className="cta btn-primary"
          onClick={() => {
            navigate("/category");
          }}
        >
          Explore more
        </button>
      </div>
    </div>
  );
}

export default Hero;
