'use client'

import Link from "next/link";
import employerMenuData from "../../data/employerMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";

import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";
import { usePathname } from "next/navigation";
import { clearSession } from "../common/form/login/sessionHandler";
import Image from "next/image";

const DashboardEmployerSidebar = () => {

    const { menu } = useSelector((state) => state.toggle);

    const dispatch = useDispatch();
    // menu togggle handler
    const menuToggleHandler = () => {
        dispatch(menuToggle());
    };

    // const filteredData = employerMenuData.filter(
    //     (item) => item.name !== "Change Password" && item.name !== "Logout"
    // );

    return (
        <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
            <div className="pro-header text-end pb-0 mb-0 show-1023">
                <div className="pro-header">
                    <Link href="/">
                        <Image width={50} height={50}
                            src="/images/logo-no-background.png"
                            alt="brand" />
                    </Link>
                    {/* End logo */}

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
                            onClick={menuToggleHandler}
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
