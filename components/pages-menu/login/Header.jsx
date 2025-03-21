"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import GlobalConfig from "@/Global.config";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeBackground);
  // }, []);

  return (
    <header
      className={`main-header ${
        navbar ? "fixed-header" : ""
      }`}
    >
      <div className="container-fluid">
        {/* <!-- Main box --> */}
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/" className="noSticky">
                  <Image
                    width={70}
                    height={70}
                    src= {GlobalConfig.DskLog}
                    alt="logo"
                    title="brand"
                  />
                </Link>
                <Link href="/" className="isSticky">
                  <Image
                    width={70}
                    height={70}
                    src= {GlobalConfig.DskLog}
                    alt="logo"
                    title="brand"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* End nav-outer */}

          <div className="outer-box">
            {/* <!-- Login/Register --> */}
            <div className="btn-box">
            <Link
              href="#"
              data-bs-toggle="modal"
              // href="/employers-dashboard/post-jobs"
              className="theme-btn btn-style-one"
            >
              Job Post
            </Link>
              {/* <Link
                href="/login"
                // href="/employers-dashboard/post-jobs"
                className="theme-btn btn-style-one"
              >
                <span className="btn-title">Job Post</span>
              </Link> */}
            </div>
          </div>
          {/* End outer-box */}
        </div>
      </div>
    </header>
  );
};

export default Header;
