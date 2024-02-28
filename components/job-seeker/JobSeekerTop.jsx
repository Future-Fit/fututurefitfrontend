'use client'
import GlobalConfig from "@/Global.config";
import Image from "next/image";
import Slider from "react-slick";

const JobSeekerTop = () => {
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
          <div className="vision-mission-block">
            <div className="inner-box" style={{ padding: "0% 3%" }}>
            </div>
          </div>
    </>
  );
};

export default JobSeekerTop;
