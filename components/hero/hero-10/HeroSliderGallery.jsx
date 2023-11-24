
'use client'

import Slider from "react-slick";

const HeroSliderGallery = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  // custom navigation
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
    backgroundColor: 'rgba(70, 130, 180, 0.5)', // Adjust alpha (last value) for transparency
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
        {/* <div className="slide-item bg-image image-2">
          <div style={overlayStyle}></div>

        </div> */}
      </Slider>
    </div>
  );
};

export default HeroSliderGallery;
