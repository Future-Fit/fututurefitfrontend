"use client"
import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import MobileMenu from "../../header/MobileMenu";
import Breadcrumb from "../../common/Breadcrumb";
import ShopItems from "./components/ShopItems";
import Pagination from "./components/Pagination";
import DashboardAdminHeader from "../../header/DashboardAdminHeader"
import DashboardEmployerHeader from "../../header/DashboardEmployerHeader"
import DashboardStudentHeader from "../../header/DashboardStudentsHeader"
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

      <Breadcrumb title="Shop" meta="Shop" />
      {/* <!--End Page Title--> */}

      <div className="products-section">
        <div className="auto-container">
          <div className="row">
            {/* <ShopItems /> */}
            <ShopItems category="Student Service" />
          </div>
          {/* End .row */}

          <Pagination />
          {/* End .pagination */}
        </div>
        {/* End auto-container */}
      </div>
      {/* <!-- End Product Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
