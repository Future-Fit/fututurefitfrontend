'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import employerMenuData from "../../data/employerMenuData";
import HeaderNavContent from "./HeaderNavContent";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";
import { clearSession } from "../common/form/login/sessionHandler";
import axios from "axios";


const DashboardHeader = () => {
    const [navbar, setNavbar] = useState(false);

    const [userDetail, setUserDetail] = useState(null);

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

    const changeBackground = () => {
        if (window.scrollY >= 0) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    // useEffect(() => {
    //     window.addEventListener("scroll", changeBackground);
    // }, []);

    return (
        // <!-- Main Header-->
        <header
        className="main-header header-shaddow"
        style={{
            position: navbar ? 'fixed' : 'relative',
            top: navbar ? '0' : 'auto',
            width: '100%',
            zIndex: navbar ? '1000' : 'auto',
            boxShadow: navbar ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'top 0.3s ease-in-out'
            // Add other necessary styles here
        }}
    >
        {/* <header
            className={`main-header header-shaddow  ${
                navbar ? "fixed-header " : ""
            }`}

            style={{
                position: navbar ? 'fixed' : 'relative',
                top: navbar ? '0' : 'auto',
                width: '100%',
                zIndex: navbar ? '1000' : 'auto',
                boxShadow: navbar ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
                transition: 'top 0.3s ease-in-out'
                // Add other necessary styles here
            }}
        > */}
            <div className="container-fluid">
                {/* <!-- Main box --> */}
                <div className="main-box">
                    {/* <!--Nav Outer --> */}
                    <div className="nav-outer">
                        <div className="logo-box">
                            <div className="logo">
                                <Link href="/">
                                    <Image
                                        alt="brand"
                                        src="/images/logo-no-background.png"
                                        width={50}
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
                        {/* <button className="menu-btn">
                            <span className="count">1</span>
                            <span className="icon la la-heart-o"></span>
                        </button> */}
                        {/* wishlisted menu */}

                        {/* <button className="menu-btn">
                            <span className="icon la la-bell"></span>
                        </button> */}
                        {/* End notification-icon */}

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
                                    src="/images/resource/logo-no-background.png"
                                    width={40}
                                    height={40}
                                />
                                <span style={{color:'#fff'}} className="name">{userDetail?.fname + ' ' + userDetail?.lname}</span>
                            </a>

                            <ul className="dropdown-menu">
                                {/* Change Password Option */}
                                <li className={`${isActiveLink('/employers-dashboard/change-password', usePathname()) ? "active" : ""} mb-1`}>
                                    <Link href="/employers-dashboard/change-password">
                                        <i className="la la-lock"></i> Change Password
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
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
