"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import HeroSliderGallery from "./HeroSliderGallery";
import VideoPlayer from "@/components/app-section/VideoPlayer";
import GlobalConfig from "@/Global.config";
import '../../app-section/transition.scss'
import LoginPopup from "@/components/common/form/login/LoginPopup";
import DashboardHeader from "@/components/header/DashboardEmployerHeader";
import DashboardCandidatesHeader from "@/components/header/DashboardCandidatesHeader";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import MobileMenu from "@/components/header/MobileMenu";
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

  const isMobile = windowWidth <= 767;
  const isTablet = windowWidth <= 767;

  const [userType, setUserType] = useState();

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(JSON.parse(storedUserType));
    }
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
      {/* <section className="app-section col-lg-4 col-md-6 col-sm-12 col-lg-12 col-md-12" style={{ height: '80vh' }}> */}
        <div style={{ position: 'relative', borderRadius: '0%', height: '65vh' }} >
          <section className="banner-section-ten">
            <HeroSliderGallery />
            <div className="auto-container" style={{ height: '60vh' }}>
              <div className="cotnent-box">
                <div className="title-box" data-aso-delay="500" data-aos="fade-up" style={{ marginTop: '-10px', marginBottom: '0px' }}>
                  <h3 style={{ fontWeight: '600', marginTop: '-10px' }}>
                    <span style={{ color: GlobalConfig.LogoGry1 }}> Future </span>
                    <span style={{ color: GlobalConfig.LogoGry1 }}> Fit </span>
                    <span style={{ color: GlobalConfig.LogoGry1 }}> International </span>
                  </h3>
                  <div style={{ borderTop: "2px solid", borderColor: GlobalConfig.LogoBlu, marginLeft: 500, marginRight: 500 }}></div>
                  <h2 id="fadeInTitle" style={{
                    color: GlobalConfig.LogoGry1, fontSize: '16px', whiteSpace: 'nowrap', overflow: 'hidden', animation: 'slideInFromRight 2s ease-out 0s'
                  }} > <strong> Your Trusted Partner! </strong>
                  </h2>
                  <h2 style={{
                    textAlign: 'justify', textAlign: 'center', textShadow: '1px 2px #007DB6', marginTop: '15px', marginBottom: '-15px', color: "#fff", fontSize: '24px', whiteSpace: 'nowrap', overflow: 'hidden'
                  }} > <strong>We work across borders to match skills and ambitions with job and education opportunities in Canada.</strong></h2>
                  <div style={{
                    padding: '20px 20px 20px 20px', backgroundColor: 'rgba(0, 0, 0, 0)', borderRadius: '10px', display: 'inline-block', marginTop: '10px', width: '1000px', alignContent: 'start'
                  }}> <VideoPlayer />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      {/* </section> */}
    </>
  )
};

export default index;
