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
              Job Seekers
            </h2>
            <div className="text" style={{textAlign:"justify"}}>
            Detail About Job Seeker
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default AppSectionAbout;
