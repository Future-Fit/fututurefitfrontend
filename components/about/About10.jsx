import Image from "next/image";
import AboutBlock from "../block/AboutBlock";
import GlobalConfig from "@/Global.config";

const About10 = () => {
  return (
    <>

      {/* <!-- About Section --> */}
      <section className="banner-section-ten -light-blue">
        <div className="auto-container" >
          <div className="content-box">
            <div className="title-box" data-aso-delay="500" data-aos="fade-up">
              <h3 style={{ fontWeight: '700' }}>
                <span style={{ fontSize: '40px', color: GlobalConfig.Fgr1Clr }}> About Us </span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section-two style-two -light-blue">
        <div className="auto-container">
          <div className="row grid-base align-items-center">
            <div className="col-60 col-md-12 col-sm-12">
              <div className="row icon-side-row wow fadeInRight">
                <AboutBlock />
              </div>
            </div>
            {/* End .col */}

            <div className="image-column col-40 col-md-12 col-sm-12" >
              <figure className="image" data-aos="fade-right" style={{ paddingTop: '10px' }}>
                <Image
                  width={900}
                  height={900}
                  src="/images/collaboration.jpeg"
                  alt="About"
                  style={{ borderRadius: '15px', marginTop: '20px', marginRight: '20px' }}
                />
              </figure>
            </div>

          </div>
        </div>
      </section>
      {/* <!-- End About Section -->  */}
    </>
  );
};

export default About10;
