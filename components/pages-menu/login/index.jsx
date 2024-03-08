"use client"
import FormContent from "@/components/common/form/login/FormContent";
import MobileMenu from "../../header/MobileMenu";
import Header from "./Header";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import LoginPopup from "@/components/common/form/login/LoginPopup";
import { useEffect, useState } from "react";
import DashboardHeader from "@/components/header/DashboardEmployerHeader";
import DashboardCandidatesHeader from "@/components/header/DashboardCandidatesHeader";
import DashboardAdminHeader from '../../header/DashboardAdminHeader'
import DashboardEmployeeHeader from '../../header/DashboardEmployerHeader'
import DashboardStudentHeader from '../../header/DashboardStudentsHeader'
import FormContent2 from "@/components/common/form/login/FormContent2";


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
    
      <LoginPopup />
      {userType === 1 && <DashboardAdminHeader />}
      {userType === 3 && <DashboardEmployeeHeader />}
      {userType === 4 && <DashboardCandidatesHeader />}
      {userType === 5 && <DashboardStudentHeader />}
      {userType !== 1 && userType !== 3 && userType !== 4 && userType !== 5 && <DefaulHeader2 />}
      {/* <!--End Main Header -->  */}

      <MobileMenu />
      {/* End MobileMenu */}

      <div className="login-section">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(/images/background/27.jpg)" }}
        ></div>
        <div className="outer-box">
          {/* <!-- Login Form --> */}
          <div className="login-form default-form">
            <FormContent2 />
          </div>
          {/* <!--End Login Form --> */}
        </div>
      </div>
      {/* <!-- End Info Section --> */}
    </>
  );
};

export default index;
