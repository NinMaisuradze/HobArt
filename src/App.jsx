import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessibilityProvider } from "./contexts/AccessibilityContext";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SearchResults from "./pages/SearchResults";

import "./components/styles/style.css";

function InnerApp() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <AccessibilityProvider>
      <InnerApp />
    </AccessibilityProvider>
  );
}
