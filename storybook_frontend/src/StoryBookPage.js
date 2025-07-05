import React, { useRef } from "react";
import "./StoryBookPage.css";

// PUBLIC_INTERFACE
/**
 * Renders a notebook-style card with a large animated character, 
 * story title, and lines of the story.
 * @param {object} props - story: {title, text, character}
 */
function StoryBookPage({ story }) {
  const charRef = useRef(null);

  // PUBLIC_INTERFACE
  // On character click, animate bounce with CSS class
  const handleCharacterClick = () => {
    const el = charRef.current;
    if (!el) return;
    el.classList.remove("bounce");
    // Force reflow: restart animation even if already running
    void el.offsetWidth;
    el.classList.add("bounce");
  };

  return (
    <div className="storybook-card paper-texture">
      <div className="storybook-character-zone">
        <div
          data-testid="storybook-character"
          ref={charRef}
          className="storybook-character-img"
          onClick={handleCharacterClick}
          title="Click me!"
        >
          {story.character}
        </div>
      </div>
      <h2 className="storybook-title">{story.title}</h2>
      <div className="storybook-text">
        {story.text.map((line, i) => (
          <span className="storybook-text-line" key={i}>
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}

export default StoryBookPage;
