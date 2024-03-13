"use client"

import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

const HeroSliderGallery = () => {

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);

  const sliderRef = useRef(null);

  const settings = {
    // dots: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(100, 120, 150, 0.8)',
    pointerEvents: 'none',
    zIndex: 1,
  };

  function CustomArrow(props) {
    const { className, onClick, type } = props;
    const iconClass = type === 'next' ? 'fa fa-arrow-right' : 'fa fa-arrow-left';

    return (
      <button
        className={`slick-arrow ${className}`}
        onClick={onClick}
        style={{ top: '50%', display: 'none' }} // This line hides the arrow buttons
      >
        <span className={iconClass}></span>
      </button>
    );
  }

  return (
    <div className="banner-carousel arrow-center-between arrow-rounded hide-arrow-1024">
      <Slider {...settings}
        nextArrow={<CustomArrow className="slick-next" type="next" />}
        prevArrow={<CustomArrow className="slick-prev" type="prev" />}
        style={{display: "grid", height: windowWidth < 420 ? "75vh" : windowWidth < 576 ? "62vh" : 
        windowWidth < 630 ? "70vh" : windowWidth < 768 ? "65vh": "100vh"}}
      >
        <div className="slide-item bg-image image-1">
          <div style={overlayStyle}></div>
        </div>
        <div className="slide-item bg-image image-2">
          <div style={overlayStyle}></div>
        </div>
        <div className="slide-item bg-image image-3">
          <div style={overlayStyle}></div>
        </div>
        <div className="slide-item bg-image image-4">
          <div style={overlayStyle}></div>
        </div>
        <div className="slide-item bg-image image-5">
          <div style={overlayStyle}></div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSliderGallery;
