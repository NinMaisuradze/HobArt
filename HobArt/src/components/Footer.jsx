function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <p>&copy; 2025 HobArt. All rights reserved.</p>

        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=100091803975149" target="_blank" aria-label="Facebook">
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="instagram.com/HobArt0204" target="_blank" aria-label="Instagram">
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@hobarthandmade2020" target="_blank" aria-label="TikTok">
            <img src="/icons/tiktok.svg" alt="TikTok" />
          </a>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="footer-nav">
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms and Conditions</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;