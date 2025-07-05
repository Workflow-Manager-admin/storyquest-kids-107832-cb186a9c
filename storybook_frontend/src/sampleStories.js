import React from "react";

// PUBLIC_INTERFACE
// List of short stories with SVG characters (1 per story)
const initialStories = [
  {
    title: "Benny the Balloon Flies High",
    text: [
      "Benny was no ordinary balloon.",
      "One windy day, Benny soared above the clouds!",
      "He waved at birds and danced in the sky.",
    ],
    character: (
      <svg width="105" height="145" viewBox="0 0 105 145" fill="none">
        <ellipse cx="52.5" cy="65" rx="40" ry="55" fill="#E100FF" stroke="#070B0E" strokeWidth="4" />
        <ellipse cx="37" cy="68" rx="7" ry="10" fill="#fff" />
        <ellipse cx="37" cy="68" rx="3" ry="3.5" fill="#070B0E" />
        <ellipse cx="68" cy="68" rx="7" ry="10" fill="#fff" />
        <ellipse cx="68" cy="68" rx="3.2" ry="3.5" fill="#070B0E" />
        <path d="M40 90 Q52.5 100 65 90" stroke="#070B0E" strokeWidth="3" fill="none" />
        <line x1="52.5" y1="120" x2="52.5" y2="140" stroke="#070B0E" strokeWidth="4"/>
        <circle cx="52.5" cy="144" r="4" fill="#070B0E"/>
      </svg>
    ),
  },
  {
    title: "Millie Meets the Moon",
    text: [
      "Millie the mouse saw a shiny moon.",
      "She wished she could visit the stars.",
      "So she built a rocket from cheese!",
    ],
    character: (
      <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
        <ellipse cx="60" cy="50" rx="36" ry="36" fill="#fff9cc" stroke="#070B0E" strokeWidth="3" />
        <ellipse cx="39" cy="40" rx="8" ry="11" fill="#fff9cc" stroke="#070B0E" />
        <ellipse cx="81" cy="40" rx="8" ry="11" fill="#fff9cc" stroke="#070B0E" />
        <ellipse cx="70" cy="60" rx="3" ry="5" fill="#070B0E" />
        <ellipse cx="50" cy="60" rx="3" ry="5" fill="#070B0E" />
        <path d="M56 71 Q60 74, 64 71" stroke="#070B0E" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Pip's Rainbow Parade",
    text: [
      "Pip the penguin loved rainbows.",
      "He wore his favorite hat and slid down icy hills.",
      "Rainbow sparkles followed him everywhere!",
    ],
    character: (
      <svg width="115" height="120" viewBox="0 0 115 120">
        <ellipse cx="58" cy="70" rx="40" ry="40" fill="#fff" stroke="#070B0E" strokeWidth="3" />
        <ellipse cx="62" cy="95" rx="16" ry="8" fill="#e100ff" />
        <ellipse cx="45" cy="60" rx="6" ry="9" fill="#070B0E" />
        <ellipse cx="71" cy="60" rx="6" ry="9" fill="#070B0E" />
        <ellipse cx="67" cy="110" rx="7" ry="4" fill="#f7f7f7" />
        <rect x="50" y="30" width="13" height="10" fill="#e100ff" stroke="#070B0E" strokeWidth="1"/>
        <rect x="50" y="18" width="13" height="13" fill="#fabe11" stroke="#070B0E" strokeWidth="2"/>
      </svg>
    ),
  },
];

const generatedStories = Array.from({ length: 12 }, (_, i) => ({
  title: `Story Page ${i + 4}`,
  text: [
    "This is a sample story text.",
    "You can add your own adventure here.",
    "Let your imagination fly!",
  ],
  character: (
    <svg width="96" height="96">
      <circle cx="48" cy="48" r="36" fill="#f7f7f7" stroke="#E100FF" strokeWidth="5" />
      <ellipse cx="38" cy="43" rx="7" ry="10" fill="#fff" />
      <ellipse cx="38" cy="43" rx="3" ry="3.5" fill="#070B0E" />
      <ellipse cx="58" cy="43" rx="7" ry="10" fill="#fff" />
      <ellipse cx="58" cy="43" rx="3.2" ry="3.5" fill="#070B0E" />
      <path d="M38 60 Q48 70 58 60" stroke="#070B0E" strokeWidth="3" fill="none" />
    </svg>
  ),
}));

// PUBLIC_INTERFACE
// List of short stories with SVG characters (1 per story)
export const stories = initialStories.concat(generatedStories);
