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

            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flex: 1, backgroundColor: GlobalConfig.LogoBlu, height: "3px" }} />
              <p style={{ color: GlobalConfig.LogoOrg, fontSize: '16px', whiteSpace: 'nowrap' }}> &nbsp; <strong>Your Trusted Partner! &nbsp; </strong> </p>
              <div style={{ flex: 1, backgroundColor: GlobalConfig.LogoBlu, height: "3px" }} />
            </div>

            <h2 style={{ marginTop: '2%', marginBottom: '2%', textAlign: 'justify', textAlign: 'center', textShadow: '1px 2px #007DB6', color: "#fff", fontSize: '20px' }} >
              <strong>We work across borders to match skills and ambitions with job and education opportunities in Canada.</strong>
            </h2>

            <div style={{
              padding: '20px 20px 20px 20px', backgroundColor: 'rgba(0, 0, 0, 0)', borderRadius: '10px', display: 'inline-block', marginTop: '10px', width: '1000px', alignContent: 'start'
            }}>
              <VideoPlayer />
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default index;
