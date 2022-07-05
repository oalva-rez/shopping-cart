import React from "react";
import men from "../assets/men.png";
import women from "../assets/women.png";
import athletics from "../assets/athletics.png";

export default function Categories() {
  return (
    <section className="categories">
      <div>
        <img src={men} alt="men" />
        <h3>Men</h3>
      </div>
      <div>
        <img src={women} alt="women" />
        <h3>Women</h3>
      </div>
      <div>
        <img src={athletics} alt="athletics" />
        <h3>Athletics</h3>
      </div>
    </section>
  );
}
