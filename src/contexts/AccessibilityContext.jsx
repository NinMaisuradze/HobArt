import "./Hero.css";
import { Link } from "react-router-dom";
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import s4 from "../images/s4.jpg";
import s5 from "../images/s5.jpg";
import { useEffect, useState } from "react";

function Hero() {
  const images = [s1, s2, s3, s4, s5];  
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero" style={{ backgroundImage: `url(${images[current]})` }}>
      <h1>Welcome to HobArt</h1>
      <p>Discover unique handcrafted items</p>
      <a href="#products" className="btn-primary">
        Shop Now
      </a>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default Hero;
