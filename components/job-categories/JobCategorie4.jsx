import jobCatContent from "../../data/job-catergories";
import React, { useState } from "react";

const JobCategorie4 = ({ isMobile }) => {
  const [hoveredItem, setHoveredItem] = useState(null); // State to track hovered item

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId); // Set the hovered item ID
    // playHoverSound(); // Play hover sound
  };

  const handleMouseLeave = () => {
    setHoveredItem(null); // Clear the hovered item
  };

  // const playHoverSound = () => {
  //   // Play sound on hover
  //   const audio = new Audio("path_to_your_sound_file.mp3"); // Replace with your sound file path
  //   audio.play();
  // };

  const popupStyle = {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.6)", // Transparent white (adjust alpha as needed)
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    padding: "10px",
    zIndex: "999",
    borderRadius: "8px", // Add border radius
    /* Additional styling for the popup */
  };

  return (
    <>
      {jobCatContent.slice(0, 3).map((item) => (
        <div
        className={`feature-block-two col-lg-4 col-md-4 col-sm-12 ${isMobile ? 'col-xs-6' : ''}`}
        key={item.id}
        >
          <div className="inner-box">
            <span className={`icon ${item.icon}`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative' }}></span>
            <h4
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative' }}
            >
              {item.catTitle}
            </h4>
            {hoveredItem === item.id && ( // Display popup if item is hovered
              <div style={popupStyle}>{item.popupText}</div>
            )}
            <div className="btn-box text-center" style={{ marginTop: '10px' }}>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCategorie4;
