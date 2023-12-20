import React, { useEffect, useState } from 'react'; // Import React
import Link from "next/link";
import Image from "next/image";

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
      // text: `Search our database to explore opportunities or review profiles.`,
      // bgClass: "-blue"
    },
    {
      id: 2,
      icon: "icon-contact",
      title: "Create A Profile",
      // text: `Sign up to customize your experience.`,
      // bgClass: "-red"
    },
    {
      id: 3,
      icon: "icon-institution",
      title: "Let Us Help You with Your Vision",
      // text: `Sign in to build your profile or post jobs.`,
      // bgClass: "-yellow"
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
                <div className={`icon-wrap ${item.bgClass}`}>
                  <span className={`icon ${item.icon}`}></span>
                </div>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          </div>

          {/* Add an arrow after each item except the last one */}
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
            ):(
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
      <div className="btn-box text-center" style={{ marginTop: '10px' }}>
        <Link href="/service" className="theme-btn btn-style-one bg-blue">
          <span className="btn-title">Sign Up</span>
        </Link>
      </div>
    </>
  );
};

export default Block6;



// import Link from "next/link";
// import Image from "next/image";

// const Block6 = () => {
//   const blockContent = [
//     {
//       id: 1,
//       icon: "icon-case",
//       title: "Browse",
//       text: `Search our database to explore opportunities or review profiles.`,
//       bgClass: "-blue",
//       arrow: "/images/arrow-right.svg"
//     },
//     {
//       id: 2,
//       icon: "icon-contact",
//       title: "Register",
//       text: `Sign up to customize your experience.`,
//       bgClass: "-red",
//       arrow: "/images/arrow-right.svg"
//     },
//     {
//       id: 3,
//       icon: "icon-institution",
//       title: "Login",
//       text: `Sign in to build your profile or post jobs.`,
//       bgClass: "-yellow",
//     },
//   ];
//   return (
//     <>
//       {blockContent.map((item) => (
//         <div className="col-lg-4 col-md-4 col-sm-12" key={item.id}>
//           <div className="work-block -type-2 mb-0">
//             <div className="inner-box">
//               <div className={`icon-wrap ${item.bgClass}`}>
//                 <span className={`icon ${item.icon}`}></span>
//               </div>
//               <h5>{item.title}</h5>
//               <p>{item.text}</p>
//               {/* {item.arrow && (
//                 <Image
//                   src={item.arrow}
//                   width={50}
//                   height={50}
//                   alt="arrow icon"
//                 />
//               )} */}
//             </div>
//           </div>
//         </div>
//       ))}
      
//       <div className="btn-box text-center" style={{ marginTop: '10px' }}>
//         <Link href="/service" className="theme-btn btn-style-one bg-blue">
//           <span className="btn-title">Sign Up</span>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Block6;
