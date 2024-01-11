"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Client1 from '../../../public/images/index-11/clients/1.svg'
import Client2 from '../../../public/images/index-11/clients/2.svg'
import Client3 from "../../../public/images/index-11/clients/3.svg"
import Client4 from "../../../public/images/index-11/clients/4.svg"
import Client5 from "../../../public/images/index-11/clients/5.svg"
import Client6 from "../../../public/images/index-11/clients/6.svg"
import Client7 from "../../../public/images/index-11/clients/7.svg"

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
    { id: 1, link: "/partners", imgNumber: Client1, companyName: "Quebec Provincial Government", textColor: 'green' },
    { id: 2, link: "/partners", imgNumber: Client2, companyName: "Ontario Provincial Government", textColor: 'yellow' },
    { id: 3, link: "/partners", imgNumber: Client3, companyName: "Alberta Provincial Government", textColor: 'red' },
    { id: 4, link: "/partners", imgNumber: Client4, companyName: "City of Ottawa" },
    { id: 5, link: "/partners", imgNumber: Client5, companyName: "City of Toronto" },
    { id: 6, link: "/partners", imgNumber: Client6, companyName: "City of Calgary" },
    { id: 7, link: "/partners", imgNumber: Client7, companyName: "UBM" },
    { id: 8, link: "/partners", imgNumber: Client5, companyName: "ONTA" },
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


  const [marqueeEffect, setMarqueeEffect] = useState({});

  const updateMarquee = (id) => {
    const animationDuration = 10; // Adjust the speed of the marquee
    setMarqueeEffect({
      ...marqueeEffect,
      [id]: {
        animation: `marquee ${animationDuration}s linear infinite`,
      }
    });
  };

  const measureText = (id) => {
    const textElement = document.getElementById(`company-name-${id}`);
    if (textElement) {
      const textWidth = textElement.offsetWidth;
      const parentWidth = textElement.parentElement.offsetWidth;
      if (textWidth > parentWidth) {
        updateMarquee(id);
      }
    }
  };

  useEffect(() => {
    sliderPartners.forEach(partner => {
      measureText(partner.id);
    });
  }, []);

  return (
    <>
      <Slider {...settings} arrows={false}>
        {sliderPartners.map((item) => (
          <div className="slide-item" key={item.id} style={{ display: "flex", alignItems: "center" }}>
            <figure className="image-box" style={{ marginRight: "5px", flexShrink: 0 }}>
              <a href={item.link}>
                <Image
                  width={100}
                  height={40}
                  src={item.imgNumber}
                  alt="brand"
                />
              </a>
            </figure>
            <div
              style={{
                overflowX: 'auto', // Allows horizontal scrolling
                whiteSpace: 'nowrap', // Keeps text in a single line
                flexGrow: 1, // Allows the text container to grow
              }}
            >
              {/* <a href={item.link} style={{ color: item.textColor }}>
                {item.companyName}
              </a> */}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Partner2;
