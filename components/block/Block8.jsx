import GlobalConfig from "@/Global.config";
import Link from "next/link";

const Block8 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "icon-drawing",
      title: "For Job Seekers",
      text: `Help You Find A Great Job in Canada`,
      linkPath: '/service/job-seekers'

    },
    {
      id: 2,
      icon: "icon-task",
      title: "For Businesses",
      text: `Introduce Your Organization to Global`,
      linkPath: '/service/businesses'
    },
    {
      id: 3,
      icon: "icon-process",
      title: "For Students",
      text: `Facilitate Your College Applications`,
      linkPath: '/service/students'

    },
    {
      id: 4,
      icon: "icon-task",
      title: "For Universities/Colleges",
      text: `Promote Canadian Institutions Globally`,
      linkPath: '/service/universities-colleges'

    },
    {
      id: 5,
      icon: "icon-one-finger-click",
      title: "For Everyone",
      text: `Provide Travel, Visa, and Resettlement`,
      linkPath: '/service/travel-visa'

    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={item.id} >
          <div className="work-block -type-4" style={{minHeight:'200px',textAlign:'left'}}>
            <a href={item.linkPath} className="block-content"  style={{textAlign:'left'}} >
              <div className="icon-wrap">
                <span className={`icon ${item.icon}`}></span>
              </div>
              <h5 className="title"  style={{textAlign:'left'}}>{item.title}</h5>

              <p className="text"  style={{textAlign:'left'}}>{item.text}</p>
          
            <div style={{position:'absolute' , left:'10px',bottom:'10px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="-5 -5 25 25">
              <path   
                     stroke={GlobalConfig.BgrClr}   d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
              </svg>
              
            </div>

              
        
            </a>
          </div>
        </div>
      ))}
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
