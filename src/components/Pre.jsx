import React from 'react';

// 1. IMPORT YOUR BACKGROUND IMAGE
// NOTE: The image import was removed because the file path could not be found, which caused a compilation error.
// To use your background image, you must add the correct import path here.
import backgroundImg from '../Assets/preloader-bg.png';

// --- Styling for the Preloader ---
// This CSS makes the preloader a full-screen overlay.
const preloaderStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 9999,
  transition: 'opacity 0.5s ease',
  // The 'backgroundImage' property was removed to fix the error. To add it back,
  backgroundImage: `url(${backgroundImg})`,
  backgroundColor: '#0f0f23', // Using a solid background color as a fallback.
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
};

const preloaderHiddenStyle = {
  ...preloaderStyle,
  opacity: 0,
  pointerEvents: 'none',
};

/**
 * Pre Component (Your Preloader)
 * @param {object} props - The component props.
 * @param {boolean} props.load - A boolean to control the visibility of the preloader.
 */
function Pre({ load }) {
  return (
    // This div now contains the background image styling
    <div style={load ? preloaderStyle : preloaderHiddenStyle}>
      {/* RESPONSIVENESS FIX:
        - `preserveAspectRatio` is set to "xMidYMid meet" to ensure the entire animation is always visible, preventing cropping.
        - The main <g> element's transform has been adjusted to perfectly center the animation.
        - Keyframe values for text width and cursor position have been updated to match the larger font size.
      */}
      <svg width="100%" height="100%" viewBox="0 0 1000 550" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <style>{`
                .typing-text {
                    font-family: "Kode Mono", monospace;
                    font-size: 20px;
                    font-weight: bold;
                }
                @keyframes type-line1 { 0% { width: 0; } 35% { width: 340px; } 90% { width: 340px; } 100% { width: 0; } }
                @keyframes type-line2 { 0% { width: 0; } 40% { width: 0; } 75% { width: 180px; } 90% { width: 180px; } 100% { width: 0; } }
                @keyframes blink { 50% { opacity: 0; } }
                @keyframes move-cursor {
                  0% { transform: translate(20px, 35px); }
                  35% { transform: translate(360px, 35px); }
                  40% { transform: translate(360px, 35px); }
                  41% { transform: translate(60px, 65px); }
                  75% { transform: translate(240px, 65px); }
                  90% { transform: translate(240px, 65px); }
                  100% { transform: translate(20px, 35px); }
                }
                @keyframes progress { 0% { width: 0; } 80% { width: 340px; } 100% { width: 0; } }
                #clip-rect1 { animation: type-line1 1.15s steps(26) infinite; }
                #clip-rect2 { animation: type-line2 1.15s steps(12) infinite; }
                #cursor { animation: blink 0.5s infinite, move-cursor 1.15s infinite; }
                #progress-bar { animation: progress 1.15s linear infinite; }
            `}</style>
          <clipPath id="clip1"><rect id="clip-rect1" x="0" y="0" width="0" height="30" /></clipPath>
          <clipPath id="clip2"><rect id="clip-rect2" x="0" y="0" width="0" height="30" /></clipPath>
        </defs>

        {/* Animated background particles */}
        <circle r="1.5" fill="#D4AF37" opacity="0.6">
          <animate attributeName="cx" values="0;1000;0" dur="15s" repeatCount="indefinite" />
          <animate attributeName="cy" values="50;450;50" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle r="1" fill="#695618ff" opacity="0.4">
          <animate attributeName="cx" values="1000;0;1000" dur="12s" repeatCount="indefinite" />
          <animate attributeName="cy" values="500;100;500" dur="8s" repeatCount="indefinite" />
        </circle>

        {/* This group centers all the typing animation content */}
        <g transform="translate(330, 220)">
          <g transform="translate(20, 15)" clipPath="url(#clip1)">
            <text y="20" className="typing-text">
              <tspan fill="#ffffff">&lt; Hello from </tspan>
              <tspan fill="#c770f0">SHUBHAM</tspan>
              <tspan fill="#ffffff"> /&gt;</tspan>
            </text>
          </g>
          <g transform="translate(60, 45)" clipPath="url(#clip2)">
            <text y="20" className="typing-text">
              <tspan fill="#ffffff">&lt;</tspan>
              <tspan fill="#6d20c5d7">Loading...</tspan>
              <tspan fill="#ffffff"> /&gt;</tspan>
            </text>
          </g>
          <rect id="cursor" width="2" height="22" y="-22" rx="1" fill="#6d20c5d7" />
          <rect id="progress-bar" x="20" y="110" width="0" height="2" fill="#c770f0" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

export default Pre;

