'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import './dropdownremover'
import { FaUser } from 'react-icons/fa';

const DefaulHeader2 = () => {
  const [navbar, setNavbar] = useState(true);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [hoveredItemStyle, setHoveredItemStyle] = useState({}); // State to manage inline style for hovered item
  const defaultLanguage = 'EN';
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const loggedInUserId = typeof window !== 'undefined' ? localStorage.getItem("loggedInUserId") : null;

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem('selectedLanguage', language);
    // console.log(`Selected Language: ${language}`);
  };


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('selectedLanguage');
      if (storedLanguage) {
        setSelectedLanguage(storedLanguage);
      }
    }
  }, []);

  const [headerStyle, setHeaderStyle] = useState({
    backgroundColor: '#3B578E',
    boxShadow: 'none',
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setNavbar(scrolled);

      // Update header style based on scroll
      const updatedHeaderStyle = {
        backgroundColor: scrolled ? '#3B578E' : '#3B578E',
        boxShadow: scrolled ? '0 1px 3px rgba(0, 0, 0, 0.5)' : 'none',
      };
      setHeaderStyle(updatedHeaderStyle);
    };

    // Initial check for scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemHover = () => {
    // Set inline style for hovered item
    setHoveredItemStyle({
      backgroundColor: '#f0f0f0',
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
                    width={70}
                    height={70}
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
              {loggedInUserId ? (
                // If user is logged in, display user profile link

                <a
                  href="#"
                  className="theme-btn btn-style-six call-modal"
                  onClick={() => router.push('candidates-dashboard/dashboard')}
                >
                  <i className="fas fa-user" style={{ fontSize: '22px', color: 'white' }}></i>
                </a>
              ) : (
                <a
                  href="#"
                  className="theme-btn btn-style-six call-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#loginPopupModal"
                  onClick={handleLoginRedirect}
                >
                  Sign In / Sign Up
                </a>
              )}
              <div className="dropdown">

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
      </div>
    </header>
  );
};

export default DefaulHeader2;
