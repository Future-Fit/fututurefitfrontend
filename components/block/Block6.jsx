import React, { useEffect, useState } from 'react'; // Import React
import Link from "next/link";
import Image from "next/image";
import GlobalConfig from "@/Global.config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSign, faSignIn, faUser, faUserEdit, faArrowDown } from '@fortawesome/free-solid-svg-icons';

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

  const arrowIconUrl = windowWidth < 576 ? "../images/arrow-down.svg" : "../images/arrow-right.svg";

  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('accessToken') !== null;
  const userType = typeof window !== 'undefined' && parseInt(localStorage.getItem('userType'));


  // const isLoggedIn = localStorage.getItem('accessToken') !== null;
  // const userType = parseInt(localStorage.getItem('userType'));

  const iconMap = {
    "icon-about": faUser,
    "icon-sign": faSignIn,
    "icon-profile": faUserEdit,
  };

  const blockContent = [
    {
      id: 1,
      icon: "icon-about",
      title: "Learn About Us",
      linkPath: '/about',

      // text: `Search our database to explore opportunities or review profiles.`,
      bgClass: "-blue",
      bgcolor: GlobalConfig.LogoOrg
    },
    {
      id: 2,
      icon: "icon-sign",
      title: "Sign Up",
      linkPath: '/register',

      // text: `Sign up to customize your experience.`,
      bgClass: "-red",
      bgcolor: GlobalConfig.LogoOrg
    },
    {
      id: 3,
      icon: "icon-profile",
      title: "Login & Create Your Profile",
      // linkPath: '/candidates-dashboard/my-profile',
      linkPath: (isLoggedIn && userType === 4) ? '/candidates-dashboard/my-profile' : '/login',
      // text: `Sign in to build your profile or post jobs.`,
      bgClass: "-yellow",
      bgcolor: GlobalConfig.LogoOrg
    },
  ];

  const arrowRight = "/images/arrow-right.svg"; // URL of the arrow icon
  const arrowDown = "/images/arrow-down.svg"

  return (
    <>
      <section style={{padding: "40px 20px"}}>
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="sec-title text-center">
                <h2 style={{ color: '#fff', paddingBottom: '30px' }}>Become A Member</h2>
              </div>
            </div>
          </div>
          {/* End .row */}
          <div className="row grid-base" data-aos="fade-up"></div>
          <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {blockContent.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="col-lg-4 col-md-4 col-sm-12" style={{ flex: '1', margin: '0 10px' }}>
                  <div className="work-block -type-2 mb-0">
                    <div className="inner-box">
                      <div className="icon-wrap">
                        <FontAwesomeIcon icon={iconMap[item.icon]} style={{ color: GlobalConfig.LogoBlu }} />
                      </div>
                      <a href={item.linkPath}> <h5 style={{ color: item.bgcolor }}> {item.title}</h5> </a>
                    </div>
                  </div>
                </div>
                {index < blockContent.length - 1 && (
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                      <Image src={arrowIconUrl} width={50} height={50} alt="arrow icon" />
                    </div>
                  </div>
                )}
                {/* )} */}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section >
    </>
  );
};

export default Block6;

