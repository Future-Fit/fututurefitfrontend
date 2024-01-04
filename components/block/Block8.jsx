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
        <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
          <div className="work-block -type-4">
            <a href={item.linkPath} className="block-content">
              <div className="icon-wrap">
                <span className={`icon ${item.icon}`}></span>
              </div>
              <h5 className="title">{item.title}</h5>

              <p className="text">{item.text}</p>

              <span className="circle-arrow">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 27C21.6274 27 27 21.6274 27 15C27 8.37258 21.6274 3 15 3C8.37258 3 3 8.37258 3 15C3 21.6274 8.37258 27 15 27Z"
                    fill="#fff"
                    stroke={GlobalConfig.BgrClr}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 8L22 15L15 22"
                    stroke={GlobalConfig.BgrClr}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
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
