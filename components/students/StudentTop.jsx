'use client'
import Slider from "react-slick";

const StudentTop = () => {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    center: true,
  };

  return (
    <>
      <Slider {...settings} autoplaySpeed={10000} fade={true} arrows={false}>
      </Slider >
    </>
  );
};

export default StudentTop;
