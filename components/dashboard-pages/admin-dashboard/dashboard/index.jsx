"use client"
import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardAdminHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardAdminSidebar from "../../../header/DashboardAdminSidebar";
import BreadCrumb from "../../BreadCrumb";
import TopCardBlock from "./components/TopCardBlock";
import ProfileChart from "./components/ProfileChart";
import Notification from "./components/Notification";
import Applicants from "./components/Applicants";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import FooterDefault from "../../../footer/common-footer";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "@/app.config";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('accessToken'); // Assuming you store accessToken in localStorage
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, []);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    mname: '',
  })

    // Get userType from local storage outside of useEffect
    const userType = localStorage.getItem('userType');

    // Update label based on userType
    if (userType === '5') {
      formData.label = 'Student Profile';
    } else if (userType === '4') {
      formData.label = 'Job Seeker Profile'
    } else if (userType === '1') {
      formData.label = 'Admin Profile'
    } else {
      formData.label = 'My Profile'
    }

    useEffect(() => {
      const userId = localStorage.getItem("loggedInUserId");
      const token = localStorage.getItem("accessToken");
  
      if (userId) {
        const fetchUserDetails = async () => {
          try {
            const response = await axios.get(`${apiConfig.url}/users/me`, {
              headers: {
                "Authorization": `Bearer ${token}`
              }
            });
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

      <DashboardHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardAdminSidebar />
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb/>
          {/* breadCrumb */}
          <b style={{ fontSize: "1.5em" }}><u>{formData.fname} {formData.lname}</u> - {formData.label ? formData.label : 'My Profile'}</b>


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
                  <Notification />
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-12">
              {/* <!-- applicants Widget --> */}
              <div className="applicants-widget ls-widget">
                <div className="widget-title">
                  <h4>Recent Applicants</h4>
                </div>
                <div className="widget-content">
                  <div className="row">
                    {/* <!-- Candidate block three --> */}

                    {/* <Applicants /> */}
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

export default Index;
