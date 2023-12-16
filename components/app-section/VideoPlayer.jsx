import { useEffect, useRef, useState } from "react";

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
    overflow: 'hidden', // Add this to hide any overflow
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
            <div className="slide-item" style={frameStyle}>

              <video
                ref={videoRef}
                src={`/images/VIDEO.mp4?${new Date().getTime()}`}
                controls
                autoPlay
                muted
                style={videoStyle}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* <!-- Image Column --> */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <h2 style={{ textAlign: "left", color: 'white', fontSize: '20px' }}>
                  Who We Are ...
                </h2>
                <div className="text" style={{ textAlign: "left", color: 'white', marginTop: '-2px', marginBottom: '20px'  }}>
                  * Passionate about enabling great connections <br></br>
                  * Experienced global management agency <br></br>
                  * Ecosystem where ambition meets opportunity <br></br>
                </div>
                <h2 style={{ textAlign: "left", color: 'white', fontSize: '20px' }}>
                  What We Do ...
                </h2>
                <div className="text" style={{ textAlign: "left", color: 'white', marginTop: '-2px' }}>
                  * Fulfill business & institutional resource needs <br></br>
                  * Realize dreams for job seekers & students <br></br>
                  * Provide travel, visa & resettlement services <br></br>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="col-lg-6 col-md-12 col-sm-12">
            {/* <div className="bg-shape"></div> */}
            <div className="slide-item" style={frameStyle}>
              <video
                ref={videoRef}
                src={`/images/VIDEO.mp4?${new Date().getTime()}`}
                controls
                autoPlay
                muted
                style={videoStyle}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* <!-- Image Column --> */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-left" style={{ alignItems: 'flex-start' }}>
              <div className="sec-title">
                <h2 style={{textAlign: "left",  color: 'white', fontSize: '20px'  }}>
                  Who We Are ...
                </h2>
                <div className="text" style={{ textAlign: "justify", color: 'white', marginBottom: '20px' }}>
                  * Passionate about enabling great connections <br></br>
                  * Experienced global management agency <br></br>
                  * Ecosystem where ambition meets opportunity <br></br>
                </div>
                <h2 style={{textAlign: "left",  color: 'white', fontSize: '20px'  }}>
                  What We Do ...
                </h2>
                <div className="text" style={{ textAlign: "justify", color: 'white' }}>
                  * Fulfill business & institutional resource needs <br></br>
                  * Realize dreams for job seekers & students <br></br>
                  * Provide travel, visa & resettlement services <br></br>
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