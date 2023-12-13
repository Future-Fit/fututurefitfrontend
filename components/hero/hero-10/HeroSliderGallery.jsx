import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

const HeroSliderGallery = () => {
  const sliderRef = useRef(null);
  const videoRef = useRef(null);
  const [videoKey, setVideoKey] = useState(0);
  const [timer, setTimer] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleSlideChange = (currentSlideIndex) => {
    clearTimeout(timer); // Clear any existing timer

    const isCurrentSlideVideo = currentSlideIndex === 0; // Assuming the video is the first slide
    if (!isCurrentSlideVideo) {
      // Set a new timer for image slides
      setTimer(setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      }, 84000)); // 84 seconds for image slides
    }
  };

  // useEffect(() => {
  //   // Event listener for afterChange event
  //   const afterChangeHandler = (event, slick, currentSlide) => {
  //     handleSlideChange(currentSlide);
  //   };

  //   if (sliderRef.current) {
  //     sliderRef.current.innerSlider.on('afterChange', afterChangeHandler);
  //   }

  //   return () => {
  //     clearTimeout(timer);
  //     if (sliderRef.current) {
  //       sliderRef.current.innerSlider.removeListener('afterChange', afterChangeHandler);
  //     }
  //   };
  // }, [timer]);

  function CustomArrow(props) {
    const { className, onClick, type } = props;
    const handleClick = () => {
      onClick(); // Original click handler
      const currentSlideIndex = sliderRef.current?.innerSlider?.state?.currentSlide;
      handleSlideChange(currentSlideIndex); // Handle the slide change on manual navigation
    };

    const iconClass = type === 'next' ? 'fa fa-arrow-right' : 'fa fa-arrow-left';
    return (
      <button className={`slick-arrow ${className}`} onClick={handleClick}>
        <span className={iconClass}></span>
      </button>
    );
  }

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    afterChange: handleSlideChange, // Using the afterChange prop
    nextArrow: <CustomArrow className="slick-next" type="next" />,
    prevArrow: <CustomArrow className="slick-prev" type="prev" />,
    afterChange: (currentSlide) => {
      if (currentSlide === 0) { // Assuming the video is the first slide
        setVideoKey(prevKey => prevKey + 1); // Update key to force reload
      }
    }
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(59, 78, 120, 0.7)',
    pointerEvents: 'none',
    zIndex: 1,
  };

  return (
    <div className="banner-carousel arrow-center-between arrow-rounded hide-arrow-1024">
      <Slider {...settings} ref={sliderRef}>
        <div className="slide-item">
          <video
            key={videoKey}
            ref={videoRef}
            src={`/images/VIDEO.mp4?${new Date().getTime()}`} 
            controls
            autoPlay
            muted={isMuted}
          >
            Your browser does not support the video tag.
          </video>
          <button onClick={toggleMute} style={{ position: 'absolute', zIndex: 2 }}>
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
        </div>
        {/* Add additional slides as needed */}
        <div className="slide-item bg-image image-1" style={overlayStyle}></div>
        <div className="slide-item bg-image image-2">
          <div style={overlayStyle}></div>
        </div>
        <div className="slide-item bg-image image-3">
          <div style={overlayStyle}></div>
        </div>
        <div className="slide-item bg-image image-4">
          <div style={overlayStyle}></div>
        </div>
        <div className="slide-item bg-image image-5">
          <div style={overlayStyle}></div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSliderGallery;



// "use client"
// import React, { useEffect, useRef, useState } from 'react';
// import Slider from 'react-slick';

// const HeroSliderGallery = () => {

//   const sliderRef = useRef(null);
//   const videoRef = useRef(null); // Ref for the video element
//   const [videoKey, setVideoKey] = useState(0); // State to force video reload
//   const [isVideoSlide, setIsVideoSlide] = useState(false); // State to track if current slide is a video

//   useEffect(() => {
//     const handleVideoEnd = () => {
//       if (videoRef.current) {
//         videoRef.current.currentTime = 0; // Reset video to start
//       }
//       if (sliderRef.current) {
//         sliderRef.current.slickNext();
//       }
//     };

//     const videoElement = videoRef.current;
//     if (videoElement) {
//       videoElement.addEventListener('ended', handleVideoEnd);
//     }

//     return () => {
//       if (videoElement) {
//         videoElement.removeEventListener('ended', handleVideoEnd);
//       }
//     };
//   }, [videoKey]);

//   useEffect(() => {
//     let timer;

//     const handleSlideChange = () => {
//       if (sliderRef.current) {
//         const currentSlideIndex = sliderRef.current.innerSlider.state.currentSlide;
//         const totalSlides = sliderRef.current.innerSlider.state.slideCount;
//         const currentSlide = sliderRef.current.innerSlider.track.childNodes[currentSlideIndex];

//         const isCurrentSlideVideo = currentSlide.querySelector('video') !== null;
//         setIsVideoSlide(isCurrentSlideVideo);

//         if (!isCurrentSlideVideo) {
//           // Set timer for image slides
//           timer = setTimeout(() => {
//             if (currentSlideIndex < totalSlides - 1) {
//               sliderRef.current.slickNext();
//             }
//           }, 84000); // 84 seconds for image slides
//         }
//       }
//     };

//     if (sliderRef.current) {
//       sliderRef.current.innerSlider.on('afterChange', handleSlideChange);
//     }

//     return () => {
//       if (timer) clearTimeout(timer);
//       if (sliderRef.current) {
//         sliderRef.current.innerSlider.removeListener('afterChange', handleSlideChange);
//       }
//     };
//   }, []);

//   const resetAndPlayVideo = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   const settings = {
//     dots: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     fade: true,
//   };

//   const overlayStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(59, 78, 120, 0.7)',
//     pointerEvents: 'none',
//     zIndex: 1,
//   };

//   function CustomArrow(props) {
//     const { className, onClick, type } = props;
//     const iconClass = type === 'next' ? 'fa fa-arrow-right' : 'fa fa-arrow-left';

//     return (
//       <button className={`slick-arrow ${className}`} onClick={onClick}>
//         <span className={iconClass}></span>
//       </button>
//     );
//   }

//   return (
//     <div className="banner-carousel arrow-center-between arrow-rounded hide-arrow-1024">
//       <Slider {...settings}
//         nextArrow={<CustomArrow className="slick-next" type="next" />}
//         prevArrow={<CustomArrow className="slick-prev" type="prev" />}
//         afterChange={(currentSlide) => {
//           if (currentSlide === 0) { // Assuming the video is the first slide
//             resetAndPlayVideo();
//           }
//         }}>

//         <div className="slide-item">
//           <video
//             muted
//             key={videoKey}
//             ref={videoRef}
//             src={`/images/VIDEO.mp4?${new Date().getTime()}`} // Cache busting
//             controls
//             autoPlay
//             onEnded={() => setVideoKey(prevKey => prevKey + 1)} // Increment key to force reload
//           >
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className="slide-item bg-image image-1">
//           <div style={overlayStyle}></div>
//         </div>
//         <div className="slide-item bg-image image-2">
//           <div style={overlayStyle}></div>
//         </div>
//         <div className="slide-item bg-image image-3">
//           <div style={overlayStyle}></div>
//         </div>
//         <div className="slide-item bg-image image-4">
//           <div style={overlayStyle}></div>
//         </div>
//         <div className="slide-item bg-image image-5">
//           <div style={overlayStyle}></div>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default HeroSliderGallery;

// // 'use client'

// // import Slider from "react-slick";

// // const HeroSliderGallery = () => {
// //   const settings = {
// //     dots: true,
// //     speed: 5000,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     fade: true,
// //   };

// //   function Arrow(props) {
// //     let className =
// //       props.type === "next"
// //         ? "slick-arrow slick-next"
// //         : "slick-arrow slick-prev";
// //     className += " arrow";
// //     const char =
// //       props.type === "next" ? (
// //         <>
// //           <span className="fa fa-arrow-right"></span>
// //         </>
// //       ) : (
// //         <>
// //           <span className="fa fa-arrow-left"></span>
// //         </>
// //       );
// //     return (
// //       <button className={className} onClick={props.onClick}>
// //         {char}
// //       </button>
// //     );
// //   }

// //   const overlayStyle = {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     width: '100%',
// //     height: '100vh',
// //     backgroundColor: 'rgba(59, 78, 120, 0.7)',
// //   };

// //   return (
// //     <div className="banner-carousel arrow-center-between arrow-rounded hide-arrow-1024">
// //       <Slider
// //         {...settings}
// //         arrows={true}
// //         nextArrow={<Arrow type="next" />}
// //         prevArrow={<Arrow type="prev" />}
// //       >
// //         <div className="slide-item bg-image image-1">
// //           <div style={overlayStyle}></div>
// //         </div>
// //         <div className="slide-item bg-image image-2">
// //           <div style={overlayStyle}></div>
// //         </div>
// //         <div className="slide-item bg-image image-3">
// //           <div style={overlayStyle}></div>
// //         </div>
// //         <div className="slide-item bg-image image-4">
// //           <div style={overlayStyle}></div>
// //         </div>
// //         <div className="slide-item bg-image image-5">
// //           <div style={overlayStyle}></div>
// //         </div>
// //       </Slider>
// //     </div>
// //   );
// // };

// // export default HeroSliderGallery;
