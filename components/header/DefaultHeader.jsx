'use client'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import Image from "next/image";
import { useRouter } from "next/navigation";
import GlobalConfig from "@/Global.config";
import axios from "axios";
import { debounce } from "lodash";
import Autosuggest from "react-autosuggest";
import apiConfig from "@/app.config";
import { useDispatch, useSelector } from "react-redux";

const DefaulHeader2 = () => {
  const [navbar, setNavbar] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [hoveredItemStyle, setHoveredItemStyle] = useState({});
  const defaultLanguage = 'EN';
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const loggedInUserId = typeof window !== 'undefined' ? localStorage.getItem("loggedInUserId") : null;
  const { cart } = useSelector((state) => state.shop) || {};
  const [searchValue, setSearchValue] = useState('');
  const [jobPostings, setJobPostings] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [filteredPostings, setFilteredPostings] = useState([]);
  const searchContainerRef = useRef(null);
  const [suggestionValue, setSuggestionValue] = useState('');
  const [noResultsFound, setNoResultsFound] = useState(false);
  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('accessToken') !== null; // Check if user is logged in

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem('selectedLanguage', language);
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
    backgroundColor: GlobalConfig.BgHeader,
    boxShadow: 'none',
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setNavbar(scrolled);

      // Update header style based on scroll
      const updatedHeaderStyle = {
        backgroundColor: scrolled ? GlobalConfig.BgHeader : GlobalConfig.BgHeader,
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
    setHoveredItemStyle({
      backgroundColor: '#f0f0f0',
    });
  };

  const handleItemLeave = () => {
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

    const accessToken = localStorage.getItem("accessToken");
    const userType = localStorage.getItem("userType");
    const modalElement = document.getElementById("loginPopupModal");

    if (accessToken && userType) {
      e.preventDefault();
      if (userType === "4") {
        modalElement.style.display = "none";
        router.push("/candidates-dashboard/my-profile");
      } else if (userType === "3") {
        modalElement.style.display = "none";
        router.push("/employers-dashboard/dashboard");
      }
    }
  };

  const [searchExpanded, setSearchExpanded] = useState(false);

  const toggleSearch = () => {
    setSearchExpanded(!searchExpanded);
  };

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

  const onChange = (event, { newValue }) => {
    setSearchValue(newValue);
  };

  const handleDelete = () => {
    setSearchValue('');
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
    setSuggestionValue(suggestion.name);

    try {
      const response = await axios.get(
        `${apiConfig.url}/jobpost?job_title=${suggestionValue}`
      );
      if (response.data && response.data.length > 0) {
        const jobId = response.data[0].id;
        router.push(`/job-single-v1/${jobId}`);
      } else {
        console.log("Nothing found from our list of DB, please click enter to search the entire website")
        setNoResultsFound(true); // Ensure this line is correctly setting noResultsFound
      }
    } catch (error) {
      console.error('Error fetching job postings:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!suggestionValue && searchValue.trim() !== '') {
      console.log(`Navigating to: /search-results?query=${searchValue}`);
      router.push(`/search-results?query=${searchValue}`);
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
        const response = await axios.get(`${apiConfig.url}/jobpost`);
        setJobPostings(response.data);
      } catch (error) {
        console.error('Error fetching job postings:', error);
      }
    };

    fetchJobPostings();
  }, []);

  return (
    <header
      className={`main-header header-style-two ${navbar ? "fixed-header" : ""
        }`}
      style={headerStyle} // Apply the inline style here
    >
      <div className="auto-container">
        <div className="main-box">
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    width={70}
                    height={70}
                    src={GlobalConfig.DskLog}
                    alt="Future Fit Logo"
                  />
                </Link>
              </div>
            </div>
            <HeaderNavContent />
          </div>

          <div className="outer-box">
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

            {/* {cart && cart.length > 0 && ( // Check if cart exists and is not empty
              <Link href="/shop/cart">
                <button className="menu-btn me-3">
                  <span className="count">{cart.length}</span>
                  <span className="icon flaticon-shopping-cart" />
                </button>
              </Link>
            )} */}
            {/* <Link href="/shop/cart">
              <button className="menu-btn me-3">
                <span className="count">{cart?.length}</span>
                <span className="icon flaticon-shopping-cart" />
              </button>
            </Link> */}
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

              <div className="search-container d-flex align-items-center"
                ref={searchContainerRef}
                style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <button
                  className="theme-btn search-button"
                  onClick={toggleSearch}
                  style={{ paddingRight: '5px', paddingLeft: '5px' }}
                >
                  <i className="fas fa-search" style={{ color: 'white' }}></i>
                </button>

                {searchExpanded && (
                  <div style={{
                    position: 'absolute',
                    top: '0%',
                    left: 0,
                    zIndex: 1100,
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
                        // inputProps={inputProps}
                        inputProps={{
                          placeholder: 'Search anything...',
                          value: searchValue,
                          onChange: (_, { newValue }) => setSearchValue(newValue),
                          style: {
                            paddingRight: '30px', // To accommodate the button
                            height: '36px',
                          },
                        }}
                      />
                    </form>
                    <div>
                      {jobList.length > 0 ? (
                        <div style={{
                          position: 'absolute',
                          top: '100%',  // Position it right below the input field
                          left: 0,
                          width: '100%', // Match the width with the input field
                          zIndex: 1000,  // Ensure it's on top of other elements
                          background: 'white', // Optional: for better visibility
                          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Optional: for a drop-down effect
                          maxHeight: '300px'
                        }}>
                          {jobList.map((result) => (
                            <div key={result.id}>
                              <h3>{result.job_title}</h3>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div>
                          {noResultsFound && (
                            <h3>No results found. Please hit enter to search the entire website.</h3>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="dropdown">
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
                    borderRadius: '5px'
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
