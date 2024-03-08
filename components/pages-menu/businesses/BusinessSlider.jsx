import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.scss';
import GlobalConfig from '@/Global.config';

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
          width: '40px',
          height: '40px',
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
    slidesToShow: windowWidth < 576 ? 1: windowWidth < 768 ? 2 : windowWidth < 992 ? 3 : 4, // Adjust based on window width
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: <CustomArrow type="prev" />,
    nextArrow: <CustomArrow type="next" />,

  };

  // Define an array of objects, each representing a slide with an image and text
  const slidesData = [
    {
      imgSrc: "/images/icons/Research-White-icon.svg",
      title: "Research, Strategy and Marketing",
      detail: "FFI will conduct country/region specific research on labor market feasibility, develop recruitment strategy, and design marketing plan to create awareness and attract top talent.",
      price: "Premium service",
      type: "Premium Service",
      action: "Contact us for details.",
      bgr: GlobalConfig.LogoBlu,
      txt: "white",
      ribbon: "yellow"
    },
    {
      imgSrc: "/images/icons/Streamline-icon.svg",
      title: "Streamline Hiring Process",
      detail: "With its one-stop capabilities, FFI will streamline the lengthy hiring procedures, pre-qualify candidates, verify and translate documents and ensure positive experience overall.",
      price: "Premium Service",
      type: "Premium Service",
      action: "Contact us for details.",
      bgr: GlobalConfig.LogoOrg,
      txt: "black",
      ribbon: "yellow"
    },
    {
      imgSrc: "/images/icons/Permit-White-icon.svg",
      title: "Apply for LMIA, Other Permits",
      detail: "FFI will apply for Labor Market Impact Assessment (LMIA) and other necessary permits on your behalf as required by Canadian and target countrys' laws and regulations .",
      price: "Premium Service",
      type: "Premium Service",
      action: "Contact us for details.",
      bgr: GlobalConfig.LogoBlu,
      txt: "white",
      ribbon: "yellow"
    },
    {
      imgSrc: "/images/icons/Integration-icon.svg",
      title: "Resettlement and Integration",
      detail: "FFI will make the transition and integration process easier for your newly hired employees. We will also provide travel and housing arrangements for employees and their families.",
      price: "Premium Service",
      type: "Premium Service",
      action: "Contact us for details.",
      bgr: GlobalConfig.LogoOrg,
      txt: "black",
      ribbon: "yellow"
    },
    {
      imgSrc: "/images/icons/Skills-White-icon.svg",
      title: "Training and Skills Development",
      detail: "FFI will offer specific training and skills development programs on your behalf, including language proficiency and orientation courses that will help your newly hired employees.",
      price: "Premium service",
      type: "Premium Service",
      action: "Contact us for details.",
      bgr: GlobalConfig.LogoBlu,
      txt: "white",
      ribbon: "yellow"
    },
    {
      imgSrc: "/images/icons/Customer-Service-icon.svg",
      title: "Custom Tailored Services Packages",
      detail: "FFI offers customized, tailored services packages to meet your specific needs. You can choose two or more services and we will offer you multi-service package deals to save you more.",
      price: "Premium service",
      type: "Premium Service",
      action: "Contact us for detail.",
      bgr: GlobalConfig.LogoOrg,
      txt: "black",
      ribbon: "yellow"
    },
    {
      imgSrc: "/images/icons/Event-White-icon.svg",
      title: "Local Recruitment and Promotional Fairs",
      detail: "Complimentary for paying clients - FFI can hold recruitment fairs and events in global locations we have presence in to engage applicants directly and provide services on the ground.",
      price: "Complimentary Service",
      type: "Complimentary",
      action: "Contact us for details.",
      bgr: GlobalConfig.LogoBlu,
      txt: "white",
      ribbon: GlobalConfig.LogoGry1
    },
    {
      imgSrc: "/images/icons/Process-icon.svg",
      title: "Continuous Process & Strategy Adjustment",
      detail: "Complimentary for paying client - FFI will support you to continuously improve/adjust your recruitment strategy based on factors such as new immigration laws, global hiring trends, etc.",
      price: "Complimentary Service",
      type: "Complimentary",
      action: "Contact us for details.",
      bgr: GlobalConfig.LogoOrg,
      txt: "black",
      ribbon: GlobalConfig.LogoGry1
    },
  ];

  return (
    <div style={{ maxWidth: '100%', margin: 'auto' }}>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="flip-container">
            <div className="flipper" style={{ background: slide.bgr, margin: '0 15px' }}>
              <div className="front">
                {/* Image side */}
                <div className="slide">
                  <div className="ribbon" style={{ fontSize: "18px", backgroundColor: slide.ribbon, color: "black", textDecoration: "underline 2px" }}>{slide.type}</div> {/* This is the ribbon element */}
                  <div style={{ display: "grid", justifyContent: "center", padding: "50px 0 50px 0" }}>
                    <Image
                      src={slide.imgSrc}
                      alt={`Slide ${index}`}
                      width={100}
                      height={100}
                    // layout="responsive"
                    />
                  </div>
                  <div style={{ fontWeight: "600", color: slide.txt, fontSize: "20px", textAlign: "center", padding: "10px 20px" }}>
                    {slide.title}
                  </div>
                </div>
              </div>
              <div className="back" style={{ maxWidth: "fit-content", maxHeight: "fit-content", color: slide.txt, background: slide.bgr }}>
                {/* Details side */}
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <strong>Details<br/></strong>{slide.detail}
                </div>
                <div style={{ display: "flex", flex: "0.1", backgroundColor: slide.txt, height: "2px"}} />
                <div style={{ fontWeight: "600", color: slide.txt, textAlign: "center", paddingTop: "10px" }}>
                  {slide.action}
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

