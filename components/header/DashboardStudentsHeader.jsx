'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import candidatesMenuData from "../../data/candidatesMenuData";
import HeaderNavContent from "./HeaderNavContent";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { clearSession } from "../common/form/login/sessionHandler";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { reloadCart } from "../../features/shop/shopSlice";
import { usePathname, useRouter } from "next/navigation";
import GlobalConfig from "@/Global.config";
import { debounce } from "lodash";
import Autosuggest from "react-autosuggest";
import apiConfig from "@/app.config";

const DashboardCandidatesHeader = () => {
    const [navbar, setNavbar] = useState(false);
    const [user, setUser] = useState(null);
    const [userDetail, setUserDetail] = useState(null);
    const defaultLanguage = 'EN';
    const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
    const loggedInUserId = typeof window !== 'undefined' ? localStorage.getItem("loggedInUserId") : null;
    const [hoveredItemStyle, setHoveredItemStyle] = useState({}); // State to manage inline style for hovered item
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [jobPostings, setJobPostings] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [filteredPostings, setFilteredPostings] = useState([]);
    const router = useRouter(); // Initialize the router
    const searchContainerRef = useRef(null);
    const [suggestionValue, setSuggestionValue] = useState('');
    const { cart } = useSelector((state) => state.shop) || {};


    useEffect(() => {
        dispatch(reloadCart());
      }, [dispatch, reloadCart]);

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

    const [headerStyle, setHeaderStyle] = useState({
        backgroundColor: `${GlobalConfig.BgHeader} !imporatnt`,
        boxShadow: 'none',
    });

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 10;
            setNavbar(scrolled);

            // Update header style based on scroll
            const updatedHeaderStyle = {
                backgroundColor: scrolled ? `${GlobalConfig.BgHeader} !imporatnt` : `${GlobalConfig.BgHeader} '!important'`,
                boxShadow: scrolled ? '0 1px 3px rgba(0, 0, 0, 0.5)' : 'none',
            };
            setHeaderStyle(updatedHeaderStyle);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


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

    const [searchExpanded, setSearchExpanded] = useState(false);

    const toggleSearch = () => {
        setSearchExpanded(!searchExpanded);
    };

    const onChange = (event, { newValue }) => {
        setSearchValue(newValue);
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

    const getSuggestions = async (value) => {

        if (!value) {
            console.log("we have found no value");
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
        placeholder: 'Search...',
        value: searchValue,
        onChange: onChange
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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!suggestionValue && searchValue.trim() !== '') {
            console.log(`Navigating to: /search-results?query=${searchValue}`);
            router.push(`/search-results?query=${searchValue}`);
        }
    };


    return (
        // <!-- Main Header-->
        <header
            className={`main-header header-style-two  ${navbar ? "fixed-header" : ""
                }`}
            style={{ backgroundColor: GlobalConfig.BgHeader }}
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
                        {/* End .logo-box */}

                        <HeaderNavContent />
                        {/* <!-- Main Menu End--> */}
                    </div>
                    {/* End .nav-outer */}



                    <div className="outer-box">
                        <div className="dropdown dashboard-option">
                            <a
                                className="dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ display: 'flex', alignItems: 'center' }}

                            >
                                <Image
                                    alt="avatar"
                                    src="/images/user-flat.svg"
                                    width={30}
                                    height={30}
                                />
                                {/* <span className="icon icon-user"></span> */}
                                {/* <span style={{ color: '#fff', width: 'fit-content' }} className="name">{userDetail?.fname + ' ' + userDetail?.lname}</span> */}
                            </a>
                            <ul className="dropdown-menu">

                                {/* Change Password Option */}
                                <li className={`${isActiveLink('/student-dashboard/my-profile', usePathname()) ? "active" : ""} mb-1`}>
                                    <Link href="/student-dashboard/my-profile">
                                        <i className="la la-lock"></i> My Profile
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

                        <Link href="/shop/cart">
                            <button className="menu-btn me-3">
                                <span className="count">{cart?.length}</span>
                                <span className="icon flaticon-shopping-cart" />
                            </button>
                        </Link>
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
        </header>
    );
};

export default DashboardCandidatesHeader;
