
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
  

  return (
    <div style={{ display: "flex", flexWrap: "wrap", flexDirection: windowWidth < 768 ? "column" : "row" }}>
      {/* first column */}
      <div style={{ flex: "1", maxWidth: windowWidth < 768 ? "90%" : "50%", margin: windowWidth < 768 ? "40px" : "0" }}>
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
            <div className="sec-title text-center">
              <h2 style={{ fontWeight: 600, color: GlobalConfig.BgrClr1, paddingTop: '10px', paddingBottom: '10px' }}>Job Seekers</h2>
            </div>
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

      {/* second column */}

      <div style={{ flex: "1", maxWidth: windowWidth < 768 ? "100%" : "50%", marginTop: windowWidth < 768 ? "20px" : "0" }}>
        <div className="inner-column" data-aos="fade-left" style={{ alignItems: 'flex-start', width: 'fit-content', paddingLeft: '20px' }}>
          <div className="sec-title">
            <h2 style={{ textAlign: "left", color: GlobalConfig.LogoOrg, fontSize: '20px', marginTop: '10px', paddingBottom: '10px', width: 'fit-content' }}>
              Who We Are ...
            </h2>
            <div style={{ textAlign: "left", color: 'white', marginTop: '-2px', marginBottom: '20px' }}>
              <div> <strong> <span>&nbsp;</span>• Passionate about human connections </strong> </div>
              <div> <strong> <span>&nbsp;</span>• Experienced in global talent management </strong> </div>
              <div> <strong> <span>&nbsp;</span>• Committed to achieving results </strong> </div>
            </div>
            <h2 style={{ textAlign: "left", color: GlobalConfig.LogoOrg, fontSize: '20px', paddingBottom: '10px' }}>
              What We Do ...
            </h2>
            <div style={{ textAlign: "left", color: 'white', marginTop: '-2px', marginBottom: '20px', width: 'fit-content' }}>
              <div> <strong> <span>&nbsp;</span>• Find new opportunities for job seekers </strong> </div>
              <div> <strong> <span>&nbsp;</span>• Help students with college applications </strong> </div>
              <div> <strong> <span>&nbsp;</span>• Recruit for Canadian businesses globally </strong> </div>
              <div> <strong> <span>&nbsp;</span>• Promote Canadian higher education  </strong> </div>
              <div> <strong> <span>&nbsp;</span>• Services in training, travel, relocation </strong> </div>
              <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="/" className="theme-btn btn-style-one bg-blue" style={{ color: GlobalConfig.Fgr1Clr, backgroundColor: GlobalConfig.LogoGry1 }}>
                  <span className="btn-title"><strong>More About FFI</strong></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default VideoPlayer;