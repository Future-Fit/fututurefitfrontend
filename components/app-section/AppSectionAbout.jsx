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
            At FFI, our passion is enabling individuals, businesses, and institutions to make great connections. 
            Our ever-expanding global reach and expertise gives us the ability to provide growing networking and 
            matching opportunities for our business clients, career seekers, and international students. With years 
            of experience in the fields of talent management, international business, and education, let us be your 
            partner in the pursuit of your aspirations.
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default AppSectionAbout;
