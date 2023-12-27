'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import candidatesMenuData from "../../data/candidatesMenuData";
import HeaderNavContent from "./HeaderNavContent";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { clearSession } from "../common/form/login/sessionHandler";
import axios from "axios";

import { usePathname } from "next/navigation";
import GlobalConfig from "@/Global.config";

const DashboardCandidatesHeader = () => {
    const [navbar, setNavbar] = useState(false);
    const [user, setUser] = useState(null);
    const [userDetail, setUserDetail] = useState(null);
    const defaultLanguage = 'EN';
    const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
    const loggedInUserId = typeof window !== 'undefined' ? localStorage.getItem("loggedInUserId") : null;
    const [hoveredItemStyle, setHoveredItemStyle] = useState({}); // State to manage inline style for hovered item

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
                    const response = await axios.get(`https://api.futurefitinternational.com/users/${userId}`);
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

    return (
        // <!-- Main Header-->
        <header
            className={`main-header header-style-two  ${navbar ? "fixed-header" : ""
                }`}
        >
            <div className="auto-container">
                {/* <!-- Main box --> */}
                <div className="main-box">
                    {/* <!--Nav Outer --> */}
                    <div className="nav-outer">
                        <div className="logo-box">
                            <div className="logo">
                                <Link href="/">
                                    <Image
                                        alt="brand"
                                        src= {GlobalConfig.DskLog}
                                        width={70}
                                        height={50}
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

                        {/* <!-- Dashboard Option --> */}
                        <div className="dropdown dashboard-option">
                            <a
                                className="dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <Image
                                    alt="avatar"
                                    className="thumb"
                                    src="/images/user-flat.svg"
                                    width={70}
                                    height={100}
                                />
                                <span style={{ color: '#fff' }} className="name">{userDetail?.fname + ' ' + userDetail?.lname}</span>
                            </a>

                            <ul className="dropdown-menu">

                                {/* Change Password Option */}
                                <li className={`${isActiveLink('/candidates-dashboard/my-profile', usePathname()) ? "active" : ""} mb-1`}>
                                    <Link href="/candidates-dashboard/my-profile">
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
                        {/* End dropdown */}
                    </div>
                    {/* End outer-box */}

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
