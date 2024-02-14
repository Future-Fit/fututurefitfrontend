"use client"

import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

const HeroSliderGallery = () => {

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    speed: 0,
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
    height: '80vh',
    backgroundColor: 'rgba(59, 87, 142, 0.85)',
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
      style={{top: '30%'}}>
        <span className={iconClass}></span>
      </button>
    );
  }

  return (
    <div className="banner-carousel arrow-center-between arrow-rounded hide-arrow-1024">
      <Slider {...settings}
        nextArrow={<CustomArrow className="slick-next" type="next" />}
        prevArrow={<CustomArrow className="slick-prev" type="prev" />}>
        <div className="slide-item bg-image image-1" style={{height: '80% !important'}}>
          <div style={overlayStyle}></div>
        </div>
        {/* <div className="slide-item bg-image image-2">
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
        </div> */}
      </Slider>
    </div>
  );
};

export default HeroSliderGallery;
