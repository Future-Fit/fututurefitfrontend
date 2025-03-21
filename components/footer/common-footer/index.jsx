'use client'
import CopyrightFooter from "./CopyrightFooter";
import FooterContent from "./FooterContent";
import Social from "../../footer/common-footer/Social";
import GlobalConfig from "@/Global.config";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Index = () => {

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);

  const footerStyle = {
    boxShadow: '0 -1px 3px rgba(0, 0, 0, 0.5)', // Add boxShadow property for the footer
  };

  const logoStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <footer className="main-footer" style={{ boxShadow: '0 -1px 3px rgba(0, 0, 0, 0.5)', backgroundColor: GlobalConfig.BgHeader }}>
      <div className="auto-container">
        <div className="logo-box" style={logoStyle}>

        </div>
        {/* Widgets Section */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="row">

            <div

              className=""
            >
              <div className="footer-column ">
                <div className="contact-details">
                  <div className="contact-column" style={{ width: '100%' }}>
                    <div className="logo">
                      <Link href="/" className="noSticky">
                        <Image
                          width={50}
                          height={50}
                          src={GlobalConfig.DskLog}
                          alt="Footer Logo"
                          loading="lazy"
                          title="brand"
                        />
                      </Link>
                    </div>
                    <p className="phone-num">
                      <span>Contact Us</span>
                    </p>
                    <div className="d-flex flex-wrap" style={{ width: '100%', gap: '20px' }}>
                      <div style={{ flexGrow: 1, }}>
                        <p className="phone-num">
                          <span> <Image src='/images/canada.png' width={40} height={20} alt="Canada" /></span>
                          <a href="tel: +1-833-688-5577">+1-833-688-5577</a><br />
                          <a color="#fff !important" href="mailto:info@futurefitint.com " className="email">
                            info@futurefitint.com
                          </a>
                        </p>
                        <div style={{ width: '100%', height: '100px', overflow: 'hidden' }}>
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.8564029194836!2d-75.67874502344903!3d45.432395935559754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0510f2885901%3A0x69f3a70b97e7173b!2s168%20Charlotte%20St%20%23404%2C%20Ottawa%2C%20ON%20K1N%208K6%2C%20Canada!5e0!3m2!1sen!2set!4v1701349204301!5m2!1sen!2set"
                            width="50%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            borderRadius='5px'
                            referrerPolicy="no-referrer-when-downgrade">
                          </iframe>
                        </div>
                      </div>
                      <div className="flex-fill"  >
                        <p className="phone-num">
                          <span> <Image src='/images/ethiopia.png' width={50} height={20} alt="Ethiopia" /></span>

                          {/* <span>Ethiopia Office</span> */}
                          <a href="tel: +251933859295">+251933859295</a><br />
                          <a color="#fff !important" href="mailto:info@futurefitint.com " className="email">
                            info@futurefitint.com
                          </a>
                        </p>
                        <div style={{ width: '100%', height: '100px', overflow: 'hidden' }}>
                          <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.868187001287!2d38.76538085767212!3d8.984274925153924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85901897bf21%3A0xe867617888de7526!2s242%20Building!5e0!3m2!1sen!2set!4v1701347211640!5m2!1sen!2set"
                            width="50%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            borderRadius='5px'
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                      <div className="flex-fill">

                        <FooterContent />

                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
            {/* End footer left widget */}


          </div>
        </div>
      </div>
      {/* End auto-container */}

      {/* <div className="social-links" style={{ justifyContent: "center" }}>
        <Social />
      </div> */}

      <CopyrightFooter />
      {/* Bottom */}
    </footer>
    //   {/* <!-- End Main Footer --> */}
  );
};

export default Index;
