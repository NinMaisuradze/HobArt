import { Link } from "react-router-dom";
import "./Contact.css"; 

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Find us here:</p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!..."
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="HobArt Location"
      ></iframe>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
