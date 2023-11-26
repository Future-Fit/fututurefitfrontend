"use client";

import {

  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

import mobileMenuData from "../../../data/mobileMenuData";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../../utils/linkActiveChecker";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";


const Index = () => {
  const router = useRouter()
  const sidebarRef = useRef(null);
  const [sidebarHeight, setSidebarHeight] = useState('100vh'); // Initial height
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // State to manage selected language


  useEffect(() => {
    const calculateSidebarHeight = () => {
      if (sidebarRef.current) {
        const menuItemsHeight = sidebarRef.current.scrollHeight;
        setSidebarHeight(`${menuItemsHeight}px`);
      }
    };

    // Recalculate height when the component mounts or content changes
    calculateSidebarHeight();
    window.addEventListener("resize", calculateSidebarHeight);
    return () => {
      window.removeEventListener("resize", calculateSidebarHeight);
    };
  }, [router.asPath]);

  const sidebarContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: sidebarHeight, // Set sidebar height dynamically
    width: '200px',
    background: '#f2f2f2',
  };

  return (
    <div
      className="offcanvas offcanvas-start mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenu"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}
      <Sidebar ref={sidebarRef}>
        <Menu>
          {mobileMenuData.map((menuItem, i) => (
            <MenuItem
              onClick={() => router.push(menuItem.routePath)}
              className={
                router.asPath === menuItem.routePath
                  ? "menu-active-link"
                  : ""
              }
              key={i}
            >
              {menuItem.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
      {/* <SidebarFooter /> */}
    </div>
  );
};

export default Index;



  // return (
  //   <div>
  //     {/* Menu icon to open the sidebar */}
  //     <button onClick={toggleSidebar}>
  //       <span className="menu-icon">☰</span> {/* Replace with your menu icon */}
  //     </button>

  //     <div style={isOpen ? openStyle : closedStyle}>
  //       <SidebarHeader />

  //       <Sidebar>
  //         <Menu>
  //           {mobileMenuData.map((menuItem, i) => (
  //             <MenuItem
  //               onClick={() => {
  //                 router.push(menuItem.routePath);
  //                 toggleSidebar();
  //               }}
  //               className={
  //                 router.asPath === menuItem.routePath ? "menu-active-link" : ""
  //               }
  //               key={i}
  //             >
  //               {menuItem.label}
  //             </MenuItem>
  //           ))}
  //         </Menu>
  //       </Sidebar>

  //       <SidebarFooter />
  //       {/* Close button */}
  //       <button onClick={toggleSidebar}>Close</button>
  //     </div>
  //   </div>
  // );