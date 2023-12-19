"use client"
import { useEffect, useState } from "react";
import HeroSliderGallery from "./HeroSliderGallery";
import VideoPlayer from "@/components/app-section/VideoPlayer";

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

  return (
    isMobile ? (

      <section className="app-section" style={{ background: '#3B578E', paddingTop: '30px', marginTop: '40px', paddingBottom: '0px', height: '80vh' }} >
        <div className="auto-container" style={{ height: '85vh !important' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '0%',
              height: '70vh',
              overflow: 'hidden',
              margin: '0 auto'
            }}
          >
            <section className="banner-section-ten">
              <HeroSliderGallery />

              <div className="auto-container" style={{ height: '60vh' }}>
                <div className="cotnent-box">
                  <div className="title-box" data-aso-delay="500" data-aos="fade-up" style={{ marginTop: '-10px', marginBottom: '0px' }}>

                    <h3 style={{ fontWeight: '600', paddingTop: '0px'/* Other mobile styles */ }}>Welcome to FFI</h3>
                    <h2 style={{ color: "#b2dfdb", fontSize: '18px' }}> Where Ambition Meets Opportunity!</h2>
                    {/* <hr style={{ border: '2px solid red', margin: '10px 0', display: 'block', clear: 'both' }} /> */}

                    <div style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      borderRadius: '10px',
                      display: 'inline-block',
                      alignContent: 'start'
                    }}>
                      <VideoPlayer />
                    </div>

                  </div>
                </div>
              </div>
            </section>
          </div >
        </div >
      </section >
    ) : (
      <section className="app-section" style={{ background: '#3B578E', paddingTop: '0px', marginTop: '80px', paddingBottom: '0px', height: '80vh' }}>
        <div className="auto-container" style={{ height: '85vh !important' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '0%',
              height: '70vh',
              overflow: 'hidden',
              margin: '0 auto'
            }}
          >
            <section className="banner-section-ten">
              <HeroSliderGallery />

              <div className="auto-container" style={{ height: '60vh' }}>
                <div className="cotnent-box">
                  <div className="title-box" data-aso-delay="500" data-aos="fade-up" style={{ marginTop: '-10px', marginBottom: '0px' }}>

                    <h3 style={{ fontWeight: '600', marginTop: '-10px' /* Other desktop styles */ }}>Welcome to Future Fit International</h3>
                    <h2 style={{ color: "#b2dfdb" }}> Where Ambition Meets Opportunity!</h2>

                    <div style={{ borderTop: "2px solid #b2dfdb", marginTop: 4, marginLeft: 500, marginRight: 500 }}></div>

                    <div style={{
                      padding: '20px 20px 20px 20px',
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      borderRadius: '10px',
                      display: 'inline-block',
                      marginTop: '10px',
                      width: '1000px',
                      alignContent: 'start'
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
