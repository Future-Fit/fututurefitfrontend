"use client"
import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import MobileMenu from "../../header/MobileMenu";
import CompleteOrder from "./components";
import Breadcrumb from "../../../components/shop/Breadcrumb";
import DashboardAdminHeader from "../../../components/header/DashboardAdminHeader"
import DashboardEmployerHeader from "../../../components/header/DashboardEmployerHeader"
import DashboardCandidatesHeader from "../../../components/header/DashboardCandidatesHeader"
import DashboardStudentHeader from "../../../components/header/DashboardStudentsHeader"
import DefaulHeader2 from "@/components/header/DefaultHeader";
import { useEffect, useState } from "react";
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
      {userType === 3 && <DashboardEmployerHeader />}
      {userType === 4 && <DashboardJobseekerHeader />}
      {userType === 5 && <DashboardStudentHeader />}
      {userType !== 1 && userType !== 3 && userType !== 4 && userType !== 5 && <DefaulHeader2 />}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="Order Completed" meta="Order Completed" />
      {/* <!--End Page Title--> */}

      {/* <!-- Order Confirmation --> */}
      <section className="order-confirmation">
        <div className="auto-container">
          <CompleteOrder />
        </div>
      </section>
      {/* <!-- End Order Confirmation --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
