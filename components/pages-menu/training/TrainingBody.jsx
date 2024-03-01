import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const TrainingBody = () => {
  return (
    <div className="auto-container" >
      <div className="row">
        <div className="row">
          <div className="content-column col-md-8 col-sm-12" style={{ order: 0 }}>
            <div className="sec-title">
              <h4 className="title" style={{ textAlign: "center", fontWeight: "600", color: GlobalConfig.Fgr1Clr }}>
                Training and Other Services</h4>
              <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1em", textAlign: "justify" }}>
                <span>
                  FFI's training centers in Ethiopia and other African countries are established
                  with the goal of equipping prospective job seekers with the necessary qualifications
                  for Canadian jobs.
                  <br /><br />
                  These training programs will: <br />
                  <ul className="list-style-five" >
                    <li>Cultivate robust training infrastructure within local communities </li>
                    <li>Mitigate hiring risks for both prospective Canadian employers and
                      job applicants seeking opportunities overseas</li>
                    <li>Offer a convenient and cost-effective means of delivering essential
                      training services locally to aspiring workers</li>
                  </ul>
                  <br /><br />
                  We also help to streamline the admissions process, providing students from across the
                  globe with the necessary information and support to navigate enrollment successfully.
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12" style={{
            width: "fit-content",
            height: "fit-content", marginTop: "30px", display: "grid", justifyItems: "center",
            backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: "5px", paddingBottom: "20px"
          }} >
            <Image
              width={60}
              height={60}
              src="/images/icons/Question.png"
              alt="Business"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
            <h4 style={{
              textAlign: "center", paddingTop: "20px", fontWeight: "600",
              color: GlobalConfig.Fgr1Clr
            }}>
              List of Training Courses</h4>
            <ul className="list-style-five" style={{ textAlign: "left" }}>
              <li>Not knowing where to start to recruit globally</li>
              <li>Not knowing local recruiting regulations </li>
              <li>Too many applicants without the required skills</li>
              <li>Need to provide training/skills development</li>
              <li>Documents need translation</li>
            </ul>
            <div> <br />
              <span style={{ color: GlobalConfig.Fgr1Clr }}>
                We have other programs as well. <br />
                <strong> Contact us today!</strong></span>
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
                  Come work with us. We will exceed your expectations.
                </span>
              </div>
            </div>
            <div className="sec-title">
            </div>
          </div>
        </div>
        <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <Link href="/training" className="theme-btn btn-style-one bg-blue" style={{
            color: "white",
            backgroundColor: GlobalConfig.LogoBlu
          }}>
            <span className="btn-title"><strong>More Details Here</strong></span>
          </Link>
        </div>
      </div >
    </div >
  );
};

export default TrainingBody;
