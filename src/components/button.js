import React from "react";

function Button({ text, onClick }) {
  return (
    <div className="button-wrapper">
      <button className="button" onClick={onClick}>
        {/* Text on the left */}
        <span className="button-text">{text}</span>

        {/* Arrow on the right */}
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
              stroke="black" /* Ensure this contrasts with the button color */
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default Button;
