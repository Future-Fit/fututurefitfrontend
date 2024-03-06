import Image from "next/image";
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
                    and academic institutions' role in spurring economic growth and
                    long-term competitiveness became apparent. At the same time, Canada's
                    reputation as a safe, tolerant country that has top-notch universities
                    keep attracting skilled professionals and increasing number of international
                    students.
                    <br /><br />
                    Recognizing these trends, FFI saw the opportunity to streamline the process
                    of recruiting talent for Canadian businesses and researching and applying to
                    universities and collegse in Canada. Using both technology, on the ground
                    work, and partnerships with stakeholders, FFI makes these tasks as easy as
                    possible by providing services that include: assess "right fit" for
                    employers and employees; search and apply to universities in one place; support
                    students throughout the application process; and promote Canadian institutions as
                    top destinations for international students. Additionally, FFI
                    interviews candidates on behalf of employers; performs document preparation,
                    verification, and translation; holds immigration workshops and seminars
                    to inform and update clients; conducts orientation and training activities; and
                    supports clients in travel, transitioning and other related services.
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
                <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, textAlign: "center", paddingTop: "10px" }}>
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
                  in Canada.
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
