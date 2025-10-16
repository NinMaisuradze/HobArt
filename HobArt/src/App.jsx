import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./styles/style.css";

function App() {
  const [showAccessibility, setShowAccessibility] = useState(false);

  return (
    <>
      <Header />
      <Hero />

      {/* Accessibility Popup */}
      <button
        id="accessibilityBtn"
        aria-label="Accessibility Help"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
        onClick={() => setShowAccessibility(!showAccessibility)}
      >
        ♿ Accessibility
      </button>

      {showAccessibility && (
        <div
          id="accessibilityContainer"
          style={{
            position: "fixed",
            bottom: "60px",
            right: "20px",
            width: "300px",
            height: "300px",
            border: "1px solid #ccc",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            zIndex: 1001,
          }}
        >
          <iframe
            src="accessibility-popup.html"
            style={{ width: "100%", height: "100%", border: 0 }}
            title="Accessibility Popup"
          />
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;
