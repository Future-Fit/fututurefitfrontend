

'use client'

import Image from "next/image";
import testimonilaContent from "../../data/testimonial";
import Slider from "react-slick";

const Testimonial2 = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  return (
    <>
      <section className="testimonial-section-two">
        <div className="container-fluid">
          <div className="sec-title text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Future Fit International
            </div>
          </div>
          {/* <!-- Sec Title --> */}

          <div className="carousel-outer" data-aos="fade-up">
            <div className="testimonial-carousel"></div>
            <Slider {...settings} arrows={false}>
              {testimonilaContent.slice(3, 6).map((item) => (
                <div className="testimonial-block-two" key={item.id}>
                  <div className="inner-box">
                    <h4 className="title">{item.feedback}</h4>
                    <div className="text">{item.feedbackText}</div>
                    <div className="info-box">
                      <h4 className="name">{item.name}</h4>
                      <span className="designation">{item.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

          </div>
          {/* <!-- Testimonial Carousel --> */}
        </div>
      </section>
    </>
  );
};

export default Testimonial2;
