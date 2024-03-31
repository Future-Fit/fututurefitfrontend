
"use client"
import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardStudentsSidebar from "../../../header/DashboardStudentSidebar";
import BreadCrumb from "../../BreadCrumb";
import DashboardStudentsHeader from "../../../header/DashboardStudentsHeader";
import MenuToggler from "../../MenuToggler";
import FooterDefault from "../../../footer/common-footer";
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "@/app.config";
import CvUploader from "../../candidates-dashboard/cv-manager/components/CvUploader";
import TopCardBlock from "./components/TopCardBlock";
import ProfileChart from "./components/ProfileChart";
import Notification from "./components/Notification";
import SchoolsApplied from "./components/SchoolsApplied";


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

      <DashboardStudentsSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb />
          <b style={{ fontSize: "1.5em" }}><u>{formData.fname} {formData.lname}</u> - Dashboard</b>
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <TopCardBlock />
          </div>
          {/* End .row top card block */}

          <div className="row">
            <div className="col-xl-7 col-lg-12">
              {/* <!-- Graph widget --> */}
              <div className="graph-widget ls-widget">
                <ProfileChart />
              </div>
              {/* End profile chart */}
            </div>
            {/* End .col */}

            <div className="col-xl-5 col-lg-12">
              {/* <!-- Notification Widget --> */}
              <div className="notification-widget ls-widget">
                <div className="widget-title">
                  <h4>Notifications</h4>
                </div>
                <div className="widget-content">
                  {/* <Notification /> */}
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-12">
              {/* <!-- applicants Widget --> */}
              <div className="applicants-widget ls-widget">
                <div className="widget-title">
                  <h4>Applied</h4>
                </div>
                <div className="widget-content">
                  <div className="row">
                    {/* <!-- Candidate block three --> */}

                    {/* <SchoolsApplied /> */}
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row profile and notificatins */}

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
