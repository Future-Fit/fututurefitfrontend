
"use client"
import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardJobseekerSidebar from "../../../header/DashboardJobseekerSidebar";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
import SocialNetworkBox from "./components/SocialNetworkBox";
import ContactInfoBox from "./components/ContactInfoBox";
import CopyrightFooter from "../../CopyrightFooter";
import DashboardStudentsHeader from "../../../header/DashboardStudentsHeader";
import MenuToggler from "../../MenuToggler";
import FooterDefault from "../../../footer/common-footer";
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "@/app.config";
import CvUploader from "../../candidates-dashboard/cv-manager/components/CvUploader";

// import DefaultConfig from "app.config.js";

const index = () => {

  const [userDetail, setUserDetail] = useState(null);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    mname: '',
  })

  useEffect(() => {
    const userId = localStorage.getItem("loggedInUserId");
    const token = localStorage.getItem("accessToken");
    console.log('user id', userId);
    if (userId) {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(`${apiConfig.url}/users/me`, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
          console.log('Response from server for profile:', response.data);
          setUserDetail(response.data);
          setFormData(response.data);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };
      fetchUserDetails();
    }
  }, []);

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardStudentsHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardJobseekerSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb />
          <b style={{ fontSize: "1.5em" }}><u>{formData.fname} {formData.lname}</u> - Job Seeker Profile</b>
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget">
                <div>
                  <MyProfile />
                </div>
              </div>

              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title"
                    style={{ display: "grid", justifyContent: "center", paddingBottom: "10px" }}>
                    <text style={{ textAlign: "center", fontWeight: "bolder", fontSize: "1em" }}>
                      Social Network
                    </text>
                  </div>
                  {/* End widget-title */}

                  <div className="widget-content">
                    <SocialNetworkBox />
                  </div>
                </div>
              </div>
              {/* <!-- Ls widget --> */}
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <FooterDefault />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default index;
