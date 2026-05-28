import React from "react";

// 1. Add 'showArrow' to the destructured props, defaulting to true
function Button({ text, onClick, showArrow = true }) {
  return (
    <div className="button-wrapper">
      <button className="button" onClick={onClick}>
        {/* Text on the left */}
        <span className="button-text">{text}</span>

        {/* 2. Wrap the arrow in a conditional statement */}
        {showArrow && (
          <div className="button-arrow">
            <svg
              width="40"
              height="28"
              viewBox="0 0 67 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 24H57M57 24L42 9M57 24L42 39"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </button>
    </div>
  );
}

export default Button;