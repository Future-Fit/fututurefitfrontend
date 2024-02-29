"use client"
import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import MobileMenu from "../../header/MobileMenu";
import Breadcrumb from "../../../components/shop/Breadcrumb";
import BillingAll from "./components";
import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import MobileMenu from "../../header/MobileMenu";
import Breadcrumb from "../../../components/shop/Breadcrumb";
import DashboardAdminHeader from "../../../components/header/DashboardAdminHeader"
import DashboardEmployeeHeader from "../../../components/header/DashboardEmployerHeader"
import DashboardCandidatesHeader from "../../../components/header/DashboardCandidatesHeader"
import DashboardStudentHeader from "../../../components/header/DashboardStudentsHeader"
import ShopHeader from "../../header/ShopHeader";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import { useEffect, useState } from "react";


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

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="Checkout" meta="Checkout" />
      {/* <!--End Page Title--> */}

      {/* <!--CheckOut Page--> */}
      <section className="checkout-page">
        <div className="auto-container">
          <BillingAll />
        </div>
      </section>
      {/* <!--End CheckOut Page--> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
