import React from "react";
import womanHero from "../../assets/woman-hero.png";
import wallHero from "../../assets/wall-hero.png";

import { Link, useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-container">
        <img src={womanHero} alt="woman hero" />
        <div className="wall-hero">
          <h2>MUST HAVE BASICS</h2>
          <h3>
            Top quality clothing fabric brought to your doorstep shipped
            directly from the heart of Italy.
          </h3>
          <button onClick={() => navigate("/products")}>Shop Now</button>
        </div>
      </div>
    </section>
  );
}
