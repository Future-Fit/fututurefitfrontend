'use client'

import Link from "next/link";
import MobileSidebar from "./mobile-sidebar";
import Image from "next/image";
import { useState } from "react";


const MobileMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoveredItemStyle, setHoveredItemStyle] = useState({}); // State to manage inline style for hovered item
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // State to manage selected language

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLanguageChange = (language) => {
    // Function to handle language change
    setSelectedLanguage(language);
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


  return (
    // <!-- Main Header-->
    <header className="main-header main-header-mobile">
      <div className="auto-container" style={{boxShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'}}>
        {/* <!-- Main box --> */}
        <div className="inner-box">
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    width={150}
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
            <div className="login-box">
              <a
                href="#"
                className="call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
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

            <div className="dropdown" style={{marginRight:'35px'}}>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="languageDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    position: 'relative',
                    backgroundColor: '#4682B4',
                    borderColor: '#4682B4',
                    backgroundImage: 'none',
                    boxShadow: 'none',
                    borderRadius: '5px',
                    marginRight: '-100px'
                  }}
                >
                  <i className="fas fa-globe" style={{ marginRight: '5px' }}></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onMouseEnter={handleItemHover}
                      onMouseLeave={handleItemLeave}
                      onClick={() => handleLanguageChange('English')}
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onMouseEnter={handleItemHover}
                      onMouseLeave={handleItemLeave}
                      onClick={() => handleLanguageChange('Amharic')}
                    >
                      Amharic
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onMouseEnter={handleItemHover}
                      onMouseLeave={handleItemLeave}
                      onClick={() => handleLanguageChange('French')}
                    >
                      French
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
