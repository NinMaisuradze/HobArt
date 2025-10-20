import { useContext, useState } from "react";
import { AccessibilityContext } from "../contexts/AccessibilityContext";
import "./styles/style.css";

export default function AccessibilityWidget() {
  const {
    textSize,
    setTextSize,
    highContrast,
    setHighContrast,
    isMuted,
    setIsMuted,
    disableAccessibility,
  } = useContext(AccessibilityContext);

  const [open, setOpen] = useState(false);

  const handleDisable = () => {
    if (window.confirm("Disable accessibility features for this page?")) {
      disableAccessibility();
      setOpen(false);
    }
  };

  return (
    <div className={`accessibility-widget ${open ? "open" : ""}`}>
      <div
        className="accessibility-bar"
        role="toolbar"
        aria-label="Accessibility toolbar"
      >
        <button
          className="bar-btn"
          aria-label="Increase text size"
          title="Increase text"
          onClick={() => setTextSize((s) => Math.min(s + 10, 200))}
        >
          A+
        </button>

        <button
          className="bar-btn"
          aria-label="Decrease text size"
          title="Decrease text"
          onClick={() => setTextSize((s) => Math.max(s - 10, 60))}
        >
          A-
        </button>

        <button
          className="bar-btn"
          aria-pressed={highContrast}
          aria-label="Toggle high contrast mode"
          title="High contrast"
          onClick={() => setHighContrast((v) => !v)}
        >
          {highContrast ? "🔆" : "🌙"}
        </button>

        <button
          className="bar-btn"
          aria-pressed={!isMuted}
          aria-label="Toggle sound"
          title="Sound"
          onClick={() => setIsMuted((m) => !m)}
        >
          {isMuted ? "🔈" : "🔇"}
        </button>

        <button
          className="bar-btn disable-icon"
          aria-label="Disable accessibility features"
          title="Disable Accessibility"
          onClick={handleDisable}
        >
          ♿
        </button>

        <button
          className="bar-toggle"
          aria-expanded={open}
          aria-label={open ? "Close accessibility panel" : "Open accessibility panel"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "▲" : "▼"}
        </button>
      </div>

      {open && (
        <div
          className="access-panel"
          role="dialog"
          aria-label="Accessibility settings panel"
        >
          <div className="access-controls">
            <div className="control-row">
              <button
                aria-label="Decrease text size"
                onClick={() => setTextSize((s) => Math.max(s - 10, 60))}
              >
                A-
              </button>
              <button
                aria-label="Increase text size"
                onClick={() => setTextSize((s) => Math.min(s + 10, 200))}
              >
                A+
              </button>
            </div>

            <div className="control-row">
              <label>
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={() => setHighContrast((v) => !v)}
                />{" "}
                High contrast
              </label>
            </div>

            <div className="control-row">
              <label>
                <input
                  type="checkbox"
                  checked={!isMuted}
                  onChange={() => setIsMuted((m) => !m)}
                />{" "}
                Sound
              </label>
            </div>

            <div className="access-actions">
              <button
                className="disable-btn"
                onClick={handleDisable}
              >
                Disable Accessibility
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
