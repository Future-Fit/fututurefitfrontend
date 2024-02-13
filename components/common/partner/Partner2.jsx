"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import GlobalConfig from "@/Global.config";

const Partner2 = () => {
  const settings = {
    dots: false,
    // slidesToShow: 7, //this number shoud number should be matched with the total number of the sliderPartners
    slidesToShow: 2,
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
    // { id: 1, link: "/partners", imgNumber: "1.svg", companyName: "Quebec Provincial Government", textColor: 'green' },
    // { id: 2, link: "/partners", imgNumber: "2.svg", companyName: "Ontario Provincial Government", textColor: 'yellow' },
    // { id: 3, link: "/partners", imgNumber: "3.svg", companyName: "Alberta Provincial Government", textColor: 'red' },
    // { id: 4, link: "/partners", imgNumber: "4.svg", companyName: "City of Ottawa" },
    // { id: 5, link: "/partners", imgNumber: "5.svg", companyName: "City of Toronto" },
    // { id: 6, link: "/partners", imgNumber: "6.svg", companyName: "City of Calgary" },
    // { id: 7, link: "/partners", imgNumber: "7.svg", companyName: "UBM" },
    { id: 1, link: "https://www.immigration.ca/", imgNumber: "8.png", companyName: "immigration.ca" },
    { id: 2, link: "https://www.immigration.ca/", imgNumber: "8.png", companyName: "immigration.ca" },
    // { id: 3, link: "https://www.immigration.ca/", imgNumber: "8.png", companyName: "immigration.ca" },
    // { id: 4, link: "https://www.immigration.ca/", imgNumber: "8.png", companyName: "immigration.ca" },
    // { id: 5, link: "https://www.immigration.ca/", imgNumber: "8.png", companyName: "immigration.ca" },
    // { id: 6, link: "https://www.immigration.ca/", imgNumber: "8.png", companyName: "immigration.ca" },
    // { id: 7, link: "https://www.immigration.ca/", imgNumber: "8.png", companyName: "immigration.ca" },
    // { id: 8, link: "https://www.immigration.ca/", imgNumber: "8.png", companyName: "immigration.ca" },
    // { id: 9, link: "https://www.immigration.ca/", imgNumber: "8.png", companyName: "immigration.ca" }
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

      <section className="clients-section-two alternate" style={{ backgroundColor: GlobalConfig.BgrClr1 }}>
        <div className="auto-container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#FFF', paddingTop: '10px', paddingBottom: '10px', fontWeight: 'bolder' }}>Partners We Work With</h2>

          <div className="sponsors-outer wow fadeInUp">
            <div className="sponsors-carousel">

              <Slider {...settings} arrows={false}>
                {sliderPartners.map((item) => (
                  <div className="slide-item" key={item.id} style={{ display: "flex", alignItems: "center" }}>
                    <figure className="image-box" style={{ marginRight: "5px", flexShrink: 0 }}>
                      <a href={item.link} target="_blank" rel="noreferrer noopener">
                        <Image
                          width={100}
                          height={40}
                          src={`/images/index-11/clients/${item.imgNumber}`}
                          style={{ paddingLeft: "10px", paddingRight: "10px" }}
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

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner2;
