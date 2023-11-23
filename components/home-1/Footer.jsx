import Image from "next/image";
import CopyrightFooter from "../footer/common-footer/CopyrightFooter";
import FooterContent2 from "../footer/FooterContent2";

const Footer = () => {
  return (
    <footer className="main-footer style-two">
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
                  <a href="thebeehost@support.com">+188 xxx xxxx</a>
                </p>
                <p className="address">
                  168 Charlotte Street, Suite 404, Ottawa, ON
                  <br /> Canada. <br />
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
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
  );
};

export default Footer;
