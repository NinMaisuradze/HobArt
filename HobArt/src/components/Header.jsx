import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AccessibilityContext } from "../contexts/AccessibilityContext";

export default function Header() {
  const { textSize, setTextSize, highContrast, setHighContrast, isMuted, setIsMuted } = useContext(
    AccessibilityContext,
  );
  const [shopOpen, setShopOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header" role="banner">
      <div className="container header-top">
        <div className="mobile-left">
          <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setMobileOpen((v) => !v)}>
            ☰
          </button>
          <button className="search-btn" aria-label="Search">
            🔍
          </button>
        </div>

        <Link className="logo" to="/" aria-label="HobArt">
          <img src="/logo.jpg" alt="HobArt logo" />
        </Link>

        <div className="header-controls">
          <div className="accessibility-controls" role="region" aria-label="Accessibility controls">
            <button
              className="small-btn"
              onClick={() => setTextSize((s) => Math.min(s + 10, 200))}
              aria-label="Increase text size"
              title="Increase text size"
            >
              A+
            </button>

            <button
              className="small-btn"
              onClick={() => setTextSize((s) => Math.max(s - 10, 60))}
              aria-label="Decrease text size"
              title="Decrease text size"
            >
              A-
            </button>

            <button
              className="small-btn"
              onClick={() => setHighContrast((v) => !v)}
              aria-pressed={highContrast}
              aria-label="Toggle high contrast"
              title="Toggle high contrast"
            >
              {highContrast ? "🔆" : "🌙"}
            </button>

            <button
              className="small-btn"
              onClick={() => setIsMuted((m) => !m)}
              aria-pressed={!isMuted}
              aria-label={isMuted ? "Unmute site audio" : "Mute site audio"}
              title={isMuted ? "Unmute site audio" : "Mute site audio"}
            >
              {isMuted ? "🔈" : "🔇"}
            </button>
          </div>
        </div>
      </div>

      <div className="container header-bottom">
        <nav className={`primary-nav ${mobileOpen ? 'open' : ''}`} role="navigation" aria-label="Main navigation">
          <ul className="nav-list" role="menubar">
            <li role="none">
              <Link role="menuitem" to="/">HOME</Link>
            </li>

            <li role="none" className="has-submenu" onMouseLeave={() => setShopOpen(false)}>
              <button
                className="submenu-toggle"
                aria-haspopup="true"
                aria-expanded={shopOpen}
                aria-controls="shopSubmenu"
                onClick={() => setShopOpen((v) => !v)}
              >
                SHOP ALL ▾
              </button>
              <ul
                id="shopSubmenu"
                className="submenu"
                role="menu"
                aria-label="Shop categories"
                hidden={!shopOpen}
              >
                <li role="none"><Link role="menuitem" to="/products/new-products">New Products</Link></li>
                <li role="none"><Link role="menuitem" to="/products/accessories">Accessories</Link></li>
                <li role="none"><Link role="menuitem" to="/products/felt-toys">Felt toys</Link></li>
                <li role="none"><Link role="menuitem" to="/products/epoxy">Epoxy accessories</Link></li>
              </ul>
            </li>

            <li role="none"><Link to="/about">About us</Link></li>
            <li role="none"><Link to="/blog">Blog</Link></li>
            <li role="none"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
