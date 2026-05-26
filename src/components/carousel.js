import React, { useState } from "react";

export default function Carousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return <div className="carousel-empty">No images provided</div>;
  }

  return (
    <div className="carousel-container" aria-roledescription="carousel">
      {/* Main Track Window */}
      <div className="carousel-viewport">
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((item, index) => (
            <div 
              key={index} 
              className="carousel-slide"
              aria-hidden={currentIndex !== index}
            >
              <img 
                src={item.url} 
                alt={item.caption || `Slide ${index + 1}`} 
                className="carousel-image" 
              />
              
              {/* Image Caption Overlay */}
              {item.caption && (
                <div className="carousel-caption-overlay">
                  <p className="carousel-caption-text">{item.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button className="carousel-arrow prev" onClick={handlePrev} aria-label="Previous slide">&#10094;</button>
          <button className="carousel-arrow next" onClick={handleNext} aria-label="Next slide">&#10095;</button>
        </>
      )}

      {/* Bottom Indicator Dots */}
      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}