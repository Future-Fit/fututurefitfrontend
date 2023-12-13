'use client'

import Link from "next/link";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import candidatesuData from "../../data/candidatesMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";

import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";
import { usePathname } from "next/navigation";
import { clearSession } from "../common/form/login/sessionHandler";
import Image from "next/image";


const DashboardCandidatesSidebar = () => {
  const { menu } = useSelector((state) => state.toggle);
  const percentage = 30;


  const dispatch = useDispatch();
  // menu togggle handler
  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };

  const filteredData = candidatesuData.filter(
    (item) => item.name !== "Change Password" && item.name !== "Logout"
  );

  return (
    <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
      {/* Start sidebar close icon */}
      <div className="pro-header text-end pb-0 mb-0 show-1023">
        <div className="pro-header" style={{paddingTop: '50px'}}>
          <Link href="/">
            {/* <Image width={50} height={50}
              src="/images/logo-no-background.png"
              alt="brand" /> */}
          </Link>
          {/* End logo */}

          <div className="fix-icon" onClick={menuToggleHandler} data-bs-dismiss="offcanvas" aria-label="Close">
            <span className="flaticon-close" style={{ color: '#fff' }}></span>
          </div>
          {/* icon close */}
        </div>
        {/* <div className="fix-icon" onClick={menuToggleHandler}>
          <span className="flaticon-close" style={{ color: '#fff' }}></span>
        </div> */}
      </div>
      {/* End sidebar close icon */}

      <div className="sidebar-inner">
        <ul className="navigation">
          {candidatesuData.map((item) => (
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

export default DashboardCandidatesSidebar;
