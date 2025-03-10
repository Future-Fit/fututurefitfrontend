"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import apiConfig from "@/app.config";
import { FaCalendarAlt, FaBuilding, FaMapMarkerAlt, FaSearch, FaChevronDown, FaChevronUp, FaHandPointRight, FaHeart, FaRegHeart, FaTimes, FaBars, FaArrowDown, FaFilter, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import LoginPopup from "@/components/common/form/login/LoginPopup";
import MobileMenu from "@/components/header/MobileMenu";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import FooterDefault from "@/components/footer/common-footer";
import GlobalConfig from '@/Global.config';
import DashboardAdminHeader from '@/components/header/DashboardAdminHeader';
import DashboardJobseekerHeader from '@/components/header/DashboardJobseekerHeader';
import Image from "next/image";

export default function JobsList() {
    const [jobListings, setJobListings] = useState([]);
    const [sessionId, setSessionId] = useState(null);
    const [userType, setUserType] = useState();
    const router = useRouter();
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const filteredJobs = showFavorites
        ? jobListings.filter((job) => favorites.includes(job.jobLink))
        : jobListings;
    const [isMobile, setIsMobile] = useState(false);
    const [industryOpen, setIndustryOpen] = useState(!isMobile);
    const [allFilterOpen, setAllFilterOpen] = useState(!isMobile);
    const [dateOpen, setDateOpen] = useState(!isMobile);
    const [companyOpen, setCompanyOpen] = useState(false);
    const [locationOpen, setLocationOpen] = useState(!isMobile);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [sortBy, setSortBy] = useState("M");
    const [searchTerm, setSearchTerm] = useState('');
    const [locationTerm, setLocationTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [resultCount, setResultsCount] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [page, setPage] = useState(1); // Track the current page
    const [finalPage, setFinalPage] = useState(page);
    const industries = [
        { name: "Healthcare", id: 3 },
        { name: "Business/Administration", id: 1 },
        { name: "Sciences/Engineering/ICT", id: 2 },
        { name: "Manufacturing", id: 9 },
        { name: "Transportation and Logistics", id: 7 },
        { name: "Hospitality and Services", id: 6 },
        { name: "Education", id: 5 },
        { name: "Construction", id: 4 },
        { name: "Skilled Trade", id: 8 },
        { name: "Other", id: 0 }
    ];

    const dates = [
        { label: "Last 48 hours", id: "2" },
        { label: "Last 30 days", id: "30" },
        { label: "More than 30 days", id: "+30" }
    ];

    const locations = [
        { code: "AB", label: "Alberta (AB)" },
        { code: "BC", label: "British Columbia (BC)" },
        { code: "MB", label: "Manitoba (MB)" },
        { code: "NB", label: "New Brunswick (NB)" },
        { code: "NL", label: "Newfoundland and Labrador (NL)" },
        { code: "NT", label: "Northwest Territories (NT)" },
        { code: "NS", label: "Nova Scotia (NS)" },
        { code: "NU", label: "Nunavut (NU)" },
        { code: "ON", label: "Ontario (ON)" },
        { code: "PE", label: "Prince Edward Island (PE)" },
        { code: "QC", label: "Quebec (QC)" },
        { code: "SK", label: "Saskatchewan (SK)" },
        { code: "YT", label: "Yukon (YT)" }
    ];


    const handleCategorySelection = (categoryId, categoryName) => {
        setSelectedCategories(prevSelected => {
            const isAlreadySelected = prevSelected.includes(categoryId);
            const newSelected = isAlreadySelected
                ? prevSelected.filter(id => id !== categoryId)  // Remove if already selected
                : [...prevSelected, categoryId];  // Add if not selected

            setSelectedFilters(prevFilters => {
                if (isAlreadySelected) {
                    return prevFilters.filter(filter => filter !== categoryName);
                } else if (!prevFilters.includes(categoryName)) {
                    return [...prevFilters, categoryName];
                }
                return prevFilters;
            });

            fetchJobs(newSelected);
            return newSelected;
        });
    };
    const removeFilter = (filter) => {
        if (dates.some(d => d.label === filter)) {
            // Removing a date
            setSelectedDate(null);
            fetchJobs(selectedCategories, selectedDate, selectedLocation, searchTerm, locationTerm); // Trigger search when Enter is pressed
            console.log("date disselected")
        } else if (locations.some(loc => loc.label === filter)) {
            // Removing a location
            setSelectedLocation(prev => prev.filter(l => locations.find(loc => loc.label === filter)?.code !== l));
            fetchJobs(selectedCategories, selectedDate, selectedLocation, searchTerm, locationTerm); // Trigger search when Enter is pressed
            console.log("Location disselected")


        } else {
            // Removing an industry or other filter
            setSelectedFilters(prev => prev.filter(f => f !== filter));
            setSelectedCategories(prev => prev.filter(c => industries.find(ind => ind.name === filter)?.id !== c)); // ✅ Fix: Deselect industry
            fetchJobs(selectedCategories, selectedDate, selectedLocation, searchTerm, locationTerm); // Trigger search when Enter is pressed
            console.log("Categories disselected")


        }
    };

    const handleDateChange = (dateId) => {
        setSelectedDate(dateId);
        fetchJobs(selectedCategories, dateId, selectedLocation);
    };

    const handleLocationChange = (locationCode) => {
        setSelectedLocation((prev) => {
            const newSelection = prev.includes(locationCode)
                ? prev.filter((loc) => loc !== locationCode) // Remove
                : [...prev, locationCode]; // Add

            fetchJobs(selectedCategories, selectedDate, newSelection); // 🔹 Use updated selection
            return newSelection;
        });
    };

    // 🔹 Handles search input changes, but doesn't trigger the search until the user presses "Enter" or clicks the search button
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    const handleLocationStringChange = (e) => {
        const value = e.target.value;
        setLocationTerm(value);  // Update location term
    };

    // 🔹 Handles pressing "Enter" to trigger the search
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchJobs(selectedCategories, selectedDate, selectedLocation, searchTerm, locationTerm); // Trigger search when Enter is pressed
        }
    };

    // 🔹 Handles the click of the search button
    const handleSearchClick = () => {
        fetchJobs(selectedCategories, selectedDate, selectedLocation, searchTerm, locationTerm); // Trigger search when search button is clicked
    };

    const filterBadgeStyle = {
        backgroundColor: GlobalConfig.BgrClr1,
        color: "white",
        padding: "2px 4px",
        borderRadius: "15px",
        margin: "2px",
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        cursor: "pointer"
    };

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            setUserToken(token);
            fetchAppliedJobs(token); // Fetch applied jobs when user is logged in
        }
        fetchJobs(selectedCategories, selectedDate, selectedLocation, searchTerm, locationTerm);
    }, []);

    const fetchAppliedJobs = async (token) => {
        try {
            const response = await axios.get(`${apiConfig.url}/job-seeker/myjobApplications`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            // Ensure response.data exists and is an array
            if (Array.isArray(response.data)) {
                setAppliedJobs(response.data.map(application => application.jobPost?.externalID));
            } else {
                console.error("Unexpected response format:", response.data);
                setAppliedJobs([]);
            }
        } catch (error) {
            console.error('Error fetching applied jobs:', error);
        }
    };

    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth <= 768; // Mobile: width ≤ 768px
            setIsMobile(mobile);
            setIndustryOpen(!mobile);
            setDateOpen(!mobile);
            setCompanyOpen(!mobile);
            setLocationOpen(!mobile);
            setAllFilterOpen(!mobile)
        };

        checkScreenSize(); // Initial check
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const toggleFavorite = async (job) => {
        if (isPending) return;
        const regex = /\/(\d+)\?/;
        const match = job.jobLink.match(regex);
        const jobPostID = match[1];
        // make requers to End point 
        const jobLink = job.jobLink;
        try {
            const jobDetailsReponse = await axios.get(`${apiConfig.url}/canada-jobs/job`, {
                params: { url: jobLink }
            });
            const jobDetails = jobDetailsReponse.data;
            console.log(jobDetails, "incoming details");

            const jobData = {
                isExternal: true, // You can adjust this based on the context (whether it's external or not)
                job_title: jobDetails.jobTitle, // Map to job_title
                job_description: jobDetails.jobDescription, // Map to job_description
                deadline_date: jobDetails.applicationDeadline, // Map to deadline_date, ensure it's in ISO 8601 format
                hours: jobDetails.hours, // Ensure this is a string (not a number)
                rate: jobDetails.salary, // Ensure this is a string (not a number)
                salary: jobDetails.salary, // Map as is
                city: jobDetails.location, // Map to city
                country: "Canada", // Hardcoded for now, adjust if needed
                map_location: jobDetails.employer, // Map to map_location
                education: jobDetails.education, // Map to education
            };
            const token = localStorage.getItem("accessToken");
            const response = await axios.put(`${apiConfig.url}/job-seeker/favorite?jobPostID=${jobPostID}&isExternal=1`, jobData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setFavorites((prevFavorites) => {
                const updatedFavorites = prevFavorites.includes(jobLink)
                    ? prevFavorites.filter((link) => link !== jobLink)  // Remove from favorites
                    : [...prevFavorites, jobLink];  // Add to favorites

                return updatedFavorites;
            });
        } catch (err) {
            console.error(err);
        }
        setIsPending(false);

    };
    const favoritesUpdate = async (page = 1, size = 10) => {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(`${apiConfig.url}/likedjobs/external?page=${page}&size=${size}`, { headers: { Authorization: `Bearer ${token}` } });
        setFavorites(response.data.data);
    }

    useEffect(() => {
        const storedUserType = localStorage.getItem('userType');
        const token = localStorage.getItem("accessToken");
        if (token) {
            setUserToken(token);
        }
        if (storedUserType) {
            setUserType(JSON.parse(storedUserType));
        }
    }, []);

    const navigateToJobDetail = (jobUrl) => {
        router.push(`/job-detail?jobUrl=${encodeURIComponent(jobUrl)}`);
    };

    const fetchJobs = async (
        selectedCategories = [],
        selectedDate = null,
        selectedLocations = [],
        searchString = '',
        locationString = '',
        sortBy = 'M',
        pageNumber = 1
    ) => {
        const token = localStorage.getItem("accessToken");
        try {
            if (token != null) {
                const response = await axios.get(`${apiConfig.url}/canada-jobs/auth`, {
                    headers: { Authorization: `Bearer ${token}` },
                    params: {
                        sessionId: sessionId || undefined,
                        categories: selectedCategories.length > 0 ? selectedCategories.join(',') : undefined,
                        dateFilter: selectedDate || undefined,
                        locations: selectedLocations.length > 0 ? selectedLocations.join(',') : undefined,
                        searchString: searchString || undefined,
                        locationString: locationString || undefined,
                        dateSort: sortBy,
                        page: pageNumber
                    }
                });

                if (response.data.sessionId) {
                    sessionStorage.setItem('sessionId', response.data.sessionId);
                    setSessionId(response.data.sessionId);
                }
                console.log("API Response:", response.data);
                console.log("Total Results Count:", response.data.resultsCount);
                console.log("Jobs fetched: ", response.data.data.length, " | Page: ", pageNumber);
                setJobListings(response.data.data);

                // if (page === 1) {
                //     setJobListings(response.data.data);
                // } else {
                //     setJobListings(response.data.data);
                // }

                if (response.data.resultsCount !== undefined) {
                    setResultsCount(response.data.resultsCount);
                    const perPage = 25;
                    setFinalPage(Math.ceil(response.data.resultsCount / perPage))
                }

                setPage(pageNumber);

            } else {
                const response = await axios.get(`${apiConfig.url}/canada-jobs`, {
                    params: {
                        sessionId: sessionId || undefined,
                        categories: selectedCategories.length > 0 ? selectedCategories.join(',') : undefined,
                        dateFilter: selectedDate || undefined,
                        locations: selectedLocations.length > 0 ? selectedLocations.join(',') : undefined,
                        searchString: searchString || undefined,
                        locationString: locationString || undefined,
                        dateSort: sortBy,
                        page: pageNumber
                    }
                });

                if (response.data.sessionId) {
                    setSessionId(response.data.sessionId);
                }
                console.log("API Response:", response.data);
                console.log("Total Results Count:", response.data.resultsCount);
                console.log("Jobs fetched: ", response.data.data.length, " | Page: ", pageNumber);

                setJobListings(response.data.data);

                if (response.data.resultsCount !== undefined) {
                    setResultsCount(response.data.resultsCount);
                    const perPage = 25;
                    setFinalPage(Math.ceil(response.data.resultsCount / perPage))
                }
                setPage(pageNumber);
            }

        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    useEffect(() => {
        fetchJobs(selectedCategories, selectedDate, selectedLocation, searchTerm, locationTerm);
        return () => {
            sessionStorage.removeItem('sessionId');
        };
    }, []);

    return (
        <>
            <span className="header-span"></span>

            <LoginPopup />

            {userType === 1 && <DashboardAdminHeader />}
            {userType === 3 && <DashboardEmployerHeader />}
            {userType === 4 && <DashboardJobseekerHeader />}
            {userType === 5 && <DashboardStudentHeader />}
            {userType !== 1 && userType !== 3 && userType !== 4 && userType !== 5 && <DefaulHeader2 />}

            <MobileMenu />

            <section className="job-section-two"
                style={{
                    padding: "40px 20px",
                    backgroundColor: "rgb(255,255,255)",
                    color: "white"
                }}>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h2 style={{ color: GlobalConfig.BgrClr1 }}>Available Jobs</h2>
                        <div className="text" style={{ fontSize: "1.1em", color: GlobalConfig.BgrClr1 }}>
                            Click on a job title to learn more and apply
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                        {/* Outlined Container */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: '400px',
                            border: '1px solid #3B578E',
                            borderRadius: '25px',
                            padding: '8px 12px',
                            backgroundColor: '#fff',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        }}>
                            {/* Search Input */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: 'calc(50% - 10px)', // Takes half of the available space minus the gap
                            }}>
                                <input
                                    type="text"
                                    placeholder="Search by Keyword..."
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        width: '100%'
                                    }}
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    onKeyDown={handleKeyPress} // Trigger search when Enter is pressed
                                />
                            </div>

                            {/* Vertical Line Separator */}
                            {/* <div style={{
                                borderLeft: '2px solid #3B578E',
                                height: '25px', // Match the height of the container
                                margin: '0 10px', // Space around the separator
                            }}></div> */}

                            {/* Location Input */}
                            {/* <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: 'calc(50% - 10px)', // Takes half of the available space minus the gap
                            }}>
                                <input
                                    type="text"
                                    placeholder="City, province, territory..."
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        width: '100%',
                                    }}
                                    value={locationTerm}
                                    onChange={handleLocationStringChange}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    onKeyDown={handleKeyPress} // Trigger search when Enter is pressed
                                />
                            </div> */}

                            {/* Search Button */}
                            <button
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#777',
                                    marginLeft: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onClick={handleSearchClick}
                            >
                                <FaSearch />
                            </button>
                        </div>
                    </div>

                    {/* Selected Filters (Below Search Bar) */}
                    {(selectedFilters.length > 0 || selectedDate || selectedLocation.length > 0 || showFavorites) && (
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            marginTop: "10px"
                        }}>
                            {/* Industry & Other Filters */}
                            {selectedFilters.map((filter, index) => (
                                <span key={index} style={filterBadgeStyle} onClick={() => removeFilter(filter)}>
                                    {filter} <FaTimes style={{ marginLeft: "4px" }} />
                                </span>
                            ))}

                            {/* Selected Date */}
                            {selectedDate && (
                                <span style={filterBadgeStyle} onClick={() => setSelectedDate(null)}>
                                    {dates.find(d => d.id === selectedDate)?.label || selectedDate} {/* 🔹 Fix: Show label instead of ID */}
                                    <FaTimes style={{ marginLeft: "4px" }} />
                                </span>
                            )}
                            {/* Selected Locations */}
                            {selectedLocation.map((location, index) => {
                                const locationLabel = locations.find(loc => loc.code === location)?.label || location; // 🔹 Fix: Show label
                                return (
                                    <span key={index} style={filterBadgeStyle} onClick={() => handleLocationChange(location)}>
                                        {locationLabel} <FaTimes style={{ marginLeft: "4px" }} />
                                    </span>
                                );
                            })}

                            {/* Favorites */}
                            {showFavorites && (
                                <span style={filterBadgeStyle} onClick={() => setShowFavorites(false)}>
                                    Favorites <FaTimes style={{ marginLeft: "4px" }} />
                                </span>
                            )}
                        </div>
                    )}

                    <div className="container mt-4">
                        {/* <h4
                            style={{
                                color: GlobalConfig.LogoOrg,
                                fontWeight: "bold",
                                fontSize: isMobile ? '14px' : '16px'
                            }}
                        >
                            Total Result: {resultCount || "Loading..."}
                        </h4> */}
                        <div className="d-flex justify-content-between align-items-center"
                            style={{
                                flexDirection: isMobile ? 'row' : 'row',
                                maxWidth: isMobile ? '100%' : '85%'
                            }}>
                            {isMobile && (
                                <div
                                    className="col-lg-4 col-md-5 col-sm-12 d-flex align-items-center justify-content-end"
                                    style={{
                                        maxWidth: isMobile ? '100%' : '45%',
                                        justifyContent: isMobile ? 'flex-start' : 'flex-end',
                                    }}
                                >
                                    <h4
                                        style={{
                                            color: GlobalConfig.BgrClr1,
                                            fontWeight: "bold",
                                            fontSize: '18px',
                                            paddingRight: '2px'
                                        }}
                                    >
                                        Sort:
                                    </h4>
                                    <div className="btn-group" role="group">
                                        <button
                                            className={`btn ${sortBy === "M" ? "btn-primary" : "btn-outline-primary"}`}
                                            onClick={() => {
                                                setSortBy("M");
                                                fetchJobs(selectedCategories, selectedDate, selectedLocation, searchTerm, locationTerm, "M"); // ✅ Pass "M"
                                            }}
                                            style={{ fontSize: '14px', padding: '1px' }}
                                        >
                                            Best Match
                                        </button>
                                        <button
                                            className={`btn ${sortBy === "D" ? "btn-primary" : "btn-outline-primary"}`}
                                            onClick={() => {
                                                setSortBy("D");
                                                fetchJobs(selectedCategories, selectedDate, selectedLocation, searchTerm, locationTerm, "D"); // ✅ Pass "D"
                                            }}
                                            style={{ fontSize: '14px', padding: '1px' }}
                                        >
                                            Post Date
                                        </button>
                                    </div>

                                    {/* <div className="btn-group" role="group">
                                        <button
                                            className={`btn ${sortBy === "M" ? "btn-primary" : "btn-outline-primary"}`}
                                            onClick={() => setSortBy("M")}
                                            style={{ fontSize: isMobile ? '14px' : '18px', padding: '1px' }} 
                                        >
                                            Best Match
                                        </button>
                                        <button
                                            className={`btn ${sortBy === "date_posted" ? "btn-primary" : "btn-outline-primary"}`}
                                            onClick={() => setSortBy("date_posted")}
                                            style={{ fontSize: isMobile ? '14px' : '18px', padding: '1px' }} 
                                        >
                                            Post Date
                                        </button>
                                    </div> */}
                                </div>
                            )}
                            <h4
                                style={{
                                    color: GlobalConfig.LogoOrg,
                                    fontWeight: "bold",
                                    fontSize: isMobile ? '14px' : '16px'
                                }}
                            >
                                <span style={{ fontSize: '20px' }}>Result:</span>  {resultCount || "Loading..."}
                            </h4>

                            {!isMobile && (<div
                                className="col-lg-4 col-md-5 col-sm-12 d-flex align-items-center justify-content-end">
                                <h4
                                    style={{
                                        color: GlobalConfig.BgrClr1,
                                        fontWeight: "bold",
                                        fontSize: '16px',
                                        paddingRight: '2px'
                                    }}
                                >
                                    Sort:
                                </h4>
                                <div className="btn-group" role="group">
                                    <button
                                        className={`btn ${sortBy === "M" ? "btn-primary" : "btn-outline-primary"}`}
                                        onClick={() => {
                                            setSortBy("M");
                                            fetchJobs(selectedCategories, selectedDate, selectedLocation, searchTerm, locationTerm, "M"); // ✅ Pass "M"
                                        }}
                                        style={{ fontSize: '18px', padding: '1px' }} // Smaller buttons on mobile
                                    >
                                        Best Match
                                    </button>
                                    <button
                                        className={`btn ${sortBy === "D" ? "btn-primary" : "btn-outline-primary"}`}
                                        onClick={() => {
                                            setSortBy("D");
                                            fetchJobs(selectedCategories, selectedDate, selectedLocation, searchTerm, locationTerm, "D"); // ✅ Pass "D"
                                        }}
                                        style={{ fontSize: '18px', padding: '1px' }} // Smaller buttons on mobile
                                    >
                                        Post Date
                                    </button>
                                </div>
                            </div>
                            )}
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-12" style={{ paddingTop: isMobile ? '10px' : '0px', paddingBottom: '10px' }}>
                                <div className="bg-light rounded shadow-md text-black">

                                    <h4
                                        style={{
                                            color: GlobalConfig.BgrClr1,
                                            fontWeight: "bold",
                                            fontSize: isMobile ? '18px' : '16px',
                                            cursor: 'pointer',
                                            paddingTop: '5px'
                                        }}
                                        onClick={() => setAllFilterOpen(!allFilterOpen)}
                                    >
                                        Filter: {allFilterOpen ?
                                            <Image src='/images/filterslash.svg' alt="Filter Icon" width="30" height="30" />

                                            //   <FilterAltOffOutlined style={{ fontSize: '30px', fontWeight: 'bold', marginRight: '5px', cursor: 'pointer', marginBottom: '5px' }} /> 
                                            :
                                            <Image src='/images/filtermain.svg' alt="Filter Icon" width="30" height="30" />

                                            //   <FilterAltOutlined style={{ fontSize: '30px', fontWeight: 'bold', marginRight: '5px', cursor: 'pointer', marginBottom: '5px' }} />
                                        }

                                        {/* Filter: {allFilterOpen ? <FaFilter style={{ fontSize: '20px', marginRight: '5px', cursor: 'pointer', marginBottom: '5px' }} /> : <FaFilter style={{ fontSize: '20px', marginRight: '5px', cursor: 'pointer', marginBottom: '5px' }} />} */}
                                    </h4>


                                    {allFilterOpen && (
                                        <div style={{ paddingTop: '10px' }}>

                                            <h4 style={{ fontSize: '18px', cursor: "pointer", color: GlobalConfig.BgrClr1, paddingLeft: '10px' }}
                                                onClick={() => setIndustryOpen(!industryOpen)} // 🔹 Always toggle, even on desktop
                                            >
                                                Industry {industryOpen ? <FaChevronUp /> : <FaChevronDown />}
                                            </h4>

                                            {industryOpen && (
                                                <ul className="list-unstyled pl-3">
                                                    {industries.map((industry) => (
                                                        <li key={industry.id} className="cursor-pointer d-flex align-items-center" style={{ paddingLeft: '20px' }} >
                                                            <label htmlFor={`industry-${industry.id}`} className="d-flex align-items-center" style={{ cursor: "pointer" }}>
                                                                <input
                                                                    id={`industry-${industry.id}`}
                                                                    type="checkbox"
                                                                    style={{ marginRight: "8px" }}
                                                                    checked={selectedCategories.includes(industry.id)}
                                                                    onChange={() => handleCategorySelection(industry.id, industry.name)}
                                                                />
                                                                <span style={{ color: GlobalConfig.LogoBlu }}>{industry.name}</span>
                                                            </label>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* Date Filter (Single Selection) */}
                                            <h4 style={{ fontSize: '18px', paddingTop: '5px', cursor: "pointer", color: GlobalConfig.BgrClr1, paddingLeft: '10px' }}
                                                onClick={() => setDateOpen(!dateOpen)}
                                            >
                                                Date {dateOpen ? <FaChevronUp /> : <FaChevronDown />}
                                            </h4>
                                            {dateOpen && (
                                                <ul className="list-unstyled pl-3">
                                                    {dates.map((date) => (
                                                        <li key={date.id} className="cursor-pointer d-flex align-items-center" style={{ paddingLeft: '20px' }}>
                                                            <label htmlFor={`date-${date.id}`} className="d-flex align-items-center" style={{ cursor: "pointer" }}>
                                                                <input
                                                                    id={`date-${date.id}`}
                                                                    type="radio"
                                                                    name="dateFilter"
                                                                    style={{ marginRight: "8px" }}
                                                                    checked={selectedDate === date.id}
                                                                    onChange={() => handleDateChange(date.id)}
                                                                />
                                                                <span style={{ color: GlobalConfig.LogoBlu }}>{date.label}</span>
                                                            </label>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            <h4 style={{ fontSize: '18px', paddingTop: '5px', cursor: "pointer", color: GlobalConfig.BgrClr1, paddingLeft: '10px' }}
                                                onClick={() => setLocationOpen(!locationOpen)}
                                            >
                                                Province {locationOpen ? <FaChevronUp /> : <FaChevronDown />}
                                            </h4>
                                            {locationOpen && (
                                                <ul className="list-unstyled pl-3">
                                                    {locations.map((location) => (
                                                        <li key={location.code} className="cursor-pointer d-flex align-items-center" style={{ paddingLeft: '20px' }}>
                                                            <label htmlFor={`location-${location.code}`} className="d-flex align-items-center" style={{ cursor: "pointer" }}>
                                                                <input
                                                                    id={`location-${location.code}`}
                                                                    type="checkbox"
                                                                    style={{ marginRight: "8px" }}
                                                                    checked={selectedLocation.includes(location.code)}
                                                                    onChange={() => handleLocationChange(location.code)}
                                                                />
                                                                <span style={{ color: GlobalConfig.LogoBlu }}>{location.label}</span>
                                                            </label>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}

                                    {/* <h4 style={{ fontSize: '18px', paddingTop: '5px', cursor: "pointer", color: GlobalConfig.BgrClr1, paddingLeft:'10px'}}>
                                        <label htmlFor="favorites-filter" className="d-flex align-items-center" style={{ cursor: "pointer" }}>
                                            <input
                                                id="favorites-filter"
                                                type="checkbox"
                                                style={{ marginRight: "8px" }}
                                                checked={showFavorites}
                                                onChange={() => userToken ? setShowFavorites(!showFavorites) : alert("You need to sign in first")}
                                            />
                                            Favorites
                                        </label>
                                    </h4> */}
                                </div>
                            </div>

                            <hr />
                            <div className="col-lg-9 col-md-8 col-sm-12 text-black" style={{ maxWidth: isMobile ? '100%' : '60%' }}>
                                <div className="d-flex flex-column">
                                    {filteredJobs?.map((job, index) => {
                                        const regex = /\/(\d+)\?/;
                                        const match = job.jobLink.match(regex);
                                        const jobExternalID = match ? Number(match[1]) : null;

                                        const isApplied = appliedJobs.includes(jobExternalID); // Compare with appliedJobs
                                        // console.log("External ID is: ", jobExternalID)
                                        // console.log("Applied Jobs", appliedJobs)
                                        return (
                                            <div key={index} className="bg-light p-3 rounded shadow-sm d-flex justify-content-between align-items-start"
                                                style={{ borderLeft: `4px solid ${GlobalConfig.BgrClr1}`, marginBottom: '10px' }}>

                                                {/* Left Section: Job Details */}
                                                <div className="w-100">
                                                    <h5
                                                        onClick={() => navigateToJobDetail(job.jobLink)}
                                                        style={{
                                                            color: '#0000EE',
                                                            cursor: 'pointer',
                                                            whiteSpace: 'nowrap',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            textDecoration: 'underline',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        <FaHandPointRight style={{ color: GlobalConfig.LogoOrg, marginRight: '5px' }} />
                                                        {job.title}
                                                    </h5>
                                                    <div className="mt-2">
                                                        <div onClick={() => navigateToJobDetail(job.jobLink)} style={{
                                                            cursor: 'pointer', whiteSpace: 'nowrap',
                                                            overflow: 'hidden', textOverflow: 'ellipsis'
                                                        }}>
                                                            <FaCalendarAlt style={{ color: "#696969", marginRight: "5px" }} />
                                                            <strong style={{ color: "#696969" }}>Posted Date:</strong> {job.date}
                                                        </div>
                                                        <div onClick={() => navigateToJobDetail(job.jobLink)} style={{
                                                            cursor: 'pointer', whiteSpace: 'nowrap',
                                                            overflow: 'hidden', textOverflow: 'ellipsis'
                                                        }}>
                                                            <FaBuilding style={{ color: "#696969", marginRight: "5px" }} />
                                                            <strong style={{ color: "#696969" }}>Company:</strong> {job.business}
                                                        </div>
                                                        <div onClick={() => navigateToJobDetail(job.jobLink)} style={{
                                                            cursor: 'pointer', whiteSpace: 'nowrap',
                                                            overflow: 'hidden', textOverflow: 'ellipsis'
                                                        }}>
                                                            <FaMapMarkerAlt style={{ color: "#696969", marginRight: "5px" }} />
                                                            <strong style={{ color: "#696969" }}>Location:</strong> {job.location}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Right Section: Heart Icon */}
                                                {isApplied && (
                                                    <span style={{
                                                        color: 'white',
                                                        backgroundColor: 'green',
                                                        padding: '3px 8px',
                                                        borderRadius: '5px',
                                                        fontSize: '0.8em',
                                                        marginRight: '10px'

                                                    }}>
                                                        Applied
                                                    </span>
                                                )}
                                                <div
                                                    onClick={() => userToken ? toggleFavorite(job) : alert("You need to sign in first")}
                                                    style={{
                                                        cursor: 'pointer',
                                                        color: job.isLiked ? 'red' : '#3B578E',
                                                        fontSize: '20px',
                                                        position: 'relative'
                                                    }}
                                                >
                                                    {job.isLiked ? <FaHeart /> : <FaRegHeart />}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        {/* More Jobs Button */}
                        <div className="btn-box text-center"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '20px 20px',
                                cursor: 'pointer'
                            }}
                            onClick={() => fetchJobs(selectedCategories, selectedDate, selectedLocation, searchTerm, locationTerm, sortBy, page + 1)}>
                            <span className="theme-btn btn-style-one" style={{
                                color: "white",
                                backgroundColor: GlobalConfig.BgrClr1,
                                padding: '12px 24px',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
                            }}>More Jobs</span>
                        </div>

                        {/* Pagination Controls */}
                        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                            {/* Previous Button */}
                            <button
                                onClick={() => fetchJobs(selectedCategories, selectedDate, selectedLocation, searchTerm, locationTerm, sortBy, page - 1)}
                                disabled={page <= 1}
                                style={{
                                    padding: '8px 16px',
                                    backgroundColor: page > finalPage ? GlobalConfig.BgrClr1 : '#ccc',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: page > finalPage ? 'pointer' : 'not-allowed'
                                }}>
                                <FaChevronLeft />
                            </button>

                            {/* Page Indicator */}
                            <span style={{ fontWeight: 'bold', color: GlobalConfig.BgrClr1, fontSize: '16px' }}>Page {page}</span>

                            {/* Next Button */}
                            <button
                                onClick={() => fetchJobs(selectedCategories, selectedDate, selectedLocation, searchTerm, locationTerm, sortBy, page + 1)}
                                disabled={page > finalPage} // Disable if no more jobs
                                style={{
                                    padding: '8px 16px',
                                    backgroundColor: page <= finalPage ? GlobalConfig.BgrClr1 : '#ccc',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: page <= finalPage ? 'pointer' : 'not-allowed'
                                }}>
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </section >
            <FooterDefault />
        </>
    );
}
