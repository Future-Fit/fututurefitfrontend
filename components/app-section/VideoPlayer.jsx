import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import GlobalConfig from "@/Global.config";
import './transition.scss'
const slideInFromRightStyle = {
  animation: 'slideInFromRight 3s ease-out'
};

const VideoPlayer = () => {
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

  const videoRef = useRef(null);

  const frameStyle = {
    boxShadow: '0px 0px 2px 2px rgba(0, 0, 0, 0.3)',
    maxWidth: '477px', // Ensure units are specified
    maxHeight: '590px', // Ensure units are specified
    margin: 'auto',
    // overflow: 'hidden', // Add this to hide any overflow
  };

  const videoStyle = {
    width: '100%',
    height: 'auto', // Change to 'auto' for maintaining aspect ratio
    maxWidth: '477px', // Ensure units are specified
    display: 'block', // This can help remove unwanted gaps
  };

  const isMobile = windowWidth <= 767; // Set your mobile breakpoint here

  return (
    <div className="row" style={{ padding: '10px', borderRadius: '10px' }}>
      {isMobile ? (
        <>
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            {/* <div className="bg-shape"></div> */}
            <div className="slide-item">

              <div className="text" style={{
                textAlign: "center",
                color: '#000',
                marginBottom: '5px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '5px',
                paddingBottom: '10px'
              }}>
                <h2 style={{ fontWeight: 800, color: GlobalConfig.BgrClr, paddingTop: '10px', paddingBottom: '10px' }}>Job Seekers</h2>

                Learn how we connect you with employers <br />
                <div className="btn-box text-center" style={{ marginTop: '20px', marginBottom: '10px' }}>
                  <Link href="/" className="theme-btn btn-style-one bg-blue">
                    <span className="btn-title">Watch Video</span>
                  </Link>
                </div>
              </div>

              <div className="text" style={{
                textAlign: "center",
                color: '#000',
                marginTop: '-1px',
                marginBottom: '5px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '5px',
                paddingBottom: '10px'

              }}>
                <h2 style={{ fontWeight: 800, color: GlobalConfig.BgrClr, paddingTop: '10px', paddingBottom: '10px' }}>Students</h2>
                Learn how to attend Canadian universities <br />
                <div className="btn-box text-center" style={{ marginTop: '20px', marginBottom: '10px' }}>
                  <Link href="/" className="theme-btn btn-style-one bg-blue">
                    <span className="btn-title">Watch Video</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Image Column --> */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <h2 style={{ textAlign: "left", color: 'white', fontSize: '20px', marginTop: '30px', }}>
                  At FFI, We Are ...
                </h2>
                <div style={{ textAlign: "left", color: 'white', marginTop: '-2px', marginBottom: '20px' }}>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 0.3s' }}>
                    * Passionate about enabling great connections
                  </div>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 0.6s' }}>
                    * Experienced in talent placement/management
                  </div>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 0.9s' }}>
                    * Trusted & results-oriented global partner
                  </div>
                </div>
                <h2 style={{ textAlign: "left", color: 'white', fontSize: '20px' }}>
                  And, We Do ...
                </h2>
                <div style={{ textAlign: "left", color: 'white', marginTop: '-2px', marginBottom: '20px' }}>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 0.3s' }}>
                    * Find opportunities for job seekers
                  </div>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 0.6s' }}>
                    * Help students access post secondary education
                  </div>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 0.9s' }}>
                    * Identify skilled workers for Canadian businesses
                  </div>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 1.2s' }}>
                    * Promote Canadian universities/colleges
                  </div>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 1.5s' }}>
                    * Provide travel, visa & resettlement services
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="col-lg-6 col-md-12 col-sm-12">
            {/* <div className="bg-shape"></div> */}
            <div className="slide-item">
              <div className="text" style={{
                textAlign: "center",
                color: '#000',
                marginBottom: '10px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '5px',
                paddingBottom: '10px'
              }}>
                {/* <div className="sec-title text-center"> */}
                <h2 style={{ fontWeight: 800, color: GlobalConfig.BgrClr, paddingTop: '10px', paddingBottom: '10px' }}>Job Seekers</h2>
                {/* </div> */}
                Learn how we connect you with employers <br />
                <div className="btn-box text-center" style={{ marginTop: '20px', marginBottom: '10px' }}>
                  <Link href="/" className="theme-btn btn-style-one bg-blue">
                    <span className="btn-title">Watch Video</span>
                  </Link>
                </div>
              </div>

              <div className="text" style={{
                textAlign: "center",
                color: '#000',
                marginTop: '-1px',
                marginBottom: '10px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '5px',
                paddingBottom: '10px'
              }}>
                <h2 style={{ fontWeight: 800, color: GlobalConfig.BgrClr, paddingTop: '10px', paddingBottom: '10px' }}>Students</h2>
                Learn how to attend Canadian universities<br />
                <div className="btn-box text-center" style={{ marginTop: '20px', marginBottom: '10px' }}>
                  <Link href="/" className="theme-btn btn-style-one bg-blue">
                    <span className="btn-title">Watch Video</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Image Column --> */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-left" style={{ alignItems: 'flex-start' }}>
              <div className="sec-title">
                <h2 style={{ textAlign: "left", color: 'white', fontSize: '20px', marginTop: '10px', paddingBottom: '10px' }}>
                  At FFI, We Are ...
                </h2>

                <div style={{ textAlign: "left", color: 'white', marginTop: '-2px', marginBottom: '20px' }}>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 0.3s' }}>
                    * Passionate about enabling great connections
                  </div>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 0.6s' }}>
                    * Experienced in talent placement/management
                  </div>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 0.9s' }}>
                    * Trusted & results-oriented global partner
                  </div>
                </div>
                <h2 style={{ textAlign: "left", color: 'white', fontSize: '20px', paddingBottom: '10px' }}>
                  And, We Do ...
                </h2>

                <div style={{ textAlign: "left", color: 'white', marginTop: '-2px', marginBottom: '20px' }}>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 0.3s' }}>
                    * Find opportunities for job seekers
                  </div>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 0.6s' }}>
                    * Help students access post secondary education
                  </div>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 0.9s' }}>
                    * Identify skilled workers for Canadian businesses
                  </div>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 1.2s' }}>
                    * Promote Canadian universities/colleges
                  </div>
                  <div style={{ animation: 'slideInFromRight 3s ease-out 1.5s' }}>
                    * Provide travel, visa & resettlement services
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;