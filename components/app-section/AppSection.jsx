import Image from "next/image";
import Link from "next/link";
import GlobalConfig from "@/Global.config";

const AppSection = () => {
  return (
    <div className="row">
      <div className="image-column col-40 col-md-12 col-sm-12" >
        {/* <div className="sec-title">
                <h2 style={{ color: GlobalConfig.Fgr1Clr }}>
                  About Us
                </h2>
              </div> */}

        <figure className="image" data-aos="fade-right" style={{ paddingTop: '10px' }}>
          <Image
            width={900}
            height={900}
            src="/images/collaboration.jpeg"
            alt="About"
            style={{ borderRadius: '15px', marginTop: '20px', marginRight: '20px' }}
          />
        </figure>
      </div>
      <div className="content-column col-60 col-md-12 col-sm-12">
        {/* <div className="inner-column" data-aos="fade-left"> */}
        <div className="inner-column">
          <div className="sec-title">
            <div className="text" style={{ color: GlobalConfig.Fgr1Clr, textAlign: "justify" }}>
              <span> Future Fit International (FFI) is a globally networked company established to efficiently
                match jobseekers and international students with job and education opportunities in Canada.
                FFI works closely with all stakeholders involved in this endeavor, working across borders,
                by partnering with Canadian businesses and employers, universities/colleges, local and national
                government agencies, jobseekers, international students and others connected to international
                skilled jobs and education recruitment process. <br /> <br />

                Based out of Canada, FFI aims to meet Canadian employers' needs by creating
                a space for employers and job seekers to exchange information, facilitating the assessment
                of job applicants’ qualifications and right fit, and, subsequently, assisting job seekers in
                their transition to their new life in Canada, ensuring a productive experience for both
                employers and employees. Likewise, FFI works to promote Canadian colleges and universities
                as one of the best choices available to international students, assisting them throughout the
                application process. Lastly, FFI provides crucial support in the areas of handling
                expatriates’ travel needs and resettlement after arriving in Canada.    <br/>  <br/></span>
              <br />
              <h3> We work with the following:</h3>
              <ul className="list-style-two" >
                <li>Canadian employers and all levels of government and industry to help backfill skilled positions that
                  have not been filled by Canadians.</li>
                <li>Foreign-trained workers to identify opportunities to work in Canada.</li>
                <li>Canadian colleges and universities looking to grow their international student populations.</li>
                <li>Foreign-based students hoping to pursue their educational ambitions in Canada.</li>
              </ul>

              <p> We provide an end-to-end experience for all of our clients: foreign students, foreign-trained workers,
                Canadian companies, and colleges and universities. These services include: pre-screenings, interviews,
                credentials and skills verification, document preparation services, work and school applications, company screening, immigration workshops and seminars, government liaison services,
                language testing, orientation and training, travel and settlement processes, and more. </p>

              <p> FFI is currently active in Canada and Ethiopia. We will be expanding to Ghana and Tanzania in 2024. </p>

              <p> Address: 168 Charlotte Street, Ottawa, Ontario K1N 8K6" </p>
            </div>
          </div>
          <div className="sec-title">
          </div>
        </div>
      </div>

    </div >
  );
};

export default AppSection;
