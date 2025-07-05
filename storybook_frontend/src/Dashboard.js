import React from "react";
import "./Dashboard.css";
import { stories } from "./sampleStories";

// PUBLIC_INTERFACE
/**
 * Dashboard component: Displays all available stories in a playful grid.
 * Each card shows title, character, and has a Read button.
 * @param {function} onSelectStory - Callback to open a story by index
 */
function Dashboard({ onSelectStory }) {
  return (
    <div className="dashboard-bg">
      <h1 className="dashboard-title">Story Dashboard</h1>
      <div className="dashboard-grid">
        {stories.map((story, idx) => (
          <div className="dashboard-card" key={idx}>
            <div className="dashboard-character">{story.character}</div>
            <div className="dashboard-story-title">{story.title}</div>
            <button
              className="dashboard-read-btn"
              onClick={() => onSelectStory(idx)}
              aria-label={`Read story: ${story.title}`}
            >
              Read
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
