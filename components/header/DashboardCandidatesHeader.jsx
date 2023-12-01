'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import candidatesMenuData from "../../data/candidatesMenuData";
import HeaderNavContent from "./HeaderNavContent";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { clearSession } from "../common/form/login/sessionHandler";

import { usePathname } from "next/navigation";

const DashboardCandidatesHeader = () => {
    const [navbar, setNavbar] = useState(false);
    const [user, setUser] = useState(null);



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


    useEffect(() => {
        const fetchUserData = async () => {
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                return;
            }

            try {
                const response = await fetch("https://api.futurefitinternational.com/users/me", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });

                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                } else {
                    console.error("Failed to fetch user data");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
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
                        <button className="menu-btn">
                            <span className="count">1</span>
                            <span className="icon la la-heart-o"></span>
                        </button>
                        {/* wishlisted menu */}

                        <button className="menu-btn">
                            <span className="icon la la-bell"></span>
                        </button>
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
                                    src="/images/logo-no-background.png"
                                    width={50}
                                    height={50}
                                />
                                <span className="name">My Account</span>
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
