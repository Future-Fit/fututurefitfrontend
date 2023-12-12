'use client'

import Link from "next/link";
import MobileSidebar from "./mobile-sidebar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const MobileMenu = () => {
  const [navbar, setNavbar] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoveredItemStyle, setHoveredItemStyle] = useState({});
  const defaultLanguage = 'EN';
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  // Added state for modal
  const router = useRouter();
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  // const isLoggedIn = Boolean(localStorage.getItem("accessToken")) && Boolean(localStorage.getItem("userType"));


  const [headerStyle, setHeaderStyle] = useState({
    backgroundColor: '#3B578E',
    boxShadow: 'none',
    position: 'fixed',
    zIndex: 999,
    willChange: 'transform',
    width: '100%', // Ensure full width
    top: 0 // Ensure it sticks to the top
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setHeaderStyle({
        backgroundColor: '#3B578E',
        boxShadow: scrolled ? '0 2px 6px rgba(0, 0, 0, 0.5)' : 'none',
        position: 'fixed',
        zIndex: 999,
        willChange: 'transform',
        width: '100%',
        top: 0
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Call handler right away so state gets updated with initial window scroll
    handleScroll();

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const accessToken = localStorage.getItem("accessToken");
  //     const userType = localStorage.getItem("userType");

  //     if (accessToken && userType) {
  //       if (userType === "4") {
  //         // Redirect candidate
  //         setShowModal(false);
  //         router.push("/candidates-dashboard/dashboard");
  //       } else if (userType === "3") {
  //         // Redirect employer
  //         setShowModal(false);
  //         router.push("/employers-dashboard/dashboard");
  //       }
  //     } else {
  //       setShowModal(true); // Show modal if not logged in
  //     }
  //   }
  // }, []);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('selectedLanguage');
      if (storedLanguage) {
        setSelectedLanguage(storedLanguage);
      }
    }
  }, []);
  const toggleModal = ()=>{
    const storedLanguage = localStorage.getItem('');
    
const prev = showModal;
setShowModal(!prev);    
  }
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', language);
    }
    console.log(`Selected Language: ${language}`);
  };

  const handleItemHover = () => {
    // Set inline style for hovered item
    setHoveredItemStyle({
      backgroundColor: '#f0f0f0', // Change to your desired hover background color
      // paddingRight: '15px', // Add padding for smooth transition
      // borderRadius: '10px 5px 5px 10px', // Rounded corners on the right side
    });
  };

  const handleItemLeave = () => {
    // Clear inline style when mouse leaves the item
    setHoveredItemStyle({});
  };

  const handleLoginRedirect = (e) => {
    const accessToken = localStorage.getItem("accessToken");
    const userType = localStorage.getItem("userType");
    const modalElement = document.getElementById("login-modal");
    if (accessToken && userType) {
      e.preventDefault();
      if (userType === "4") {
        modalElement.style.display = "none";
        const modalBackDrop =  document.getElementsByClassName('modal-backdrop');
        modalBackDrop[0].style.display = "none";
        router.push("/candidates-dashboard/my-profile");
      } else if (userType === "3") {
        modalElement.style.display = "none";
        const modalBackDrop =  document.getElementsByClassName('modal-backdrop');
        modalBackDrop[0].style.display = "none";
        router.push("/employers-dashboard/dashboard");
      }
    } 
  };

  // style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.5)' }}

  return (
    // <!-- Main Header-->
    <header className={`main-header main-header-mobile  ${navbar ? "fixed-header animated slideInDown" : ""}`}
      style={headerStyle}>
      <div className="auto-container">
        {/* <!-- Main box --> */}
        <div className="inner-box">
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    width={50}
                    height={50}
                    src="/images/logo-no-background.png"
                    alt="FFI"
                  />
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            <MobileSidebar />
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            {/* <div className="login-box">
              <a
                href="#"
                className="call-modal"
                data-bs-toggle={isLoggedIn ? "" : "modal"}
                data-bs-target={isLoggedIn ? "" : "#loginPopupModal"}
                onClick={handleLoginRedirect}
              >
                <span className="icon icon-user"></span>
              </a>
            </div> */}
            <div className="login-box">
              <a
                href="#"
                className="call-modal"
                data-bs-toggle="modal" 
                data-bs-target="#loginPopupModal"
                onClick={handleLoginRedirect}
              >
                <span className="icon icon-user"></span>
              </a>
            </div>
            {/* login popup end */}

            <a
              href="#"
              className="mobile-nav-toggler"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              onClick={handleToggleSidebar}
            >
              <span className="flaticon-menu-1"></span>
            </a> 
            {/* right humberger menu */}

            <div className="dropdown" style={{ marginRight: '50px' }}>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  position: 'relative',
                  backgroundColor: '#3B578E',
                  borderColor: '#3B578E',
                  backgroundImage: 'none',
                  boxShadow: 'none',
                  borderRadius: '5px',
                  marginRight: '-100px'
                }}
              >
                <i className="fas fa-globe" style={{ marginRight: '5px' }}></i>
                {selectedLanguage}
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onMouseEnter={handleItemHover}
                    onMouseLeave={handleItemLeave}
                    onClick={() => handleLanguageChange('EN')}
                  >
                    EN
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onMouseEnter={handleItemHover}
                    onMouseLeave={handleItemLeave}
                    onClick={() => handleLanguageChange('FR')}
                  >
                    FR
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onMouseEnter={handleItemHover}
                    onMouseLeave={handleItemLeave}
                    onClick={() => handleLanguageChange('AM')}
                  >
                    AM
                  </a>
                </li>
                {/* Add more languages as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileMenu;
