"use client";

import {

  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

import mobileMenuData from "../../../data/mobileMenuData";
import SidebarHeader from "./SidebarHeader";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../../utils/linkActiveChecker";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import GlobalConfig from "@/Global.config";

const Index = () => {
  const router = useRouter()
  const sidebarRef = useRef(null);
  const [sidebarHeight, setSidebarHeight] = useState('100vh'); // Initial height


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
    background: GlobalConfig.BgHeader,
    color:'white'
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
                style={{background:GlobalConfig.BgHeader,color:'white' }}
              >
                {item.items.map((menuItem, i) => (
                  <MenuItem
                  // style={{background:`${GlobalConfig.BgHeader} !important`  }}
                style={{background:GlobalConfig.BgHeader,color:'white' }}

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
                style={{background:GlobalConfig.BgHeader,color:'white' }}

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
