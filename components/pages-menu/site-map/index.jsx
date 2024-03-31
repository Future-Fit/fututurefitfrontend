"use client"

import DefaulHeader2 from "@/components/header/DefaultHeader";
import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import MobileMenu from "../../header/MobileMenu";
import TermsText from "./TermsText";
import { useEffect, useState } from "react";
import DashboardHeader from "@/components/header/DashboardEmployerHeader";
import DashboardCandidatesHeader from "@/components/header/DashboardCandidatesHeader";
import DashboardAdminHeader from '../../header/DashboardAdminHeader'
import DashboardEmployeeHeader from '../../header/DashboardEmployerHeader'
import DashboardStudentHeader from '../../header/DashboardStudentsHeader'
import DashboardJobseekerHeader from "@/components/header/DashboardJobseekerHeader";


const index = () => {

  const [userType, setUserType] = useState();

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(JSON.parse(storedUserType));
    }
  }, []);

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      {userType === 1 && <DashboardAdminHeader />}
      {userType === 3 && <DashboardEmployeeHeader />}
      {userType === 4 && <DashboardJobseekerHeader />}
      {userType === 5 && <DashboardStudentHeader />}
      {userType !== 1 && userType !== 3 && userType !== 4 && userType !== 5 && <DefaulHeader2 />}
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="tnc-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Site Maps</h2>
            {/* <div className="text">Home / Terms and Conditions</div> */}
          </div>
          {/* End sec-title */}
          {/* site map here */}
          <ul className="list-style-five"  style={{color: '#000'}}>
            <li><a style={{color: '#000'}} href="/">Home</a></li>
            <li><a style={{color: '#000'}} href="/about">About</a></li>
            <li>
              <a style={{color: '#000'}} href="/service">Service</a>
              <ul>
                <li><a style={{color: '#000'}} href="/service/job-seekers">Job Seeker</a></li>
                <li><a style={{color: '#000'}} href="/service/students">Students</a></li>
                <li><a style={{color: '#000'}} href="/service/businesses">Businesses</a></li>
                <li><a style={{color: '#000'}} href="/service/universities-colleges">Universities & Colleges</a></li>
                <li><a style={{color: '#000'}} href="/service/training">Training</a></li>
              </ul>
            </li>
            <li><a style={{color: '#000'}} href="/contact">Contact</a></li>
          </ul>
        </div>
      </section>
      {/* <!-- End TNC Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
