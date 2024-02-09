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

  const isMobile = windowWidth <= 767;
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
    /* This is the mobile version */
    isMobile ? (
      <section className="app-section" style={{
        paddingBottom: '0px', minHeight: '100vh',
        height: 'fit-content', backgroundColor: GlobalConfig.BgHeader
      }} >
        <div
          style={{
            position: 'relative', borderRadius: '0%', height: 'fit-content', margin: '0 auto'
          }}
        >
          <section className="banner-section-ten " style={{ height: 'fit-content' }}>
            <HeroSliderGallery />
            <div className="auto-container">
              <div className="cotnent-box">
                <div className="title-box" data-aso-delay="500" data-aos="fade-up"
                  style={{ marginTop: '-10px', marginBottom: '0px' }}>
                  <h3 style={{ fontWeight: '600', paddingTop: '0px'/* Other mobile styles */ }}
                  ><span style={{ color: GlobalConfig.LogoBlu }}
                  >Future</span> <span style={{ color: GlobalConfig.LogoOrg }}
                  >Fit</span> <span style={{ color: GlobalConfig.LogoGry1 }}
                  >International</span> </h3>
                  <div
                    style={{ borderTop: "2px solid #fff", marginTop: 4, marginLeft: 80, marginRight: 80 }}>
                  </div>
                  {<h2 id="fadeInTitle" style={{
                    color: "#fff", fontSize: '16px', whiteSpace: 'nowrap',
                    overflow: 'hidden', animation: 'slideInFromRight 2s ease-out 0s'
                  }} > Your Trusted Partner! </h2>}
                  {<h2 style={{
                    textAlign: 'justify', textAlign: 'center', textShadow: '1px 1px #007DB6',
                    marginTop: '20px', marginBottom: '-20px', color: "#fff", fontSize: '24px', whiteSpace: 'wrap', overflow: 'hidden'
                  }} > <strong>We work across borders to match skills and ambitions with job and education opportunities in Canada</strong>.</h2>}
                  <div
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(0, 0, 0, 0)',
                      borderRadius: '10px', display: 'inline-block', alignContent: 'start'
                    }}>
                    <VideoPlayer />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div >
      </section >
    ) : (
      /* This is the desktop version */
      <section className="app-section" style={{ marginTop: '50px', paddingBottom: '0px', height: '80vh' }}>
        <div >
          <div style={{ position: 'relative', borderRadius: '0%', height: '65vh' }} >
            <section className="banner-section-ten">
              <HeroSliderGallery />
              <div className="auto-container" style={{ height: '60vh' }}>
                <div className="cotnent-box">
                  <div className="title-box" data-aso-delay="500" data-aos="fade-up"
                    style={{ marginTop: '-10px', marginBottom: '0px' }}>
                    <h3 style={{ fontWeight: '600', marginTop: '-10px' }}>
                      <span style={{ color: GlobalConfig.LogoBlu }}>
                        Future</span> <span style={{ color: GlobalConfig.LogoOrg }}>
                        Fit</span> <span style={{ color: GlobalConfig.LogoGry1 }}>
                        International</span>
                    </h3>
                    <div style={{ borderTop: "2px solid #fff", marginTop: 4, marginLeft: 500, marginRight: 500 }}></div>
                    <h2 id="fadeInTitle" style={{
                      color: "#fff", fontSize: '16px', whiteSpace: 'nowrap',
                      overflow: 'hidden', animation: 'slideInFromRight 2s ease-out 0s'
                    }}>
                      Your Trusted Partner!
                    </h2>
                    {<h2 style={{
                      textAlign: 'center', textShadow: '1px 1px #007DB6',
                      marginTop: '15px', marginBottom: '-15px', color: "#fff", fontSize: '24px', whiteSpace: 'nowrap', overflow: 'hidden'
                    }} > <strong>We work across borders to match skills and ambitions with job and education opportunities in Canada.</strong></h2>}
                    <div style={{
                      padding: '20px 20px 20px 20px', backgroundColor: 'rgba(0, 0, 0, 0)', borderRadius: '10px',
                      display: 'inline-block', marginTop: '10px', width: '1000px', alignContent: 'start'
                    }}>
                      <VideoPlayer />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    )
  )
};

export default index;
