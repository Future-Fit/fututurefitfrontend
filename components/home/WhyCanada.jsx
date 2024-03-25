import React, { useEffect, useState } from 'react'; // Import React
import Image from "next/image";
import GlobalConfig from "@/Global.config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAfrica, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const WhyCanada = () => {

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

  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('accessToken') !== null;
  const userType = typeof window !== 'undefined' && parseInt(localStorage.getItem('userType'));


  // const isLoggedIn = localStorage.getItem('accessToken') !== null;
  // const userType = parseInt(localStorage.getItem('userType'));

  const iconMap = {
    "icon-visit": faEarthAfrica,
    "icon-study": faGraduationCap,
    "icon-work": faBriefcase,
  };

  const blockContent = [
    {
      id: 1,
      icon: "icon-visit",
      title: "Visit",
      text: "Find out what you need here",
      linkPath: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html',
      bgClass: "-blue",
      bgcolor: GlobalConfig.LogoOrg
    },
    {
      id: 2,
      icon: "icon-study",
      title: "Study",
      text: "International students are welcome",
      linkPath: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html',
      bgClass: "-red",
      bgcolor: GlobalConfig.LogoOrg
    },
    {
      id: 3,
      icon: "icon-work",
      title: "Work",
      text: "Job seekers can work in Canada",
      linkPath: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html',
      bgClass: "-yellow",
      bgcolor: GlobalConfig.LogoOrg
    },
  ];


  return (
    <section style={{ padding: "40px 20px" }}>
      <div className="auto-container">
        <div className="row justify-content-center">
          <div>
            <div className="sec-title text-center">
              <h2 style={{ color: '#fff' }}>Why Canada?</h2>
              <div className="text" style={{ color: "#fff", fontSize: "1.1em" }}>
                With it's thriving cities, stunning natural beauty, and welcoming environment, Canada offers something to everyone.
              </div>
            </div>
          </div>
        </div>
        {/* Start - Conditional rendering based on windowWidth */}
        {windowWidth < 768 ? (
          <div className="row">
            {blockContent.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="col-md-4 col-sm-12 mb-3" >
                  <div className="work-block -type-2 mb-0" >
                    <div className="inner-box" >
                      <div className="icon-wrap" >
                        <FontAwesomeIcon icon={iconMap[item.icon]} style={{ color: GlobalConfig.LogoBlu }} />
                      </div>
                      <a href={item.linkPath}><h5 style={{ color: item.bgcolor }}>{item.title}</h5></a>
                      <a href={item.linkPath} style={{ color: GlobalConfig.Fgr1Clr, fontSize: "1.1em" }}> {item.text} </a>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="row" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            {blockContent.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="col-lg-4 col-md-4 col-sm-12" style={{ flex: '1', margin: '0 10px' }}>
                  <div className="work-block -type-2 mb-0">
                    <div className="inner-box">
                      <div className="icon-wrap">
                        <FontAwesomeIcon icon={iconMap[item.icon]} style={{ color: GlobalConfig.LogoBlu }} />
                      </div>
                      <a href={item.linkPath}><h5 style={{ color: item.bgcolor }}>{item.title}</h5></a>
                      <a href={item.linkPath} style={{ color: GlobalConfig.Fgr1Clr }}> {item.text} </a>
                    </div>
                  </div>
                </div>
                {index < blockContent.length - 1 && (
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
        {/* End - Conditional rendering based on windowWidth */}
      </div>
    </section>
  );
};

export default WhyCanada;

