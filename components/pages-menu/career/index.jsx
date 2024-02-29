"use client"
import LoginPopup from "../../common/form/login/LoginPopup";
import MobileMenu from "../../header/MobileMenu";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import FooterDefault from "../../footer/common-footer";
import DashboardCandidatesHeader from "../../header/DashboardCandidatesHeader";
import DashboardAdminHeader from '../../header/DashboardAdminHeader'
import DashboardEmployeeHeader from '../../header/DashboardEmployerHeader'
import DashboardStudentHeader from '../../header/DashboardStudentsHeader'
import DashboardHeader from "../../header/DashboardEmployerHeader";
import { useEffect, useState } from "react";
import Subscribe from "@/components/call-to-action/subcribe-box/Subscribe";

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
      {userType === 4 && <DashboardCandidatesHeader />}
      {userType === 5 && <DashboardStudentHeader />}
      {userType !== 1 && userType !== 3 && userType !== 4 && userType !== 5 && <DefaulHeader2 />}
      {/* <DefaulHeader /> */}
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="subscribe-section-two -type-2">
        <div
          className="background-image"
          style={{ backgroundImage: "url(/images/index-12/subs/bg.png)" }}
        ></div>
        <div className="auto-container wow fadeInUp">
          <div className="sec-title text-center light">
            <h2>Your Dream Career</h2>
            <div className="text">
              Search Here 
            </div>
          </div>

          <div className="subscribe-form">
            <Subscribe btnStyle="btn-style-one" />
          </div>
        </div>
      </section>

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
