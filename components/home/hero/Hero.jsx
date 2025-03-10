"use client"
import { useEffect, useState } from "react";
import GlobalConfig from "@/Global.config";

import HeroSliderGallery from "./HeroSliderGallery";
import VideoPlayer from "./VideoPlayer";
import { useRouter } from 'next/navigation';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import styles from './transition.scss';
const Hero = () => {
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

  const fadeInAnimation = 'fadeIn 2s ease-in-out';
  const router = useRouter();
  const fadeInAtCenter = () => {
    const titleElement = document.getElementById('fadeInTitle');

    if (titleElement) {
      titleElement.style.opacity = '0';
      setTimeout(() => {
        titleElement.style.opacity = '1';
      }, 5000);
    }
  };

  useEffect(() => { fadeInAtCenter(); }, []);

  const carouselTexts = [
    "We partner with Canadian businesses and academic institutions <br /> to facilitate the recruitment of international skilled workers and students.",
    "To see available jobs please click the  button below"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselTexts.length) % carouselTexts.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
  };

  return (
    <>
      <section className="banner-section-ten" style={{ height: 'fit-content' }}>
        <HeroSliderGallery />
        <div className="auto-container">
          <div className="title-box" data-aso-delay="500" data-aos="fade-up">
            <h3 style={{
              fontSize: windowWidth < 576 ? "22px" : "38px",
              fontWeight: windowWidth < 576 ? "700" : "800",
              animation: fadeInAnimation,
            }}>
              <span style={{ color: "white" }}> FUTURE </span>
              <span style={{ color: "white" }}> FIT </span>
              <span style={{ color: "white" }}> INTERNATIONAL </span>
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
            <div style={{ flex: 0.2, backgroundColor: GlobalConfig.LogoBlu, height: "3px" }} />
            <p style={{ fontSize: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              &nbsp; <strong><span style={{ color: GlobalConfig.LogoOrg }}> Work & Study in </span></strong>
              <strong><span style={{ color: GlobalConfig.LogoOrg }}> Canada </span></strong> &nbsp;
            </p>
            <div style={{ flex: 0.2, backgroundColor: GlobalConfig.LogoBlu, height: "3px" }} />
          </div>
          <div className={styles['fade-in']} style={{ minHeight: windowWidth > 768 ? '105px' : '120px', textAlign: 'center' }}>
            {windowWidth > 768 ? (
              <h2 style={{ margin: '15px 0px', textAlign: 'center', color: "#fff", fontWeight: "600", fontSize: '20px' }}
                dangerouslySetInnerHTML={{ __html: carouselTexts[currentIndex] }}>
              </h2>
            ) : windowWidth > 576 ? (
              <h2 style={{ margin: '15px 0px', textAlign: 'center', color: "#fff", fontWeight: "600", fontSize: '18px' }}
                dangerouslySetInnerHTML={{ __html: carouselTexts[currentIndex] }}>
              </h2>
            ) : windowWidth > 420 ? (
              <h2 style={{ margin: '15px 0px', textAlign: 'center', color: "#fff", fontWeight: "600", fontSize: '16px' }}
                dangerouslySetInnerHTML={{ __html: carouselTexts[currentIndex] }}>
              </h2>
            ) : (
              <h2 style={{ margin: '15px 0px', textAlign: 'center', color: "#fff", fontWeight: "600", fontSize: '14px' }}
                dangerouslySetInnerHTML={{ __html: carouselTexts[currentIndex] }}>
              </h2>
            )}
            {currentIndex === 0 ? (
              <button style={{ animation: fadeInAnimation, padding: "5px 10px", visibility: 'hidden', backgroundColor: GlobalConfig.LogoOrg, color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                Learn More
              </button>
            ) : (
              <button onClick={() => router.push('/jobs-list')} style={{ padding: "5px 10px", marginBottom: '5px', backgroundColor: GlobalConfig.LogoOrg, color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                See Available Jobs
              </button>
            )}
            <button onClick={handlePrev} style={{
              position: 'absolute',
              left: windowWidth > 768 ? '5px' : '-25px',
              top: windowWidth > 768 ? '25%' : '10%',
              transform: 'translateY(-50%)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              marginLeft: windowWidth > 768 ? '75px' : 'none'
            }}>
              <FaChevronCircleLeft style={{ fontSize: '35px' }} />
            </button>
            <button onClick={handleNext} style={{
              position: 'absolute',
              right: windowWidth > 768 ? '10px' : '-25px',
              top: windowWidth > 768 ? '25%' : '10%',
              transform: 'translateY(-50%)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              marginLeft: windowWidth > 768 ? '75px' : 'none'
            }}>
              <FaChevronCircleRight style={{ fontSize: '35px' }} />
            </button>
          </div>
          <VideoPlayer />

        </div>
      </section>
    </>
  )
};

export default Hero;
