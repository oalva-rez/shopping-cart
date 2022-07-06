import React from "react";
import hero from "../assets/hero.png";
import { Link, useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <img src={hero} alt="hero" />
      <h2>MUST HAVE BASICS</h2>
      <h3>
        Top quality clothing fabric brought to your doorstep shipped directly
        from the heart of Italy.
      </h3>
      <button onClick={() => navigate("/products")}>Shop Now</button>
    </section>
  );
}
