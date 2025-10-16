import React from "react";
import "../styles/style.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <h1>Discover the Art of Crafting</h1>
        <p>Handmade candles, felt toys, and epoxy accessories for your creative soul.</p>
        <a href="#shop" className="btn-primary">Shop Now</a>
      </div>
    </section>
  );
}
