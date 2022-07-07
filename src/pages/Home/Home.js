import React from "react";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Categories />
    </div>
  );
}
