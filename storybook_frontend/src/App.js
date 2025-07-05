import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom";
import "./App.css";
import "@fontsource/baloo-2/600.css";
import "@fontsource/fredoka/700.css";
import StoryBookPage from "./StoryBookPage";
import FloatingBalloons from "./FloatingBalloons";
import Dashboard from "./Dashboard";
import { stories } from "./sampleStories";

// PUBLIC_INTERFACE
// Reader view - notebook-style for a single story
function ReaderWrapper() {
  const navigate = useNavigate();
  const { id } = useParams();
  const index = parseInt(id, 10);
  const totalPages = stories.length;
  const [currentPage, setCurrentPage] = useState(!isNaN(index) && index >= 0 && index < totalPages ? index : 0);

  // PUBLIC_INTERFACE
  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // PUBLIC_INTERFACE
  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // PUBLIC_INTERFACE
  const handleBackToDashboard = () => {
    navigate("/");
  };

  return (
    <div className="storybook-app-bg">
      <FloatingBalloons />
      <div className="storybook-app-flex">
        <button
          className="storybook-nav-arrow storybook-nav-arrow-left"
          aria-label="Previous story"
          onClick={handlePrev}
        >
          &#8592;
        </button>
        <main className="storybook-notebook-container" aria-live="polite">
          <StoryBookPage story={stories[currentPage]} />
          <footer className="storybook-footer">
            Page {currentPage + 1} of {totalPages}{" "}
            <button
              onClick={handleBackToDashboard}
              style={{
                marginLeft: "1.2em",
                fontSize: "1rem",
                background: "#fabe11",
                borderRadius: "2em",
                border: "none",
                color: "#fff",
                padding: "0.27em 1.15em",
                cursor: "pointer",
                fontWeight: 600,
                boxShadow: "0 2px 12px #fabe1172",
                letterSpacing: "0.02em"
              }}
              aria-label="Back to Dashboard"
            >
              Back to Stories
            </button>
          </footer>
        </main>
        <button
          className="storybook-nav-arrow storybook-nav-arrow-right"
          aria-label="Next story"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
// Main app with routing logic for dashboard and reader
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FloatingBalloons />
              <Dashboard
                onSelectStory={(idx) => window.location.assign(`/story/${idx}`)}
              />
            </>
          }
        />
        <Route path="/story/:id" element={<ReaderWrapper />} />
        {/* Fallback to dashboard */}
        <Route path="*" element={<Dashboard onSelectStory={(idx) => window.location.assign(`/story/${idx}`)} />} />
      </Routes>
    </Router>
  );
}

export default App;
