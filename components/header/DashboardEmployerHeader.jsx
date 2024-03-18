'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import employerMenuData from "../../data/employerMenuData";
import HeaderNavContent from "./HeaderNavContent";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { usePathname, useRouter } from "next/navigation";
import { clearSession } from "../common/form/login/sessionHandler";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import GlobalConfig from "@/Global.config";
import Autosuggest from "react-autosuggest";
import { debounce } from "lodash";
import apiConfig from "@/app.config";


const DashboardHeader = () => {
    const [navbar, setNavbar] = useState(false);
    const defaultLanguage = 'EN';
    const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
    const loggedInUserId = typeof window !== 'undefined' ? localStorage.getItem("loggedInUserId") : null;
    const [hoveredItemStyle, setHoveredItemStyle] = useState({}); // State to manage inline style for hovered item
    const [searchExpanded, setSearchExpanded] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [jobPostings, setJobPostings] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [filteredPostings, setFilteredPostings] = useState([]);
    const router = useRouter(); // Initialize the router
    const searchContainerRef = useRef(null);
    const [suggestionValue, setSuggestionValue] = useState('');
    const { cart } = useSelector((state) => state.shop) || {};



    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        localStorage.setItem('selectedLanguage', language);
    };

    //pulling profile picture from database
    useEffect(() => {
        const userId = localStorage.getItem("loggedInUserId");
        const token = localStorage.getItem("accessToken");
        console.log('user id', userId);
        if (userId) {
            const fetchUserDetails = async () => {
                try {
                    const response = await axios.get(`${apiConfig.url}/users/me`, {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    });
                    console.log('Response from server:', response.data);
                    setUserDetail(response.data);
                    setFormData(response.data);
                } catch (error) {
                    console.error("Error fetching user details:", error);
                }
            };
            fetchUserDetails();
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('selectedLanguage');
            if (storedLanguage) {
                setSelectedLanguage(storedLanguage);
            }
        }
    }, []);
    const handleItemHover = () => {
        setHoveredItemStyle({
            backgroundColor: '#f0f0f0',
        });
    };

    const handleItemLeave = () => {
        setHoveredItemStyle({});
    };
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

    const [userDetail, setUserDetail] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem("loggedInUserId");
        console.log('user id', userId);
        if (userId) {
            const fetchUserDetails = async () => {
                try {
                    const response = await axios.get(`${apiConfig.url}/users/${userId}`);
                    console.log('Response from server:', response.data);
                    setUserDetail(response.data);
                } catch (error) {
                    console.error("Error fetching user details:", error);
                }
            };
            fetchUserDetails();
        }
    }, []);

    const handleLogout = () => {
        clearSession(); // Clear the session
        window.location.href = '/'; // Redirect to the login page
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

    const toggleSearch = () => {
        setSearchExpanded(!searchExpanded);
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchValue(inputValue);

        // Filter job postings based on search input value
        const filtered = jobPostings.filter((post) =>
            post.job_title.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredPostings(filtered);
    };

    const jobList = searchValue ? filteredPostings : [];
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!suggestionValue && searchValue.trim() !== '') {
            console.log(`Navigating to: /search-results?query=${searchValue}`);
            router.push(`/search-results?query=${searchValue}`);
        }
    };

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
        // <!-- Main Header-->
        <header
            className={`main-header header-style-two  ${navbar ? "fixed-header" : ""
                }`}
            style={headerStyle}
        >
            <div className="auto-container" style={{ backgroundColor: GlobalConfig.BgHeader }}>
                {/* <!-- Main box --> */}
                <div className="main-box">
                    {/* <!--Nav Outer --> */}
                    <div className="nav-outer">
                        <div className="logo-box">
                            <div className="logo">
                                <Link href="/">
                                    <Image
                                        alt="brand"
                                        src={GlobalConfig.DskLog}
                                        width={70}
                                        height={70}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                        <HeaderNavContent />
                        {/* <!-- Main Menu End--> */}
                    </div>

                    <div className="outer-box">
                        {cart && cart.length > 0 && ( // Check if cart exists and is not empty
                            <Link href="/shop/cart">
                                <button className="menu-btn me-3">
                                    <span className="count">{cart.length}</span>
                                    <span className="icon flaticon-shopping-cart" />
                                </button>
                            </Link>
                        )}
                        {/* <!-- Dashboard Option --> */}
                        <div className="dropdown dashboard-option">
                            <a
                                className="dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ display: 'flex', alignItems: 'center' }}
                            >
                                {/* <span className="icon icon-user"></span> */}
                                {userDetail && userDetail.user_image ? (
                                    <img width={30} height={30} src={`${apiConfig.url}/${userDetail.user_image}`} alt="Profile" />
                                ) : (
                                    <Image
                                        alt="avatar"
                                        src="/images/user-flat.svg"
                                        width={30}
                                        height={30}
                                    />
                                )}
                                {/* <span style={{ color: '#fff', width: 'fit-content' }} className="name">{userDetail?.fname + ' ' + userDetail?.lname}</span> */}
                            </a>

                            <ul className="dropdown-menu">
                                {/* Change Password Option */}
                                <li className={`${isActiveLink('/employers-dashboard/dashboard', usePathname()) ? "active" : ""} mb-1`}>
                                    <Link href="/employers-dashboard/dashboard">
                                        <i className="la la-lock"></i> My Company Profile
                                    </Link>
                                </li>

                                {/* Logout Option */}
                                <li className="mb-1">
                                    <a href="#" onClick={handleLogout}>
                                        <i className="la la-sign-out"></i> Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* End dropdown */}
                    </div>
                    {/* End outer-box */}

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
                                zIndex: 1100,
                                background: 'rgba(0, 0, 0, 0.6)',
                                color: 'white',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
                                overflowY: 'auto',
                                borderRadius: '8px',
                                maxHeight: '300px'

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
                                    backgroundColor: GlobalConfig.BgHeader,
                                    borderColor: GlobalConfig.BgHeader,
                                    backgroundImage: 'none',
                                    boxShadow: 'none',
                                    borderRadius: '5px',
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
        </header >
    );
};

export default DashboardHeader;
