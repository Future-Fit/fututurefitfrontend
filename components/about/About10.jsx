import Image from "next/image";
import AboutBlock from "../block/AboutBlock";
import GlobalConfig from "@/Global.config";

const About10 = () => {
  return (
    <>

      {/* <!-- About Section --> */}
      <section className="about-section-two style-two -light-blue">
        <div className="auto-container">
          <div className="sec-title" style={{alignContent: "center"}}>
            <h2 style={{color: GlobalConfig.Fgr1Clr }}>
              About Us
            </h2>
          </div>
          <div className="row grid-base align-items-center">
            <div className="col-60 col-md-12 col-sm-12">
              <div className="row icon-side-row wow fadeInRight">
                <AboutBlock />
              </div>
            </div>
            {/* End .col */}

            <div className="image-column col-40 col-md-12 col-sm-12" >
              {/* <div className="sec-title">
                <h2 style={{ color: GlobalConfig.Fgr1Clr }}>
                  About Us
                </h2>
              </div> */}

              {/* <figure className="image" data-aos="fade-right" style={{ paddingTop: '10px' }}>
                <Image
                  width={900}
                  height={900}
                  src="/images/collaboration.jpeg"
                  alt="About"
                  style={{ borderRadius: '15px', marginTop: '20px', marginRight: '20px' }}
                />
              </figure> */}
            </div>

            {/* <div className="content-column mb-0 col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="wow fadeInLeft">
                <a href="/service" className="theme-btn -blue-outline mt-56 md:mt-16">
                  All Services
                </a>
              </div>
            </div> */}
            {/* <!-- Content Column --> */}
          </div>
        </div>
      </section>
      {/* <!-- End About Section -->  */}
    </>
  );
};

export default About10;
