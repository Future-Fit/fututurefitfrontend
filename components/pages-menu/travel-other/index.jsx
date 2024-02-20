"use client"
import LoginPopup from "../../common/form/login/LoginPopup";
import MobileMenu from "../../header/MobileMenu";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import FooterDefault from "../../footer/common-footer";
import DashboardCandidatesHeader from "../../header/DashboardCandidatesHeader";
import DashboardHeader from "../../header/DashboardEmployerHeader";
import { useEffect, useState } from "react";
import CallToAction3 from "@/components/call-to-action/CallToAction3";

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

      {userType === 3 && <DashboardHeader />}
      {userType === 4 && <DashboardCandidatesHeader />}
      {userType !== 3 && userType !== 4 && <DefaulHeader2 />}
      {/* <DefaulHeader /> */}
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="app-section">
        <div className="auto-container">
        <CallToAction3/>
        </div>
      </section>

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
