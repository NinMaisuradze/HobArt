import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AccessibilityWidget from "./components/AccessibilityWidget";
import SearchResults from "./pages/SearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessibilityProvider, AccessibilityContext } from "./contexts/AccessibilityContext";
import { useContext } from "react";
import "./components/styles/style.css";


function InnerApp() {
  const { disableAccessibility } = useContext(AccessibilityContext);

  const handleDisable = () => {
    const confirmDisable = window.confirm("Are you sure you want to disable accessibility features?");
    if (confirmDisable) {
      disableAccessibility();
      alert("Accessibility features are now disabled on this page.");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>

  {/* Accessibility widget removed — controls are available from header panel */}

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
