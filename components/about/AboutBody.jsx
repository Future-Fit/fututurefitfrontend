import Image from "next/image";
import Link from "next/link";

import GlobalConfig from "@/Global.config";

const AboutBody = () => {
  return (
    <div className="auto-container">
      <div className="row">
        <div className="row">
          <div className="content-column col-md-8 col-sm-12" style={{ order: 0 }}>
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <h4 className="title" style={{ textAlign: "center", fontWeight: "600", color: GlobalConfig.Fgr1Clr, paddingTop: "3%" }}>
                  How We Came To Be</h4>
                <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
                  <span>
                    As Canada’s economy evolved, some trends became obvious:
                    demand for skilled workers grew; businesses started recruiting globally;
                    and the role academic institutions play to spur economic growth and
                    long-term competitiveness became apparent. At the same time, Canada's
                    reputation as safe, developed with affordable and top-notch education
                    kept attracting professionals and international students alike.
                    <br /><br />
                    Recognizing these trends, FFI saw the opportunity to streamline the process
                    of recruiting talent for Canadian businesses and facilitating the end-to-end
                    process of applying to colleges and universities in Canada. Using technology,
                    on the ground work, and partnerships with stakeholders, FFI makes these tasks
                    as seamless as possible by providing all-inclusive services including: assessment
                    of "right fit" for employers and Employers; searching for institutions and supporting
                    students throughout the application process; and promoting both Canadian businesses
                    and academic institutions globally. As part of our integrated service model, we
                    interviews candidates on behalf of employers; perform document preparation,
                    verification, and translation services; hold immigration workshops and seminars
                    to inform and update clients; conduct orientation and training activities for our;
                    and support clients in travel, transitioning and other related services.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="outer-column col-md-4 col-sm-12" style={{ display: "grid", justifyContent: "center", alignContent: "center" }}>
            <div className="inner-column" style={{ display: "grid", justifyContent: "center" }}>
              <div className="list" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '5px', width: "fit-content", height: "fit-content", padding: "0 20px 20px 20px" }}>
                <div style={{ display: "grid", justifyContent: "center" }}>
                  <Image
                    width={300}
                    height={300}
                    src="/images/collaboration.jpeg"
                    alt="About"
                    style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
                  />
                </div>
                <h4 style={{ fontWeight: "600", color: GlobalConfig.Fgr1Clr, textAlign: "center", paddingTop: "10px" }}>
                  Why Choose Us?</h4>
                <ul className="list-style-five" style={{ textAlign: "left" }}>
                  <li>Our experience in talent management</li>
                  <li>Our extensive global network</li>
                  <li>Our support for diversity & inclusivity</li>
                  <li>Our focus on community collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content-column col-100 col-md-12 col-sm-12">
          <div className="inner-column">
            <div className="sec-title">
              <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
                <span> <strong> Company Structure: </strong></span> <br />
                <span>
                  Our headquarter is in Canada - with satellite offices in Ethiopia (current) and
                  upcoming expansions in Tanzania and Ghana. At the helm is the executive leadership
                  team overseeing operations, strategy and decision-making. Each satellite office
                  operates under the guidance of the country director to oversee day-to-day activities.
                  Collaborative efforts ensure a unified process for identifying, vetting and assisting
                  potential candidates in their pursuit of realizing their dreams to work and study
                  in Canada.<br /> <br/>

                  Thank you for visiting our website! We hope that you will be happy with the quality 
                  and range of services we provide. For any inquiries, please contact us. <br /> <br />

                  <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                    <Link href="/service" className="theme-btn btn-style-one bg-blue" style={{ color: "white", backgroundColor: GlobalConfig.BgrClr1 }}>
                      <span className="btn-title"><strong>Our Services</strong></span>
                    </Link>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
};

export default AboutBody;
