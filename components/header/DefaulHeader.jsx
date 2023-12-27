
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import Image from "next/image";
import GlobalConfig from "@/Global.config";
const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
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

    // Initial check for scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header  ${
        navbar ? "fixed-header" : ""
      }`}
      style={headerStyle} 
    >
      {/* <!-- Main box --> */}
      <div className="main-box">
        {/* <!--Nav Outer --> */}
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <Image
                  width={70}
                  height={70}
                  src="/images/user-flat.svg"
                  color="white"
                  alt="brand"
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
          {/* <!-- Login/Register --> */}
          <div className="btn-box">
            <a
              href="#"
              className="theme-btn btn-style-three call-modal"
              data-bs-toggle="modal"
              data-bs-target="#loginPopupModal"
            >
              Login / Register
            </a>
            <Link
              href="/employers-dashboard/post-jobs"
              className="theme-btn btn-style-one"
            >
              Job Post
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader;
