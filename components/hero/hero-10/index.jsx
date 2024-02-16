"use client"
import Link from "next/link";
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
          <div className="content-box">
            <div className="title-box" data-aso-delay="500" data-aos="fade-up">
              <h3 style={{ fontWeight: '600' }}>
                <span style={{ color: GlobalConfig.LogoGry1 }}> Future </span>
                <span style={{ color: GlobalConfig.LogoGry1 }}> Fit </span>
                <span style={{ color: GlobalConfig.LogoGry1 }}> International </span>
              </h3>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
              <div style={{ flex: 0.15, backgroundColor: GlobalConfig.LogoBlu, height: "3px" }} />
              <p style={{ color: GlobalConfig.LogoOrg, fontSize: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}> &nbsp; <strong>Your Trusted Partner! &nbsp; </strong> </p>
              <div style={{ flex: 0.15, backgroundColor: GlobalConfig.LogoBlu, height: "3px" }} />
            </div>

            <h2 style={{ marginTop: '2%', marginBottom: '2%', textAlign: 'justify', textAlign: 'center', textShadow: '1px 2px #007DB6', color: "#fff", fontSize: '20px' }} >
              <strong>We work across borders to find Canadian job and higher education opportunities for skilled workers and ambitious students everywhere.</strong>
            </h2>
            <VideoPlayer />
          </div>
        </div>
      </section>
    </>
  )
};

export default index;
