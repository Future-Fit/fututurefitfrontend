import React from "react";
import Image from "next/image";
import Slider from "react-slick";
 
const Partner2 = () => {
  const settings = {
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderPartners = [
    { id: 1, link: "#", imgNumber: "1", companyName: "Quebec Provincial Government", textColor: 'green' },
    { id: 2, link: "#", imgNumber: "2", companyName: "Ontario Provincial Government", textColor: 'yellow' },
    { id: 3, link: "#", imgNumber: "3", companyName: "Alberta Provincial Government", textColor: 'red' },
    { id: 4, link: "#", imgNumber: "4", companyName: "City of Ottawa" },
    { id: 5, link: "#", imgNumber: "5", companyName: "City of Toronto" },
    { id: 6, link: "#", imgNumber: "6", companyName: "City of Calgary" },
    { id: 7, link: "#", imgNumber: "7", companyName: "UBM" },
    { id: 8, link: "#", imgNumber: "5", companyName: "ONTA" },
  ];

  const imageStyle = {
    display: "inline-block",
    marginRight: "5px",
    marginLeft: "5px" // Adjust spacing between image and text
  };
  
  const companyNameStyle = {
    whiteSpace: 'normal', // allows text to wrap instead of forcing it in one line
    overflow: 'visible', // ensures that overflowing text is not hidden
    display: 'inline-block',
    maxWidth: '450px', // set a maximum width for the text
    marginLeft: '10px' // optional, for additional spacing between the image and text
  };

  return (
    <>

      <Slider {...settings} arrows={false}>
        {sliderPartners.map((item) => (
          <div className="slide-item" key={item.id}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <figure className="image-box" style={imageStyle}>
                <a href={item.link}>
                  <Image
                    width={100}
                    height={40}
                    src={`/images/index-11/clients/${item.imgNumber}.svg`}
                    alt="brand"
                  />
                </a>
              </figure>
              <div className="company-name" style={{ whiteSpace: 'nowrap', overflow: 'hidden', display: 'inline-block' }}>
                <a href={item.link} style={{ color: item.textColor }}>{item.companyName}</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Partner2;
