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
            At FFI, our passion is empowering individuals, businesses and institutions by establishing and growing a thriving, diverse 
            and professional ecosystem where great skills, talent and ambitions meet unfulfilled business opportunities – be it in availing 
            incredible career opportunities for career seekers or those looking for short-term gigs to finding international educational and 
            vocational institutions for students to hosting and offering training programs that provide targeted skills development. 
            Our global reach and expertise uniquely gives us the insight and advantage to intimately understand the challenges that our 
            clients face in the pursuit of their aspirations and desire to fulfill their business needs and opportunities
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default AppSectionAbout;
