import React, { useEffect, useState } from 'react'; // Import React
import Link from "next/link";
import Image from "next/image";
import ArrowRightImage from '../../public/images/arrow-right.svg'; // Import the arrow-right.svg as a React component
import ArrowDownImage from '../../public/images/arrow-down.svg'; // Import the arrow-down.svg as a React component

const ColoredArrowDown = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const ColoredArrowRight = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

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


  const blockContent = [
    {
      id: 1,
      icon: "icon-case",
      title: "Learn About Us",
      linkPath: '/about'

      // text: `Search our database to explore opportunities or review profiles.`,
      // bgClass: "-blue"
    },
    {
      id: 2,
      icon: "icon-contact",
      title: "Sign Up & Create A Profile",
      linkPath: '/login'

      // text: `Sign up to customize your experience.`,
      // bgClass: "-red"
    },
    {
      id: 3,
      icon: "icon-institution",
      title: "Explore All the Opportunities",
      linkPath: '/login'

    },
  ];

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
                  <a href={item.linkPath}>
                    <h5>{item.title}</h5>
                  </a>
                </div>
              </div>
            </div>
            {isMobile ? (
              <>
                {index < blockContent.length - 1 && (
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                      <ColoredArrowDown fill={'red'}/>
                      {/* <Image src={ArrowDownImage} width={50} height={50} alt="arrow icon" style={{ fill: 'red' }} /> */}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {index < blockContent.length - 1 && (
                  <div className="col-lg-1 col-md-1 col-sm-1">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                      <ColoredArrowRight fill={'red'}/>
                      {/* <Image src={ArrowRightImage} width={50} height={50} alt="arrow icon" style={{ fill: 'red' }} /> */}
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

