import React from 'react';
import Slider from 'react-slick';
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';



const BusinessSlider = () => {


  function CustomArrow(props) {
    const { className, style, onClick, type } = props;
    const icon = type === 'next' ? faArrowRight : faArrowLeft;

    return (
      <button
        className={`slick-arrow ${className}`}
        onClick={onClick}
        style={{
          ...style,
          display: 'block',
          top: '50%',
          transform: 'translateY(-50%)', // Centers the button vertically
          zIndex: 25 // Ensure the button is above other content
        }}
      >
        <FontAwesomeIcon icon={icon} />
      </button>
    );
  }


  function CustomArrow(props) {
    const { className, style, onClick, type } = props;
    const icon = type === 'next' ? faArrowRight : faArrowLeft;

    return (
      <button
        className={`slick-arrow ${className}`}
        onClick={onClick}
        style={{
          ...style,
          display: 'block',
          top: '50%',
          transform: 'translateY(-50%)', // Centers the button vertically
          zIndex: 25 // Ensure the button is above other content
        }}
      >
        <FontAwesomeIcon icon={icon} />
      </button>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomArrow type="next" />,
    prevArrow: <CustomArrow type="prev" />,
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
                <Image src={slide.imgSrc} alt={`Slide ${index}`} width={300} height={300} layout="responsive" />
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


// import React from 'react';
// import Slider from 'react-slick';
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const BusinessSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div style={{ maxWidth: '300px', margin: 'auto' }}>
//       <Slider {...settings}>
//         {/* Repeat this structure for each slide you want to include */}
//         <div className="flip-container">
//           <div className="flipper">
//             <div className="front">
//               {/* Image side */}
//               <Image src="/images/icons/Question.png" alt="Example" width={300} height={300} />
//             </div>
//             <div className="back">
//               {/* Details side */}
//               <div style={{ padding: '20px', textAlign: 'center' }}>
//                 Detailed text goes here. You can customize this part as needed.
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Add more slides as needed */}
//       </Slider>
//     </div>
//   );
// };

// export default BusinessSlider;
