'use client'

import Link from "next/link";
import MobileSidebar from "./mobile-sidebar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GlobalConfig from "@/Global.config";
import { debounce } from "lodash";
import axios from 'axios';
import Autosuggest from "react-autosuggest";

const MobileMenu = () => {
  const [navbar, setNavbar] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [hoveredItemStyle, setHoveredItemStyle] = useState({});
  const defaultLanguage = 'EN';
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  // const loggedInUserId = typeof window !== 'undefined' ? localStorage.getItem("loggedInUserId") : null;

  const [searchValue, setSearchValue] = useState('');
  const [jobPostings, setJobPostings] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [filteredPostings, setFilteredPostings] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userType = localStorage.getItem("userType");
    const storedLoggedInUserId = localStorage.getItem("loggedInUserId");
    

    if (accessToken && userType && storedLoggedInUserId) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const router = useRouter();
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [headerStyle, setHeaderStyle] = useState({
    backgroundColor: GlobalConfig.BgrClr,
    boxShadow: 'none',
    position: 'fixed',
    zIndex: 999,
    willChange: 'transform',
    width: '100%', // Ensure full width
    top: 0 // Ensure it sticks to the top
  });

  const clearSession = () => {
    try {
      console.log("Clearing session...");
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userType');
      localStorage.removeItem('loggedInUserId');

      console.log("Session cleared successfully.");
    } catch (error) {
      console.error("Error clearing session:", error);
    }
  };

  const handleLogout = () => {
    clearSession()
    window.location.href = '/';
  };

  const handleProfileRedirect = () => {
    const userType = localStorage.getItem("userType");
    if (userType === "4") {
      router.push("/candidates-dashboard/my-profile");
    } else if (userType === "3") {
      router.push("/employers-dashboard/dashboard");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // This will check if the user has scrolled more than 10px
      const scrolled = window.scrollY > 10;
      setHeaderStyle({
        backgroundColor: GlobalConfig.BgrClr,
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


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('selectedLanguage');
      if (storedLanguage) {
        setSelectedLanguage(storedLanguage);
      }
    }
  }, []);

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
      backgroundColor: '#f0f0f0',
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
    const modalBackDrop = document.getElementsByClassName('modal-backdrop');
    const body = document.getElementsByTagName("body");

    

    if (accessToken && userType) {
      e.preventDefault();
      if (userType === "4") {
        modalElement.style.display = "none";
        modalBackDrop[0].style.display = "none";
        body[0].classList.remove("modal-open");
        body[0].style.overflow = "auto";
        router.push("/candidates-dashboard/my-profile");
      } else if (userType === "3") {
        modalElement.style.display = "none";
        modalBackDrop[0].style.display = "none";
        body[0].classList.remove("modal-open");
        body[0].style.overflow = "auto";
        router.push("/employers-dashboard/dashboard");
      }
    }
  };

  const [searchExpanded, setSearchExpanded] = useState(false);
  // const [iconsShifted, setIconsShifted] = useState(false);


  const toggleSearch = () => {
    setSearchExpanded(!searchExpanded);
    // setIconsShifted(!iconsShifted);

  };

  const onChange = (event, { newValue }) => {
    setSearchValue(newValue);
  };

  const getSuggestions = async (value) => {
    if (!value) {
      setSuggestions([]);
      return;
    }

    try {
      // Modify this API call to match your backend's filtering capabilities
      const response = await axios.get(
        `https://api.futurefitinternational.com/jobpost?job_title=${value}`
      );
      // Assuming the API returns an array of job postings
      const filteredSuggestions = response.data
        .filter(post => post.job_title.toLowerCase().includes(value.toLowerCase()))
        .map(post => post.job_title);

      setSuggestions(filteredSuggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
    }
  };


  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = async (event, { suggestionValue }) => {
    try {
      const response = await axios.get(
        `https://api.futurefitinternational.com/jobpost?job_title=${suggestionValue}`
      );
      if (response.data && response.data.length > 0) {
        // Assuming the first result is the desired one
        const jobId = response.data[0].id;

        router.push(`/job-single-v1/${jobId}`);
      } else {
        console.error('No job postings found for the selected suggestion.');
      }
      // setSearchResults(response.data);
      // router.push(`/search-results?query=${suggestionValue}`);

    } catch (error) {
      console.error('Error fetching job postings:', error);
    }
  };
  const debouncedGetSuggestions = debounce(getSuggestions, 300);

  const onSuggestionsFetchRequested = ({ value }) => {
    debouncedGetSuggestions(value);
  };

  const inputProps = {
    placeholder: 'Search...',
    value: searchValue,
    onChange: onChange
  };

  const jobList = searchValue ? filteredPostings : [];


  useEffect(() => {
    // Fetch job postings from the API
    const fetchJobPostings = async () => {
      try {
        const response = await axios.get('https://api.futurefitinternational.com/jobpost');
        setJobPostings(response.data);
      } catch (error) {
        console.error('Error fetching job postings:', error);
      }
    };

    fetchJobPostings();
  }, []);

  return (
    // <!-- Main Header-->
    <header className={`main-header main-header-mobile  ${navbar ? "fixed-header" : ""}`}
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
                    src={GlobalConfig.MobLog}
                    alt="FFI Logo"
                  />
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            <MobileSidebar />
            {/* <!-- Main Menu End--> */}
          </div>

          <div className="outer-box" style={{ display: 'flex', alignItems: 'center' }}>


            {loggedIn ? (
              <div className="dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="login-box" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown" style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="icon icon-user"></span>
                  </a>
                  <div className="dropdown-menu" style={{ position: 'absolute', top: '100%', left: 0 }}>
                    <a className="dropdown-item" href="#" onClick={handleProfileRedirect}>My Profile</a>
                    <a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="login-box" style={{ display: 'flex', alignItems: 'center' }}>
                <a href="#" className="call-modal" data-bs-toggle="modal" data-bs-target="#loginPopupModal" onClick={handleLoginRedirect}>
                  <span className="icon icon-user"></span>
                </a>
              </div>
            )}
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

            <div className="search-container d-flex align-items-center" style={{position: 'relative'}}>
                <button
                  className="theme-btn search-button"
                  onClick={toggleSearch}
                  style={{ paddingRight: '5px', paddingLeft: '5px' }}
                >
                  <i className="fas fa-search" style={{ color: 'white' }}></i>
                </button>

                {searchExpanded && (
                  <div>
                    <Autosuggest
                      suggestions={suggestions}
                      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                      onSuggestionsClearRequested={onSuggestionsClearRequested}
                      onSuggestionSelected={onSuggestionSelected}
                      getSuggestionValue={(suggestion) => suggestion}
                      renderSuggestion={(suggestion) => <div>{suggestion}</div>}
                      inputProps={inputProps}
                    />
                    {jobList.length > 0 && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',  // Position it right below the input field
                        left: 0,
                        width: '100%', // Match the width with the input field
                        zIndex: 1000,  // Ensure it's on top of other elements
                        background: 'white', // Optional: for better visibility
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' // Optional: for a drop-down effect
                      }}>
                        {searchResults.map((result) => (
                          <div key={result.id}>
                            <h3>{result.job_title}</h3>
                            <p>{result.job_description}</p>
                            {/* Other job details */}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>


            <div className="dropdown" style={{ marginRight: '50px' }}>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  position: 'relative',
                  backgroundColor: GlobalConfig.BgrClr,
                  borderColor: GlobalConfig.BgrClr,
                  backgroundImage: 'none',
                  boxShadow: 'none',
                  borderRadius: '5px',
                  marginRight: '-90px'
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
