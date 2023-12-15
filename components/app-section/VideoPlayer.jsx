import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const frameStyle = {
    border: '4px solid #fff',
    boxShadow: '0px 0px 8px 2px rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
    padding: '10px',
    maxWidth: '477', // Adjust this value to fit your header's width
    maxHeight: '556', // Adjust this value to maintain aspect ratio (16:9 in this case)
    margin: 'auto', // Center the frame within its container
  };

  const videoStyle = {
    width: '100%',
    height: 'auto', // Maintain aspect ratio
    borderRadius: '6px',
  };

  const buttonStyle = {
    position: 'absolute',
    zIndex: 2,
    bottom: '10px',
    left: '10px',
    padding: '5px 10px',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div className="row" style={{ padding: '20px', borderRadius: '10px' }}>

      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        {/* <div className="bg-shape"></div> */}
        <div className="slide-item" style={frameStyle}>
          <video
            ref={videoRef}
            src={`/images/VIDEO.mp4?${new Date().getTime()}`}
            controls
            autoPlay
            muted={isMuted}
            style={videoStyle}
          >
            Your browser does not support the video tag.
          </video>
          {/* <button onClick={toggleMute} style={buttonStyle}>
          {isMuted ? 'Unmute' : 'Mute'}
        </button> */}
        </div>
        {/* <figure className="image" data-aos="fade-right">
          <Image
            width={477}
            height={556}
            src="/images/resource/banner-img-3.png"
            alt="About"
          />
        </figure> */}
      </div>
      {/* <!-- Image Column --> */}

      <div className="content-column col-lg-6 col-md-12 col-sm-12">
        <div className="inner-column" data-aos="fade-left">
          <div className="sec-title">
            <h2 style={{ color: 'white' }}>
              Who We Are...
            </h2>
            <div className="text" style={{ textAlign: "justify", color: 'white' }}>
              * Passionate about enabling great connections <br></br>
              * Experts in talent management and international business <br></br>
              * A one-stop network of global opportunties and talent profiles <br></br>
            </div>
            <h2 style={{ color: 'white' }}>
              What We Do...
            </h2>
            <div className="text" style={{ textAlign: "justify", color: 'white' }}>
              * Fulfill the needs of businesses/institutions from a global talent pool <br></br>
              * Help realize the dreams of career/job seekers and students <br></br>
              * Provide travel, visa and resettlement related services <br></br>
              * Provide a unified global talent and opportunity matching ecosystem <br></br>
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}
      {/* <div className="slide-item" style={frameStyle}>
        <video
          ref={videoRef}
          src={`/images/VIDEO.mp4?${new Date().getTime()}`}
          controls
          autoPlay
          muted={isMuted}
          style={videoStyle}
        >
          Your browser does not support the video tag.
        </video>
        <button onClick={toggleMute} style={buttonStyle}>
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
      </div> */}
    </div>
  );
};

export default VideoPlayer;


// "use Client"

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// const VideoPlayer = () => {
//   const videoRef = useRef(null);

//   const [isMuted, setIsMuted] = useState(true);
//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//   };

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.muted = isMuted;
//     }
//   }, [isMuted]);

//   return (
//     <div className="row" style={{ backgroundColor: "#3B578E" }}>

//       <div className="slide-item">
//         <video
//           src={`/images/VIDEO.mp4?${new Date().getTime()}`}
//           controls
//           autoPlay
//           muted={isMuted}
//         >
//           Your browser does not support the video tag.
//         </video>
//         <button onClick={toggleMute} style={{ position: 'absolute', zIndex: 2 }}>
//           {isMuted ? 'Unmute' : 'Mute'}
//         </button>
//       </div>
//       {/* <div className="image-column col-lg-6 col-md-12 col-sm-12">
//         <div className="bg-shape"></div>
//         <figure className="image" data-aos="fade-right">
//           <Image
//             width={477}
//             height={556}
//             src="/images/resource/banner-img-3.png"
//             alt="About"
//           />
//         </figure>
//       </div>
//       {/* <!-- Image Column -->

//       <div className="content-column col-lg-6 col-md-12 col-sm-12">
//         <div className="inner-column" data-aos="fade-left">
//           <div className="sec-title">
//             <h2 style={{color:'white'}}>
//               About US
//             </h2>
//             <div className="text" style={{textAlign:"justify", color:'white'}}>
//             Details About FFI
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End .col */}
//     </div>
//   );
// };

// export default VideoPlayer;
