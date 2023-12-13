"use client"
import { useEffect, useState } from "react";
import SearchForm3 from "../../common/job-search/SearchForm3";
import JobCategorie4 from "../../job-categories/JobCategorie4";
import HeroSliderGallery from "./HeroSliderGallery";

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

  const isMobile = windowWidth <= 767; // Set your mobile breakpoint here

  return (
    <section className="app-section" style={{ background: '#3B578E', paddingTop: '100px', paddingBottom: '0px', height: '100vh' }}>
      <div className="auto-container" style={{ height: '100vh !important', }}>
        <div
          style={{
            position: 'relative',
            borderRadius: '0%',
            height: '85vh',
            overflow: 'hidden',
            margin: '0 auto',
          }}
        >

          <section className="banner-section-ten">
            <HeroSliderGallery />

            <div className="auto-container" style={{ height: '60vh' }}>
              <div className="cotnent-box">
                <div className="title-box" data-aso-delay="500" data-aos="fade-up" style={{ marginTop: '-10px', marginBottom: '15px' }}>
                  {isMobile ? (
                    <>
                      <h3 style={{ fontWeight: '600', /* Other mobile styles */ }}>Welcome to FFI</h3>
                      <h2 style={{ color: "#b2dfdb", fontSize: '20px' }}> Explore Opportunties, Turn Ambitions into Reality!</h2>

                      <div style={{
                        padding: '20px 20px 20px 20px',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '10px',
                        display: 'inline-block',
                        alignContent: 'start'
                      }}>
                        <h4 style={{
                          color: 'white',
                          textAlign: 'left', // Align text to the left
                          margin: 0, // Remove any default margins
                        }}>
                          At FFI, our passion is enabling individuals, businesses, and institutions make great connections.
                          Our ever-expanding global reach and expertise gives us the ability to provide growing networking and
                          matching opportunities for job seekers, students, businesses and colleges/universities. With years
                          of experience in talent management, international business, education and government services, we are
                          your champions in the pursuit of your aspirations and goals.
                        </h4>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 style={{ fontWeight: '600', marginTop: '100px' /* Other desktop styles */ }}>Welcome to Future Fit International</h3>
                      <h2 style={{ color: "#b2dfdb" }}> Explore Opportunties, Turn Ambitions into Reality!</h2>

                      <div style={{
                        padding: '20px 20px 20px 20px',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '10px',
                        display: 'inline-block',
                        marginTop: '150px',
                        width: '1000px',
                        alignContent: 'start'
                      }}>
                        <h4 style={{
                          color: 'white',
                          textAlign: 'left', // Align text to the left
                          margin: 0, // Remove any default margins
                        }}>
                          At FFI, our passion is enabling individuals, businesses, and institutions make great connections.
                          Our ever-expanding global reach and expertise gives us the ability to provide growing networking and
                          matching opportunities for job seekers, students, businesses and colleges/universities. With years
                          of experience in talent management, international business, education and government services, we are
                          your champions in the pursuit of your aspirations and goals.
                        </h4>
                      </div>
                    </>

                  )}


                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default index;
