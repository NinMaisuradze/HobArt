import React from "react";
import "../styles/style.css";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <p>&copy; 2025 HobArt. All rights reserved.</p>
        <nav aria-label="Footer navigation">
          <ul className="footer-nav">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">წესები და პირობები</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
