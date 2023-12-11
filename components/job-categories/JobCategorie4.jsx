import React, { useState } from "react";
import jobCatContent from "../../data/job-catergories";
import Image from "next/image";

const JobCategorie4 = ({ isMobile }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const imageContainerStyle = {
    position: 'relative', // Needed to position the text over the image
    width: '300px', // Match the width of the Image component
    height: '300px', // Match the height of the Image component
    textAlign: 'center', // Center-align the text
    display: 'flex', // Use flexbox for centering
    alignItems: 'center', // Vertically center
    justifyContent: 'center' // Horizontally center
  };

  const textStyle = {
    position: 'absolute',
    color: 'white',
    zIndex: 10,
    maxWidth: '80%', // Limit the width of the text
    padding: '10px', // Add some padding around the text
    fontSize: '14px', // Adjust font size as needed
    wordWrap: 'break-word', // Ensure long words do not overflow
    textAlign: 'center', // Center the text
    top: '50%', // Vertically center the text
    left: '50%',
    transform: 'translate(-50%, -50%)', // This ensures the text is centered both horizontally and vertically
  };

  return (
    <>
      {jobCatContent.slice(0, 3).map((item) => (
        <div
          className={`feature-block-two col-lg-4 col-md-4 col-sm-12 ${isMobile ? 'col-xs-6' : ''}`}
          key={item.id}
        >
          <div className="inner-box">
            <span
              className={`icon ${item.icon}`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative' }}
            ></span>
            <h4
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative' }}
            >
              {item.catTitle}
            </h4>
            {hoveredItem === item.id && (
             <div style={imageContainerStyle}>
             <Image
               src="/images/thinking-icon.svg"
               alt="Thinking Bubble"
               layout="fill" // This makes the image responsive within the container
               objectFit="contain" // Keeps the aspect ratio of the image
             />
             <div style={textStyle}>{item.popupText}</div>
           </div>
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