'use client'

import Link from "next/link";
import "react-circular-progressbar/dist/styles.css";
import studentsmenuData from "../../data/studentsMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";
import { usePathname, useRouter } from "next/navigation";
import { clearSession } from "../common/form/login/sessionHandler";
import GlobalConfig from "@/Global.config";
import { useState } from "react";
import apiConfig from "@/app.config";


const DashboardStudentSidebar = () => {
  const { menu } = useSelector((state) => state.toggle);

  const [userDetail, setUserDetail] = useState(null);
  const [formData, setFormData] = useState({
    is_archived: '',    // is archived to true
    is_email_verified: '',
    mname: '',
    gen: '',      // gender
    plcBir: '',   // place of birth
    ctzn: '',     // citizenship
    addr: '',      // current address
    city: '',      // current city
    resid: '',      // current country (residency)
    eduLev: '',   // education level (select from choice)
    eduYrs: '',   // tot. # of years attended school (prim to univ) 
    proEng: '',   // English lang. proficiency (select from choices)
    proFre: '',   // Frech lang. proficiency (select from choices)
    proOth: '',   // list other language(s) and proficiency level
    isEmp: '',    // currently employed? (select yes or no)
    namEmp: '',   // name of employer, if employed
    yrsEmp: '',   // # of years employed
    isIntr: '',    // interested to study or work in Canada? (select yes or no)
    datAvl: [],   // date avialable for study or employment (select from intake dates)
    intAre: [],   // interest area for study or employment (select from choice)
    proCan: [],   // indicate provinces in Canada to study or work in (select from choice)
    allSrch: '',  // enable searching (select yet or no) 
    detail: '',   // open for user to write anything (limit 500 chars?)
    otherLevel: '',
    // dob: '',
    otherProgram: '',
    // user_image: {}
  });

  const dispatch = useDispatch();
  // menu togggle handler
  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };

  const filteredData = studentsmenuData.filter(
    (item) => item.name !== "Change Password" && item.name !== "Logout"
  );

  const router = useRouter();


  const updateUser = async (data) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("No access token found");
        return;
      }

      const response = await axios.put(`${apiConfig.url}/users/profile`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Assuming the API returns the updated user details as response
      console.log('User unsubscribed successfully.');
      setUserDetail(response.data);
      setFormData(response.data);
      alert("User unsubscribed successfully.")

      // Perform any success actions, like updating UI or state
      await clearSession(); // Clear session (assuming this can be made async)
      return
    } catch (error) {
      console.error("Error in unsubscribing", error.response ? error.response.data : error);
      alert("Error in unsubscribing")
      // Handle errors (e.g., show error message to the user)
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.delete(`${apiConfig.url}/users/userImage`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // console.log('Image deleted successfully:', response.data);
      // alert('Delete profile image?');
      // window.location.reload();
      await clearSession(); // Clear session (assuming this can be made async)
        return;
    } catch (error) {
      console.error('Error deleting image:', error.response ? error.response.data : error);
      // alert('Error deleting profile image.');
      await clearSession(); // Clear session (assuming this can be made async)
      return
    }
  };

  const handleMenuItemClick = async (item, event) => {
    if (item.id === 7) { // Check if the clicked item is the logout option
      event.preventDefault(); // Prevent default Link navigation
      const confirmLogout = window.confirm("Are you sure you want to logout?");
      if (confirmLogout) {
        await clearSession(); // Clear session (assuming this can be made async)
        return;
      } // If not confirmed, do nothing
    } else if (item.id === 8) {
      event.preventDefault(); // Prevent default Link navigation
      const confirmUnsubscribe = window.confirm("Are you sure you want to unsubscribe?"); // Confirmation dialog

      if (confirmUnsubscribe) {
        const dataToUpdate = {
          is_archived: true,
          is_email_verified: false,
          mname: '',
          gen: '',      // gender
          plcBir: '',   // place of birth
          ctzn: '',     // citizenship
          addr: '',      // current address
          city: '',      // current city
          resid: '',      // current country (residency)
          eduLev: '',   // education level (select from choice)
          eduYrs: '',   // tot. # of years attended school (prim to univ) 
          proEng: '',   // English lang. proficiency (select from choices)
          proFre: '',   // Frech lang. proficiency (select from choices)
          proOth: '',   // list other language(s) and proficiency level
          isEmp: '',    // currently employed? (select yes or no)
          namEmp: '',   // name of employer, if employed
          yrsEmp: '',   // # of years employed
          isIntr: '',    // interested to study or work in Canada? (select yes or no)
          datAvl: [],   // date avialable for study or employment (select from intake dates)
          intAre: [],   // interest area for study or employment (select from choice)
          proCan: [],   // indicate provinces in Canada to study or work in (select from choice)  // indicate provinces in Canada to study or work in (select from choice)
          allSrch: '',  // enable searching (select yet or no) 
          detail: '',   // open for user to write anything (limit 500 chars?)
          otherLevel: '',
          otherProgram: '',
        };
        updateUser(dataToUpdate); // Pass the data to updateUser
        handleDelete()
      }
      else {
        return
      }
    }
    else {
      menuToggleHandler(); // Perform the usual menu toggle action
    }
  };

  return (
    <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
      {/* Start sidebar close icon */}
      <div className="pro-header text-end pb-0 mb-0 show-992" style={{ backgroundColor: GlobalConfig.BgHeader }}>
        <div className="pro-header" style={{ paddingTop: '50px', backgroundColor: GlobalConfig.BgHeader }}>

          <div className="fix-icon" onClick={menuToggleHandler} data-bs-dismiss="offcanvas" aria-label="Close">
            <span className="flaticon-close" style={{ color: '#fff' }}></span>
          </div>
          {/* icon close */}
        </div>
      </div>
      {/* End sidebar close icon */}

      <div className="sidebar-inner">
        <ul className="navigation">
          {studentsmenuData.map((item) => (
            <li
              className={`${isActiveLink(item.routePath, usePathname()) ? "active" : ""
                } mb-1`}
              key={item.id}
              onClick={(event) => handleMenuItemClick(item, event)}
            // onClick={handleMenuItemClick}
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

export default DashboardStudentSidebar;
