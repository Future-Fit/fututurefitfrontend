import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const BusinessBody = () => {

  return (
    <div className="auto-container" >
      <div className="row">
        <div className="row">
          <div className="outer-column col-md-4 col-sm-12" style={{ order: 0, display: "grid", justifyContent: "center", marginTop: "2%" }}>
            <div className="inner-column" style={{ display: "grid", justifyContent: "center" }}>
              <div className="list" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '5px',
                width: "fit-content", height: "fit-content", padding: "0 20px 20px 20px"
              }}>
                <div style={{ display: "grid", justifyContent: "center" }}>            <Image
                  width={60}
                  height={60}
                  src="/images/icons/Question.png"
                  alt="Business"
                  style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
                />
                </div>
                <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, paddingTop: "10px" }}>
                  Familiar with These Issues?</h4>
                <ul className="list-style-five" style={{ textAlign: "left" }}>
                  <li>Where to start recruiting globally</li>
                  <li>What are the local recruiting regulations </li>
                  <li>How to match applicants with requirements</li>
                  <li>Need to provide skills/language training</li>
                  <li>Credentials/documents need translation</li>
                </ul>
                <div style={{textAlign: "center"}}> <br />
                  <span style={{ color: GlobalConfig.Fgr1Clr }}>
                    We solve these and other problems. <br />
                    <strong> Contact us today!</strong></span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-column col-md-8 col-sm-12">
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <h4 className="title" style={{
                  textAlign: "center", fontWeight: "600",
                  color: GlobalConfig.Fgr1Clr, paddingTop: "3%"
                }}>
                  Services for Employers</h4>
                <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1em", textAlign: "justify" }}>
                  <span>
                    In today's competitive world, businesses need to fill positions quickly.
                    When they can't do so locally, they look for talent globally.
                    Here is where FFI's on the ground presence and network comes in handy. For
                    Canadian businesses, we offer a comprehensive suite of services.
                    <br /><br />
                    Using our dedicated business portal, employers can connect with skilled
                    workforce from our international pool of resources. But, we don't stop there;
                    we will do all the hard work for you to match applicants with your recruiting criteria.
                    <br /><br />
                    <span>We serve our clients in the following industries:</span>
                    <ul className="list-style-five" style={{
                      color: GlobalConfig.BgrClr1,
                      textAlign: "justify"
                    }}>
                      <li>Healthcare</li>
                      <li>Engineering/High-Tech/IT</li>
                      <li>Manufacturing</li>
                      <li>Construction</li>
                      <li>Transportation</li>
                      <li>Other skilled services</li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-column col-100 col-md-12 col-sm-12">
          <div className="inner-column">
            <div className="sec-title">
              <div className="text" style={{
                color: GlobalConfig.Fgr1Clr, textAlign: "justify",
                fontSize: "1em",
              }}>
                <span>
                  FFI's employer portal is the best place to start your search for global talent.
                  Come work with us; we will exceed your expectations.
                </span>
              </div>
            </div>
            <div className="sec-title">
            </div>
          </div>
        </div>
        <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
          <Link href="/register" className="theme-btn btn-style-one bg-blue" style={{
            color: "white",
            backgroundColor: GlobalConfig.LogoBlu
          }}>
            <span className="btn-title"><strong>Employer Portal</strong></span>
          </Link>
        </div>
      </div >
    </div>
  );
};

export default BusinessBody;
