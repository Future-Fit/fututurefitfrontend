"use client"
import { useEffect, useState } from "react";
import SearchForm3 from "../../common/job-search/SearchForm3";
import JobCategorie4 from "../../job-categories/JobCategorie4";
import HeroSliderGallery from "./HeroSliderGallery";

const index = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
    <section className="app-section" style={{ background: '#3B578E', paddingTop: '100px', paddingBottom: '40px' }}>
      <div className="auto-container" style={{ position: 'relative' }}>
        <div
          style={{
            position: 'relative',
            borderRadius: '0%',
            height: '100vh',
            overflow: 'hidden',
            margin: '0 auto',
            padding: '20px',
          }}
        >

          <section className="banner-section-ten">
            <HeroSliderGallery />

            <div className="auto-container">
              <div className="cotnent-box">
                <div className="title-box" data-aso-delay="500" data-aos="fade-up" style={{ marginTop: '-10px', marginBottom: '15px' }}>
                  {isMobile ? (
                    <h3 style={{ fontWeight: '600', /* Other mobile styles */ }}>Welcome to FFI</h3>
                  ) : (
                    <h3 style={{ fontWeight: '600', marginTop: '100px' /* Other desktop styles */ }}>Welcome to Future Fit International</h3>
                  )}
                  <h2 style={{ color: "#b2dfdb" }}> Explore Opportunties, Turn Ambitions into Reality!</h2>
                  <br />
                  <h4 style={{ color: "#fff" }}> What Are You Interested in? </h4>
                </div>

                <div className="job-search-form" data-aos-delay="700" data-aos="fade-up">
                  <SearchForm3 />
                </div>

                <div className="top-features">
                  <div className="row" data-aos-delay="700" data-aos="fade-up">
                    <JobCategorie4 />
                  </div>
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
