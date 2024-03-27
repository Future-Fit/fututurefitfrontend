import React, { useEffect, useState } from 'react'; // Import React
import Image from "next/image";
import GlobalConfig from "@/Global.config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAfrica, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const WhyCanada = () => {

  const [windowWidth, setWindowWidth] = useState(0);

  const [hoveredItem, setHoveredItem] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

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

const handleMouseEnter = (itemId, event) => {
    setHoveredItem(itemId);
    setPopoverPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
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
      linkPath: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html',
      bgcolor: GlobalConfig.LogoOrg,
      popupDetail: "Visit Visit Visit Visit Visit Visit Visit Visit Visit"
    },
    {
      id: 2,
      icon: "icon-study",
      title: "Study",
      linkPath: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html',
      bgcolor: GlobalConfig.LogoOrg,
      popupDetail: "Study Study Study Study Study Study Study Study Study"
    },
    {
      id: 3,
      icon: "icon-work",
      title: "Work",
      linkPath: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html',
      bgcolor: GlobalConfig.LogoOrg,
      popupDetail: "Work Work Work Work Work Work Work Work Work Work"
    },
  ];


  return (
    <section style={{ padding: "40px 20px" }}>
      <div className="auto-container">
        <div className="row justify-content-center">
          <div>
            <div className="sec-title text-center">
              <h2 style={{ color: '#fff' }}>Why Canada?</h2>
              <div className="text" style={{ color: "#fff", fontSize: "1.2em" }}>
                Thriving cities, stunning natural beauty, welcoming environment...
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
                  <div className="work-block -type-2 mb-0" onMouseEnter={(event) => handleMouseEnter(item.id, event)}
                  onMouseLeave={handleMouseLeave}>
                    <div className="inner-box" >
                      <div className="icon-wrap" >
                        <FontAwesomeIcon icon={iconMap[item.icon]} style={{ color: GlobalConfig.LogoBlu }} />
                      </div>
                      <a href={item.linkPath} style={{ color: item.bgcolor, fontSize: "1.4em", fontWeight: "bold" }}> {item.title} </a>
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
                  <div className="work-block -type-2 mb-0" onMouseEnter={(event) => handleMouseEnter(item.id, event)}
                  onMouseLeave={handleMouseLeave}>
                    <div className="inner-box">
                      <div className="icon-wrap">
                        <FontAwesomeIcon icon={iconMap[item.icon]} style={{ color: GlobalConfig.LogoBlu }} />
                      </div>
                      <a href={item.linkPath} style={{ color: item.bgcolor, fontSize: "1.4em", fontWeight: "bold" }}> {item.title} </a>
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

        {/* {hoveredItem !== null && (
          <div
            className="popover"
            style={{
              position: 'fixed',
              top: Math.max(popoverPosition.y, 0),
              left: Math.max(popoverPosition.x, 0),
              transform: 'translate(-50%, -100%)',
              backgroundColor: 'white',
              padding: '10px',
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
              zIndex: 9999,
              visibility: 'visible',
            }}
          >
            {blockContent.find(item => item.id === hoveredItem)?.popupDetail}
          </div>
        )} */}
      </div>
    </section>
  );
};

export default WhyCanada;

