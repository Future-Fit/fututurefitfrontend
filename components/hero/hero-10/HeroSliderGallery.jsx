
'use client'

import Slider from "react-slick";

const HeroSliderGallery = () => {
  const settings = {
    dots: false,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  function Arrow(props) {
    let className =
      props.type === "next"
        ? "slick-arrow slick-next"
        : "slick-arrow slick-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <span className="fa fa-arrow-right"></span>
        </>
      ) : (
        <>
          <span className="fa fa-arrow-left"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(59, 78, 120, 0.7)',
  };

  return (
    <div className="banner-carousel arrow-center-between arrow-rounded hide-arrow-1024">
      <Slider
        {...settings}
        arrows={true}
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
      >
        <div className="slide-item bg-image image-1">
          <div style={overlayStyle}></div>
        </div>
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
