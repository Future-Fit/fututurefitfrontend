
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import './dropdownremover'

const DefaulHeader2 = () => {
  const [navbar, setNavbar] = useState(true);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // State to manage selected language
  const [hoveredItemStyle, setHoveredItemStyle] = useState({}); // State to manage inline style for hovered item


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


  const router = useRouter();

  const changeBackground = () => {
    const scrolled = window.scrollY > 10;
    if (scrolled !== navbar) {
      setNavbar(scrolled);
    }
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeBackground);
  //   return () => {
  //     window.removeEventListener("scroll", changeBackground);
  //   };
  // }, [navbar]);

  const handleLoginRedirect = (e) => {
    // Check for logged-in user on button click
    const accessToken = localStorage.getItem("accessToken");
    const userType = localStorage.getItem("userType");

    if (accessToken && userType) {
      e.preventDefault(); // Prevent default link behavior
      if (userType === "1") {
        router.push("/candidates-dashboard/dashboard");
      } else if (userType === "2" || userType === "3" || userType === "4") {
        router.push("/employers-dashboard/dashboard");
      }
    } else {
      setShowModal(true); // Show the modal if no logged-in user is found
    }
  };

  const headerStyle = {
    backgroundColor: navbar ? '#4682B4' : '#4682B4',
    boxShadow: navbar ? '0 1px 3px rgba(0, 0, 0, 0.5)' : 'none',
    // transition: 'background-color 0.3s ease',
  };

  return (
    <header
      className={`main-header header-style-two ${navbar ? "fixed-header animated slideInDown" : ""
        }`}
      style={headerStyle} // Apply the inline style here
    >
      <div className="auto-container">
        {/* Rest of your header content */}
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    width={150}
                    height={50}
                    src="/images/logo-no-background.png"
                    alt="Future Fit Logo"
                  />
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            <HeaderNavContent />
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            <div className="d-flex align-items-center btn-box2">
              <a
                href="#"
                className="theme-btn btn-style-six call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
                onClick={handleLoginRedirect}
              >
                Sign In / Sign Up
              </a>
              <div className="dropdown">

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
      </div>
    </header>
  );
};

export default DefaulHeader2;
