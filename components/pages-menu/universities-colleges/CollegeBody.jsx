import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const CollegeBody = () => {
  return (
    <div className="auto-container" >
      <div className="row">
        <div className="row">
          <div className="col-md-4 col-sm-12" style={{
            height: "fit-content", marginTop: "30px", display: "grid", justifyItems: "center",
            backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: "5px", paddingBottom: "20px"
          }} >
            <Image
              width={60}
              height={60}
              src="/images/icons/College.png"
              alt="College"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
            <h4 style={{
              textAlign: "center", paddingTop: "20px", fontWeight: "600",
              color: GlobalConfig.Fgr1Clr
            }}>
              What We Can Do for You</h4>
            <ul className="list-style-five" style={{ textAlign: "left" }}>
              <li>Advocacy</li>
              <li>Recruiting </li>
              <li>Country-specific Insights</li>
              <li>Screening</li>
              <li>Translations</li>
            </ul>
            <div> <br />
              <span style={{ color: GlobalConfig.Fgr1Clr }}>
                <strong> Contact us today!</strong></span>
            </div>
          </div>
          <div className="content-column col-md-8 col-sm-12" style={{ order: 1 }}>
            <div className="sec-title">
              <h4 className="title" style={{ textAlign: "center", fontWeight: "600", color: GlobalConfig.Fgr1Clr }}>
                Services We Provide</h4>
              <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1em", textAlign: "justify" }}>
                <span>
                  FFI partners with Canadian colleges and universities to enhance
                  their global outreach and to help them recruit international students. Through
                  our comprehensive suite of services, we promote Canadian educational institutions
                  as world-class destinations for higher learning.  <br /><br />

                  Our list of services include: <br />
                  <ul className="list-style-five" style={{
                    color: GlobalConfig.BgrClr1,
                    textAlign: "justify"
                  }}>
                    <li>Serving as a local agent and recruiting students  </li>
                    <li>Conducting education fairs on location  </li>
                    <li>Developing outreach marketing strategies</li>
                    <li>Effective, timely communications with students</li>
                    <li>Serve as a liason with foreign entities</li>
                  </ul>
                </span>
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
                  We also help to streamline the admissions process, providing students from across the
                  globe with the necessary information and support to navigate enrollment successfully.
                </span>
              </div>
            </div>
            <div className="sec-title">
            </div>
          </div>
        </div>
        <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <Link href="/register" className="theme-btn btn-style-one bg-blue" style={{
            color: "white",
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
