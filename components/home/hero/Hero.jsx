"use client"
import { useEffect, useState } from "react";
import GlobalConfig from "@/Global.config";

import HeroSliderGallery from "./HeroSliderGallery";
import VideoPlayer from "./VideoPlayer";

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

  const fadeInAtCenter = () => {
    const titleElement = document.getElementById('fadeInTitle');

    if (titleElement) {
      titleElement.style.opacity = '0';
      setTimeout(() => {
        titleElement.style.opacity = '1';
      }, 4000);
    }
  };

  useEffect(() => { fadeInAtCenter(); }, []);

  return (
    <>
      <section className="banner-section-ten" style={{ height: 'fit-content' }}>
        <HeroSliderGallery />
        <div className="auto-container" >
          {/* <div className="content-box"> */}
          <div className="title-box" data-aso-delay="500" data-aos="fade-up">
            <h3 style={{
              fontSize: windowWidth < 576 ? "22px" : "38px",
              fontWeight: windowWidth < 576 ? "700" : "800"
            }}>
              <span style={{ color: "white" }}> FUTURE </span>
              <span style={{ color: "white" }}> FIT </span>
              <span style={{ color: "white" }}> INTERNATIONAL </span>
            </h3>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
            <div style={{ flex: 0.2, backgroundColor: GlobalConfig.LogoBlu, height: "3px" }} />
            <p style={{ fontSize: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {/* <Image new width={20} height={20} src="/images/Canada Flag Only.png" alt="image" />&nbsp;&nbsp;&nbsp;&nbsp; */}
              &nbsp; <strong> <span style={{ color: GlobalConfig.LogoOrg }}> Work & Study in </span> </strong>
              <strong> <span style={{ color: GlobalConfig.LogoOrg }}> Canada </span> </strong> &nbsp;
              {/* &nbsp;&nbsp;&nbsp;&nbsp;<Image new width={20} height={20} src="/images/Canada Flag Only.png" alt="image" /> */}
            </p>
            <div style={{ flex: 0.2, backgroundColor: GlobalConfig.LogoBlu, height: "3px" }} />
          </div>

          {windowWidth > 768 ? (
            <h2 style={{ margin: '30px 0px', textAlign: 'justify', textAlign: 'center', color: "#fff", fontWeight: "600", fontSize: '20px' }}>
              We partner with Canadian businesses and academic institutions <br />
              to facilitate the recruitment of international skilled workers and students.
            </h2>
          ) : windowWidth > 576 ? (
            <h2 style={{ margin: '30px 0px', textAlign: 'justify', textAlign: 'center', color: "#fff", fontWeight: "600", fontSize: '18px' }}>
              We partner with Canadian businesses and academic <br />
              institutions to facilitate the recruitment of <br />
              international skilled workers and students.
            </h2>
          ) : windowWidth > 420 ? (
            <h2 style={{ margin: '30px 0px', textAlign: 'justify', textAlign: 'center', color: "#fff", fontWeight: "600", fontSize: '18px' }}>
              We partner with Canadian businesses <br />
              and academic institutions to facilitate < br />
              the recruitment of international <br />
              skilled workers and students.
            </h2>
          ) : (
          <h2 style={{ margin: '30px 0px', textAlign: 'justify', textAlign: 'center', color: "#fff", fontWeight: "600", fontSize: '18px' }}>
            We partner with Canadian businesses and academic institutions to facilitate the recruitment of international skilled workers and students.
          </h2>
          )}

          <VideoPlayer />
          {/* </div> */}
        </div >
      </section >
    </>
  )
};

export default Hero;
