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
          {mobileMenuData.map((item) => (
            // Check if the item has sub-items
            (item.items && item.items.length > 0) ? (
              <SubMenu
                className={
                  isActiveParentChaild(item.items, usePathname())
                    ? "menu-active"
                    : ""
                }
                label={item.label}
                key={item.id}
              >
                {item.items.map((menuItem, i) => (
                  <MenuItem
                    onClick={() => router.push(menuItem.routePath)}
                    className={
                      isActiveLink(menuItem.routePath, usePathname())
                        ? "menu-active-link"
                        : ""
                    }
                    key={i}
                  >
                    {menuItem.name}
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              // Render regular MenuItem for items without sub-items
              <MenuItem
                onClick={() => router.push(item.routePath)}
                className={
                  isActiveLink(item.routePath, usePathname())
                    ? "menu-active-link"
                    : ""
                }
                key={item.id}
              >
                {item.label}
              </MenuItem>
            )
          ))}
        </Menu>
      </Sidebar>
      {/* <SidebarFooter /> */}
    </div>
  );
};

export default Index;
