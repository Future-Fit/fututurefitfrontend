'use client'

import Link from "next/link";
import MobileSidebar from "./mobile-sidebar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import GlobalConfig from "@/Global.config";
import { debounce } from "lodash";
import axios from 'axios';
import Autosuggest from "react-autosuggest";
import apiConfig from "@/app.config";
import { useDispatch, useSelector } from "react-redux";
import { clearSession } from "../common/form/login/sessionHandler";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { usePathname, useRouter } from "next/navigation";




const MobileMenu = () => {
  const [navbar, setNavbar] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [hoveredItemStyle, setHoveredItemStyle] = useState({});
  const defaultLanguage = 'EN';
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const searchContainerRef = useRef(null);
  const { cart } = useSelector((state) => state.shop) || {};
  const [searchValue, setSearchValue] = useState('');
  const [jobPostings, setJobPostings] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [filteredPostings, setFilteredPostings] = useState([]);
  const [suggestionValue, setSuggestionValue] = useState('');
  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('accessToken') !== null; // Check if user is logged in
  const [userDetail, setUserDetail] = useState(null);

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
    backgroundColor: GlobalConfig.BgHeader,
    color: 'white',
    boxShadow: 'none',
    position: 'fixed',
    zIndex: 999,
    willChange: 'transform',
    width: '100%', // Ensure full width
    top: 0 // Ensure it sticks to the top
  });


  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      clearSession();
      return
    } else {
      return
    }
  };

  const handleProfileRedirect = () => {
    const userType = localStorage.getItem("userType");
    if (userType === "4") {
      // router.push("/jobseeker-dashboard/my-profile");
      window.location.reload();
    } else if (userType === "3") {
      // router.push("/employers-dashboard/dashboard");
      window.location.reload();
    } else if (userType === "5") {
      // router.push("/student-dashboard/my-profile");
      window.location.reload();
    } else if (userType === "1") {
      // router.push("/admin-dashboard/dashboard");
      window.location.reload();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // This will check if the user has scrolled more than 10px
      const scrolled = window.scrollY > 10;
      setHeaderStyle({
        backgroundColor: GlobalConfig.BgHeader,
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
        // router.push("/candidates-dashboard/my-profile");
        window.location.reload();
      } else if (userType === "3") {
        modalElement.style.display = "none";
        modalBackDrop[0].style.display = "none";
        body[0].classList.remove("modal-open");
        body[0].style.overflow = "auto";
        // router.push("/employers-dashboard/dashboard");
        window.location.reload();
      } else if (userType === "5") {
        modalElement.style.display = "none";
        modalBackDrop[0].style.display = "none";
        body[0].classList.remove("modal-open");
        body[0].style.overflow = "auto";
        // router.push("/student-dashboard/my-profile");
        window.location.reload();
      } else if (userType === "1") {
        modalElement.style.display = "none";
        modalBackDrop[0].style.display = "none";
        body[0].classList.remove("modal-open");
        body[0].style.overflow = "auto";
        // router.push("/admin-dashboard/dashboard");
        window.location.reload();
      }
    }
  };

  const [searchExpanded, setSearchExpanded] = useState(false);
  const toggleSearch = () => {
    setSearchExpanded(!searchExpanded);

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
        `${apiConfig.url}/jobpost?job_title=${value}`
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

  const onSuggestionSelected = async (event, { suggestion }) => {
    setSuggestionValue(suggestion.name); // Assuming 'name' is the property you need from the suggestion

    try {
      const response = await axios.get(
        `${apiConfig.url}/jobpost?job_title=${suggestionValue}`
      );
      if (response.data && response.data.length > 0) {
        // Assuming the first result is the desired one
        const jobId = response.data[0].id;
        router.push(`/job-single-v1/${jobId}`);
      } else {
        console.error('No job postings found for the selected suggestion.');
      }
    } catch (error) {
      console.error('Error fetching job postings:', error);
    }
  };
  const debouncedGetSuggestions = debounce(getSuggestions, 300);

  const onSuggestionsFetchRequested = ({ value }) => {
    debouncedGetSuggestions(value);
  };

  const inputProps = {
    placeholder: 'Search anything...',
    value: searchValue,
    onChange: onChange
  };

  const jobList = searchValue ? filteredPostings : [];

  useEffect(() => {
    // Fetch job postings from the API
    const fetchJobPostings = async () => {
      try {
        const response = await axios.get(`${apiConfig.url}/jobpost`);
        setJobPostings(response.data);
      } catch (error) {
        console.error('Error fetching job postings:', error);
      }
    };

    fetchJobPostings();
  }, []);

  const handleOutsideClick = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setSearchExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // Check if the current page is My Profile
  const isMyProfilePage = router.pathname === '/student-dashboard/my-profile';

  // If on My Profile page, render nothing (return null)
  if (isMyProfilePage) return null;

  useEffect(() => {
    const userId = localStorage.getItem("loggedInUserId");
    const token = localStorage.getItem("accessToken");
    
    if (userId) {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(`${apiConfig.url}/users/me`, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
          
          setUserDetail(response.data);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };
      fetchUserDetails();
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!suggestionValue && searchValue.trim() !== '') {
      router.push(`/search-results?query=${searchValue}`);
    }
  };

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

            {cart && cart.length > 0 && (
              // Check if cart exists and is not empty
              isLoggedIn ? (
                // If the user is logged in, render a Link component to the cart page with a button showing the cart length
                <Link href="/shop/cart">
                  <button className="menu-btn me-3">
                    <span className="count">{cart.length}</span>
                    <span className="icon flaticon-shopping-cart" />
                  </button>
                </Link>
              ) : (
                // If the user is not logged in, render a text prompting the user to login
                <Link href="/login">
                  <button className="menu-btn me-3">
                    <span className="count">{cart.length}</span>
                    <span className="icon flaticon-shopping-cart" />
                  </button>
                </Link>
              )
            )}

            {loggedIn ? (

              <div className="dropdown dashboard-option" onMouseEnter={() => { }} onMouseLeave={() => { }}>
                <div className="dropdown-toggle"
                  style={{ display: 'flex', alignItems: 'center', paddingLeft: "10px" }}>
                  {userDetail && userDetail.user_image ? (
                    <img
                      width={30}
                      height={30}
                      style={{ borderRadius: "50%", objectFit: "fill" }}
                      src={`${apiConfig.url}/${userDetail.user_image.path}`}
                      alt="Profile"
                    />
                  ) : (
                    <Image
                      alt="avatar"
                      src="/images/user-flat.svg"
                      width={30}
                      height={30}
                    />
                  )}
                </div>
                <ul className="dropdown-menu">
                  <li className="mb-1">
                    <Link href="/student-dashboard/my-profile">
                      <i className="la la-lock"></i> My Profile
                    </Link>
                  </li>
                  <li className="mb-1">
                    <a href="#" onClick={handleLogout}>
                      <i className="la la-sign-out"></i> Logout
                    </a>
                  </li>
                </ul>
              </div>
              // <div className="dropdown" style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px' }}>
              //   <div className="login-box" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              //     <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown" style={{ display: 'flex', alignItems: 'center' }}>

              //       {userDetail && userDetail.user_image ? (
              //         <img width={30} height={30} style={{ borderRadius: "50%", objectFit: "cover" }} src={`${apiConfig.url}/${userDetail.user_image.path}`} alt="Profile" />
              //       ) : (
              //         <span className="fas fa-user"></span>
              //       )}

              //     </a>
              //     <div className="dropdown-menu">
              //       <a className="dropdown-item" href="#" onClick={handleProfileRedirect}>My Profile</a>
              //       <a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a>
              //     </div>
              //   </div>
              // </div>
            ) : (
              <div className="login-box" style={{ display: 'flex', alignItems: 'center' }}>
                <a href="#" className="call-modal" data-bs-toggle="modal" data-bs-target="#loginPopupModal" onClick={handleLoginRedirect}>
                  <span className="fas fa-user"></span>
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
              <span className="fas fa-bars" style={{ paddingLeft: '15px' }}></span>
            </a>
            {/* right humberger menu */}

            <div className="search-container d-flex align-items-center"
              ref={searchContainerRef}
              style={{ position: 'relative' }}>
              <button
                className="theme-btn search-button"
                onClick={toggleSearch}
                style={{ paddingLeft: '20px' }}
              >
                <i className="fas fa-search" style={{ color: 'white' }}></i>
              </button>

              {searchExpanded && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    zIndex: 1000,
                    background: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
                    overflowY: 'auto',
                    borderRadius: '8px',
                    maxHeight: '300px',
                    cursor: 'pointer',
                  }}>
                  <form onSubmit={handleSubmit}>
                    <Autosuggest
                      suggestions={suggestions}
                      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                      onSuggestionsClearRequested={onSuggestionsClearRequested}
                      onSuggestionSelected={onSuggestionSelected}
                      getSuggestionValue={(suggestion) => suggestion}
                      renderSuggestion={(suggestion) => <div>{suggestion}</div>}
                      inputProps={inputProps}
                    />
                  </form>
                  {jobList.length > 0 && (
                    <div>
                      {searchResults.map((result) => (
                        <div key={result.id}>
                          <h3>{result.job_title}</h3>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* <div className="dropdown" style={{ marginRight: '50px' }}>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  position: 'relative',
                  backgroundColor: GlobalConfig.BgHeader,
                  borderColor: GlobalConfig.BgHeader,
                  backgroundImage: 'none',
                  boxShadow: 'none',
                  borderRadius: '5px',
                  marginRight: '-90px'
                }}
              >
                <i className="fas fa-globe" style={{ marginLeft: '5px' }}></i>
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
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </header >
  );
};

export default MobileMenu;
