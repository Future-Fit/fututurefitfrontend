import Image from "next/image";
import GlobalConfig from "@/Global.config";

const AboutBody = () => {
  return (
    <div className="auto-container">
      <div className="row">

        <div className="row">
          <div className="image-column col-md-4 col-sm-12" style={{ display: "grid", justifyItems: "center",
            backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: "5px"
          }} >
            <figure className="image" data-aos="fade-right">
              <Image
                width={300}
                height={300}
                src="/images/collaboration.jpeg"
                alt="About"
                style={{ borderRadius: '15px', marginTop: '20px', justifyContent: 'center' }}
              />
            </figure>

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

          <div className="content-column col-md-8 col-sm-12">
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <h4 className="title" style={{ textAlign: "center", fontWeight: "600", color: GlobalConfig.Fgr1Clr }}>
                  How We Came To Be</h4>
                <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontFamily: "Jost", textAlign: "justify" }}>
                  <span>
                    With globalization, Canada’s economy surged and evolved and some trends became 
                    obvious: scarcity of skilled professionals and the key role academic institutions 
                    play in its long-term competitiveness and position as world-class research and 
                    cultural hub. On the other hand, there is a large pool of foreign professionals 
                    interested in working in Canada and a growing number of international students 
                    searching for the best universities in the world to attend.
                    <br /><br />
                    Recognizing these trends, FFI saw the opportunity to streamline the process 
                    of recruiting global talent for Canadian businesses and appying to Canadian 
                    universities. Using technology and offices on the ground, FFI makes the end-to-end 
                    hiring and college application activities as seamless as possible. Partnering 
                    closely with Canadian businesses, academic institutions, and government agencies, 
                    services FFI provides include: assessment of "right fit" for employers and employees; 
                    promotion of Canadian institutions as top destinations for international students and 
                    support throughout the application journey; and assisting new arrivals as they 
                    transition to thier new life in Canada. Additionally, FFI conducts interviews, 
                    credential verification, document preparation and translation, immigration workshops 
                    and seminars, orientation and training, and travel and other services.
                  </span>
                </div>
              </div>
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
      </div >
    </div>
  );
};

export default AboutBody;
