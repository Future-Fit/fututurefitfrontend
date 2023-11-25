import Image from "next/image";
import CopyrightFooter from "./CopyrightFooter";
import FooterContent from "./FooterContent";
import Social from "../../footer/common-footer/Social";

const index = () => {
  const footerStyle = {
    boxShadow: '0 -1px 3px rgba(0, 0, 0, 0.5)', // Add boxShadow property for the footer
  };
  
  return (
    <footer className="main-footer" style={footerStyle}>
      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="row">
            <div className="big-column col-xl-4 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
              <div className="logo">
                  <a href="#">
                    <Image
                      width={150}
                      height={50}
                      src="/images/logo-no-background.png"
                      alt="brand"
                    />
                  </a>
                </div>
                <p className="phone-num">
                  <span>Contact Us Now</span>
                  <a href="tel: +1-800-422-8061">+1-800-422-8061</a>
                </p>
                <p className="address">
                  168 Charlotte Street, Suite 404, Ottawa, ON
                  <br />K1N 8K6. <br />
                  </p>
                  <p className="address">
                  242 Building, Chirkos 04, Addis Ababa
                  <br />Ethiopia. <br /> </p>
                  <a color="#fff !important" href="mailto:info@futurefitinternational.com " className="email">
                    info@futurefitinternational.com
                  </a>
              </div>
            </div>
            {/* End footer left widget */}

            <div className="big-column col-xl-8 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End auto-container */}

      <div className="social-links" style={{ justifyContent: "center" }}>
        <Social />
      </div>

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
    //   {/* <!-- End Main Footer --> */}
  );
};

export default index;
