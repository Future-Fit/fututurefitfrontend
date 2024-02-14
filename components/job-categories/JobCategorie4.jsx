import React, { useState } from "react";
import jobCatContent from "../../data/job-catergories";
import Image from "next/image";

// const JobCategorie4 = ({ isMobile }) => {
  const JobCategorie4 = ({ }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const imageContainerStyle = {
    position: 'relative', // Needed to position the text over the image
    width: '250px', // Match the width of the Image component
    height: '200px', // Match the height of the Image component
    textAlign: 'center', // Center-align the text
    display: 'flex', // Use flexbox for centering
    alignItems: 'center', // Vertically center
    justifyContent: 'center', // Horizontally center
    marginTop: '-60px', // Margin to align to top
    opacity: hoveredItem ? 1 : 0, // Set opacity based on hover state
    transition: 'opacity 0.3s ease', 
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
    opacity: hoveredItem ? 1 : 0, // Set opacity based on hover state
    transition: 'opacity 0.3s ease',
  };

  return (
    <>
      {jobCatContent.slice(0, 3).map((item) => (
        <div
          // className={`feature-block-two col-lg-4 col-md-4 col-sm-12 ${isMobile ? 'col-xs-6' : ''}`}
          className={'feature-block-two col-lg-4 col-md-4 col-sm-12 col-xs-6'}
          key={item.id}
        >
          <div className="inner-box">
            <div
              className="icon-title-wrapper"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                display: 'inline-block',
                borderRadius: '8px',
                paddingTop: '10px',
                position: 'relative',
                overflow: 'hidden',
                width: 'fit-content',
                
              }}
            >
              <span className={`icon ${item.icon}`} style={{ position: 'relative' }}></span>
              <h4 style={{ position: 'relative' }}>{item.catTitle}</h4>
              
            </div>
            {hoveredItem === item.id && (
                <div style={imageContainerStyle}>
                  <Image
                    src="/images/thinking-icon.svg"
                    alt="Thinking Bubble"
                    layout="fill"
                    objectFit="contain"
                    style={{ transform: 'scaleX(-1) scaleY(-1)' }}
                  />
                  <div style={textStyle}>{item.popupText}</div>
                </div>
              )}
            <div className="btn-box text-center" style={{ marginTop: '10px' }}>
              {/* Additional content or buttons */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCategorie4;