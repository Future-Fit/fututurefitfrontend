import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const TrainingBody = () => {

  return (
    <div className="auto-container" >
      <div className="row">
        <div className="row">
          <div className="outer-column col-md-4 col-sm-12" style={{ order: 0, display: "grid", justifyContent: "center", alignContent: "center" }}>
            <div className="inner-column" style={{ display: "grid", justifyContent: "center" }}>
              <div className="list" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '5px', width: "fit-content", height: "fit-content", padding: "0 20px 20px 20px" }}>
                <div style={{ display: "grid", justifyContent: "center" }}>
                  <Image
                    width={60}
                    height={60}
                    src="/images/icons/Training-Blue-icon.svg"
                    alt="Training"
                    style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
                  />
                </div>
                <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, textAlign: "center", paddingTop: "10px" }}>
                  Training Categories</h4>
                <ul className="list-style-five" style={{ textAlign: "left" }}>
                  <li>Language proficiency</li>
                  <li>Job related skills development</li>
                  <li>Technical and trade related</li>
                  <li>About Canadian job market</li>
                  <li>Preparation for required test</li>
                </ul>
                <div style={{ textAlign: "center", paddingTop: "10px" }}>
                  <span style={{ color: GlobalConfig.Fgr1Clr }}>
                    We have other programs as well. <br />
                    <strong> Contact us today!</strong></span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-column col-md-8 col-sm-12">
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <h4 className="title" style={{ textAlign: "center", fontWeight: "600", color: GlobalConfig.Fgr1Clr, paddingTop: "3%" }}>
                  Training and Other Services</h4>
                <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
                  <span>
                    FFI's training centers in Ethiopia and other African countries are established
                    with the goal of equipping prospective job seekers with the necessary qualifications
                    and orientation for Canadian jobs.
                    <br /><br />
                    These training programs will: <br />
                    <ul className="list-style-five" style={{ color: GlobalConfig.BgrClr1, textAlign: "justify", left: "5px", paddingLeft: "17px" }}>
                      <li>Cultivate robust training infrastructure within local communities </li>
                      <li>Mitigate hiring risks for both prospective employers and
                        job applicants</li>
                      <li>Offer convenient and cost-effective means of delivering essential
                        training to aspiring workers</li>
                    </ul>
                    <br />
                    In addition to providing training and orientation services, FFI offers travel,
                    relocation and settlement services for clients who need support in these areas.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-column col-100 col-md-12 col-sm-12">
        </div>
        <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
          <Link href="/contact" className="theme-btn btn-style-one bg-blue" style={{ color: "white", backgroundColor: GlobalConfig.LogoBlu }}>
            <span className="btn-title"><strong>Contact Us!</strong></span>
          </Link>
        </div>
      </div >
    </div >
  );
};

export default TrainingBody;
