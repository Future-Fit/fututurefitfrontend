import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from "next/image";
import Link from "next/link";
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
    slidesToShow: windowWidth < 576 ? 1 : windowWidth < 768 ? 2 : windowWidth < 992 ? 3 : 4, // Adjust based on window width
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
      title: "Research & Strategy",
      detail1: "- Region/country labor market research",
      detail2: "- Recruitment strategy",
      detail3: "- Marketing strategy",
      detail4: "- Create awareness to attract top talent",
      detail5: "",
      price: "Premium service",
      type: "Premium Service",
      action: "Contact us for details",
      bgr: GlobalConfig.LogoBlu,
      txt: "white",
      ribbon: "yellow"
    },
    {
      imgSrc: "/images/icons/Streamline-icon.svg",
      title: "Streamline Hiring Process",
      detail1: "- Streamline hiring process",
      detail2: "- Screen/pre-qualify candidates",
      detail3: "- Verify/translate documents",
      detail4: "- Online portal for easy access",
      detail5: "",
      price: "Premium Service",
      type: "Premium Service",
      action: "Contact us for details",
      bgr: GlobalConfig.LogoOrg,
      txt: "black",
      ribbon: "yellow"
    },
    {
      imgSrc: "/images/icons/Permit-White-icon.svg",
      title: "Apply for LMIA, Other Permits",
      detail1: "- Obtain Labor Market Impact Assessment (LMIA)",
      detail2: "- Other permits as required",
      detail3: "- Monitor Canadian/target country regulations",
      detail4: "",
      detail5: "",
      price: "Premium Service",
      type: "Premium Service",
      action: "Contact us for details",
      bgr: GlobalConfig.LogoBlu,
      txt: "white",
      ribbon: "yellow"
    },
    {
      imgSrc: "/images/icons/Integration-icon.svg",
      title: "Resettlement and Integration",
      detail1: "- Settle/integrate employees",
      detail2: "- Arrange travel/housing for employees & families",
      detail3: "- Provide social & professional support",
      detail4: "",
      detail5: "",
      price: "Premium Service",
      type: "Premium Service",
      action: "Contact us for details",
      bgr: GlobalConfig.LogoOrg,
      txt: "black",
      ribbon: "yellow"
    },
    {
      imgSrc: "/images/icons/Skills-White-icon.svg",
      title: "Training & Skills Development",
      detail1: "- Skills development program",
      detail2: "- Language proficiency courses",
      detail3: "- Company specific training",
      detail4: "- New employee orientation",
      detail5: "",
      price: "Premium service",
      type: "Premium Service",
      action: "Contact us for details",
      bgr: GlobalConfig.LogoBlu,
      txt: "white",
      ribbon: "yellow"
    },
    {
      imgSrc: "/images/icons/Customer-Service-icon.svg",
      title: "Customized Packages",
      detail1: "- Customized service packages",
      detail2: "- Combine multiple services for better deal",
      detail3: "- New services as needed",
      detail4: "",
      detail5: "",
      price: "Premium service",
      type: "Premium Service",
      action: "Contact us for detail",
      bgr: GlobalConfig.LogoOrg,
      txt: "black",
      ribbon: "yellow"
    },
    {
      imgSrc: "/images/icons/Event-White-icon.svg",
      title: "Recruitment & Promotional Fairs",
      detail1: "- Complimentary for paying clients",
      detail2: "- Recruitment fairs and company events",
      detail3: "- Engage applicants directly",
      detail4: "- Hold Q&A sessions",
      detail5: "- And more...",
      price: "Complimentary Service",
      type: "Complimentary",
      action: "Contact us for details",
      bgr: GlobalConfig.LogoBlu,
      txt: "white",
      ribbon: GlobalConfig.LogoGry1
    },
    {
      imgSrc: "/images/icons/Process-icon.svg",
      title: "Continuous Improvement",
      detail1: "- Complimentary",
      detail2: "- Continuously improve/adjust strategy",
      detail3: "- Update as new laws/immigration rules enacted",
      detail4: "- Update on hiring trends",
      detail5: "",
      price: "Complimentary Service",
      type: "Complimentary",
      action: "Contact us for details",
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
            <div className="flipper" style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", background: slide.bgr, margin: '0 15px' }}>
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
                    />
                  </div>
                  <div style={{ fontWeight: "600", color: slide.txt, fontSize: "20px", textAlign: "center", padding: "10px 20px" }}>
                    {slide.title}
                  </div>
                </div>
              </div>
              <div className="back">
                {/* Details side */}
                <div style={{ color: slide.txt, padding: "10px", textDecoration: "underline", textAlign: "center" }}>
                  <strong>Details</strong>
                </div>
                <div style={{ color: slide.txt, fontSize: "14px", paddingLeft: "15px", paddingRight: "15px", textAlign: "left" }}>
                  <text>{slide.detail1}<br /></text>
                  <text>{slide.detail2}<br /></text>
                  <text>{slide.detail3}<br /></text>
                  <text>{slide.detail4}<br /></text>
                  <text>{slide.detail5}<br /></text>
                </div>

                {/* <div style={{ position: "absolute", height: "400px" }}> */}
                  <div style={{ alignContent: 'baseline', display: "block", width: "50%", backgroundColor: slide.txt, height: "2px", margin: "auto" }} />
                  <div style={{ flex: 0.2, color: slide.txt, textAlign: "center", paddingLeft: "15px", paddingTop: "0px" }}>
                    <strong>Price: </strong>
                    <Link href="/contact" style={{ color: slide.txt, fontSize: "14px", textDecoration: "underline" }}>
                      {slide.action}
                    </Link>
                  </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BusinessSlider;

