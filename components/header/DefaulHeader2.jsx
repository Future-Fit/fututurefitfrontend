
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import Image from "next/image";

const DefaulHeader2 = () => {
  const [navbar, setNavbar] = useState(true);


  const changeBackground = () => {
    const scrolled = window.scrollY > 10;
    if (scrolled !== navbar) {
      setNavbar(scrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [navbar]);

  const headerStyle = {
    backgroundColor: navbar ? '#B3E5FC' : 'rgba(0, 0, 0, 0.5)', 
    transition: 'background-color 0.3s ease',
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
              >
                Login / Register
              </a>
              <Link
                // href="/employers-dashboard/post-jobs"
                href="#"
                // className="theme-btn btn-style-six call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
                // href="/login"
                className="theme-btn btn-style-five"
              >
                <span className="btn-title">Job Post</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader2;
