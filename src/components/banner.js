import React from "react";

function Banner({ image }) {
  return (
    <div
      className="banner-placeholder"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}

export default Banner;
