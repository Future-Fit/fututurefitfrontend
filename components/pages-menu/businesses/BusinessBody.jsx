import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const BusinessBody = () => {
  return (
    <div className="auto-container">
      <div className="row">
        <div className="row">
          <div className="content-column col-md-8 col-sm-12" style={{ order: 0 }}>
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <h4 className="title" style={{ textAlign: "center", fontWeight: "600", color: GlobalConfig.Fgr1Clr }}>
                  Services We Offer...</h4>
                <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontFamily: "Jost", textAlign: "justify" }}>
                  <span>
                    In today's competitive world, skilled labor is highly in demand. As a result, 
                    Canadian businesses must look for skilled labor in global markets where they 
                    may not have domain expertise. Here is where FFI's experience and global network
                    comes in handy. For our Canadian business clients, we offer a comprehensive suite 
                    of services that are tailored to solve the challenges they face.
                    <br /><br />
                    Our services encompass the following: <br /><br />

                    <ul className="list-style-five" >
                      <li>Meticulous talent sourcing from international markets </li>
                      <li>Rigorous assessment procedures to ensure optimal fit </li>
                      <li>Streamlined immigration processes to facilitate seamless relocation </li>
                      <li>Ongoing support for successful integration into Canadian work culture</li>
                    </ul>
                    <br /><br />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="image-column col-md-4 col-sm-12" style={{
            display: "grid", justifyItems: "center",
            backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: "5px",
          }} >
            {/* <figure className="image" data-aos="fade-right"> */}
            <Image
              width={400}
              height={400}
              src="/images/collaboration.jpeg"
              alt="About"
              style={{ borderRadius: '5px', marginTop: '20px', justifyContent: 'center' }}
            />
            {/* </figure> */}

            <h4 style={{ textAlign: "center", paddingTop: "10px", fontWeight: "600", color: GlobalConfig.LogoOrg }}>
              Why Choose Us?</h4>
            <div className="sec-title" style={{ color: GlobalConfig.BgrClr1, textAlign: "justify" }}>
              <ul className="list-style-five" >
                <li>Our experience in talent management</li>
                <li>Our extensive global network</li>
                <li>Our diversity & inclusivity</li>
                <li>Our focus on community collaboration</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-column col-100 col-md-12 col-sm-12">
          {/* <div className="inner-column" data-aos="fade-left"> */}
          <div className="inner-column">
            <div className="sec-title">
              <div className="text" style={{ color: GlobalConfig.Fgr1Clr, textAlign: "justify" }}>
                <span> <strong> Company Structure: </strong></span> <br />
                <span>
                  The company, headquartered in Canada - with satellite offices in Ethiopia (current) and upcoming
                  expansions in Tanzania and Ghana - is designed to facilitate the strategic sourcing of skilled
                  labor and recruitment of international students to Canada. At the helm is the executive leadership
                  team overseeing operations, strategy and decision-making. Each satellite office operates under the
                  guidance of the country director who oversees the day-to-day activities. Collaborative efforts
                  between these offices ensure a unified and seamless process for identifying, vetting and assisting
                  potential candidates in their pursuit of realizing their dreams to work and study in Canada.
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
            backgroundColor: GlobalConfig.LogoBlu
          }}>
            <span className="btn-title"><strong>Business Portal</strong></span>
          </Link>
        </div>
      </div >
    </div>
  );
};

export default BusinessBody;
