import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";
import CallToAction from "@/components/call-to-action/CallToAction";

const AppSection = () => {
  return (
    <div className="auto-container">
      <div className="row">
        <div className="image-column col-40 col-md-12 col-sm-12" >
          <figure className="image" data-aos="fade-right" style={{ paddingTop: '10px' }}>
            <Image
              width={900}
              height={900}
              src="/images/collaboration.jpeg"
              alt="About"
              style={{ borderRadius: '15px', marginTop: '20px', marginRight: '20px' }}
            />
          </figure>

          <h3 style={{ textAlign: "center", paddingTop: "20px", fontWeight: "600", color: GlobalConfig.Fgr1Clr }}>
            Why Choose Us?</h3>
          <div className="sec-title" style={{ color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam, textAlign: "justify" }}>
            <ul className="list-style-five" >
              <li>We are experienced in talent management</li>
              <li>We have built an extensive global network</li>
              <li>We promote diversity & inclusivity</li>
              <li>We support community-focused collaboration</li>
            </ul>
          </div>
        </div>

        <div className="content-column col-60 col-md-12 col-sm-12">
          {/* <div className="inner-column" data-aos="fade-left"> */}
          <div className="inner-column">
            <div className="sec-title">
              <h4 className="title" style={{ textAlign: "center", paddingTop: "20px", fontWeight: "600", color: GlobalConfig.Fgr1Clr }}>
                How We Came To Be</h4>
              <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam, textAlign: "justify" }}>
                <span>
                  As Canada’s economy surged and industries evolved, a pressing challenge emerged: a scarcity of skilled
                  professionals to meet the necessary increase in its growing workforce. At the same time, Canadian colleges and
                  universities are contributing increasingly significant benefits to the Canadian economy, as well as
                  making the country a cultural and research hub, which is a major driver of its long-term global competitiveness.
                  <br /> <br />
                  On the other hand, there is a large pool of skilled professionals and qualified international students who are
                  eager, able and ready to fulfill the needs of Canada's future. Recognizing these trends and fueled by our
                  collective experiences, a group of visionaries from diverse backgrounds came together for a common
                  purpose. Drawing from our own journeys as immigrants and professionals, we saw an opportunity to connect
                  the talent in the global community with the needs of Canadian employers and to promote Canada's post-secondary
                  institutions as the destination of choice. It was here that Future Fit International (FFI) was born.
                  <br /> <br />
                  FFI is a globally networked company established to efficiently match job seekers and international students
                  with job and education opportunities in Canada. FFI works and partners closely with Canadian businesses and
                  employers, universities, colleges, and local and national government agencies. Based out of Canada, FFI
                  aims to meet Canadian employers' needs by creating a one-stop space for employers and job seekers to
                  exchange information and connect, facilitating the assessment of job applicants’ qualifications and
                  right fit, and, subsequently, assisting job seekers in their transition to their new life in Canada,
                  ensuring a productive experience for both employers and employees. Likewise, FFI works to promote
                  Canadian colleges and universities as one of the best choices available to international students,
                  assisting them throughout the selectiona and application process. FFI provides services including:
                  pre-screenings, interviews, credentials and skills verification, document preparation services, work
                  and school applications, company screening, immigration workshops and seminars, government liaison 
                  services, language testing, orientation and training, travel and settlement processes, and more.
                  <br /><br />
                </span>
                <span> <strong> We work with: </strong></span>
                <ul className="list-style-five" >
                  <li>Employers in all industries that need to fill positions that cannot be filled only by Canadian
                    labor force.</li>
                  <li>Foreign-trained workers who are looking for job opportunities in Canada.</li>
                  <li>Canadian colleges and universities looking to grow their international student populations.</li>
                  <li>International students hoping to pursue their educational ambitions in Canada.</li>
                </ul>
                <span> <strong> Company Structure: </strong></span> <br />
                <span>
                  The company, headquartered in Canada with satellite offices in Ethiopia and upcoming expansions to
                  Tanzania and Ghana, is designed to facilitate the strategic sourcing of skilled labor and international
                  students for relocation to Canada. At the helm, is the executive leadership team overseeing operations,
                  strategy and decision-making from Canada. Each satellite office operates under the guidance of country
                  directors who oversees the day-to-day activities. Collaborative efforts between these offices ensure a
                  seamless process for identifying, vetting and assisting potential candidates in their pursuit of
                  realizing their dreams to work and study in Canada.
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

export default AppSection;
