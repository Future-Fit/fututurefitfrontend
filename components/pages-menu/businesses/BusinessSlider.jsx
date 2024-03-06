import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.scss';

const BusinessSlider = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  function CustomArrow(props) {
    const { className, style, onClick, type } = props;
    const imageUrl = type === 'next' ? '/images/icons/right-arrow.svg' : '/images/icons/left-arrow.svg';
  
    return (
      <button
        className={`slick-arrow ${className}`}
        onClick={onClick}
        style={{
          ...style,
          display: 'block',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 25
        }}
      >
        <img src={imageUrl} alt={`${type} arrow`} />
      </button>
    );
  }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth < 768 ? 1 : 3, // Adjust based on window width
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomArrow type="prev" />,
    nextArrow: <CustomArrow type="next" />,

  };

  // Define an array of objects, each representing a slide with an image and text
  const slidesData = [
    {
      imgSrc: "/images/icons/Question.png",
      detailText: "First image detail text goes here. Customize as needed."
    },
    {
      imgSrc: "/images/icons/Question.png",
      detailText: "Second image detail text goes here. Customize as needed."
    },
    {
      imgSrc: "/images/icons/Question.png",
      detailText: "Third image detail text goes here. Customize as needed."
    },
    {
      imgSrc: "/images/icons/Question.png",
      detailText: "Third image detail text goes here. Customize as needed."
    },
    {
      imgSrc: "/images/icons/Question.png",
      detailText: "Third image detail text goes here. Customize as needed."
    },
    {
      imgSrc: "/images/icons/Question.png",
      detailText: "Third image detail text goes here. Customize as needed."
    },
  ];

  return (
    <div style={{ maxWidth: '100%', margin: 'auto' }}>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="flip-container">
            <div className="flipper" style={{ margin: '0 15px' }}>
              <div className="front">
                {/* Image side */}
                <div className="slide">
                  <div className="ribbon">Premium</div> {/* This is the ribbon element */}

                  <Image src={slide.imgSrc} alt={`Slide ${index}`} width={300} height={300} layout="responsive" />
                </div>
              </div>
              <div className="back">
                {/* Details side */}
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  {slide.detailText}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BusinessSlider;

