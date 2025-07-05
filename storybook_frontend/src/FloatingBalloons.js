import React from "react";
import "./FloatingBalloons.css";

// PUBLIC_INTERFACE
/**
 * Renders looping/floating SVG balloons and clouds as background.
 */
function FloatingBalloons() {
  return (
    <div className="floating-bg-elements" aria-hidden="true">
      <div className="float-balloon balloon1" />
      <div className="float-balloon balloon2" />
      <div className="float-balloon balloon3" />
      <div className="float-cloud cloud1" />
      <div className="float-cloud cloud2" />
      <div className="float-star star1" />
      <div className="float-star star2" />
    </div>
  );
}

export default FloatingBalloons;
