'use client'

import Link from "next/link";
import adminMenuData from "../../data/adminMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";

import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";
import { usePathname, useRouter } from "next/navigation";
import { clearSession } from "../common/form/login/sessionHandler";
import Image from "next/image";
import GlobalConfig from "@/Global.config";

const DashboardEmployerSidebar = () => {

    const { menu } = useSelector((state) => state.toggle);

    const dispatch = useDispatch();
    const menuToggleHandler = () => {
        dispatch(menuToggle());
    };

    const router = useRouter();

    
  const handleMenuItemClick = async (item, event) => {
    if (item.id === 11) { // Check if the clicked item is the logout option
      event.preventDefault(); // Prevent default Link navigation
      const confirmLogout = window.confirm("Are you sure you want to logout?");
      if (confirmLogout) {
        await clearSession(); // Clear session (assuming this can be made async)
        return;
        // router.push('/'); // Redirect to home or login page
      } // If not confirmed, do nothing
    } else {
      menuToggleHandler(); // Perform the usual menu toggle action
    }
  };

    return (
        <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>

            <div className="pro-header text-end pb-0 mb-0 show-992" style={{ backgroundColor: GlobalConfig.BgHeader }}>
                <div className="pro-header" style={{ paddingTop: '50px', backgroundColor: GlobalConfig.BgHeader }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {/* This div is for positioning the close icon to the right */}
                        <div className="fix-icon" onClick={menuToggleHandler} data-bs-dismiss="offcanvas" aria-label="Close">
                            <span className="flaticon-close" style={{ color: '#fff' }}></span>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="pro-header text-end pb-0 mb-0 show-992" style={{backgroundColor: GlobalConfig.BgHeader}}>
                <div className="pro-header" style={{paddingTop: '50px', backgroundColor: GlobalConfig.BgHeader}}>
                   
                    <div className="fix-icon" onClick={menuToggleHandler} data-bs-dismiss="offcanvas" aria-label="Close">
                        <span className="flaticon-close" style={{ color: '#fff' }}></span>
                    </div>
                </div>

            </div> */}
            {/* End sidebar close icon */}

            <div className="sidebar-inner">
                <ul className="navigation">
                    {adminMenuData.map((item) => (
                        <li
                            className={`${isActiveLink(item.routePath, usePathname()) ? "active" : ""
                                } mb-1`}
                            key={item.id}
                            onClick={(event) => handleMenuItemClick(item, event)}
                        >
                            <Link href={item.routePath}>
                                <i className={`la ${item.icon}`}></i> {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DashboardEmployerSidebar;
