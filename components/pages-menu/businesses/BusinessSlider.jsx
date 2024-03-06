import React from 'react';
import Slider from 'react-slick';
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faArrows } from '@fortawesome/free-solid-svg-icons';

const BusinessSlider = () => {
  const settings = {
    dots: false,
    faArrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
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
      detailText: "Forth image detail text goes here. Customize as needed."
    },
    {
      imgSrc: "/images/icons/Question.png",
      detailText: "Fifth image detail text goes here. Customize as needed."
    },
    {
      imgSrc: "/images/icons/Question.png",
      detailText: "Sixth image detail text goes here. Customize as needed."
    },
    // Add more slides as needed
  ];

  return (
    <div style={{ maxWidth: '300px', margin: 'auto' }}>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="flip-container">
            <div className="flipper">
              <div className="front">
                {/* Image side */}
                <Image src={slide.imgSrc} alt={`Slide ${index}`}
                  width={300} height={300} layout="responsive" />
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
