
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SidebarFooter = () => {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [hoveredItemStyle, setHoveredItemStyle] = useState({}); // State to manage inline style for hovered item

  const handleLanguageChange = (language) => {
    // Function to handle language change
    setSelectedLanguage(language);
    console.log(`Selected Language: ${language}`);
  };

  const handleItemHover = () => {
    // Set inline style for hovered item
    setHoveredItemStyle({
      backgroundColor: '#f0f0f0', // Change to your desired hover background color
      // paddingRight: '15px', // Add padding for smooth transition
      // borderRadius: '10px 5px 5px 10px', // Rounded corners on the right side
    });
  };

  const handleItemLeave = () => {
    // Clear inline style when mouse leaves the item
    setHoveredItemStyle({});
  };

  const router = useRouter();

  const handleLoginRedirect = (e) => {
    // Check for logged-in user on button click
    const accessToken = localStorage.getItem("accessToken");
    const userType = localStorage.getItem("userType");

    if (accessToken && userType) {
      e.preventDefault(); // Prevent default link behavior
      if (userType === "4") {
        router.push("/candidates-dashboard/my-profile");
      } else if (userType === "3") {
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
      {/* <a
        href="#"
        className="theme-btn btn-style-one mm-listitem__text"
        // className="theme-btn btn-style-six call-modal"
        data-bs-toggle="modal"

        data-bs-target="#loginPopupModal"
        onClick={handleLoginRedirect}
      >
        Sign In / Sign Up
      </a> */}

      
    </div>
  );
};

export default SidebarFooter;
