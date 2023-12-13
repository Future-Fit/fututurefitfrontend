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
    maxWidth: '600px', // Adjust this value to fit your header's width
    maxHeight: '600px', // Adjust this value to maintain aspect ratio (16:9 in this case)
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
    <div className="row" style={{ backgroundColor: "#3B578E", padding: '20px' }}>
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
    </div>
  );
};

export default VideoPlayer;
