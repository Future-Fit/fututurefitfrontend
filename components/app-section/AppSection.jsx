import Image from "next/image";
import Link from "next/link";

const AppSection = () => {
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
            <div className="text" style={{ textAlign: "justify" }}>
              At FFI, our passion is enabling individuals, businesses, and institutions make great connections.
              Our ever-expanding global reach and expertise gives us the ability to provide growing networking and
              matching opportunities for job seekers, students, businesses and colleges/universities. With years
              of experience in talent management, international business, education and government services, we are
              your champions in the pursuit of your aspirations and goals.
            </div>
          </div>
          <div className="sec-title">
              <h3>Why Choose Us?</h3>
              <div className="text" >
              <ul className="list-style-one" >
                    <li>Experienced in talent management</li>
                    <li>Extensive global network</li>
                    <li>Promote diversity & inclusivity</li>
                    <li>Support community-focused collaboration</li>
                    </ul>
              </div>
              <a href="/about" className="theme-btn btn-style-one bg-blue">
                <span className="btn-title" >Learn More</span>
              </a>
            </div>

          {/* <a href="/about" className="theme-btn btn-style-one bg-blue">
            <span className="btn-title" style={{ height: '25px' }}>Learn More</span>
          </a> */}
          {/* <div className="mt-20">
            <Link
              href="/about"
              className="theme-btn"
            >
              Learn More
            </Link>
          </div> */}
          {/* <div className="download-btn">
            <a href="#">
              <Image
                width={210}
                height={60}
                src="/images/icons/apple.png"
                alt="icon"
              />
            </a>
            <a href="#">
              <Image
                width={210}
                height={60}
                src="/images/icons/google.png"
                alt="icon"
              />
            </a>
          </div> */}
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default AppSection;
