
"use client"
import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import BreadCrumb from "../../BreadCrumb";
import Form from "./components/Form";
import DashboardStudenstsHeader from "../../../header/DashboardStudentsHeader";
import MenuToggler from "../../MenuToggler";
import FooterDefault from "../../../footer/common-footer";
import DashboardStudentsSidebar from "@/components/header/DashboardStudentSidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "@/app.config";
import { useRouter } from 'next/navigation';

const index = () => {

  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('accessToken'); // Assuming you store accessToken in localStorage
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      router.push('/login');
    }
  }, []);

  const [userDetail, setUserDetail] = useState(null);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    mname: '',
  })

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

      <DashboardStudenstsHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardStudentsSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb/>
          <b style={{ fontSize: "1.5em" }}><u>{formData.fname} {formData.lname}</u> - Password Change</b>
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="ls-widget">
            {/* <div className="widget-title">
              <h4>Change Password</h4>
            </div> */}

            <div className="widget-content">
              <Form />
            </div>
          </div>
          {/* <!-- Ls widget --> */}
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
