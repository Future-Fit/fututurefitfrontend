"use client"
import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import MobileMenu from "../../header/MobileMenu";
import Breadcrumb from "../../../components/shop/Breadcrumb";
import BillingAll from "./components";
import DashboardAdminHeader from "../../../components/header/DashboardAdminHeader"
import DashboardEmployeeHeader from "../../../components/header/DashboardEmployerHeader"
import DashboardCandidatesHeader from "../../../components/header/DashboardCandidatesHeader"
import DashboardStudentHeader from "../../../components/header/DashboardStudentsHeader"
import ShopHeader from "../../header/ShopHeader";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import { useEffect, useState } from "react";
import DashboardStudentSidebar from "@/components/header/DashboardStudentSidebar";
import DashboardJobseekerHeader from "@/components/header/DashboardJobseekerHeader";
import DashboardJobseekrSidebar from "@/components/header/DashboardJobseekerSidebar";


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
      <div className="page-wrapper dashboard">
        {/* <!-- Header Span --> */}
        <span className="header-span"></span>

        <LoginPopup />
        {/* End Login Popup Modal */}

      {userType === 1 && <DashboardAdminHeader />}
      {userType === 3 && <DashboardEmployeeHeader />}
      {userType === 4 && <DashboardJobseekerHeader />}
      {userType === 5 && <DashboardStudentHeader />}
      {userType !== 1 && userType !== 3 && userType !== 4 && userType !== 5 && <DefaulHeader2 />}

        <MobileMenu />
        {/* End MobileMenu */}

      {userType === 4 && <DashboardJobseekrSidebar />}
      {userType === 5 && <DashboardStudentSidebar />}



        <Breadcrumb title="Checkout" meta="Checkout" />
        {/* <!--End Page Title--> */}

        {/* <!--CheckOut Page--> */}
        <section className="checkout-page">
          <div className="auto-container">
            {/* <BillingAll /> */}
            <b style={{ display: "grid", justifyItems: "center", fontSize: "1.2em" }}>
              Please contact us to finalize checkout.
            </b>
            <b style={{ display: "grid", justifyItems: "right", fontSize: "1em" }}>
              Thank you!
            </b>
          </div>
        </section>
        {/* <!--End CheckOut Page--> */}

        <FooterDefault footerStyle="alternate5" />
        {/* <!-- End Main Footer --> */}

      </div>
    </>
  );
};

export default index;
