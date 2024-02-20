'use client'
import Image from "next/image";
import aboutContent from "../../data/about";
import Slider from "react-slick";

const About = () => {
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
      <Slider {...settings} arrows={false}>
        {aboutContent.slice(0, 4).map((item) => (
          <div className="vision-mission-block" key={item.id}>
            <div className="inner-box">
              <h4 className="title">{item.feedback}</h4>
              <div className="text">{item.feedbackText}</div>
              {/* <div className="info-box">
                <div className="thumb">
                  <Image
                    width={50}
                    height={50}
                    layout="responsive"
                    src={item.avatar}
                    alt="testimonial"
                  />
                </div>
                <h4 className="name">{item.name}</h4>
                <span className="designation">{item.designation}</span>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
