import Image from "next/image";
import Link from "next/link";

const AppSectionAbout = () => {
  return (
    <div className="row">
      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <div className="bg-shape"></div>
        <figure className="image" data-aos="fade-right">
          <Image
            width={477}
            height={556}
            src="/images/resource/banner-img-3.png"
            alt="About"
          />
        </figure>
      </div>
      {/* <!-- Image Column --> */}

      <div className="content-column col-lg-6 col-md-12 col-sm-12">
        <div className="inner-column" data-aos="fade-left">
          <div className="sec-title">
            <h2>
              About Us
            </h2>
            <div className="text" style={{textAlign:"justify"}}>
            At FFI, our passion is empowering individuals, businesses and educational institutions by establishing a thriving, diverse 
            and professional ecosystem where great skills, talent and ambitions meet business and educational opportunities.
            Whether you are looking for that incredible life-long career opportunity, just a short-term gig, an international 
            university/college education or a vocational training/course, we will provide you an unparalleled, one-stop service that 
            exceeds your expectations. Our global reach and domain expertise allows us to have insight to intimately understand the needs 
            and challenges our clients face in the pursuit of their aspirations and business goals.
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default AppSectionAbout;
