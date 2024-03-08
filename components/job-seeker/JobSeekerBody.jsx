import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const JobSeekerBody = () => {

  return (
    <div className="auto-container" >
      <div className="row">
        <div className="row">
          <div className="outer-column col-md-4 col-sm-12" style={{ order: 0, display: "grid", justifyContent: "center", alignContent: "center" }}>
            <div className="inner-column" style={{ display: "grid", justifyContent: "center" }}>
              <div className="list" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '5px',
                width: "fit-content", height: "fit-content", padding: "0 20px 20px 20px"
              }}>
                <div style={{ display: "grid", justifyContent: "center" }}>
                  <Image
                    width={60}
                    height={60}
                    src="/images/icons/globe-icon.svg"
                    alt="Job Seekers"
                    style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
                  />
                </div>
                <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, textAlign: "center", paddingTop: "10px" }}>
                  Barriers to Getting Hired</h4>
                <ul className="list-style-five" style={{ textAlign: "left" }}>
                  <li>Not finding the right opportunities</li>
                  <li>Lack of understanding the job market</li>
                  <li>Lack of language/skills proficiency </li>
                  <li>Credentials not being recognized</li>
                  <li>Lack of access to professional support </li>
                  <li>Not having the proper permits</li>
                </ul>
                <div style={{ textAlign: "center", paddingTop: "10px" }}>
                  <span style={{ color: GlobalConfig.Fgr1Clr }}>
                    <strong> We are here to help!</strong></span>
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
                  Giving You the Edge...</h4>
                <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
                  <span>
                    Opportunities abound for foreign workers in Canada; but, challenges exist.
                    It is our job to solve these chalenges for you with our one-stop service
                    that enables you to connect with employers, conduct job searches, guide
                    you to match your profile with job requirements, and submit applications.
                    We offer training programs to enhance skills, language proficiency and competency.
                    Lastly, we provide guidance and support to help you settle in your new community.  <br /><br />

                    We give you the edge in your job search by partnering with a network of Canadian
                    businesses, providing you current updates on relevant rules and regulations,
                    and making the entire application process as easy as possible. <br /><br />

                    <strong> Summary of Services: </strong><br />

                    <ul className="list-style-five" style={{ color: GlobalConfig.BgrClr1, textAlign: "justify", left: "5px", paddingLeft: "17px" }}>
                      <li>Access to opportunities that can lead to great job offers for qualified
                        applicants </li>
                      <li>Personalized support for applicants tailored to specific needs</li>
                      <li>Services in qualifying, checking and translating documentation and credentials</li>
                      <li>Providing services in international travel, resettlement and related activities  </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-column col-100 col-md-12 col-sm-12">
          <div className="inner-column">
            <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
              <span>
                To learn more and explore available opportunities, sign up
                below and start building your profile.
              </span>
            </div>
          </div>
        </div>
        <div className="btn-box text-center" style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px' }}>
          <Link href="/register" className="theme-btn btn-style-one bg-blue" style={{
            color: "white",
            backgroundColor: GlobalConfig.LogoBlu
          }}>
            <span className="btn-title"><strong>Sign Up Today!</strong></span>
          </Link>
        </div>
      </div >
    </div>
  );
};

export default JobSeekerBody;
