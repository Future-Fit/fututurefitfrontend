import Image from "next/image";
import CopyrightFooter from "../footer/common-footer/CopyrightFooter";
import FooterContent2 from "../footer/FooterContent2";
import Social from "../footer/common-footer/Social";



const Footer =  () => {

  const footerStyle = {
    boxShadow: '0 -3px 6px rgba(0, 0, 0, 0.5)', // Updated boxShadow property for the footer
  };
  return (
    <footer className="main-footer style-two" style={footerStyle}>
      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="row">
            <div className="big-column col-xl-3 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <a href="#">
                    <Image
                      width={50}
                      height={50}
                      src="/images/logo-no-background.png"
                      alt="brand"
                    />
                  </a>
                </div>
                <p className="phone-num">
                  <span>Contact Us</span>
                  <a href="tel: +1-800-422-8061">+1-800-422-8061</a>
                </p>
                <p className="address">
                  168 Charlotte Street, Suite 404, Ottawa, ON
                  <br /> K1N 8K6. <br />
                  </p>
                  <p className="address">
                  242 Building, Chirkos 04, Addis Ababa
                  <br /> Ethiopia. <br /> </p>
                  <a href="mailto:info@futurefitinternational.com " className="email">
                    info@futurefitinternational.com
                  </a>
              </div>
            </div>
            {/* End footer left widget */}

            <div className="big-column col-xl-8 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent2 />
              </div>
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
      </div>

      <div className="social-links" style={{ justifyContent: "center" }}>
        <Social />
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
  );
};

export default Footer;
