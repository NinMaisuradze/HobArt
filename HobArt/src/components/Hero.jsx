import './Hero.css';
import { Link } from 'react-router-dom'; 

function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to HobArt</h1>
      <p>Discover unique handcrafted items</p>
      <a href="#products" className="btn-primary">Shop Now</a>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default Hero;
