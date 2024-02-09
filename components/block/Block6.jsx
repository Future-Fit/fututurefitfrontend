import React, { useEffect, useState } from 'react'; // Import React
import Link from "next/link";
import Image from "next/image";
import GlobalConfig from "@/Global.config";

const Block6 = () => {

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowResize);
      }
    };
  }, []);
  const isMobile = windowWidth <= 767; // Set your mobile breakpoint here

  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('accessToken') !== null;
const userType = typeof window !== 'undefined' && parseInt(localStorage.getItem('userType'));


  // const isLoggedIn = localStorage.getItem('accessToken') !== null;
  // const userType = parseInt(localStorage.getItem('userType'));

  const blockContent = [
    {
      id: 1,
      icon: "icon-case",
      title: "Learn About Us",
      linkPath: '/about',

      // text: `Search our database to explore opportunities or review profiles.`,
      bgClass: "-blue",
      bgcolor: 'green'
    },
    {
      id: 2,
      icon: "icon-contact",
      title: "Sign Up",
      linkPath: '/login',

      // text: `Sign up to customize your experience.`,
      bgClass: "-red",
      bgcolor: "red"
    },
    {
      id: 3,
      icon: "icon-institution",
      title: "Login & Create Your Profile",
      // linkPath: '/candidates-dashboard/my-profile',
      linkPath: (isLoggedIn && userType === 4) ? '/candidates-dashboard/my-profile' : '/login',


      // text: `Sign in to build your profile or post jobs.`,
      bgClass: "-yellow",
      bgcolor: "blue"
    },
  ];

  const arrowRight = "/images/arrow-right.svg"; // URL of the arrow icon
  const arrowDown = "/images/arrow-down.svg"

  return (
    <>
      <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {blockContent.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="col-lg-4 col-md-4 col-sm-12" style={{ flex: '1', margin: '0 10px' }}>
              <div className="work-block -type-2 mb-0">
                <div className="inner-box">
                  <div className="icon-wrap">
                    <span className={`icon ${item.icon}`}></span>
                  </div>
                  <a href={item.linkPath}> <h5  style={{color:item.bgcolor}}> {item.title}</h5> </a>
                </div>
              </div>
            </div>
            {isMobile ? (
              <>
                {index < blockContent.length - 1 && (
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                      <Image src={arrowDown} width={50} height={50} alt="arrow icon" />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {index < blockContent.length - 1 && (
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                      <Image src={arrowRight} width={50} height={50} alt="arrow icon" />
                    </div>
                  </div>
                )}
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Block6;

