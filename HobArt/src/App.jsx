import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  const handleDisableAccessibility = () => {
    alert("Accessibility features have been disabled on this page.");
  };

  return (
    <>
      <Header />
      <Hero />

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
        onClick={handleDisableAccessibility}
      >
        ♿ Disable Accessibility
      </button>

      <Footer />
    </>
  );
}

export default App;
