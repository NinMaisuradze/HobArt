import { Link } from "react-router-dom";
import "./Contact.css"; 

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Find us here:</p>

      <div className="map-wrapper" style={{ marginTop: "1rem" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.9290840675712!2d45.48225824990016!3d41.91588318912644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404432c8fc7551df%3A0xd56dfc2405dd1cfe!2zNDMg4YOX4YOQ4YOb4YOQ4YOgIOGDm-GDlOGDpOGDmOGDoSDhg6Xhg6Phg6nhg5AsIFRlbGF2aQ!5e0!3m2!1sen!2sge!4v1760637595451!5m2!1sen!2sge"
          title="HobArt Location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          style={{ border: 0 }}
        />
      </div>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
