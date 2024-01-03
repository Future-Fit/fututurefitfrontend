import Link from "next/link";

const Block8 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "icon-drawing",
      title: "For Job Seekers",
      text: `Help You Find A Great Job in Canada and Beyond`,
      linkPath:'/service/job-seekers'

    },
    {
      id: 2,
      icon: "icon-task",
      title: "For Businesses",
      text: `Introduce Your Organization to Global Talent Pool`,
      linkPath:'/service/businesses'
    },
    {
      id: 3,
      icon: "icon-process",
      title: "For Students",
      text: `Facilitate Your College Applications`,
      linkPath:'/service/students'

    },
    {
      id: 4,
      icon: "icon-task",
      title: "For Universities/Colleges",
      text: `Promote Canadian Institutions Globally`,
      linkPath:'/service/universities-colleges'

    },
    {
      id: 5,
      icon: "icon-one-finger-click",
      title: "For Everyone",
      text: `Provide Travel, Visa, and Resettlement Services`,
      linkPath:'/service/travel-visa'

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
              <h5 className="title" >{item.title}</h5>
            </a>
            <p className="text" >{item.text}</p>
          </div>
        </div>
      ))}
      <style jsx>{`
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

        /* Add any other necessary styles here */
      `}</style>
    </>
  );
};

export default Block8;
