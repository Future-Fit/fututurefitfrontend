'use client'

import Link from "next/link";
import employerMenuData from "../../data/employerMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";

import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";
import { usePathname, useRouter } from "next/navigation";
import { clearSession } from "../common/form/login/sessionHandler";
import Image from "next/image";

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
      await clearSession(); // Clear session (assuming this can be made async)
      router.push('/'); // Redirect to home or login page
    } else {
      menuToggleHandler(); // Perform the usual menu toggle action
    }
  };

    return (
        <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
            <div className="pro-header text-end pb-0 mb-0 show-1023">
                <div className="pro-header" style={{paddingTop: '50px'}}>
                   
                    <div className="fix-icon" onClick={menuToggleHandler} data-bs-dismiss="offcanvas" aria-label="Close">
                        <span className="flaticon-close" style={{ color: '#fff' }}></span>
                    </div>
                    {/* icon close */}
                </div>

            </div>
            {/* End sidebar close icon */}

            <div className="sidebar-inner">
                <ul className="navigation">
                    {employerMenuData.map((item) => (
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
