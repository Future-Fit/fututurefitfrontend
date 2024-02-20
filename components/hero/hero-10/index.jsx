"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeroSliderGallery from "./HeroSliderGallery";
import VideoPlayer from "@/components/app-section/VideoPlayer";
import GlobalConfig from "@/Global.config";
import '../../app-section/transition.scss'
const index = () => {
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
            <h3 style={{ fontWeight: '600' }}>
              <span style={{ color: GlobalConfig.LogoBlu }}> FUTURE </span>
              <span style={{ color: GlobalConfig.LogoOrg }}> FIT </span>
              <span style={{ fontWeight: "400", color: GlobalConfig.LogoGry1 }}> INTERNATIONAL </span>
            </h3>
          </div>

          {/* <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
            <div style={{ flex: 0, backgroundColor: GlobalConfig.LogoBlu, height: "3px" }} /> */}
            <p style={{
              color: GlobalConfig.LogoOrg, fontSize: '16px', whiteSpace: 'nowrap', overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              <Image new width={20} height={20} src="/images/Canada Flag Only.png" alt="image" />&nbsp;&nbsp;&nbsp;&nbsp;
              <strong> <span style={{ color: "black" }}> Work & Learn in </span> </strong>
              <strong> <span style={{ color: "black" }}> Canada </span> </strong>
              &nbsp;&nbsp;&nbsp;&nbsp;<Image new width={20} height={20} src="/images/Canada Flag Only.png" alt="image" />
            </p>
            {/* <div style={{ flex: 0, backgroundColor: GlobalConfig.LogoBlu, height: "3px" }} />
          </div> */}

          <h2 style={{
            marginTop: '30px', marginBottom: '30px', textAlign: 'justify', textAlign: 'center',
            textShadow: '1px 2px #007DB6', color: "#fff", fontSize: '20px'
          }} >
            <strong>We work across borders to find Canadian job and higher education opportunities for skilled workers and ambitious students everywhere.</strong>
          </h2>
          <VideoPlayer />
          {/* </div> */}
        </div>
      </section>
    </>
  )
};

export default index;
