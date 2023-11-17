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


const Index = () => {

  const router = useRouter()


  return (
    <div
      className="offcanvas offcanvas-start mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenu"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}
        <Sidebar>
          <Menu>
            {mobileMenuData.map((menuItem, i) => (
              // <SubMenu
              //   className={
              //     isActiveParentChaild(item.items, usePathname())
              //       ? "menu-active"
              //       : ""
              //   }
              //   label={item.label}
              //   key={item.id}
              // >
                // {item.items.map((menuItem, i) => (
                  <MenuItem

                  onClick={()=>router.push(menuItem.routePath)}
                    className={
                      router.asPath === menuItem.routePath
                  ? "menu-active-link"
                  : ""
              }
              key={i}
                    // routerLink={<Link href={menuItem.routePath} />}
                  >
                    {menuItem.label}
                  </MenuItem>
                // ))}
              // </SubMenu>
            ))}
          </Menu>
        </Sidebar>
      <SidebarFooter />
    </div>
  );
};

export default Index;