import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessibilityProvider, AccessibilityContext } from "./contexts/AccessibilityContext";
import { useContext } from "react";

function InnerApp() {
  const { disableAccessibility } = useContext(AccessibilityContext);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Disable Accessibility Button */}
        <button
          id="disableAccessibilityBtn"
          aria-label="Disable Accessibility"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            backgroundColor: "#00032c",
            color: "#e2c96f",
            border: "none",
            borderRadius: "8px",
            padding: "0.6em 1.2em",
            cursor: "pointer",
          }}
          onClick={() => {
            disableAccessibility();
            alert("Accessibility features have been disabled on this page.");
          }}
        >
          ♿ Disable Accessibility
        </button>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default function App() {
  return (
    <AccessibilityProvider>
      <InnerApp />
    </AccessibilityProvider>
  );
}