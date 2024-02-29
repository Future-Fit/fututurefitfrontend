"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import { useDispatch, useSelector } from "react-redux";
import { reloadCart } from "../../features/shop/shopSlice";
import Image from "next/image";
import GlobalConfig from "@/Global.config";

const ShopHeader = () => {
  const { cart } = useSelector((state) => state.shop) || {};
  const [navbar, setNavbar] = useState(false);

  const dispatch = useDispatch();

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleLoginRedirect = (e) => {

    const accessToken = localStorage.getItem("accessToken");
    const userType = localStorage.getItem("userType");
    const modalElement = document.getElementById("loginPopupModal");

    if (accessToken && userType) {
      e.preventDefault();
      if (userType === "4") {
        modalElement.style.display = "none";
        router.push("/candidates-dashboard/my-profile");
      } else if (userType === "3") {
        modalElement.style.display = "none";
        router.push("/employers-dashboard/dashboard");
      }
    }
  };

  const [headerStyle, setHeaderStyle] = useState({
    backgroundColor: GlobalConfig.BgHeader,
    boxShadow: 'none',
  });

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  // re-load cart
  useEffect(() => {
    dispatch(reloadCart());
  }, [dispatch, reloadCart]);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header header-style-two ${navbar ? "fixed-header" : ""
        }`}
      style={headerStyle} // Apply the inline style here
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
                    width={70}
                    height={70}
                    src={GlobalConfig.DskLog}
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
            {/* <!-- Login/Register --> */}
            <Link href="/shop/cart">
              <button className="menu-btn me-3">
                <span className="count">{cart?.length}</span>
                <span className="icon flaticon-shopping-cart" />
              </button>
            </Link>

            <div className="btn-box">
              <a
                href="#"
                className="theme-btn btn-style-six call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
                onClick={handleLoginRedirect}
              >
                Sign In / Sign Up
              </a>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default ShopHeader;
