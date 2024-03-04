import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const JobSeekerBody = () => {

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
                <div style={{display: "grid", justifyContent: "center"}}>
                  <Image
                    width={60}
                    height={60}
                    src="/images/icons/globe-icon.svg"
                    alt="Job Seekers"
                    style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
                  />
                </div>
                <h4 style={{ fontWeight: "600", color: GlobalConfig.LogoBlu, paddingTop: "10px" }}>
                  Barriers to Getting Hired</h4>
                <ul className="list-style-five" style={{ textAlign: "justify" }}>
                  <li>Not knowing about opportunities</li>
                  <li>Not getting foreign credentials recognized</li>
                  <li>Lack of language proficiency </li>
                  <li>Lack of professional support system </li>
                  <li>Lack of understanding the job market</li>
                  <li>Not having the proper permits</li>
                </ul>
                <div style={{textAlign: "center"}}> <br />
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
                <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1em", textAlign: "justify" }}>
                  <span>
                    Opportunities abound for foreign workers in Canada. But, there are
                    challenges as well. It is our job to help you solve these chalenges with 
                    our one-stop service that allows you to connect with employers, conduct job 
                    searches, match your candidacy,  and submit applications. We also offer 
                    training to enhance skills, language proficiency and competency. Additionally, 
                    we provide guidance and support services to help you settle and integrate in 
                    your community.  <br /><br />

                    Partnering with a network of Canadian businesses, we use our online platform 
                    to curate and post current job openings, making it easy for you to perform job 
                    searches and complete and submit applications. <br /><br />

                    <strong> Summary of Services: </strong><br />

                    <ul className="list-style-five" >
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
            <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1em",
              textAlign: "justify"}}>
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
