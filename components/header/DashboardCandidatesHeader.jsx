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

const DashboardCandidatesHeader = () => {
    const [navbar, setNavbar] = useState(false);
    const [user, setUser] = useState(null);
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

    return (
        // <!-- Main Header-->
        <header
            className={`main-header header-shaddow  ${navbar ? "fixed-header " : ""
                }`}
        >
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
                                    src="/images/logo-no-background.png"
                                    width={50}
                                    height={50}
                                />
                                <span style={{ color: '#fff' }} className="name">{userDetail?.fname + ' ' + userDetail?.lname}</span>
                            </a>

                            <ul className="dropdown-menu">

                                {/* Change Password Option */}
                                <li className={`${isActiveLink('/candidates-dashboard/change-password', usePathname()) ? "active" : ""} mb-1`}>
                                    <Link href="/candidates-dashboard/change-password">
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

export default DashboardCandidatesHeader;
