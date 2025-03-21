"use client"
import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import MobileMenu from "../../header/MobileMenu";
import Breadcrumb from "../../../components/shop/Breadcrumb";
import BillingAll from "./components";
import DashboardAdminHeader from "../../../components/header/DashboardAdminHeader"
import DashboardEmployerHeader from "../../../components/header/DashboardEmployerHeader"
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
      {userType === 3 && <DashboardEmployerHeader />}
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
            <b style={{ display: "grid", justifyItems: "center", color: "red", fontSize: "1em" }}>
              Automatic payment is not yet enabled. Please contact us to checkout. Thank you!
            </b>
            <div><br/></div>
            <b style={{ display: "grid", justifyItems: "right", color: "red", fontSize: "1em" }}>
              Management
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
