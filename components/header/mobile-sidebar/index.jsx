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
import { useState } from "react";


const Index = () => {
  const router = useRouter()

  const sidebarContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // Set the direction to column
    height: '100vh', // Set the height of the sidebar to cover the full viewport height
    width: '200px', // Define your sidebar width
    background: '#f2f2f2',
    // Add any other necessary styles
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
      <Sidebar >
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