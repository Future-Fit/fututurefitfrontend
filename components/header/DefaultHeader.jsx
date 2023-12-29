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


const DefaulHeader2 = () => {
  const [navbar, setNavbar] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [hoveredItemStyle, setHoveredItemStyle] = useState({});
  const defaultLanguage = 'EN';
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const loggedInUserId = typeof window !== 'undefined' ? localStorage.getItem("loggedInUserId") : null;

  const [searchValue, setSearchValue] = useState('');
  const [jobPostings, setJobPostings] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [filteredPostings, setFilteredPostings] = useState([]);
  const searchContainerRef = useRef(null);

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
    backgroundColor: GlobalConfig.BgrClr,
    boxShadow: 'none',
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setNavbar(scrolled);

      // Update header style based on scroll
      const updatedHeaderStyle = {
        backgroundColor: scrolled ? GlobalConfig.BgrClr : GlobalConfig.BgrClr,
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

  // searching function 

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
    <header
      // dear sami add/remove the following next to fixed-header to add/remove the animation  "animated slideInDown" with out double quote
      className={`main-header header-style-two ${navbar ? "fixed-header" : ""
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
                    src={GlobalConfig.DskLog}
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
                    overflowY: 'auto',
                    cursor: 'pointer',
                  }}>
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
                    <div style={{ borderTop: '1px solid #555', margin: '8px 0' }}>

                      {jobList.length > 0 && (
                        <div>
                          {searchResults.map((result) => (
                            <div key={result.id}>
                              <h3>{result.job_title}</h3>
                              <p>{result.job_description}</p>
                            </div>
                          ))}
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
                    backgroundColor: GlobalConfig.BgrClr,
                    borderColor: GlobalConfig.BgrClr,
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
