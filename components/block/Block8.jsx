import GlobalConfig from "@/Global.config";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faNetworkWired, faO, faSchool, faTasks, faUniversity } from "@fortawesome/free-solid-svg-icons";


const Block8 = () => {

  const iconMap = {
    "icon-drawing": faBriefcase,
    "icon-task": faSchool,
    "icon-institution": faUniversity,
    "icon-one-finger-click": faO,
  };

  const blockContent = [
    {
      id: 1,
      icon: "icon-drawing",
      title: "Job Seekers",
      text: `Find A Great Job in Canada`,
      linkPath: '/service/job-seekers'

    },
    {
      id: 2,
      icon: "icon-task",
      title: "Students",
      text: `Attend the Best Universities in Canada`,
      linkPath: '/service/students'
    },
    {
      id: 3,
      icon: "icon-institution",
      title: "Businesses & Universities",
      text: `Recruit Talent from Global Audiences`,
      linkPath: '/service/businesses'

    },
    {
      id: 4,
      icon: "icon-one-finger-click",
      title: "Other Services",
      text: `Training, Travel & Resettlement Services`,
      linkPath: '/service/travel-visa'

    }
  ];
  return (
    <>


      <section className="layout-pt-10 layout-pb-30" style={{ background: GlobalConfig.BgrClr2 }}>
        <div className="auto-container" style={{ paddingBottom: '0px', paddingTop: '0px' }}>
          <div className="sec-title text-center" >
            <h2>Services</h2>
            {/* <div style={{ color: '#5a5a5a', fontSize: '16px' }} className="text">
              We provide unparalleled end-to-end services!
            </div> */}
          </div>
          {/* End sec-title */}

          <div className="row grid-base " data-aos="fade-up">

            {blockContent.map((item) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={item.id} >
                <div className="work-block -type-4" style={{ minHeight: '200px', textAlign: 'left' }}>
                  <a href={item.linkPath} className="block-content" style={{ textAlign: 'left' }} >
                    <div className="icon-wrap">
                      {/* <span className={`icon ${item.icon}`}></span> */}
                      <FontAwesomeIcon icon={iconMap[item.icon]} style={{ color: GlobalConfig.LogoBlu }} />
                    </div>
                    <h5 className="title" style={{ color: GlobalConfig.BgrClr1, textAlign: 'left' }}>{item.title} </h5>
                    <p className="text" style={{ color: GlobalConfig.Fnt1Clr, textAlign: 'left' }}>{item.text}</p>
                    <div style={{ position: 'absolute', left: '10px', bottom: '10px' }}>
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
        </div>
      </section>

      <style jsx>{`
        .work-block {
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          background-color: #fff; /* Change the background color as needed */
          margin-bottom: 20px; /* Adjust spacing between blocks */
        }

        .block-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #fff;
          text-decoration: none; /* Remove default link underline */
        }

        .icon-wrap {
          margin-bottom: 10px; /* Adjust as needed */
        }

        .title {
          margin: 0;
          color: "#fff"
        }

        .text {
          text-align: justify;
          color: #fff;
        }
        .go-arrow {
          display: block;
          margin-top: 10px;
          font-size: 24px; /* Adjust size as needed */
          color: #fff;
        }
        .circle-arrow {
          display: block;
          margin-top: 10px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Add any other necessary styles here */
      `}</style>
    </>
  );
};

export default Block8;
