import React from "react";
import "./styles/style.css";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        {/* Social Media Links */}
        <div className="footer-top">
          <div className="social-links" aria-label="Social media links">
            <a
              href="https://www.facebook.com/profile.php?id=100091803975149"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <img src="/icons/facebook.svg" alt="Facebook icon" />
            </a>
            <a
              href="https://instagram.com/HobArt0204"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram profile"
            >
              <img src="/icons/instagram.svg" alt="Instagram icon" />
            </a>
            <a
              href="https://www.tiktok.com/@hobarthandmade2020"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our TikTok profile"
            >
              <img src="/icons/tiktok.svg" alt="TikTok icon" />
            </a>
          </div>
        </div>

        {/* Copyright Text */}
        <p className="footer-text">
          &copy; {new Date().getFullYear()} HobArt. All rights reserved.
        </p>

        {/* Footer Navigation */}
        <nav aria-label="Footer navigation">
          <ul className="footer-nav">
            <li>
              <a href="/privacy" aria-label="Read our privacy policy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" aria-label="Read our terms and conditions">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
