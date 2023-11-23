
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SidebarFooter = () => {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const router = useRouter();

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
  const socialContent = [
    { id: 1, icon: "fa-facebook-f", link: "https://www.facebook.com/" },
    { id: 2, icon: "fa-twitter", link: "https://www.twitter.com/" },
    { id: 3, icon: "fa-instagram", link: "https://www.instagram.com/" },
    { id: 4, icon: "fa-linkedin-in", link: "https://www.linkedin.com/" },
  ];

  return (
    <div className="mm-add-listing mm-listitem pro-footer">
      {/* <div className="outer-box">
        <div className="d-flex align-items-center btn-box2"> */}
      <a
        href="#"
        className="theme-btn btn-style-one mm-listitem__text"
        // className="theme-btn btn-style-six call-modal"
        data-bs-toggle="modal"

        data-bs-target="#loginPopupModal"
        onClick={handleLoginRedirect}
      >
        Sign In / Sign Up
      </a>

      {/* </div>
      </div> */}
      <br />

      <a href="#"
        data-bs-toggle="modal"
        data-bs-target="#loginPopupModal"
        onClick={handleLoginRedirect}
        className="theme-btn btn-style-one mm-listitem__text">
        Job Post
      </a>
      {/* job post btn */}

      <div className="mm-listitem__text">
        <div className="contact-info">
          <span className="phone-num">
            <span>Contact Us</span>
            <a href="tel:+1 88 xxx xxxx">+188 xxx xxxx</a>
          </span>
          <span className="address">
            168 Charlotte Street, Suite 404, Ottawa, ON <br />
            Canada.
          </span>
          <span className="address">
            242 Building, Chirkos 04, Addis Ababa <br />
            Ethiopia.
          </span>
          <a href="mailto:info@futurefitinternational.com " className="email">
            info@futurefitinternational.com
          </a>
        </div>
        {/* End .contact-info */}

        <div className="social-links">
          {socialContent.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
            >
              <i className={`fab ${item.icon}`}></i>
            </a>
          ))}
        </div>
        {/* End social-links */}
      </div>
      {/* End .mm-listitem__text */}
    </div>
  );
};

export default SidebarFooter;
