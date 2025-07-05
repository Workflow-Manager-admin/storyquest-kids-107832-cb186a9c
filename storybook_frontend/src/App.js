import React, { useState } from "react";
import "./App.css";
import "@fontsource/baloo-2/600.css";
import "@fontsource/fredoka/700.css";
import StoryBookPage from "./StoryBookPage";
import FloatingBalloons from "./FloatingBalloons";
import { stories } from "./sampleStories";

function App() {
  // PUBLIC_INTERFACE
  // Main storybook app UI for displaying kid stories with playful, fullscreen layout
  const [currentPage, setCurrentPage] = useState(0);

  // For later: fetch stories from Supabase, but for now use local
  const totalPages = stories.length;

  // PUBLIC_INTERFACE
  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // PUBLIC_INTERFACE
  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
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
            Page {currentPage + 1} of {totalPages}
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

export default App;
