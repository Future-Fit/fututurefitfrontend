import { useEffect, useState } from "react";
import Link from "next/link";
import GlobalConfig from "@/Global.config";
import './transition.scss';
import dynamic from 'next/dynamic';

const VideoPlayer = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const VideoModal = dynamic(() => import('./VideoModal'), { ssr: false });
  const openModal = (url) => {
    console.log("Video URL:", url);
    setVideoUrl(url);
    setShowModal(true);
  };


  const closeModal = () => {
    setShowModal(false);
    setVideoUrl('');
  };

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
    /* first column */
    /* large screens and tablets (>=768 uses two columns; <768 uses only one column*/
    < div style={{ display: "flex", flexWrap: "wrap", flexDirection: windowWidth < 768 ? "column" : "row" }}>
      <div style={{ flex: '1', maxWidth: windowWidth < 768 ? '100%' : '50%' }}>
        <div style={{ display: "flex", justifyContent: windowWidth < 768 ? "center" : "flex-end" }}>
          <div className="text" style={{
            width: "400px",
            textAlign: 'center', color: '#000', marginBottom: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '5px', paddingBottom: '10px'
          }}>
            <div className="sec-title text-center">
              <h2 style={{ fontWeight: 600, color: GlobalConfig.BgrClr1, paddingTop: '10px', paddingBottom: '10px' }}>Job Seekers</h2>
            </div>
            <h2 style={{ color: '#5a5a5a', fontSize: '18px' }}>Learn how FFI can help you</h2>
            <div className="btn-box text-center" style={{ marginTop: '20px', marginBottom: '10px' }}>
              <button className="theme-btn btn-style-one bg-blue" style={{ backgroundColor: GlobalConfig.LogoBlu }}
                onClick={() => openModal('../videos/JobSeekerVideo.mp4')}>
                <span className="btn-title">Watch Video</span>
              </button>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: windowWidth < 768 ? "center" : "flex-end" }}>
          <div className="text"
            style={{
              width: "400px",
              textAlign: 'center',
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
              <button
                className="theme-btn btn-style-one bg-blue"
                style={{ backgroundColor: GlobalConfig.LogoOrg }}
                onClick={() => openModal('../videos/StudentVideo.mp4')}>
                <span className="btn-title">Watch Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* second column */}
      <div style={{ display: "flex", justifyContent: windowWidth < 768 ? "center" : "flex-start", flex: "1", maxWidth: windowWidth < 768 ? "100%" : "50%", marginTop: windowWidth < 768 ? "20px" : "0" }}>
        <div className="inner-column" data-aos="fade-left" style={{ alignItems: 'flex-start', marginLeft: windowWidth < 768 ? "0" : "30px", width: 'fit-content', justifyContent: 'center' }}>
          <div className="sec-title">
            <h2 style={{ textAlign: "left", color: GlobalConfig.LogoOrg, fontSize: '20px', marginTop: '10px', paddingBottom: '10px', width: 'fit-content' }}>
              Who We Are ...
            </h2>
            <div style={{ fontWeight: "500", textAlign: "left", color: 'white', marginTop: '-2px', marginBottom: '20px' }}>
              <div> <span>&nbsp;</span>• Passionate about human connections  </div>
              <div> <span>&nbsp;</span>• Experienced in global talent management  </div>
              <div> <span>&nbsp;</span>• Committed to achieving results </div>
            </div>
            <h2 style={{ textAlign: "left", color: GlobalConfig.LogoOrg, fontSize: '20px', paddingBottom: '10px' }}>
              What We Do ...
            </h2>
            <div style={{ fontWeight: "500", textAlign: "left", color: 'white', marginTop: '-2px', marginBottom: '20px', width: 'fit-content' }}>
              <div> <span>&nbsp;</span>• Find new opportunities for job seekers </div>
              <div> <span>&nbsp;</span>• Help students with college applications </div>
              <div> <span>&nbsp;</span>• Recruit for Canadian businesses globally </div>
              <div> <span>&nbsp;</span>• Promote Canadian higher education  </div>
              <div> <span>&nbsp;</span>• Services in training, travel, relocation  </div>
              <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                <Link href="/about" className="theme-btn btn-style-one bg-blue" style={{ color: GlobalConfig.Fgr1Clr, backgroundColor: GlobalConfig.LogoGry1 }}>
                  <span className="btn-title"><strong>More About FFI</strong></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal showModal={showModal} videoUrl={videoUrl} closeModal={closeModal}/>
    </div >
  );
};

export default VideoPlayer;
