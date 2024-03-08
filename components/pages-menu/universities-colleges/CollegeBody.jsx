import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const CollegeBody = () => {

  return (
    <div className="auto-container" >
      <div className="row">
        <div className="row">
          <div className="content-column col-md-8 col-sm-12" style={{ order: 0 }}>
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <h4 className="title" style={{ textAlign: "center", fontWeight: "600", color: GlobalConfig.Fgr1Clr, paddingTop: "3%" }}>
                  Services We Provide
                </h4>
                <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
                  <span>
                    FFI partners with Canadian colleges and universities to promote them
                    as world-class destinations for higher learning, enhance their global
                    outreach, and help them recruit international students.  <br /><br />

                    Our list of services include: <br />
                    <ul className="list-style-five" style={{ color: GlobalConfig.BgrClr1, textAlign: "justify", left: "5px", paddingLeft: "17px" }}>
                      <li>Serve as your agent globally</li>
                      <li>Recruit and support international students</li>
                      <li>Conduct promotional and education fairs  </li>
                      <li>Develop outreach marketing strategies</li>
                      <li>Develop global partnerships</li>
                      <li>Enhance your online and social presence</li>
                      <li>Organize campus visits and tours</li>
                      <li>Alumini engagement</li>
                    </ul>
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
                    width={60}
                    height={60}
                    src="/images/icons/College.png"
                    alt="College"
                    style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
                  />
                </div>
                <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, textAlign: "center", paddingTop: "10px" }}>
                  What We Can Do for You</h4>
                <ul className="list-style-five" style={{ textAlign: "left" }}>
                  <li>Agency</li>
                  <li>Advocacy</li>
                  <li>Recruiting </li>
                  <li>Country-specific Insights</li>
                  <li>Screening</li>
                  <li>Translations</li>
                </ul>
                <div style={{ textAlign: "center", paddingTop: "10px" }}>
                  <span style={{ color: GlobalConfig.Fgr1Clr }}>
                    <strong> Contact us today!</strong></span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-column col-100 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title">
                <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
                  <span>
                    FFI helps streamline the admissions process. We will also make it easier for you 
                    to recruit and connect with international students. Connect with us to learn more 
                    about our services. You can contact us via&nbsp;
                    <a href="/contact"
                      className style={{ textDecoration: "underline", color: GlobalConfig.Fgr1Clr, fontSize: "1.0em", textAlign: "justify", lineHeight: "1.4em" }}>
                      email</a>
                    &nbsp;or on our dedicated&nbsp;
                    <a href="tel: +1-833-688-5577"
                      className style={{ textDecoration: "underline", color: GlobalConfig.Fgr1Clr, fontSize: "1.0em", textAlign: "justify", lineHeight: "1.4em" }}>
                      phone line</a>
                    &nbsp;at any time. After we set up an account for you, you can access our dedicated 
                    online portal where you can access all services, your dashboard and an easy way to 
                    engage with us. 
                  </span>
                </div>
              </div>
              <div className="sec-title">
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box text-center" style={{
          display: 'flex', justifyContent: 'center',
          padding: '20px 0'
        }}>
          <Link href="/EduPortal" className="theme-btn btn-style-one bg-blue" style={{
            color: GlobalConfig.Fgr1Clr,
            backgroundColor: GlobalConfig.LogoOrg
          }}>
            <span className="btn-title"><strong>University/College Portal</strong></span>
          </Link>
        </div>
      </div >
    </div>
  );
};

export default CollegeBody;
