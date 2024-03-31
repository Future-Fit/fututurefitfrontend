"use client"
import LoginPopup from "../../common/form/login/LoginPopup";
import FooterDefault from "../../footer/common-footer";
import MobileMenu from "../../header/MobileMenu";
import Breadcrumb from "../../../components/shop/Breadcrumb";
import DashboardAdminHeader from "../../../components/header/DashboardAdminHeader"
import DashboardEmployeeHeader from "../../../components/header/DashboardEmployerHeader"
import DashboardJobseekerHeader from "../../../components/header/DashboardJobseekerHeader"
import DashboardStudentHeader from "../../../components/header/DashboardStudentsHeader"
import CartTable from "./components/CartTable";
import Coupon from "./components/Coupon";
import CartTotal from "./components/CartTotal";
import ShopHeader from "../../header/ShopHeader";
import DefaulHeader2 from "@/components/header/DefaultHeader";
import { useEffect, useState } from "react";
import DashboardJobseekrSidebar from "@/components/header/DashboardJobseekerSidebar";
import DashboardStudentSidebar from "@/components/header/DashboardStudentSidebar";

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
      <span className="header-span"></span>
      {/* <!-- Header Span --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      {userType === 1 && <DashboardAdminHeader />}
      {userType === 3 && <DashboardEmployeeHeader />}
      {userType === 4 && <DashboardJobseekerHeader/>}
      {userType === 5 && <DashboardStudentHeader />}
      {userType !== 1 && userType !== 3 && userType !== 4 && userType !== 5 && <DefaulHeader2 />}
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {userType === 4 && <DashboardJobseekrSidebar/>}
      {userType === 5 && <DashboardStudentSidebar/>}




      <Breadcrumb title="Cart" meta="Cart" />
      {/* <!--End Page Title--> */}

      {/* <!--Cart Section--> */}
      <section className="cart-section">
        <div className="auto-container">
          <div className="row">
            <div className="column col-lg-8 col-md-12 col-sm-12">
              {/* <!--Cart Outer--> */}
              <div className="cart-outer">
                <div className="table-outer">
                  <CartTable />
                </div>
                {/* End table-outer */}

                {/* <div className="cart-options clearfix">
                  <Coupon />
                </div> */}
                {/* End coupon */}
              </div>
              {/* End .cart-outer */}
            </div>
            {/* End .col-lg-8 */}

            <div className="column col-lg-4 col-md-12 col-sm-12">
              <CartTotal />
            </div>
            {/* End .col-lg-4 */}
          </div>
        </div>
      </section>
      {/* <!--End Cart Section--> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
      </div>
    </>
  );
};

export default index;
