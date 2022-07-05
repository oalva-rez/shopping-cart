import React from "react";
import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={hero} alt="hero" />
      <h2>MUST HAVE BASICS</h2>
      <h3>
        Top quality clothing fabric brought to your doorstep shipped directly
        from the heart of Italy.
      </h3>
      <button>SHOP NOW</button>
    </section>
  );
}
