import Image from "next/image";
import GlobalConfig from "@/Global.config";

const AppSection = () => {
  return (
    <div className="auto-container">
      <div className="row">

        <div className="row">
          <div className="image-column col-md-4 col-sm-12" style={{
            verticalAlign: "middle", backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: "5px", padding: "0 20px"
          }} >
            <figure className="image" data-aos="fade-right" style={{ paddingTop: '10px' }}>
              <Image
                width={900}
                height={900}
                src="/images/collaboration.jpeg"
                alt="About"
                style={{ borderRadius: '15px', marginTop: '20px', marginRight: '20px' }}
              />
            </figure>

            <h3 style={{ textAlign: "center", paddingTop: "20px", fontWeight: "600", color: GlobalConfig.LogoOrg }}>
              Why Choose Us?</h3>
            <div className="sec-title" style={{ color: GlobalConfig.BgrClr1, fontFamily: GlobalConfig.Fnt1Fam, textAlign: "justify" }}>
              <ul className="list-style-five" >
                <li>We are experienced in talent management</li>
                <li>We have built an extensive global network</li>
                <li>We promote diversity & inclusivity</li>
                <li>We support community-focused collaboration</li>
              </ul>
            </div>
          </div>

          <div className="content-column col-md-8 col-sm-12">
            <div className="inner-column" data-aos="fade-left">
              <div className="sec-title">
                <h4 className="title" style={{ textAlign: "center", fontWeight: "600", color: GlobalConfig.Fgr1Clr }}>
                  How We Came To Be</h4>
                <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam, textAlign: "justify" }}>
                  <span>
                    As Canada’s economy surged and industries evolved, a pressing challenge emerged: a scarcity of skilled
                    professionals to meet the necessary increase in its growing workforce. At the same time, Canadian colleges and
                    universities are contributing increasingly significant benefits to the Canadian economy, as well as
                    making the country a cultural and research hub, which is a major driver of its long-term global competitiveness.
                    <br /> <br />
                    On the other hand, there is a large pool of skilled professionals and qualified international students who are
                    eager, able and ready to play a role Canada's future. Recognizing these trends and fueled by our
                    collective experience, a group of visionaries from diverse backgrounds came together for a common
                    purpose. Drawing from our own journeys as immigrants and professionals, we saw an opportunity to streamline
                    the process of seamlessly connecting the available talent in the global community with the growing needs of
                    Canadian employers and to effectively promote Canada's educational institutions as one of the top destination
                    of choice for international students. Thus, Future Fit International (FFI) was born.
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
              <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontFamily: GlobalConfig.Fnt1Fam, textAlign: "justify" }}>
                <span>
                  FFI is a globally networked company specifically established to efficiently and cost-effectively match job
                  seekers and international students with job and education opportunities in Canada. FFI works and partners closely
                  with Canadian businesses and employers, universities, colleges, and local and national government agencies.
                  Based out of Canada, FFI aims to meet Canadian employers' needs by creating a one-stop space for job posters
                  and job seekers to connect and exchange information, by facilitating the assessment of job applicants’
                  qualifications, mutually beneficial "right fit" and, subsequently, assisting job seekers in their transition
                  to their new life in Canada, ensuring a productive experience for both employers and employees. Likewise, FFI
                  works to promote Canadian colleges and universities as one of the best choices available to international
                  students and assisting applicants throughout the selection and application process. To provide an end-to-end
                  service to our clients, FFI offers: pre-screenings, interviews, credentials verification, document preparation,
                  support in job and school applications, company screening, immigration workshops and seminars,
                  government liaison services, faciliation of standard testing requirements, language translation,
                  orientation and training, travel and settlement processes, and more.
                  <br /><br />
                </span>
                <span> <strong> We work with: </strong></span>
                <ul className="list-style-five" >
                  <li>Employers in all industries that need to fill positions from global workforce.</li>
                  <li>Foreign-trained workers who are looking for job opportunities in Canada.</li>
                  <li>Canadian colleges and universities looking to recruit international students.</li>
                  <li>International students pursuing their education in Canadian institutions.</li>
                </ul> <br />
                <span> <strong> Company Structure: </strong></span> <br />
                <span>
                  The company, headquartered in Canada - with satellite offices in Ethiopia (current) and upcoming
                  expansions in Tanzania and Ghana - is designed to facilitate the strategic sourcing of skilled
                  labor and recruitment of international students to Canada. At the helm is the executive leadership
                  team overseeing operations, strategy and decision-making from Canada. Each satellite office operates under the guidance of country
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
