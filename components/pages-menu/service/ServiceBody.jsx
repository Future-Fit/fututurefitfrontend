import Link from "next/link";
import GlobalConfig from "@/Global.config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faO } from "@fortawesome/free-solid-svg-icons";

import ServicesProvided from "@/components/home/ServicesProvided";

const iconMap = {
  "icon-training": faO,
};

const blockContent = [
  {
    id: 1,
    icon: "icon-training",
    title: "Training & Other",
    text: `Training, Travel & Settlement Services`,
    linkPath: '/service/training'

  }
];

const ServiceBody = () => {

  return (
    <div className="auto-container" >
      <div className="row">
        <div className="content-column col-100 col-md-12 col-sm-12">
          <div className="text" style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em", textAlign: "justify", lineHeight: "1.4em" }}>
            <span>
              We group our clients in two major categories:
              Business-to-Business (B2B) clients and Business-to-Customer (B2C) clients. <br /> <br />
              Our B2B clients are primarily Canadian businesses/employers and academic institution. We use our
              global network of resources to support Canadian businesses to recruit skilled workers globally.
              Similarly, we support Canadian colleges and universities to recruit international students by acting
              as their agent and representative in locations ouside of Canada. Our B2C clients are individuals and
              professionals residing outside of Canada seeking to enter the Canadian skilled labor workforce
              and international students who want to pursue their education in Canadian institutions. <br /> <br />
              To all of our clients, we pledge to provide our dedicated, professional and integrated services
              with utmost integrity. In addition to the core services we provide, we also provide training, travel
              and settlement services.
              Please browse through each category of services to learn more about the details and how you
              can connect with us to inquire for further information. <br />
              <br /> <br />
            </span>
          </div>

          <ServicesProvided />

          {/* <div className="parent-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px' }}> */}
            {/* <div className="inner-column" style={{ display: "grid", justifyContent: "center" }}> */}
              <div className="list" style={{ display: "grid", alignSelf: "center",
                backgroundColor: GlobalConfig.BgrClr2, borderRadius: '10px', boxShadow: "0px 0px 10px rgba(0,0,0,.2)",
                width: "340px", height: "fit-content", padding: "0px 10px", margin: "30px 30px"
              }}>
                {blockContent.map((item) => (
                  <div key={item.id}>
                    <div className="work-block -type-4" style={{
                      backgroundColor: GlobalConfig.BgrClr2,
                      padding: "10px 10px", minHeight: '180px', textAlign: 'left'
                    }}>
                      <a href={item.linkPath} className="block-content" style={{ display: "grid", justifyItems: "center", textAlign: 'left' }} >
                        <div className="icon-wrap">
                          <FontAwesomeIcon icon={iconMap[item.icon]} style={{ color: GlobalConfig.LogoBlu }} />
                        </div>
                        <h5 className="title" style={{ color: GlobalConfig.BgrClr1, textAlign: 'left' }}>{item.title} </h5>
                        <p className="text" style={{ color: GlobalConfig.Fnt1Clr, textAlign: 'left' }}>{item.text}</p>
                        <div style={{ position: 'absolute', left: '0px', bottom: '10px' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="-5 -5 25 25">
                            <path
                              stroke={GlobalConfig.LogoOrg} d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            {/* </div> */}
          {/* </div> */}

        </div>
      </div>
    </div >
  );
};

export default ServiceBody;

