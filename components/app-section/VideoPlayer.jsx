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
  const isTablet = windowWidth <= 767; // Set your tablet breakpoint here

  return (
    <div className="row" style={{ padding: '10px', borderRadius: '10px' }}>
      {/* This is the mobile view */}
      {/* {isMobile ? (
        <>
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="slide-item">
              <div className="text" style={{
                textAlign: "center", color: '#000', marginBottom: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '5px', paddingBottom: '10px'
              }}>
                <h2 style={{
                  fontWeight: 600, color: GlobalConfig.BgrClr1, paddingTop: '10px', paddingBottom: '10px'
                }} >Job Seekers </h2>
                <h2 style={{
                  color: GlobalConfig.Fnt1Clr, fontSize: '18px'
                }} >Learn about great opportunties </h2>
                <div className="btn-box text-center" style={{ color: 'white', marginTop: '20px', marginBottom: '10px' }}>
                  <Link href="/" className="theme-btn btn-style-one bg-blue" style={{ backgroundColor: GlobalConfig.LogoBlu }}>
                    <span className="btn-title"><strong> Watch Video</strong> </span>
                  </Link>
                </div>
              </div>
              <div className="text" style={{
                textAlign: "center", color: '#000', marginBottom: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '5px', paddingBottom: '10px'
              }}>
                <h2 style={{
                  fontWeight: 600, color: GlobalConfig.BgrClr1, paddingTop: '10px', paddingBottom: '10px'
                }} >Students</h2>
                <h2 style={{
                  color: '#5a5a5a', fontSize: '18px'
                }} >Learn about Canadian Universities</h2>
                <div className="btn-box text-center" style={{ marginTop: '20px', marginBottom: '10px' }}>
                  <Link href="/" className="theme-btn btn-style-one bg-blue" style={{ backgroundColor: GlobalConfig.LogoOrg }}>
                    <span className="btn-title"><strong> Watch Video </strong></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <h2 style={{ textAlign: "left", color: GlobalConfig.LogoOrg, fontSize: '20px', marginTop: '30px' }}>
                  Who We Are ...
                </h2>
                <div style={{ textAlign: "left", color: 'white', marginTop: '-2px', marginBottom: '20px' }}>
                  <div> <strong> * Passionate about human connections </strong> </div>
                  <div> <strong> * Experienced in talent management </strong> </div>
                  <div> <strong> * Committed to achieving results </strong> </div>
                </div>
                <h2 style={{ textAlign: "left", color: GlobalConfig.LogoOrg, fontSize: '20px' }}> What We Do ... </h2>
                <div style={{ textAlign: "left", color: 'white', marginTop: '-2px', marginBottom: '20px' }}>
                  <div> <strong> * Match workers with job opportunties </strong> </div>
                  <div> <strong> * Help students with college applications </strong> </div>
                  <div> <strong> * Recruit for Canadian businesses globally </strong> </div>
                  <div> <strong> * Promote Canadian education institutions </strong> </div>
                  <div> <strong> * Services in training, travel, relocation </strong> </div>
                  <div className="btn-box text-center" style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <Link href="/about" className="theme-btn btn-style-one bg-blue" style={{ color: GlobalConfig.LogoBlu, backgroundColor: GlobalConfig.LogoGry1 }}>
                      <span className="btn-title"><strong>More About FFI</strong></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : ( */}
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
                <h2 style={{ fontWeight: 600, color: GlobalConfig.BgrClr1, paddingTop: '10px', paddingBottom: '10px' }}>Job Seekers</h2>
                {/* </div> */}
                <h2 style={{ color: '#5a5a5a', fontSize: '18px' }}>Learn about great opportunties</h2>
                <div className="btn-box text-center" style={{ marginTop: '20px', marginBottom: '10px' }}>
                  <Link href="/" className="theme-btn btn-style-one bg-blue" style={{ backgroundColor: GlobalConfig.LogoBlu }}>
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
                <h2 style={{ fontWeight: 600, color: GlobalConfig.BgrClr1, paddingTop: '10px', paddingBottom: '10px' }}>Students</h2>
                <h2 style={{ color: '#5a5a5a', fontSize: '18px' }}>Learn about Canadian Universities</h2>
                <div className="btn-box text-center" style={{ marginTop: '20px', marginBottom: '10px' }}>
                  <Link href="/about" className="theme-btn btn-style-one bg-blue" style={{ backgroundColor: GlobalConfig.LogoOrg }}>
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
                  We Are ...
                </h2>
                <div style={{ textAlign: "left", color: 'white', marginTop: '-2px', marginBottom: '20px' }}>
                  <div>
                    * Passionate about enabling great connections
                  </div>
                  <div>
                    * Experienced in global talent placement
                  </div>
                  <div>
                    * Committed to achieving results for our clients
                  </div>
                </div>
                <h2 style={{ textAlign: "left", color: 'white', fontSize: '20px', paddingBottom: '10px' }}>
                  We Do ...
                </h2>
                <div style={{ textAlign: "left", color: 'white', marginTop: '-2px', marginBottom: '20px' }}>
                  <div>
                    * Match workers with great job opportunties
                  </div>
                  <div>
                    * Support Canadian businesses recruit globally
                  </div>
                  <div>
                    * Help students get into Canadian universities
                  </div>
                  <div>
                    * Promote Canadian universities/colleges
                  </div>
                  <div>
                    * Provide training, travel & settlement services
                  </div>

                  <div className="btn-box text-center" style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <Link href="/" className="theme-btn btn-style-one bg-blue" style={{ color: GlobalConfig.Fgr1Clr, backgroundColor: GlobalConfig.LogoGry1 }}>
                      <span className="btn-title"><strong>More About FFI</strong></span>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </>
    </div>
  );
};

export default VideoPlayer;