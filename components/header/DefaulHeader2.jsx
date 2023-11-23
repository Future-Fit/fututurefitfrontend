
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import Image from "next/image";
import { useRouter } from "next/navigation";


const DefaulHeader2 = () => {
  const [navbar, setNavbar] = useState(true);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const router = useRouter();

  const changeBackground = () => {
    const scrolled = window.scrollY > 10;
    if (scrolled !== navbar) {
      setNavbar(scrolled);
    }
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeBackground);
  //   return () => {
  //     window.removeEventListener("scroll", changeBackground);
  //   };
  // }, [navbar]);

  const handleLoginRedirect = (e) => {
    // Check for logged-in user on button click
    const accessToken = localStorage.getItem("accessToken");
    const userType = localStorage.getItem("userType");

    if (accessToken && userType) {
      e.preventDefault(); // Prevent default link behavior
      if (userType === "1") {
        router.push("/candidates-dashboard/dashboard");
      } else if (userType === "2" || userType === "3" || userType === "4") {
        router.push("/employers-dashboard/dashboard");
      }
    } else {
      setShowModal(true); // Show the modal if no logged-in user is found
    }
  };

  const headerStyle = {
    backgroundColor: navbar ? '#808080' : '#808080', 
    // transition: 'background-color 0.3s ease',
  };

  return (
    <header
      className={`main-header header-style-two ${
        navbar ? "fixed-header animated slideInDown" : ""
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
                    width={50}
                    height={50}
                    src="/images/logo-no-background.png"
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
              {/* <Link
                // href="/employers-dashboard/post-jobs"
                href="#"
                // className="theme-btn btn-style-six call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
                // href="/login"
                className="theme-btn btn-style-five"
              >
                <span className="btn-title">Job Post</span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader2;
